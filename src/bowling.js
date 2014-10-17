function Player() {
  this.game       = []
  this.score      = 0
  this.ballNumber = 0
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
};


function Frame(n) {
  this.number = n;
  this.ball_1 = true;
  this.ball_2 = true;
};