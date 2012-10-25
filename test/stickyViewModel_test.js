define(['viewModels/StickyViewModel'], function (StickyViewModel) {
    return function () {
        module('StickyViewModel');
        
        test('constructing a viewmodel', function () {
            var vm = new StickyViewModel();
            ok(vm);
            equal(vm.Content, undefined);
        });
        
        test('populating viewModel from dto', 5, function () {
            var vm = new StickyViewModel({
                Content: 'content',
                X: 1,
                Y: 2,
                Height: 100,
                Width: 200
            });

            equal('content', vm.Content());
            equal(1, vm.X());
            equal(2, vm.Y());
            equal(100, vm.Height());
            equal(200, vm.Width());
        });
    };
});
