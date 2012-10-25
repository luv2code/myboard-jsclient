require.config({
    baseUrl: '../src',
    paths: {
        'text':'components/requirejs-text/text',
        'jquery':'components/jquery/jquery',
        'knockout':'components/knockout/build/output/knockout-latest.debug',
        'services/myBoardApi': 'services/fakeApi'
        //'services/myBoardApi': 'services/api'
    }
});
