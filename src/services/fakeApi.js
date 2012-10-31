define(['jquery'], function ($) {
    var newBoard = {
            Stickies:[{
                Id:'0',
                Content:'Hello World!',
                X: 0,
                Y: 0,
                Height: 100,
                Width: 100
            }]
        },
        stickyId = 0,
        clone = function (obj) {
            return $.extend(true, {}, obj);
        },
        board = clone(newBoard);

    return {
        reset: function () { //this method is to reset the store inside a test.
            board = clone(newBoard);
        },
        board:{
            get:function (cb) {
                cb(null, clone(board));
            }
        },
        sticky:{
            get:function (id, cb) {
                var sticky, index, len = board.Stickies.length;
                for(index = 0; index < len; index++) {
                    if(board.Stickies[index].Id === id) {
                        sticky = board.Stickies[index];
                        break;
                    }
                }
                cb(null, clone(sticky));
            },
            put:function (sticky, cb) {
                var index, len = board.Stickies.length;
                for(index = 0; index < len; index++) {
                    if(board.Stickies[index].Id === sticky.id) {
                        board.Stickies[index] = sticky;
                        break;
                    }
                }
                cb(null);
            },
            post:function (newSticky, cb) {
                board.Stickies.push(newSticky);
                newSticky.Id = ++stickyId;
                cb(null, newSticky.Id);
            },
            del:function (id, cb) {
                var index, len = board.Stickies.length;
                for(index = 0; index < len; index++) {
                    if(board.Stickies[index].Id === id) {
                        board.Stickies.splice(index,1);
                        break;
                    }
                }
                cb(null);
            }
        }
    };
});
