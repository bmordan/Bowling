// PLAYER //
function Player() {
  this.frame = 1
  this.score = 0
  this.ballNumber = 0
};
Player.prototype.getScore = function() {
  return this.score; 
};
Player.prototype.addToScore = function(n) {
  this.score = this.getScore() + n
  return this.getScore
};

function Frame(n) {
  this.number = n
};
Frame.prototype.bowl = function(player) {
  player.ballNumber += 1
  return player;
};