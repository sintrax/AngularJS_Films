'use strict';

musicApp.controller('ArtistDetailsController',
    function ArtistDetailsController ($scope, artistData) {



      $scope.artist = artistData.getArtist;

      $scope.hideInformation = true;
      $scope.showInfoText = "Show";
      $scope.showMoreInfo = showMoreInfo;

      $scope.hideBandMembers = true;
      $scope.showBandMembersText = "Show";
      $scope.showBandMembers = showMembers

      $scope.changeCss = {
        fontWeight: 'bold',
        textDecoration: 'underline'
      };

      $scope.greyBackgroundClass = "grey-background";
      $scope.bandRecordsShowText = 'View';
      $scope.bandRecordsShown = false;
      $scope.showAndHideRecords = showAndHideRecords;

      $scope.upVoteRating = upVoteRating;
      $scope.downVoteRating = downVoteRating;

      $scope.sort = "id";

      function showMembers() {
          if ($scope.hideBandMembers == true) {
              $scope.showBandMembersText = "Hide";
              $scope.hideBandMembers = false;
          }
          else {
            $scope.showBandMembersText = "Show";
            $scope.hideBandMembers = true;
          }
      }

      function showMoreInfo () {
        if ($scope.hideInformation == true) {
          $scope.showInfoText = "Hide";
          $scope.hideInformation = false;
        }
        else {
          $scope.showInfoText = "Show";
          $scope.hideInformation = true;
        }
      }

      function showAndHideRecords() {
        if ($scope.bandRecordsShown == true) {
          $scope.bandRecordsShowText = "View";
          $scope.bandRecordsShown = false;
        }
        else {
          $scope.bandRecordsShowText = "Hide";
          $scope.bandRecordsShown = true;
        }
      }

      function upVoteRating(album) {
        album.rating++;
      }

      function downVoteRating(album) {
        if (album.rating > 0) {

        album.rating--;
        }
      }
    }
);
