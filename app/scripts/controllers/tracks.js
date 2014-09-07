'use strict';

/**
 * @ngdoc function
 * @name rapboardMixerApp.controller:TracksCtrl
 * @description
 * # TracksCtrl
 * Controller of the rapboardMixerApp
 */
angular.module('rapboardMixerApp')
  .controller('TracksCtrl', function ($scope, Tracks) {
    Tracks.all().then(function(res){
      console.log(res)
      $scope.tracks = res.content;
    })
  });
