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
  var score = 0, spareBonus = 0
  for(i=this.current;i>-1;i-=1){
    if(this._frames[i].spare) score += spareBonus
    score += this._frames[i]._calculateFrame()
    var spareBonus = this._frames[i].open_1
  }
  return this._score = score
};

Player.prototype._frameManager = function(){
  var frame = this._frames[this.current]
  if (!frame || frame.ball_2) { this._addNextFrame() }
  return this._frames[this.current]
};

Player.prototype._addNextFrame = function() {
  this._frames.push(new Frame)
};
