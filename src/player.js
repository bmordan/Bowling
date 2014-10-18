function Player() {
  this._frames      = []
  this._score       = 0
};

Player.prototype = {
  get score()       { return this._score;         },
  get frameNumber() { return this._frames.length; },
};

Player.prototype.pinsDown = function(n) {
  this._frameManager(n)
};

// PRIVATE FUNCTIONS

Player.prototype._frameManager = function(n){
  if (this.frameNumber === 0) {
    this._addNextFrame()
  }
  return this.frameNumber
};

Player.prototype._addNextFrame = function() {
  this._frames.push(new Frame)
};