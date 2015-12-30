/*global angular */

/**
 * Services that persists and retrieves todos from localStorage or a backend API
 * if available.
 *
 * They both follow the same API, returning promises for all changes to the
 * model.
 */
angular.module('MetronicApp')
    .factory('mzStorageJobList', function($http, $injector) {
        'use strict';

        var store = {
            delete: function() {
            },

            get: function() {
                return $http.get("./data/joblist.json");
            },

            insert: function() {
            },

            put: function() {
            }
        };

        return store;

    })
    .factory('mzStorageCategoryLabels', function($http, $injector) {
        'use strict';

        var store = {
            delete: function() {
            },

            get: function() {
                return $http.get("./data/categoryLabels.json");
            },

            insert: function() {
            },

            put: function() {
            }
        };

        return store;

    })
    .factory('mzStorageJobs', function($http, $injector) {
        'use strict';
        var store = {
            delete: function() {
            },

            get: function() {
                return $http.get("./data/jobs.json");
            },

            insert: function() {
            },

            put: function() {
            }
        };
        return store;
    });
