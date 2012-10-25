define(['knockout', 'services/myBoardApi', 'knockout.mapping'], function (ko, api) {
    var StickyViewModel = function (dto) {
        var sticky = dto || { Id: 'New' },
            self = ko.mapping.fromJS(sticky);

        self.del= function () {
            if(self.canDelete()) {
                api.sticky.del(self.Id(), function (error, success) {
                    if(!!error) {
                        //pubsub.publish('error.sticky.delete', error);
                    } else {
                        //pubsub.publish('sticky.deleted', self.Id());
                    }
                });
            }
        };

        self.canDelete = ko.computed(function () {
            return this.Id() !== 'New';
        }, self);

        return self;
    };
    return StickyViewModel;
});
