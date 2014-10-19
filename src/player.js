function Player() {
  this._frames             = []
  this._score              = 0
  this._spareBonus         = 0
  this._strikeBonus        = 0
};

Player.prototype = {
  get score()           { return this._score;           },
  get frameNumber()     { return this._frames.length;   },
  get frameIndex()      { return this._frames.length-1; },
  get spareBonus()      { return this._spareBonus;      },
  get strikeBonus()     { return this._strikeBonus;     },
  //set spareBonus(value) { this._spareBonus = value;     } ? why
};

Player.prototype.pinsDown = function(pinsDowned) {
  var frame = this._frameManager()
  frame.pinsDown(pinsDowned)
  return this._calculateScore()
};

Player.prototype._calculateScore = function() {
  var score = 0
  for(i=0;i<this.frameNumber;i+=1){
    score += this._frames[i]._calculateFrame()
  }
  this._score = score
  return this.score
};

Player.prototype._frameManager = function(){
  var frame = this._frames[this.frameIndex]
  if(this.frameNumber === 10) return frame
  if (!frame || frame.ball_2) { this._addNextFrame() }
  return this._frames[this.frameIndex]
};

Player.prototype._addNextFrame = function() {
  this._frames.push(new Frame)
};


Player.prototype._finalFrame = function(frame) {
  this._spareBonus  = frame.open_1
  this._strikeBonus = frame.open_1 + frame.open_2
};
