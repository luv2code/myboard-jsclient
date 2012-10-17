define(['jquery', 'knockout', 'lib/knockout-viewbinder'], function ($, ko) {
    return {
        start: function () {
            var body = $('body').get(0);
            ko.applyBindings(body);
        }
    };
});
