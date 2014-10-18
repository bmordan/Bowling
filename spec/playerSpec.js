describe('Player your score works like this', function() {

  beforeEach(function(){
    player = new Player;
  });

  it('even if you are Jesus you start with 0', function() {
    expect(player.getScore()).toEqual(0);
  });


});