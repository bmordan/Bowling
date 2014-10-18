function Frame(n) {
  this.number = n;
  this.ball_1 = false;
  this.ball_2 = false;
  this.open_1 = 0;
  this.open_2 = 0;
  this.strike = false;
  this.spare = false;
};
Frame.prototype._strike = function() {
  this.ball_2 = false;
  this.strike = true;
};
Frame.prototype.pinsDowned = function(pinsDowned) {
  if(this.ball_1) {
    this.open_2 = pinsDowned;
    this.ball_2 = true;
  }else{
    this.open_1 = pinsDowned;
    this.ball_1 = true;
  }
};
Frame.prototype._calculateFrame = function() {
  var total = this.open_1 + this.open_2
  if(total === 10 && this.ball_2) this.spare = true; 
};