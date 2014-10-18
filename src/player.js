function Player() {
  this._frames = []
  this._score  = 0
};

Player.prototype = {
  get score()       { return this._score;           },
  get frameNumber() { return this._frames.length;   },
  get current()     { return this._frames.length-1; }
};

Player.prototype.pinsDown = function(pinsDowned) {
  var frame = this._frameManager()
  frame.pinsDown(pinsDowned)
  return this._calculateScore()
};

Player.prototype.currentFrameTotal = function() {
  var frame = this._frames[this.current]
  return frame._calculateFrame()
};

Player.prototype._calculateScore = function() {
  var score = 0
  for(i=0;i<this.frameNumber;i+=1) {
    score = score + this._frames[i]._calculateFrame()
  }
  this._score = score
  return this.score
};

Player.prototype._frameManager = function(){
  var frame = this._frames[this.current]
  if (!frame || frame.ball_2) { this._addNextFrame() }
  return this._frames[this.current]
};

Player.prototype._addNextFrame = function() {
  this._frames.push(new Frame)
};
