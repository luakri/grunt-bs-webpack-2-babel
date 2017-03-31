/*global describe:true, it:true, expect:true, afterEach: true, beforeEach:true */

import Component from '../index';

describe('# Component1', function() {

    let component = null;

    beforeEach(function() {
        component = new Component();
    });

    afterEach(function () {
        component = null;
    });

    it('should have default methods', function() {
        expect(typeof component).toEqual('object');

        expect(component.update).toBeDefined();

        expect(typeof component.update).toEqual('function');
    });

    it('should get/set simple property', function() {

        let update = component.update();

        expect(update).toBe(true);
    });
});
