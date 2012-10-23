var setup = require("./setup"),
    rjs = setup.rjs,
    should = setup.should;

describe('Board View Model', function () {
   it('should display all notes for the board', function (done) {
       rjs(['viewModels/BoardViewModel', 'services/fakeApi'], function (BoardViewModel, fakeApi) {
           var vm = new BoardViewModel(),
               stickies = vm.stickies();
           stickies.length.should.equal(1);
           stickies[0].content.should.be.a('string');
       });
   });
});
