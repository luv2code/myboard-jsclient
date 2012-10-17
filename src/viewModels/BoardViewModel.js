define(['knockout', 'services/myBoardApi'], function (ko, api) {
    var BoardViewModel = function () {
        var self = this;
        this.stickies = ko.observableArray();
        api.board.get(function (error, board) {
            self.stickies(board.stickies);
        });
    };
    return BoardViewModel;
});