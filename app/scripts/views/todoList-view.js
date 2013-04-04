/*global define */
'use strict';
define(['backbone','templates'], function(Backbone, JST){
  var TodoListView = Backbone.View.extend({
    template: JST['app/scripts/templates/todoList.ejs'],
    el: '.todo-list',
    render: function(){

    }
  });

  return TodoListView;
});
