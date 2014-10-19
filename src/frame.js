function Frame() {
  this.ball_1 = false;
  this.ball_2 = false;
  this.open_1 = 0;
  this.open_2 = 0;
  this.strike = false;
  this.spare  = false;
  this.bonus  = 0;
};

Frame.prototype.pinsDown = function(pinsDowned) {
  if(this.ball_1) {
    this.open_2 = pinsDowned;
    this.ball_2 = true;
  }else{
    this.open_1 = pinsDowned;
    this.ball_1 = true;
  }
};

Frame.prototype._calculateFrame = function() {
  var total = this.open_1 + this.open_2 + this.bonus;
  if(total === 10 && this.ball_2) this.spare = true;
  if(this.open_1 === 10) this._strike();
  return total; 
};

Frame.prototype._strike = function() {
  this.ball_2 = true;
  this.strike = true;
  this.spare = false;
};