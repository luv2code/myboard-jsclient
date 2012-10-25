define(['viewModels/BoardViewModel'], function (BoardViewModel) {
    return function () {
        module('BoardViewModel');
        
        test('constructing a viewmodel', function () {
            var vm = new BoardViewModel();
            ok(vm);
        });

        test('displaying initial stickies', 1, function () {
            var vm = new BoardViewModel();
            equal(vm.stickies().length, 1);
        });

        test('add a new sticky', 1, function () {
            var vm = new BoardViewModel();
            vm.addNew();
            equal(vm.stickies().length, 2);
        });

        test('when a sticky is deleted remove it from the collection', 2, function () {
            var vm = new BoardViewModel();
            vm.addNew();
            equal(vm.stickies().length, 2);
            
            vm.stickies()[1].del();

            equal(vm.stickies().length, 1);
        });
    };
});
