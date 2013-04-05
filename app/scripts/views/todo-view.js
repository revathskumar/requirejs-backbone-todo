/*global define*/
'use strict';
define(['backbone','templates'], function(Backbone, JST){

  var TodoView = Backbone.View.extend({
    template: JST['app/scripts/templates/todo.ejs'],
    el: '.todo-app',
    events: {
      'click button': 'addTodo'
    },
    addTodo: function(){

    },
    render: function(){
      $(this.el).html(this.template());
    }
  });

  return TodoView;
});
