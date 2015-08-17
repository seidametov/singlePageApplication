/**
 * Created by AlexS on 16.08.2015.
 */
describe('TasksService', function () {
    'use strict';

    beforeEach(angular.mock.module('singlePageApplication'));

    it('should resolve promise', inject(function (TasksService) {
        expect(typeof TasksService.getAllTasks).toEqual('function');
    }));
});