define(['viewModels/BoardViewModel'], function (BoardViewModel) {
    return function () {
        module('BoardViewModel');
        
        test('constructing a viewmodel', function () {
            var vm = new BoardViewModel();
            ok(vm);
        });

        test('displaying initial stickies', 1, function () {
            var vm = new BoardViewModel();
            equal(1, vm.stickies().length);
        });

        test('add a new sticky', function () {
            var vm = new BoardViewModel();
            vm.addNew();
            equal(2, vm.stickies().length);
        });
    };
});
