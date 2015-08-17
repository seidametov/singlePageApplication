/**
 * Created by AlexS on 15.08.2015.
 */
'use strict';
angular
    .module('singlePageApplication', [
        'ngRoute'
    ])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'mainPage/mainPage.html',
                controller: 'MainPageCtrl'
            })
            .when('/task/:taskId', {
                templateUrl: 'taskPage/taskPage.html',
                controller: 'TaskPageCtrl'
            })
            .otherwise({redirectTo: '/'});
    }]);;///**
// * Created by AlexS on 15.08.2015.
// */
angular.module('singlePageApplication')
    .controller('MainPageCtrl', function ($scope, $http, TasksService) {
        $scope.myStorage = null;

        function convertStr(str, where) {
            // 0- prefix, 1 - postfix
            if (typeof str === 'undefined') {
                return '00';
            }
            if (where) {
                switch (str.length < 2) {
                    case true:
                        return str + '0';
                        break;
                    case false:
                        return str;
                        break;
                };
            } else {
                switch (str.length < 2) {
                    case true:
                        return '0' + str;
                        break;
                    case false:
                        return str;
                        break;
                };
            };
        };

        $scope.getTime = function (time) {
            var splittedStr = [];
            var hh, mm;

            if (typeof time === 'undefined' || time === null) {
                return '00:00';
            }
            time = '' + time;
            splittedStr = time.split('.');
            hh = convertStr(splittedStr[0], 0);
            mm = convertStr(splittedStr[1], 1);
            return hh + ':' + mm;
        };

        (function init() {
            TasksService.getAllTasks()
                .then(function (data) {
                    $scope.myStorage = data.data;
                });
        })();
    });

;/**
 * Created by AlexS on 16.08.2015.
 */
angular
    .module('singlePageApplication')
    .factory('TasksService', function ($http) {
        function getAllTasks () {
            return $http.get('tasks.json');
        }

        return {
            getAllTasks: getAllTasks
        };
    });;/**
 * Created by AlexS on 15.08.2015.
 */
angular.module('singlePageApplication')
    .controller('TaskPageCtrl', function ($scope, $http,
                                          $route, TasksService) {

        $scope.currentTask = null;

        (function init() {
            TasksService.getAllTasks()
                .then(function (data) {
                    $scope.currentTask = _.find(data.data, function (task) {
                        return task.id === +$route.current.pathParams.taskId;
                    });
                });
        })();
    });

//# sourceMappingURL=build.js.map