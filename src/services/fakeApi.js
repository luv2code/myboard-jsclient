define(['jquery'], function ($) {
    var board = {
            stickies:[{
                id:0,
                content:'Hello World!',
                x: 0,
                y: 0,
                height: 100,
                width: 100
            }]
        },
        stickyId = 0,
        clone = function (obj) {
            return $.extend(true, {}, obj);
        };

    return {
        board:{
            get:function (cb) {
                cb(null, clone(board));
            },
            sticky:{
                get:function (id, cb) {
                    var sticky, index, len = board.stickies.length;
                    for(index = 0; index < len; index++) {
                        if(board.stickies[index].id === id) {
                            sticky = board.stickies[index];
                            break;
                        }
                    }
                    cb(null, clone(sticky));
                },
                put:function (sticky, cb) {
                    var index, len = board.stickies.length;
                    for(index = 0; index < len; index++) {
                        if(board.stickies[index].id === sticky.id) {
                            board.stickies[index] = sticky;
                            break;
                        }
                    }
                    cb(null);
                },
                post:function (newSticky, cb) {
                    board.stickies.push(newSticky);
                    newSticky.id = ++stickyId;
                    cb(null, newSticky.id);
                },
                delete:function (id, cb) {
                    var index, len = board.stickies.length;
                    for(index = 0; index < len; index++) {
                        if(board.stickies[index].id === id) {
                            board.stickies.splice(index,1);
                            break;
                        }
                    }
                    cb(null);
                }
            }
        }
    };
});