'use strict';

/**
 * @ngdoc service
 * @name rapboardMixerApp.Tracks
 * @description
 * # Tracks
 * Service in the rapboardMixerApp.
 */
angular.module('rapboardMixerApp')
  .factory('Tracks', function Tracks($q, $http) {

    var obj = {};

    obj.all = function(){
      var deferred = $q.defer();
      $http.get('data.json').success(function(data) {
        deferred.resolve(data.content)
      });
      return deferred.promise;
    }

    return obj
  })
