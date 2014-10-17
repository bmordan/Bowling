function Player() {
  this.game       = []
  this.score      = 0
};
Player.prototype.getScore = function() {
  return this.score; 
};
Player.prototype.addToScore = function(n) {
  this.score = this.getScore() + n
  return this.getScore
};
Player.prototype.bowl = function(frame) {
  frame.ball_1 = !frame.ball_1
  if(!frame.ball_1) frame.ball_2 = !frame.ball_2
};

function Frame(n) {
  this.number = n;
  this.ball_1 = true;
  this.ball_2 = true;
  this.open_1 = 0;
  this.open_2 = 0;
  this.strike = false;
};
Frame.prototype._strike = function() {
  this.ball_2 = false;
  this.strike = true;
};
Frame.prototype.pinsDowned = function(pinsDowned) {
  this.open_1 = pinsDowned;
}