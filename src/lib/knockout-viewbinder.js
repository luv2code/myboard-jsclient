define(['knockout', 'jquery'], function (ko, $) {
    /* USAGE:
     * <div data-bind="bind:'viewName'"></div>
     * this will find the template in views/{viewName}.tmpl.htm
     * add it to the DOM
     * and look in viewModels/{viewName}ViewModel and spin of a new instance
     * then applyBindings to the template using the new vm.
     *
     * <div data-bind="bind:'viewName', data:viewModel"></div>
     * this does the same thing except that it uses the data instead of spining up a new VM
     */
    ko.bindingHandlers.bind = {
        init: function(element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
            var viewName = valueAccessor(),
                $el = $(element),
                dataContext = allBindingsAccessor().data,
                dependencies = ['text!views/'+viewName+'.tmpl.htm'];
            if(typeof dataContext === 'undefined') {
                dependencies.push('viewModels/' + viewName + 'ViewModel');
            }
            require(dependencies, function (tmpl, ViewModelCtor) {
                var view = $(tmpl).appendTo($el).get(0);
                if(!!ViewModelCtor) {
                    dataContext = new ViewModelCtor();
                }
                ko.applyBindings(dataContext, view);
            });
        }/*,
        update: function(element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
            // This will be called once when the binding is first applied to an element,
            // and again whenever the associated observable changes value.
            // Update the DOM element based on the supplied values here.
        }*/
    };
});