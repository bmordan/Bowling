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
  get strikeBonus()     { return this._strikeBonus;     }
};

Player.prototype.pinsDown = function(pinsDowned) {
  var frame = this._frameManager()
  frame.pinsDown(pinsDowned)
  this._bonusManager()
  return this._calculateScore()
};

Player.prototype._frameManager = function(){
  var frame = this._frames[this.frameIndex];
  if(this.frameNumber === 10) return this._prepareFinalFrame(frame);
  if (!frame || frame.ball_2) { this._addNextFrame() };
  return this._frames[this.frameIndex];
};

Player.prototype._bonusManager = function() {
  for(i=0;i<this.frameNumber;i+=1){

    var frame = this._frames[i];
    var nextFrame = this._frames[i+1];

    if(nextFrame !== undefined && frame.spare ) frame.bonus = nextFrame.open_1
    if(nextFrame !== undefined && frame.strike) frame.bonus = nextFrame.open_1 + nextFrame.open_2
    if(nextFrame !== undefined && frame.strike && nextFrame.strike) frame.bonus = 20

  } 
};

Player.prototype._calculateScore = function() {
  var score = 0
  for(i=0;i<this.frameNumber;i+=1){ score += this._frames[i]._calculateFrame()}
  this._score = score
  return this.score
};

Player.prototype._addNextFrame = function() {
  this._frames.push(new Frame)
};

Player.prototype._prepareFinalFrame = function(frame) {
  if(frame.spare ) frame.bonus = frame.open_1
  if(frame.strike) frame.bonus = frame.open_1
  return frame
}
