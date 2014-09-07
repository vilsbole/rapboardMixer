'use strict';

/**
 * @ngdoc function
 * @name rapboardMixerApp.controller:TracksCtrl
 * @description
 * # TracksCtrl
 * Controller of the rapboardMixerApp
 */
angular.module('rapboardMixerApp')
  .controller('TracksCtrl', function($scope, Tracks) {
    Tracks.all().then(function(res){
      $scope.tracks = res;
    })
    $scope.playlist = [];

    $scope.onDrop = function($event,$data,array){
      array.push($data);
    };

});
