var chai = require('chai'),
    requirejs = require('requirejs'),
    rjsContext = requirejs.config({
        baseUrl: 'src',
        paths: {
            'knockout':'../test/mocks/knockout',
            'jquery':'../test/mocks/jquery',
            'services/myBoardApi': 'services/fakeApi'
        }
    });

chai.Assertion.includeStack = true;

module.exports.assert = chai.assert;
module.exports.should = chai.should();
module.exports.rjs = rjsContext;

