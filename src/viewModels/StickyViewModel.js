define([
    'knockout', 
    'services/myBoardApi', 
    'pubsub', 
    './topics',
    'knockout.mapping'
], function (ko, api, pubsub, topics) {
    var StickyViewModel = function (dto) {
        var sticky = dto || { 
                Id: 'New', 
                Content: '' 
            },
            self = ko.mapping.fromJS(sticky);

        self.changing = ko.observable(false);

        self.Content.subscribe(function (value) {
            self.changing(true);
            pubsub.publishSync(topics.sticky.changing, self.Id());
            api.sticky.put(ko.mapping.toJS(self), function (error, success) {
                if(!!error) {
                    pubsub.publish(topics.error.sticky.put, self.Id());
                } else {
                    pubsub.publish(topics.sticky.changed, self.Id());
                }
                self.changing(false);
            });
        });

        self.del = function () {
            if(self.canDelete()) {
                api.sticky.del(self.Id(), function (error, success) {
                    if(!!error) {
                        pubsub.publishSync(topics.error.sticky.del, error);
                    } else {
                        pubsub.publishSync(topics.sticky.deleted, self.Id());
                    }
                });
            }
        };

        self.canDelete = ko.computed(function () {
            return this.Id() !== 'New' && !self.changing();
        }, self);

        return self;
    };
    return StickyViewModel;
});
