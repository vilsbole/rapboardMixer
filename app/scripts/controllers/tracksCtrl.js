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
    $scope.tracklist = [];

    $scope.onDrop = function($event, $data, array){
      var player = new Gapless5("gapless-player");
      player.mapKeys({cue: "7", stop: "8", next: "9"});
      $scope.tracklist.forEach(function(path){
        player.addTrack(path);
      })
      array.push($data);
      console.log($data);
      $scope.tracklist.push("srcs/" + $data.track);
    };
});
