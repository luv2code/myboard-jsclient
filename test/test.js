var setup = require("./setup"),
    rjs = setup.rjs,
    should = setup.should;

describe('Board View Model', function () {
   it('should display all notes for the board', function (done) {
       rjs(['viewModels/BoardViewModel'], function (vm) {
           done();
       });
   });
});
