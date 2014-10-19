function Player() {
  this._frames             = []
  this._score              = 0
  this._spareBonus         = 0
  this._strikeBonus        = 0
  this._consecutiveStrikes = 0
};

Player.prototype = {
  get score()           { return this._score;           },
  get frameNumber()     { return this._frames.length;   },
  get current()         { return this._frames.length-1; },
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
  for(i=this.current;i>-1;i-=1){
    var frame = this._frames[i];
    score  = this._calculateSpares (score, frame)
    score  = this._calculateStrikes(score, frame)
    score += frame._calculateFrame()
  }
  return this._score = score
};

Player.prototype._frameManager = function(){
  var frame = this._frames[this.current]
  if(this.frameNumber === 10) {
    this._finalFrame(frame)
    return this._frames[this.current]
  } 
  if (!frame || frame.ball_2) { this._addNextFrame() }
  return this._frames[this.current]
};

Player.prototype._addNextFrame = function() {
  this._frames.push(new Frame)
};

Player.prototype._calculateSpares = function (score, frame) {
  if(frame.spare) score += this.spareBonus;
  this._spareBonus = frame.open_1;
  return score;
};

Player.prototype._calculateStrikes = function (score, frame) {
  this._strikeAccumulator(frame)
  if(frame.strike) score += this.strikeBonus
  this._strikeBonus = frame.open_1 + frame.open_2;
  return score;
};

Player.prototype._finalFrame = function(frame) {
  this._spareBonus  = frame.open_1
};

Player.prototype._strikeAccumulator = function(frame) {
  if(frame.strike){
    if(this._consecutiveStrikes   < 3) this._consecutiveStrikes += 1
    if(this._consecutiveStrikes === 3) this._strikeBonus = 30
    if(this._consecutiveStrikes === 2) this._strikeBonus = 20
  }else{
    this._consecutiveStrikes = 0
  }
};
