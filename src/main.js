require.config({
    paths: {
        'text':'components/requirejs-text/text',
        'jquery':'components/jquery/jquery',
        'knockout':'components/knockout/build/output/knockout-latest.debug',
        'knockout.mapping':'components/knockout.mapping/knockout.mapping',
        'pubsub':'components/pubsub/src/pubsub',
        'lodash':'lib/lodash',
        //'services/myBoardApi': 'services/fakeApi'
        'services/myBoardApi': 'services/api'
    }
});
require(['app', 'knockout'], function (app, ko) {
    window.ko = ko;
    app.start();
});
