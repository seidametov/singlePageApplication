/**
 * Created by AlexS on 16.08.2015.
 */
describe('MainPageCtrl', function () {
    'use strict';

    var scope,
        httpBackend;

    beforeEach(angular.mock.module('singlePageApplication'));

    beforeEach(inject(function ($rootScope, $httpBackend, $controller) {
        scope = $rootScope.$new();
        httpBackend = $httpBackend;

        $controller('MainPageCtrl', {
            $scope: scope
        });

        httpBackend.when('GET', 'tasks.json').respond([{
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
    }));

    it('should have $scope.myStorage initialized as array', function () {
        expect(scope.myStorage).toEqual(null);

        httpBackend.flush();
    });

    it('should return tasks list with 1 task length', function () {
        httpBackend.flush();

        expect(typeof scope.myStorage).toEqual('object');
        expect(scope.myStorage[0].id).not.toEqual(undefined);
        expect(scope.myStorage[0].name.length).toBeGreaterThan(0);
        expect(scope.getTime(scope.myStorage[0].estimated_effort).length).toBeGreaterThan(0);
        expect(scope.getTime((scope.myStorage[0].actual_effort))).not.toEqual(undefined);
    });
});