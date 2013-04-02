/* global: define */
define(['backbone'], function(Backbone){
  TodoView = Backbone.View.extend({

    template: JST['app/scripts/templates/todo.ejs']

  });

  return TodoView;
});

