import React from 'react';
import { shallow, mount, render } from 'enzyme';
import jasmineEnzyme from 'jasmine-enzyme'
import { addCounter } from "../../../src/js/actions/index";


describe("A suite", function() {
    let counterAction;
    beforeEach(() => {
        jasmineEnzyme();
        counterAction = addCounter();
    });

    it("Counter Actions", function() {
        expect(counterAction.type).toEqual("INCREMENTCOUNTER");
        console.log(counterAction.type)
    });
});
