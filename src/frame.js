function Frame () {
  this.balls  = 0
  this.throw1 = 0;
  this.throw2 = 0;
  this.spare  = true;
  this.strike = false;
  this.close  = false;
}

Frame.prototype = {
  get score() { return this.total() }
}
Frame.prototype.total = function() {
  var total = this.throw1 + this.throw2
  if (total === 10) return 0
  return total
}
Frame.prototype.scoreStrike = function() {
  this.strike = true;
  this.close  = true;
}
Frame.prototype.closed = function() {
  if (this.balls  === 2 ) this.close = true
  if (this.throw1 === 10) this.scoreStrike()
}
Frame.prototype.add = function(pins) {
  var ball = this.balls += 1
  if (ball === 1) this.throw1 = pins
  if (ball === 2) this.throw2 = pins
  this.closed()
}