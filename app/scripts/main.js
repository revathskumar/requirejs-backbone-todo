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
    underscore: '../components/underscore-amd/underscore'
  }
});
