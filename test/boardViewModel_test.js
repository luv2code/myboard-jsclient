define(['viewModels/BoardViewModel', 'services/myBoardApi'], function (BoardViewModel, api) {
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
            api.reset();
        });

        test('when a sticky is deleted remove it from the collection', 2, function () {
            var vm = new BoardViewModel();
            vm.addNew();

            equal(vm.stickies().length, 2);

            vm.stickies()[1].del();
            equal(vm.stickies().length, 1);
            api.reset();
        });
    };
});
