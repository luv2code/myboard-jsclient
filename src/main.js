require.config({
    paths: {
        'text':'components/text/text',
        'jquery':'components/jquery/jquery',
        'knockout':'components/knockout/build/output/knockout-latest.debug',
        //'services/myBoardApi': 'services/fakeApi'
        'services/myBoardApi': 'services/api'
    }
});
require(['app'], function (app) {
    app.start();
});
