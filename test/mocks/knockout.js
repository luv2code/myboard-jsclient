define(function () {
    return {
        observable: function (value) {
            if(this.value !== value) {
                this.value = value;
            }
            return this.value;
        },
        observableArray: function(value) {
            return this.observable(value);
        }
    }
});

