function Frame () {
  this.balls  = 0
  this.throw1 = 0;
  this.throw2 = 0;
  this.spare  = true;
  this.strike = false;
  this.bonus  = 0
}
Frame.prototype.score = function() {
  var total = this.throw1 + this.throw2 + this.bonus
  if (total === 10) return 0
  return total
}
Frame.prototype.scoreStrike = function() {
  this.strike = true;
}
Frame.prototype.add = function(pins) {
  var ball = this.balls += 1
  if (ball === 1) this.throw1 = pins
  if (ball === 2) this.throw2 = pins
}