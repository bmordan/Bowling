describe('10 Pin Bowling', function() {

  beforeEach(function() {
    frame = new Frame(1);
    player = new Player;
  });

  it('has frames', function() {
    expect(frame.number).toEqual(1);
  });

  it('in a frame you have 2 bowls', function() {
    player.bowl(frame)
    expect(frame.ball_1).toEqual(false)
  })


});

describe('Your score works like this', function() {

  beforeEach(function(){
    player = new Player;
  });

  it('even if you are Jesus you start with 0', function() {
    expect(player.getScore()).toEqual(0);
  });


});