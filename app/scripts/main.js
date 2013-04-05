/*global require*/
'use strict';

require.config({
  shim: {
    underscore: {
      exports: '_'
    },
    backbone: {
      deps: [
        'underscore',
        'jquery'
      ],
      exports: 'Backbone'
    },
    backboneLocalstorage:{
      deps:['backbone'],
      exports: 'Store'
    }
  },

  paths: {
    jquery: '../components/jquery/jquery',
    backbone: '../components/backbone-amd/backbone',
    underscore: '../components/underscore-amd/underscore',
    backboneLocalstorage: '../components/backbone.localStorage/backbone.localStorage'
  }
});

require(
  ['scripts/views/todo-view.js','scripts/views/todoList-view.js','scripts/collections/todos-collection.js'],
  function(TodoView, TodoListView, TodoCollection){
    var inputView = new TodoView();
    inputView.render();

    var collection = new TodoCollection();

    var listView = new TodoListView({collection: collection});
    listView.render();
  }
);
