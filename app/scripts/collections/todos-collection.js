/*global define */
'use strict';
define(
  ['backbone','backboneLocalstorage'],
  function(Backbone, BackboneLocalStorage){
    var TodosCollection = Backbone.Collection.extend({
      localStorage: new BackboneLocalStorage('Todos')
    });

    return TodosCollection;
  }
);

