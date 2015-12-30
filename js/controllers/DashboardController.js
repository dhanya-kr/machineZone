/**
  * @class MetronicApp.DashboardController
  * @memberOf MetronicApp    
  */
angular.module('MetronicApp').controller('DashboardController',
    function($rootScope, $scope, $http, $timeout, $state, mzStorageJobList, mzStorageCategoryLabels) {
       /**
            * Setup Dashboard Controller
            */
        $scope.$on('$viewContentLoaded', function() {
            // initialize core components
        });

        this.getTableView = function(viewName) {
            $state.go(viewName);
        };

        var self = this;

        mzStorageJobList.get().success(function(response) {
            self.jobGroups = response;
        });

        mzStorageCategoryLabels.get().success(function(response) {
            self.categoryLabels = response;
        });

        // set sidebar closed and body solid layout mode
        $rootScope.settings.layout.pageContentWhite = true;
        $rootScope.settings.layout.pageBodySolid = false;
        $rootScope.settings.layout.pageSidebarClosed = false;
    }
);
