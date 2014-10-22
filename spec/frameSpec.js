describe('When you play 10 pin bowling', function() {

  var frame;

  beforeEach(function() {
    frame = new Frame;
  })

  it('you start with the first frame',function() {
    expect(frame).toBe(frame)
  })

  it('your first throw is recorded', function() {
    frame.throw1 = 3
    expect(frame.throw1).toBe(3)
  })

  it('your second throw is recorded', function() {
    frame.throw2 = 6
    expect(frame.throw2).toBe(6)
  })

  it('these 2 are added to give you your frame score', function() {
    frame.throw1 = 3
    frame.throw2 = 6
    expect(frame.score()).toEqual(9)
  })

  it('now you might get all 10 pins down', function() {
    frame.throw1 = 5
    frame.throw2 = 5
    expect(frame.spare).toEqual(true)    
  })

  it('that gives you a spare', function() {
    frame.throw1 = 5
    frame.throw2 = 5
    expect(frame.score()).toEqual(0)    
  })

  it('But hay, you might get all 10 down in one go.', function() {
    frame.scoreStrike()
    expect(frame.strike).toEqual(true)
  })

  it('then your frame has bonus points added to it', function() {
    expect(frame.bonus).toEqual(0)
  })

  it('those bouns points are added to your frame total', function() {
    frame.throw1 = 10
    frame.throw2 = 0
    frame.bonus  = 20    
    expect(frame.score()).toEqual(30)
  })

})