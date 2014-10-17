function Frame(n) {
  this.number = n
};
function Player() {};

Player.prototype.getScore = function() {
  return 0; 
};
Frame.prototype.bowl = function(player) {
  return player;
};