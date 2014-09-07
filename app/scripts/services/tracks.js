'use strict';

/**
 * @ngdoc service
 * @name rapboardMixerApp.Tracks
 * @description
 * # Tracks
 * Service in the rapboardMixerApp.
 */
angular.module('rapboardMixerApp')
  .factory('Tracks', function Tracks($http) {

    var obj = {};


    obj.all = function(){
      return
        $http.get('data.json').success(function(data) {
          return data.content;
        });
    }

    return obj
  })
