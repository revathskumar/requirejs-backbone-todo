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

require(['scripts/views/todo-view.js'], function(TodoView){
  var inputView = new TodoView();
  inputView.render();
});
