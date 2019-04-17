import React from 'react';
import jasmineEnzyme from 'jasmine-enzyme'
import configureMockStore from "redux-mock-store";
import counterReducer from "../../../src/js/reducers/counterReducer";
import { INCREMENTCOUNTER } from "../../../src/js/actions/index";


const mockStore = configureMockStore();
const store = mockStore({});

describe("A suite", function() {

    let defaultState = {count: 0};
    const getAction = (type ="unknown" ,payload = {}) =>({ type,payload });
    const payload = {count : 0};
    const newState = counterReducer(defaultState,getAction("INCREMENTCOUNTER" ,payload.count));

    beforeEach(() => {
        jasmineEnzyme()
    });

    it("Counter Reducer", function() {
        console.log(newState.count);
        expect(newState.count).toEqual(defaultState.count + 1);
    });

});
