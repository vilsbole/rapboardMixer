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


    var player = new Gapless5("gapless-player");
    player.mapKeys({cue: "7", stop: "8", next: "9"});

    $scope.addToPlaylist = function($event, $data, array){
      var path = "srcs/" + $data.track.replace("http://", "");
      $scope.tracklist.push(path);
      player.addTrack(path);

      // $scope.tracklist.forEach(function(path){
      //   player.addTrack(path);
      // })
      array.push($data);
    };

    $scope.reoderPlaylist = function($event, $data, array){
      console.log(playlist);
    }

});
