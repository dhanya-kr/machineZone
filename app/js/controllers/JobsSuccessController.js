angular.module('MetronicApp').controller('JobsSuccessController', function($rootScope, $scope, $http, $timeout) {


    $scope.myData = [
        {
            'Job Id': 24747,
            'Time Stamp': '9/29/15 7:16 AM',
            "Priority Number": 100,
            'Partner Name': 'google-A',
            'Data Type': 'API',
            'Start': '9/10/2015',
            'End': '9/11/2015',
            'Ops': 'Covert',
            'Status': 'Closed',
            'Primary Status': 'Canceled',
            'Retry Count': 0,
            'Failure Reason': 'Conver...',
            'Actions': ''
        },
        {
            'Job Id': 24749,
            'Time Stamp': '9/30/15 8:27 AM',
            "Priority Number": 100,
            'Partner Name': 'google-A',
            'Data Type': 'API',
            'Start': '9/24/2015',
            'End': '9/25/2015',
            'Ops': 'Load',
            'Status': 'Queue',
            'Primary Status': 'Not Started',
            'Retry Count': 1,
            'Failure Reason': '',
            'Actions': ''
        },
        {
            'Job Id': 24745,
            'Time Stamp': '10/02/15 10:57 AM',
            "Priority Number": 100,
            'Partner Name': 'google-A',
            'Data Type': 'API',
            'Start': '9/26/2015',
            'End': '9/27/2015',
            'Ops': 'Covert',
            'Status': 'Closed',
            'Primary Status': 'Cancelled',
            'Retry Count': 0,
            'Failure Reason': 'Conver...',
            'Actions': ''
        },
        {
            'Job Id': 24748,
            'Time Stamp': '11/01/15 2:35 PM',
            'Priority Number': 100,
            'Partner Name': 'google-A',
            'Data Type': 'API',
            'Start': '10/28/2015',
            'End': '10/29/2015',
            'Ops': 'Load',
            'Status': 'Picked',
            'Primary Status': 'In Progress',
            'Retry Count': 1,
            'Failure Reason': '',
            'Actions': ''
        },
        {
            'Job Id': 24746,
            'Time Stamp': '12/01/15 5:57 PM',
            'Priority Number': 100,
            'Partner Name': 'twitter-A',
            'Data Type': 'API',
            'Start': '11/23/2015',
            'End': '11/25/2015',
            'Ops': 'Load',
            'Status': 'Picked',
            'Primary Status': 'In Progress',
            'Retry Count': 0,
            'Failure Reason': '',
            'Actions': ''
        },
        {
            'Job Id': 24739,
            'Time Stamp': '12/05/15 7:57 AM',
            'Priority Number': 100,
            'Partner Name': 'blindferret',
            'Data Type': 'API',
            'Start': '12/01/2015',
            'End': '12/03/2015',
            'Ops': 'Load',
            'Status': 'Failed',
            'Primary Status': 'Failed',
            'Retry Count': 2,
            'Failure Reason': 'Error ...',
            'Actions':''
        },
        {
            'Job Id': 24743,
            'Time Stamp': '10/04/15 1:57 PM',
            'Priority Number': 100,
            'Partner Name': 'applovin',
            'Data Type': 'API',
            'Start': '09/28/2015',
            'End': '09/29/2015',
            'Ops': 'Load',
            'Status': 'Closed',
            'Primary Status': 'Canceled',
            'Retry Count': 2,
            'Failure Reason': 'API fa...',
            'Actions': ''
        },
        {
            'Job Id': 24741,
            'Time Stamp': '10/01/15 3:23 PM',
            'Priority Number': 100,
            'Partner Name': 'applovin',
            'Data Type': 'API',
            'Start': '09/25/2015',
            'End': '09/26/2015',
            'Ops': 'Load',
            'Status': 'Closed',
            'Primary Status': 'Canceled',
            'Retry Count': 1,
            'Failure Reason': 'API fa...',
            'Actions': ''
        },
        {
            'Job Id': 24733,
            'Time Stamp': '10/05/15 2:36 PM',
            'Priority Number': 100,
            'Partner Name': 'applovin',
            'Data Type': 'API',
            'Start': '10/02/2015',
            'End': '10/03/2015',
            'Ops': 'Load',
            'Status': 'Closed',
            'Primary Status': 'Canceled',
            'Retry Count': 0,
            'Failure Reason': '',
            'Actions': ''
        },
        {
            'Job Id': 24742,
            'Time Stamp': '10/09/15 2:16 PM',
            'Priority Number': 100,
            'Partner Name': 'applovin',
            'Data Type': 'API',
            'Start': '10/07/2015',
            'End': '10/08/2015',
            'Ops': 'Load',
            'Status': 'Picked',
            'Primary Status': 'In Progress',
            'Retry Count': 1,
            'Failure Reason': '',
            'Actions': ''
        }
    ];


    $scope.$on('$viewContentLoaded', function() {   
        // initialize core components
        
    });

    //make a webservice call to the the partner count
    $http.get("http://www.w3schools.com/angular/customers.php")
        .success(function (response) {
            $scope.partnerData = response.records;
        });

    // set sidebar closed and body solid layout mode
    $rootScope.settings.layout.pageContentWhite = true;
    $rootScope.settings.layout.pageBodySolid = false;
    $rootScope.settings.layout.pageSidebarClosed = false;
});