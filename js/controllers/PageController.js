'use strict';

musicApp.controller('PageController',
      function PagrController($scope, author) {
          $scope.author = author;
          $scope.date = {
              year: 2016,
              month: 4,
              day:27

        }
      }
);
