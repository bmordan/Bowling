describe('Player your score works like this', function() {

  beforeEach(function(){
    player = new Player;
    frame = new Frame;
  });

  it('even if you are Jesus you start with 0', function() {
    expect(player.score).toEqual(0);
  });

  it('your first throw is the first ball of frame 1', function() {
    player.pinsDown(1)
    expect(player.frameNumber).toEqual(1)
  });

  it('a frame is added on your first throw', function() {
    player.pinsDown(1)
    expect(player.frameNumber).toEqual(1)
  });

  it('after 2 throws a new frame is added', function() {
    player.pinsDown(1);
    player.pinsDown(1);
    player.pinsDown(1);
    expect(player.frameNumber).toEqual(2);
  });

  it('after a throw your score is returned', function() {
    expect(player.pinsDown(1)).toEqual(1)
  });

  it('your score will be your running total', function() {
    player.pinsDown(4)
    player.pinsDown(4)
    expect(player.score).toEqual(8)
  });

  it('if you get a spare your score is suspended until your next throw', function() {
    player.pinsDown(5)
    player.pinsDown(5)
    expect(player.score).toEqual(10)  
  });


});