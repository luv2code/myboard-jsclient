define([
    'viewModels/StickyViewModel', 
    'services/myBoardApi', 
    'pubsub',
    'viewModels/topics',
    'knockout'
], function (StickyViewModel, api, pubsub, topics, ko) {
    return function () {
        module('StickyViewModel');
        
        test('constructing a viewmodel', function () {
            var vm = new StickyViewModel();
            ok(vm);
            ok(ko.isObservable(vm.Content));
        });
        
        test('populating viewModel from dto', 6, function () {
            var vm = new StickyViewModel({
                Id: 'BEEF',
                Content: 'content',
                X: 1,
                Y: 2,
                Height: 100,
                Width: 200
            });

            equal('BEEF', vm.Id());
            equal('content', vm.Content());
            equal(1, vm.X());
            equal(2, vm.Y());
            equal(100, vm.Height());
            equal(200, vm.Width());
        });

        test('canDelete should be false if new sticky', function () {
            var vm = new StickyViewModel();
            equal(false, vm.canDelete());
        });

        test('deleting a sticky should call the api', 4, function () {
            var vm, msg;

            pubsub.subscribe(topics.sticky.deleted, function (ev, id) {
                msg = id;
            });

            api.sticky.get('0', function (error, sticky) {
                equal(error, undefined);

                vm = new StickyViewModel(sticky);

                equal(vm.canDelete(), true);

                vm.del();
                
                api.board.get(function (error, board) {
                    equal(board.Stickies.length, 0);
                    ok(msg);
                });

            });

        });
    };
});
