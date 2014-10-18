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

  it('if you get a spare your frame logs it', function() {
    player.pinsDown(5)
    player.pinsDown(5)
    expect(player._frames[0].spare).toEqual(true)  
  });

  it('if you get a spare your next throw adds a bonus', function() {
    player.pinsDown(5)
    player.pinsDown(5)
    player.pinsDown(5)
    player.pinsDown(5)
    expect(player.score).toEqual(25)
  });

  it('if you get a strike. Good job! double bonus', function() {
    player.pinsDown(10)
    expect(player._frames[0].strike).toEqual(true)
  });

  it('strikes are calculated with a double bonus', function() {
    player.pinsDown(10)
    player.pinsDown(5)
    player.pinsDown(4)
    expect(player.score).toEqual(28)
  });


});