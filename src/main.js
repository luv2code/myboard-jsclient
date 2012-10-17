require.config({
    paths: {
        'jquery':'components/jquery/jquery',
        'knockout':'components/knockout/build/output/knockout-latest.debug.js'
    }
});
require(['app'], function (app) {
    app.start();
});