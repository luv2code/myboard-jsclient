require.config({
    paths: {
        'text':'components/requirejs-text/text',
        'jquery':'components/jquery/jquery',
        'knockout':'components/knockout/build/output/knockout-latest.debug',
        'knockout.mapping':'components/knockout.mapping/knockout.mapping',
        'pubsub':'components/pubsub/src/pubsub',
        'lodash':'lib/lodash',
        'services/myBoardApi': 'services/fakeApi'
        //'services/myBoardApi': 'services/api'
    }
});
require(['app', 'knockout', 'pubsub'], function (app, ko, pubsub) {
    window.ko = ko;
    pubsub.subscribe('error', function (ev, msg) {
        console.log(msg);
    });
    app.start();
});
