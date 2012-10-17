require.config({
    paths: {
        'text':'components/text/text',
        'jquery':'components/jquery/jquery',
        'knockout':'components/knockout/build/output/knockout-latest.debug.js',
        'services/myBoardApi': 'services/fakeApi'
    }
});
require(['app'], function (app) {
    app.start();
});