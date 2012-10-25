define(['knockout', 'services/myBoardApi', 'knockout.mapping'], function (ko, api) {
    var StickyViewModel = function (dto) {
        var self = this, 
            sticky = dto || {};

        return ko.mapping.fromJS(sticky);
    };
    return StickyViewModel;
});
