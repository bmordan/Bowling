describe('Player your score works like this', function() {

  beforeEach(function(){
    player = new Player;
  });

  it('even if you are Jesus you start with 0', function() {
    expect(player.score).toEqual(0);
  });

  it('your first throw is the first ball of frame 1', function() {
    player.pinsDown(1)
    expect(player.frameNumber).toEqual(1)
  });


});