define(['jquery'], function ($) {
    var apiUrl = '/api/',
        cbHandler = function (promise, cb) {
            promise.then(function (data) {
                cb(null, data);
            }, function (error) {
                cb(arguments, null);
            });
        };
    return {
        board:{
            get:function (cb) {
                var promise = $.getJSON(apiUrl + 'board');
                cbHandler(promise, cb);
            }
        },
        sticky:{
            get:function (id, cb) {
                var promise = $.getJSON(apiUrl + 'sticky/'+id);
                cbHandler(promise, cb);
            },
            put:function (sticky, cb) {
            },
            post:function (newSticky, cb) {
                var promise = $.post(apiUrl + 'sticky', newSticky);
                cbHandler(promise, cb);
            },
            del:function (id, cb) {
                cbHandler(
                    $.ajax({
                        url: apiUrl + 'sticky/' + id,
                        type: 'DELETE'
                    })
                , cb);
            }
        }
    };
});
