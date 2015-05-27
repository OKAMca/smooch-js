'use strict';

var Backbone = require('backbone'),
    _ = require('underscore');

module.exports = Backbone.AssociatedModel.extend({
    parse: function(data) {
        return _.isObject(data) ? data : {
            id: data
        };
    }
});