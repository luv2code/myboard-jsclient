define(function () {
    var board = {
            stickies:[]
        },
        stickyId;

    return {
        board:{
            get:function () {
                return board;
            },
            sticky:{
                get:function (id) {
                    var sticky, index, len = board.stickies.length;
                    for(index = 0; index < len; index++) {
                        if(board.stickies[index].id === sticky.id) {
                            sticky = board.stickies[index];
                            break;
                        }
                    }
                    return sticky;
                },
                put:function (sticky) {
                    var index, len = board.stickies.length;
                    for(index = 0; index < len; index++) {
                        if(board.stickies[index].id === sticky.id) {
                            board.stickies[index] = sticky;
                            break;
                        }
                    }
                },
                post:function (newSticky) {
                    board.stickies.push(newSticky);
                    newSticky.id = stickyId++;
                },
                delete:function (id) {
                    var index, len = board.stickies.length;
                    for(index = 0; index < len; index++) {
                        if(board.stickies[index].id === sticky.id) {
                            board.stickies.splice(index,1);
                            break;
                        }
                    }
                }
            }
        }
    };
});