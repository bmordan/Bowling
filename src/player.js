function Player() {
  this._frames      = []
  this._score       = 0
};

Player.prototype = {
  get score()       { return this._score;           },
  get frameNumber() { return this._frames.length;   },
  get current()     { return this._frames.length-1; }
};

Player.prototype.pinsDown = function(pinsDowned) {
  var frame = this._frameManager()
  frame.pinsDown(pinsDowned)
  return this._addToScore(frame)
};

Player.prototype.currentFrameTotal = function() {
  var frame = this._frames[this.current]
  return frame._calculateFrame()
};

//////////// PRIVATE FUNCTIONS //////////////

Player.prototype._addToScore = function(frame) {
  var score = this.score
  if(frame.ball_2){
    this._score = score + frame._calculateFrame()
    return this.score
  }else{
    return this.score + frame.open_1
  }
};

Player.prototype._frameManager = function(){
  var frame = this._frames[this.current]
  if (!frame || frame.ball_2) { this._addNextFrame() }
  return this._frames[this.current]
};

Player.prototype._addNextFrame = function() {
  this._frames.push(new Frame)
};
