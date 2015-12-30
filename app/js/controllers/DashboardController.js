angular.module('MetronicApp').controller('DashboardController', function($rootScope, $scope, $http, $timeout, $state) {
    $scope.$on('$viewContentLoaded', function() {   
        // initialize core components
   
    });


    this.getTableView = function (viewName){
            $state.go(viewName);
    };

    var self = this;

   $http.get("data/joblist.json")
    .success(function (response) {
        self.jobGroups = response;
    });


    this.categoryLabels = [

        {
            title : "API Data Load Jobs",
            code : "blue"
        },
                {
            title : "Email Data Load Jobs",
            code : "green"
        },

        {
            title : "Scraper Data Load Jobs",
            code : "vl"
        },
                {
            title : "Realtime Jobs",
            code : "orange"
        }

    ];








   
    // set sidebar closed and body solid layout mode
    $rootScope.settings.layout.pageContentWhite = true;
    $rootScope.settings.layout.pageBodySolid = false;
    $rootScope.settings.layout.pageSidebarClosed = false;
});