///**
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

