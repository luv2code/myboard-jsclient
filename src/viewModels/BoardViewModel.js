define(['knockout', 'services/myBoardApi'], function (ko, api) {
    var BoardViewModel = function () {
        var self = this;

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
                    self.stickies.push(sticky);
                });
            });
        };

        api.board.get(function (error, board) {
            self.stickies(board.Stickies);
        });
    };
    return BoardViewModel;
});
