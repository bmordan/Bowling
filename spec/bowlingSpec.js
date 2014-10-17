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
  });

  it('then the frame is over',function() {
    player.bowl(frame)
    player.bowl(frame)
    expect(frame.ball_2).toEqual(false)
  });

  it('if you strike your frame is over', function() {
    frame._strike()
    expect(frame.strike).toBe(true)
    expect(frame.ball_2).toBe(false)
  });

  it('the frame logs the pins you down on each go', function() {
    frame.pinsDowned(8)
    expect(frame.open_1).toEqual(8)
  });

  it('knows when you have a spare', function() {
    frame.pinsDowned(3)
    frame.pinsDowned(7)
    expect(frame.spare).toEqual(true)
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