/**
 * Created by AlexS on 16.08.2015.
 */
describe('TaskPageCtrl', function () {
    'use strict';

    beforeEach(angular.mock.module('singlePageApplication'));
    it('should have $scope.currentTask initialized as array', inject(function ($controller, $rootScope, $httpBackend) {
        var scope = $rootScope.$new(),
            routeMock = {
                current: {
                    pathParams: {
                        taskId: 1
                    }
                }
            };

        $controller('TaskPageCtrl', {
            $scope: scope,
            $route: routeMock
        });
        $httpBackend.when('GET', 'tasks.json').respond([{
            "id": 1,
            "name": "Today_task1",
            "creation_date": "2015-04-21T06:50:21",
            "due_date": "2015-04-22T23:59:00",
            "start_date": "2015-04-21T00:00:01",
            "is_completed": false,
            "is_archived": false,
            "estimated_effort": 5.5,
            "actual_effort": 3.3,
            "physical_progress": 60,
            "obj_status": "active",
            "description": "Lorem_ipsum_dolor_sit_amet,_consectetur_adipiscing_elit",
            "project_id": 0
        }]);

        $httpBackend.when('GET', 'mainPage/mainPage.html').respond('');


        expect(scope.currentTask).toEqual(null);

        $httpBackend.flush();

        expect(typeof scope.currentTask).toEqual('object');
        expect(scope.currentTask.id).not.toEqual(null);
        expect(scope.currentTask.name.length).toBeGreaterThan(0);
    }));
});