define(['knockout', 'services/myBoardApi'], function (ko, api) {
    var BoardViewModel = function () {
        var self = this;

        this.stickies = ko.observableArray();
        this.addNew = function () {
            api.board.sticky.post({
                content:'new sticky',
                x: 0,
                y: 0,
                height: 100,
                width: 100
            }, function (error, id) {
                api.board.sticky.get(id, function (err, sticky) {
                    self.stickies.push(sticky);
                });
            });
        };

        api.board.get(function (error, board) {
            console.log(arguments);
            self.stickies(board.stickies);
        });
    };
    return BoardViewModel;
});
