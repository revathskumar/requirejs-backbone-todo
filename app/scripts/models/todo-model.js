/*global define */
'use strict';
define(['backbone'], function(Backbone){
  var TodoModel = Backbone.Model.extend({
    defaults: {
      id: null,
      task: null,
      done: null,
    }
  });
  return TodoModel;
});
