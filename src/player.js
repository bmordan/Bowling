function Player() {
  this._frames      = []
  this._score       = 0
};

Player.prototype = {
  get score()       { return this._score;           },
  get frameNumber() { return this._frames.length;   },
  get current()     { return this._frames.length-1; }
};

Player.prototype.pinsDown = function(n) {
  var frame = this._frameManager()
  frame.pinsDown(n)
};

Player.prototype.currentFrameTotal = function() {
  var frame = this._frames[this.current]
  return frame._calculateFrame()
};

// PRIVATE FUNCTIONS

Player.prototype._frame

Player.prototype._frameManager = function(){
  var frame = this._frames[this.current]
  if (!frame || frame.ball_2) { this._addNextFrame() }
  return this._frames[this.current]
};

Player.prototype._addNextFrame = function() {
  this._frames.push(new Frame)
};
