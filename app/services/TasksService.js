/**
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
    });