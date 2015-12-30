var TableAjax = function () {

    var initPickers = function () {
        //init date pickers
        $('.date-picker').datepicker({
            rtl: App.isRTL(),
            autoclose: true
        });
    }

    var handleRecords = function () {

        var grid = new Datatable();

        grid.init({
            src: $("#datatable_ajax"),
            onSuccess: function (grid) {
                // execute some code after table records loaded
            },
            onError: function (grid) {
                // execute some code on network or other general error
            },
            loadingMessage: 'Loading...',
            dataTable: { // here you can define a typical datatable settings from http://datatables.net/usage/options

                // Uncomment below line("dom" parameter) to fix the dropdown overflow issue in the datatable cells. The default datatable layout
                // setup uses scrollable div(table-scrollable) with overflow:auto to enable vertical scroll(see: assets/global/scripts/datatable.js).
                // So when dropdowns used the scrollable div should be removed.
                //"dom": "<'row'<'col-md-8 col-sm-12'pli><'col-md-4 col-sm-12'<'table-group-actions pull-right'>>r>t<'row'<'col-md-8 col-sm-12'pli><'col-md-4 col-sm-12'>>",

                "bStateSave": true, // save datatable state(pagination, sort, etc) in cookie.

                "lengthMenu": [
                    [10, 20, 50, 100, 150, -1],
                    [10, 20, 50, 100, 150, "All"] // change per page values here
                ],
                "pageLength": 10, // default record count per page
                "columns": [
                  {
                    "data": "channel_id", // can be null or undefined
                    "defaultContent": "<i>Not set</i>"
                  },
                  {
                    "data": "childWorkloadVOList", // can be null or undefined
                    "defaultContent": "<i>Not set</i>"
                  },
                  {
                    "data": "created_by", // can be null or undefined
                    "defaultContent": "<i>Not set</i>"
                  },
                  {
                    "data": "customer_id", // can be null or undefined
                    "defaultContent": "<i>Not set</i>"
                  },
                  {
                    "data": "customer_name", // can be null or undefined
                    "defaultContent": "<i>Not set</i>"
                  },
                  {
                    "data": "display_failure_reason", // can be null or undefined
                    "defaultContent": "<i>Not set</i>"
                  },
                  {
                    "data": "failure_reason", // can be null or undefined
                    "defaultContent": "<i>Not set</i>"
                  },
                  {
                    "data": "file_format_code", // can be null or undefined
                    "defaultContent": "<i>Not set</i>"
                  },
                  {
                    "data": "hadoop_webapp_url", // can be null or undefined
                    "defaultContent": "<i>Not set</i>"
                  },
                  {
                    "data": "hdfs_destination_filename", // can be null or undefined
                    "defaultContent": "<i>Not set</i>"
                  },
                  {
                    "data": "hdfs_destination_path", // can be null or undefined
                    "defaultContent": "<i>Not set</i>"
                  },
                  {
                    "data": "hdfs_original_filename", // can be null or undefined
                    "defaultContent": "<i>Not set</i>"
                  },
                  {
                    "data": "hdfs_original_path", // can be null or undefined
                    "defaultContent": "<i>Not set</i>"
                  },
                  {
                    "data": "hdfs_staging_filename", // can be null or undefined
                    "defaultContent": "<i>Not set</i>"
                  },
                  {
                    "data": "hdfs_staging_path", // can be null or undefined
                    "defaultContent": "<i>Not set</i>"
                  },
                  {
                    "data": "is_On_Demand", // can be null or undefined
                    "defaultContent": "<i>Not set</i>"
                  },
                  {
                    "data": "load_type_code", // can be null or undefined
                    "defaultContent": "<i>Not set</i>"
                  },
                  {
                    "data": "local_original_filename", // can be null or undefined
                    "defaultContent": "<i>Not set</i>"
                  },
                  {
                    "data": "local_original_path", // can be null or undefined
                    "defaultContent": "<i>Not set</i>"
                  },
                  {
                    "data": "local_staging_filename", // can be null or undefined
                    "defaultContent": "<i>Not set</i>"
                  },
                  {
                    "data": "local_staging_path", // can be null or undefined
                    "defaultContent": "<i>Not set</i>"
                  },
                  {
                    "data": "operation_code", // can be null or undefined
                    "defaultContent": "<i>Not set</i>"
                  },
                  {
                    "data": "parent_workload_id", // can be null or undefined
                    "defaultContent": "<i>Not set</i>"
                  },
                  {
                    "data": "partner_id", // can be null or undefined
                    "defaultContent": "<i>Not set</i>"
                  },
                  {
                    "data": "partner_name", // can be null or undefined
                    "defaultContent": "<i>Not set</i>"
                  },
                  {
                    "data": "pre_assigned_worker_ip", // can be null or undefined
                    "defaultContent": "<i>Not set</i>"
                  },
                  {
                    "data": "primary_status_code", // can be null or undefined
                    "defaultContent": "<i>Not set</i>"
                  },
                  {
                    "data": "priority_number", // can be null or undefined
                    "defaultContent": "<i>Not set</i>"
                  },
                  {
                    "data": "report_end_date", // can be null or undefined
                    "defaultContent": "<i>Not set</i>"
                  },
                  {
                    "data": "report_start_date", // can be null or undefined
                    "defaultContent": "<i>Not set</i>"
                  },
                  {
                    "data": "retry_count", // can be null or undefined
                    "defaultContent": "<i>Not set</i>"
                  },
                  {
                    "data": "schema_id", // can be null or undefined
                    "defaultContent": "<i>Not set</i>"
                  },
                  {
                    "data": "updated_by", // can be null or undefined
                    "defaultContent": "<i>Not set</i>"
                  },
                  {
                    "data": "updated_on", // can be null or undefined
                    "defaultContent": "<i>Not set</i>"
                  },
                  {
                    "data": "worker", // can be null or undefined
                    "defaultContent": "<i>Not set</i>"
                  },
                  {
                    "data": "worker_id", // can be null or undefined
                    "defaultContent": "<i>Not set</i>"
                  },
                  {
                    "data": "workload_status_code", // can be null or undefined
                    "defaultContent": "<i>Not set</i>"
                  }
                ],
                "data": [
                  {
                    "channel_id": 47,
                    "childWorkloadVOList": "",
                    "created_by": "MANUAL",
                    "customer_id": 1,
                    "customer_name": "MZ",
                    "display_failure_reason": "Conver...",
                    "failure_reason": "Converter: Error while sending file to HDFS: Could not create FileClient",
                    "file_format_code": "csv",
                    "hadoop_webapp_url": null,
                    "hdfs_destination_filename": null,
                    "hdfs_destination_path": null,
                    "hdfs_original_filename": null,
                    "hdfs_original_path": null,
                    "hdfs_staging_filename": null,
                    "hdfs_staging_path": null,
                    "is_On_Demand": 1,
                    "load_type_code": "API",
                    "local_original_filename": "ORG_API__P417_W24747_20151204_163007_655.csv",
                    "local_original_path": "/tmp/dif-working/API/mnasrieclipse/",
                    "local_staging_filename": null,
                    "local_staging_path": null,
                    "operation_code": "Covert",
                    "parent_workload_id": 0,
                    "partner_id": 417,
                    "partner_name": "google-A",
                    "pre_assigned_worker_ip": 1479,
                    "primary_status_code": "Canceled",
                    "priority_number": 100,
                    "report_end_date": 1449388800000,
                    "report_start_date": 1449302400000,
                    "retry_count": 0,
                    "schema_id": 105,
                    "updated_by": "AUTO",
                    "updated_on": 1449304455000,
                    "worker": "192.168.73.235/mnasrieclipse",
                    "workload_id": 24747,
                    "workload_status_code": "Closed"
                  },
                  {
                    "channel_id": 47,
                    "childWorkloadVOList": "",
                    "created_by": "AUTO",
                    "customer_id": 1,
                    "customer_name": "MZ",
                    "display_failure_reason": null,
                    "failure_reason": null,
                    "file_format_code": null,
                    "hadoop_webapp_url": null,
                    "hdfs_destination_filename": null,
                    "hdfs_destination_path": null,
                    "hdfs_original_filename": null,
                    "hdfs_original_path": null,
                    "hdfs_staging_filename": null,
                    "hdfs_staging_path": null,
                    "is_On_Demand": 1,
                    "load_type_code": "API",
                    "local_original_filename": null,
                    "local_original_path": null,
                    "local_staging_filename": null,
                    "local_staging_path": null,
                    "operation_code": "Load",
                    "parent_workload_id": 0,
                    "partner_id": 417,
                    "partner_name": "google-A",
                    "pre_assigned_worker_ip": 1479,
                    "primary_status_code": "Not Started",
                    "priority_number": 100,
                    "report_end_date": 1449388800000,
                    "report_start_date": 1449302400000,
                    "retry_count": 1,
                    "schema_id": 105,
                    "updated_by": null,
                    "updated_on": 1449304455000,
                    "worker": null,
                    "workload_id": 24749,
                    "workload_status_code": "Queue"
                  },
                  {
                    "channel_id": 47,
                    "childWorkloadVOList": "",
                    "created_by": "MANUAL",
                    "customer_id": 1,
                    "customer_name": "MZ",
                    "display_failure_reason": "Conver...",
                    "failure_reason": "Converter: Error while sending file to HDFS: Could not create FileClient",
                    "file_format_code": "csv",
                    "hadoop_webapp_url": null,
                    "hdfs_destination_filename": null,
                    "hdfs_destination_path": null,
                    "hdfs_original_filename": null,
                    "hdfs_original_path": null,
                    "hdfs_staging_filename": null,
                    "hdfs_staging_path": null,
                    "is_On_Demand": 1,
                    "load_type_code": "API",
                    "local_original_filename": "ORG_API__P417_W24745_20151204_162828_597.csv",
                    "local_original_path": "/tmp/dif-working/API/mnasrieclipse/",
                    "local_staging_filename": null,
                    "local_staging_path": null,
                    "operation_code": "Covert",
                    "parent_workload_id": 0,
                    "partner_id": 417,
                    "partner_name": "google-A",
                    "pre_assigned_worker_ip": 1479,
                    "primary_status_code": "Canceled",
                    "priority_number": 100,
                    "report_end_date": 1449302400000,
                    "report_start_date": 1449302400000,
                    "retry_count": 0,
                    "schema_id": 105,
                    "updated_by": "AUTO",
                    "updated_on": 1449304290000,
                    "worker": "192.168.73.235/mnasrieclipse",
                    "workload_id": 24745,
                    "workload_status_code": "Closed"
                  },
                  {
                    "channel_id": 47,
                    "childWorkloadVOList": "",
                    "created_by": "AUTO",
                    "customer_id": 1,
                    "customer_name": "MZ",
                    "display_failure_reason": null,
                    "failure_reason": null,
                    "file_format_code": null,
                    "hadoop_webapp_url": null,
                    "hdfs_destination_filename": null,
                    "hdfs_destination_path": null,
                    "hdfs_original_filename": null,
                    "hdfs_original_path": null,
                    "hdfs_staging_filename": null,
                    "hdfs_staging_path": null,
                    "is_On_Demand": 1,
                    "load_type_code": "API",
                    "local_original_filename": null,
                    "local_original_path": null,
                    "local_staging_filename": null,
                    "local_staging_path": null,
                    "operation_code": "Load",
                    "parent_workload_id": 0,
                    "partner_id": 417,
                    "partner_name": "google-A",
                    "pre_assigned_worker_ip": 1479,
                    "primary_status_code": "In Progress",
                    "priority_number": 100,
                    "report_end_date": 1449302400000,
                    "report_start_date": 1449302400000,
                    "retry_count": 1,
                    "schema_id": 105,
                    "updated_by": null,
                    "updated_on": 1449304290000,
                    "worker": "192.168.73.235/mnasrieclipse",
                    "workload_id": 24748,
                    "workload_status_code": "Picked"
                  },
                  {
                    "channel_id": 93,
                    "childWorkloadVOList": "",
                    "created_by": "MANUAL",
                    "customer_id": 1,
                    "customer_name": "MZ",
                    "display_failure_reason": null,
                    "failure_reason": null,
                    "file_format_code": null,
                    "hadoop_webapp_url": null,
                    "hdfs_destination_filename": null,
                    "hdfs_destination_path": null,
                    "hdfs_original_filename": null,
                    "hdfs_original_path": null,
                    "hdfs_staging_filename": null,
                    "hdfs_staging_path": null,
                    "is_On_Demand": 1,
                    "load_type_code": "API",
                    "local_original_filename": null,
                    "local_original_path": null,
                    "local_staging_filename": null,
                    "local_staging_path": null,
                    "operation_code": "Load",
                    "parent_workload_id": 0,
                    "partner_id": 423,
                    "partner_name": "twitter-A",
                    "pre_assigned_worker_ip": 1435,
                    "primary_status_code": "In Progress",
                    "priority_number": 100,
                    "report_end_date": 1449129600000,
                    "report_start_date": 1449129600000,
                    "retry_count": 0,
                    "schema_id": 111,
                    "updated_by": null,
                    "updated_on": 1449304089000,
                    "worker": "192.168.76.5/abhi",
                    "workload_id": 24746,
                    "workload_status_code": "Picked"
                  },
                  {
                    "channel_id": 31,
                    "childWorkloadVOList": "",
                    "created_by": "AUTO",
                    "customer_id": 1,
                    "customer_name": "MZ",
                    "display_failure_reason": "Error ...",
                    "failure_reason": "Error while Loading for workload id = 24739 PartnerID:: 91 and channel id 31",
                    "file_format_code": null,
                    "hadoop_webapp_url": null,
                    "hdfs_destination_filename": null,
                    "hdfs_destination_path": null,
                    "hdfs_original_filename": null,
                    "hdfs_original_path": null,
                    "hdfs_staging_filename": null,
                    "hdfs_staging_path": null,
                    "is_On_Demand": 1,
                    "load_type_code": "API",
                    "local_original_filename": null,
                    "local_original_path": null,
                    "local_staging_filename": null,
                    "local_staging_path": null,
                    "operation_code": "Load",
                    "parent_workload_id": 0,
                    "partner_id": 91,
                    "partner_name": "blindferret",
                    "pre_assigned_worker_ip": 1479,
                    "primary_status_code": "Failed",
                    "priority_number": 100,
                    "report_end_date": 1449302400000,
                    "report_start_date": 1449302400000,
                    "retry_count": 2,
                    "schema_id": 24,
                    "updated_by": "executeApi2",
                    "updated_on": 1449304065000,
                    "worker": "192.168.73.235/mnasrieclipse",
                    "workload_id": 24739,
                    "workload_status_code": "Failed"
                  },
                  {
                    "channel_id": 2,
                    "childWorkloadVOList": "",
                    "created_by": "AUTO",
                    "customer_id": 1,
                    "customer_name": "MZ",
                    "display_failure_reason": "API fa...",
                    "failure_reason": "API failed in loader with null",
                    "file_format_code": null,
                    "hadoop_webapp_url": null,
                    "hdfs_destination_filename": null,
                    "hdfs_destination_path": null,
                    "hdfs_original_filename": null,
                    "hdfs_original_path": null,
                    "hdfs_staging_filename": null,
                    "hdfs_staging_path": null,
                    "is_On_Demand": 1,
                    "load_type_code": "API",
                    "local_original_filename": null,
                    "local_original_path": null,
                    "local_staging_filename": null,
                    "local_staging_path": null,
                    "operation_code": "Load",
                    "parent_workload_id": 0,
                    "partner_id": 66,
                    "partner_name": "applovin",
                    "pre_assigned_worker_ip": 1321,
                    "primary_status_code": "Canceled",
                    "priority_number": 100,
                    "report_end_date": 1448956800000,
                    "report_start_date": 1448956800000,
                    "retry_count": 2,
                    "schema_id": 18,
                    "updated_by": "MANUAL",
                    "updated_on": 1449303618000,
                    "worker": "10.150.0.108/API_worker1",
                    "workload_id": 24743,
                    "workload_status_code": "Closed"
                  },
                  {
                    "channel_id": 2,
                    "childWorkloadVOList": "",
                    "created_by": "AUTO",
                    "customer_id": 1,
                    "customer_name": "MZ",
                    "display_failure_reason": "API fa...",
                    "failure_reason": "API failed in loader with null",
                    "file_format_code": null,
                    "hadoop_webapp_url": null,
                    "hdfs_destination_filename": null,
                    "hdfs_destination_path": null,
                    "hdfs_original_filename": null,
                    "hdfs_original_path": null,
                    "hdfs_staging_filename": null,
                    "hdfs_staging_path": null,
                    "is_On_Demand": 1,
                    "load_type_code": "API",
                    "local_original_filename": null,
                    "local_original_path": null,
                    "local_staging_filename": null,
                    "local_staging_path": null,
                    "operation_code": "Load",
                    "parent_workload_id": 0,
                    "partner_id": 66,
                    "partner_name": "applovin",
                    "pre_assigned_worker_ip": 1321,
                    "primary_status_code": "Canceled",
                    "priority_number": 100,
                    "report_end_date": 1448956800000,
                    "report_start_date": 1448956800000,
                    "retry_count": 1,
                    "schema_id": 18,
                    "updated_by": "AUTO",
                    "updated_on": 1449302865000,
                    "worker": "10.150.0.108/API_worker1",
                    "workload_id": 24741,
                    "workload_status_code": "Closed"
                  },
                  {
                    "channel_id": 2,
                    "childWorkloadVOList": "",
                    "created_by": "MANUAL",
                    "customer_id": 1,
                    "customer_name": "MZ",
                    "display_failure_reason": null,
                    "failure_reason": null,
                    "file_format_code": null,
                    "hadoop_webapp_url": null,
                    "hdfs_destination_filename": null,
                    "hdfs_destination_path": null,
                    "hdfs_original_filename": null,
                    "hdfs_original_path": null,
                    "hdfs_staging_filename": null,
                    "hdfs_staging_path": null,
                    "is_On_Demand": 1,
                    "load_type_code": "API",
                    "local_original_filename": null,
                    "local_original_path": null,
                    "local_staging_filename": null,
                    "local_staging_path": null,
                    "operation_code": "Load",
                    "parent_workload_id": 0,
                    "partner_id": 66,
                    "partner_name": "applovin",
                    "pre_assigned_worker_ip": 1494,
                    "primary_status_code": "Canceled",
                    "priority_number": 100,
                    "report_end_date": 1448956800000,
                    "report_start_date": 1448956800000,
                    "retry_count": 0,
                    "schema_id": 18,
                    "updated_by": "MANUAL",
                    "updated_on": 1449302701000,
                    "worker": "192.168.76.5/abhi1",
                    "workload_id": 24733,
                    "workload_status_code": "Closed"
                  },
                  {
                    "channel_id": 2,
                    "childWorkloadVOList": "",
                    "created_by": "MANUAL",
                    "customer_id": 1,
                    "customer_name": "MZ",
                    "display_failure_reason": null,
                    "failure_reason": null,
                    "file_format_code": null,
                    "hadoop_webapp_url": null,
                    "hdfs_destination_filename": null,
                    "hdfs_destination_path": null,
                    "hdfs_original_filename": null,
                    "hdfs_original_path": null,
                    "hdfs_staging_filename": null,
                    "hdfs_staging_path": null,
                    "is_On_Demand": 1,
                    "load_type_code": "API",
                    "local_original_filename": null,
                    "local_original_path": null,
                    "local_staging_filename": null,
                    "local_staging_path": null,
                    "operation_code": "Load",
                    "parent_workload_id": 0,
                    "partner_id": 66,
                    "partner_name": "applovin",
                    "pre_assigned_worker_ip": 1494,
                    "primary_status_code": "In Progress",
                    "priority_number": 100,
                    "report_end_date": 1448956800000,
                    "report_start_date": 1448956800000,
                    "retry_count": 1,
                    "schema_id": 18,
                    "updated_by": null,
                    "updated_on": 1449302701000,
                    "worker": "192.168.76.5/abhi1",
                    "workload_id": 24742,
                    "workload_status_code": "Picked"
                  }
                ],
                // "ajax": {
                //     "url": "demo/table_ajax.php", // ajax source
                // },
                // "order": [
                //     [1, "asc"]
                // ] // set first column as a default sort by asc
            }
        });

        // handle group actionsubmit button click
        grid.getTableWrapper().on('click', '.table-group-action-submit', function (e) {
            e.preventDefault();
            var action = $(".table-group-action-input", grid.getTableWrapper());
            if (action.val() != "" && grid.getSelectedRowsCount() > 0) {
                grid.setAjaxParam("customActionType", "group_action");
                grid.setAjaxParam("customActionName", action.val());
                grid.setAjaxParam("id", grid.getSelectedRows());
                grid.getDataTable().ajax.reload();
                grid.clearAjaxParams();
            } else if (action.val() == "") {
                App.alert({
                    type: 'danger',
                    icon: 'warning',
                    message: 'Please select an action',
                    container: grid.getTableWrapper(),
                    place: 'prepend'
                });
            } else if (grid.getSelectedRowsCount() === 0) {
                App.alert({
                    type: 'danger',
                    icon: 'warning',
                    message: 'No record selected',
                    container: grid.getTableWrapper(),
                    place: 'prepend'
                });
            }
        });
    }

    return {

        //main function to initiate the module
        init: function () {

            initPickers();
            handleRecords();
        }

    };

}();
