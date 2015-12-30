angular.module('MetronicApp').controller('JobsFailedController',
    function($rootScope, $scope, $http, $timeout, mzStorageJobs) {
        mzStorageJobs.get().success(function(response) {
            $scope.myData = response;
        });

        $scope.$on('$viewContentLoaded', function() {
            // initialize core components
        });

        //make a webservice call to the the partner count
        $http.get("http://www.w3schools.com/angular/customers.php")
            .success(function(response) {
                $scope.partnerData = response.records;
            });

        // set sidebar closed and body solid layout mode
        $rootScope.settings.layout.pageContentWhite = true;
        $rootScope.settings.layout.pageBodySolid = false;
        $rootScope.settings.layout.pageSidebarClosed = false;
    }
);
