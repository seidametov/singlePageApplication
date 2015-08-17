/**
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
