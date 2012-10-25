require.config({
    paths: {
        'text':'components/requirejs-text/text',
        'jquery':'components/jquery/jquery',
        'knockout':'components/knockout/build/output/knockout-latest.debug',
        'knockout.mapping':'components/knockout.mapping/knockout.mapping',
        //'services/myBoardApi': 'services/fakeApi'
        'services/myBoardApi': 'services/api'
    }
});
require(['app'], function (app) {
    app.start();
});
