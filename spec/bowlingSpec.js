describe('10 Pin Bowling', function() {

  beforeEach(function() {
    frame = new Frame(1);
    player = new Player;
  });

  it('has frames', function() {
    expect(frame.number).toEqual(1);
  });

  it('in a frame you can throw twice', function() {
    expect(frame.bowl(player)).toEqual(player);
  });

  it('tracks your thows', function() {
    frame.bowl(player)
    expect(player.ballNumber).toEqual(1)
  });

  it('knows your goes for that frame are up', function() {
    frame.bowl(player)
    frame.bowl(player)
    expect(player.ballNumber).toEqual(2)
  });

});

describe('Your score works like this', function() {

  beforeEach(function(){
    player = new Player;
  });

  it('even if you are Jesus you start with 0', function() {
    expect(player.getScore()).toEqual(0);
  });


});