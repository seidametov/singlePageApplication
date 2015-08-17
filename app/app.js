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
    }]);