require.config({
    baseUrl: '../src',
    paths: {
        'text':'components/requirejs-text/text',
        'jquery':'components/jquery/jquery',
        'knockout':'components/knockout/build/output/knockout-latest.debug',
        'knockout.mapping':'components/knockout.mapping/knockout.mapping',
        'services/myBoardApi': 'services/fakeApi'
        //'services/myBoardApi': 'services/api'
    }
});

require(['knockout'], function (ko) {
    window.ko = ko;//required for knockoutmapping to work.
});
