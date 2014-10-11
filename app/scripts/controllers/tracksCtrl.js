'use strict';

/**
 * @ngdoc function
 * @name rapboardMixerApp.controller:TracksCtrl
 * @description
 * # TracksCtrl
 * Controller of the rapboardMixerApp
 */
angular.module('rapboardMixerApp')
  .controller('TracksCtrl', function($scope, $sce, Tracks) {
    $scope.empty = 1;

    Tracks.all().then(function(res){
      $scope.artists = res;
    })


    $scope.playlist = [];
    $scope.tracklist = [];
    $scope.playSingle = function(id){
      if (id){
        document.getElementById(id).play();
      }
    }
    var player = new Gapless5("gapless-player");
    player.mapKeys({cue: "7", stop: "8", next: "9"});

    $scope.addToPlaylist = function($event, $data, array){
      if ($scope.empty === 1){
        $scope.empty = 0;
      };
      var path = "srcs/" + $data.track.replace("http://", "");
      $scope.tracklist.push(path);
      player.addTrack(path);
      array.push($data);
    };

    $scope.reorderPlaylist = function($event, $data, array){
      console.log($scope.playlist);
    }

    $scope.clearPlaylist = function(){
      player.removeAllTracks();
      $scope.playlist.length = 0;

    }

});
