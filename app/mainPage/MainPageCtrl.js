///**
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

