/**
  * @class MetronicApp.ReportsController
  * @memberOf MetronicApp    
  */
angular.module('MetronicApp').controller('ReportsController',
    function($rootScope, $scope, $http, $timeout) {
        $scope.$on('$viewContentLoaded', function() {
            // initialize core components
        });

        // set sidebar closed and body solid layout mode
        $rootScope.settings.layout.pageContentWhite = true;
        $rootScope.settings.layout.pageBodySolid = false;
        $rootScope.settings.layout.pageSidebarClosed = false;
    }
);
