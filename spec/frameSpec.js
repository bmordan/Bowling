describe('10 Pin Bowling', function() {

  beforeEach(function() {
    frame = new Frame;
    player = new Player;
  });

  xit('in a frame you have 2 bowls', function() {
    player.pinsDown(2)
    expect(frame.ball_1).toEqual(true)
  });

  xit('then the frame is over',function() {
    player.pinsDown(2)
    player.pinsDown(2)
    expect(frame.ball_2).toEqual(true)
  });

  it('if you strike your frame is over', function() {
    frame._strike()
    expect(frame.strike).toBe(true)
    expect(frame.ball_2).toBe(false)
  });

  it('the frame logs the pins you down on each go', function() {
    frame.pinsDown(8)
    expect(frame.open_1).toEqual(8)
  });

  it('so both your goes count toward your frame score', function() {
    frame.pinsDown(3)
    frame.pinsDown(4)
    expect(frame.open_2).toEqual(4)
  });

  it('when you have a spare', function() {
    frame.pinsDown(3)
    frame.pinsDown(7)
    frame._calculateFrame()
    expect(frame.spare).toBe(true)
  });


});