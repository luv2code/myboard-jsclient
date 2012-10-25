define(['viewModels/BoardViewModel'], function (BoardViewModel) {
    return function () {
        module('BoardViewModel');
        
        test('constructing a viewmodel', function () {
            var vm = new BoardViewModel();
            ok(vm);
        });
    };
});
