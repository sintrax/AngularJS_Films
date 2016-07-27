'use strict'

musicApp.controller('EditArtistController',
    function EditArtistController($scope) {
        $scope.saveArtist = function(artist, newArtistForm) {
          if(newArtistForm.$valid) {
            alert('Artist saved: ' + artist.name + " " + artist.created);
          }
          else {
            alert('Invalid data')
          }
        }

        $scope.cancel = function() {
          alert('cancel');
    }
  }
);
