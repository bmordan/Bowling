describe('When you play 10 pin bowling', function() {

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
    expect(frame.score).toEqual(9)
  })

  it('now you might get all 10 pins down', function() {
    frame.throw1 = 5
    frame.throw2 = 5
    expect(frame.spare).toEqual(true)    
  })

  it('that gives you a spare', function() {
    frame.throw1 = 5
    frame.throw2 = 5
    expect(frame.score).toEqual(0)    
  })

  it('But hay, you might get all 10 down in one go.', function() {
    frame.add(10)
    expect(frame.strike).toEqual(true)
  })

  it('Strike! that closes your frame', function() {
    frame.add(10)
    expect(frame.close).toEqual(true)
  })

  it('your two throws close a frame', function() {
    frame.add(0)
    frame.add(0)
    expect(frame.close).toEqual(true)
  })

})