define([
    'knockout', 
    'pubsub',
    'lodash',
    'services/myBoardApi',
    './StickyViewModel',
    './topics'
], function (ko, pubsub, _, api, StickyViewModel, topics) {
    var BoardViewModel = function () {
        var self = this;

        pubsub.subscribe(topics.sticky.deleted, function (ev, id) {
            self.stickies.remove(function (sticky) {
                return sticky.Id() === id;
            });
        });

        this.stickies = ko.observableArray();
        this.addNew = function () {
            api.sticky.post({
                Content:'new sticky',
                X: 0,
                Y: 0,
                Height: 100,
                Width: 100
            }, function (error, id) {
                api.sticky.get(id, function (err, sticky) {
                    self.stickies.push(new StickyViewModel(sticky));
                });
            });
        };

        api.board.get(function (error, board) {
            var mappedToVms = _.map(board.Stickies, function (sticky) {
                return new StickyViewModel(sticky);
            });
            self.stickies(mappedToVms);
        });
    };
    return BoardViewModel;
});
