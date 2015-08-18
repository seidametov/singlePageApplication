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
    .controller('MainPageCtrl', function ($scope, $http,
                                          TasksService, ConvertTimeService) {
        $scope.myStorage = null;


        //$scope.getTime = ConvertTimeService.getTime;

        (function init() {
            TasksService.getAllTasks()
                .then(function (data) {
                    //$scope.myStorage = data.data;
                    $scope.myStorage = _.map(data.data, function (task) {
                        task.actual_effort = ConvertTimeService.getTime(task.actual_effort);
                        task.estimated_effort = ConvertTimeService.getTime(task.estimated_effort);

                        return task;
                    });
                });
        })();
    });

;/**
 * Created by AlexS on 17.08.2015.
 */
angular
    .module('singlePageApplication')
    .service('ConvertTimeService', function () {

        function addPrefix (str) {
            if (str.length < 2) {
                str = '0'+str;
            }
            return str;
        }

        function addPostfix (str) {
            if (str.length < 2) {
                str = str + '0';
            }
            return str;
        }

        function convertStr(str, where) {
            // 0- prefix, 1 - postfix
            if (typeof str === 'undefined') {
                return '00';
            }

            if (where) {
                str = addPostfix(str);
            } else {
                str= addPrefix(str);
            }

            return str;
        }

        function getTime(time) {
            var splittedStr = [], hh, mm;

            if (typeof time === 'undefined' || time === null) {
                return '00:00';
            }

            time = '' + time;
            splittedStr = time.split('.');
            hh = convertStr(splittedStr[0], 0);
            mm = convertStr(splittedStr[1], 1);
            return hh + ':' + mm;
        }

        return {
            getTime: getTime
        };
    });;/**
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