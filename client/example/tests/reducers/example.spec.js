import assert from 'assert';
import example from '../../reducers/example';
import {example as getExampleState} from '../../initialState';
import {REQUEST_EXAMPLE_INSTANCES,
    RECEIVE_EXAMPLE_INSTANCES,
    RECEIVE_EXAMPLE_INSTANCES_ERROR} from '../../constants/actionTypes';

describe("Example", () => {

    describe("Example Reducers", () => {

        it("should not process action if cid's dont match", () => {
            let exampleState = getExampleState();
            let state = example(exampleState, {});
            assert.equal(exampleState, state);
        });

        describe("REQUEST_EXAMPLE_INSTANCES", () => {

            let action = {
                type: REQUEST_EXAMPLE_INSTANCES
            };

            it("should set requesting to true", () => {
                let exampleState = getExampleState();
                action.cid = exampleState.cid;
                let state = example(exampleState, action);
                assert.equal(state.requesting, true);
            });

        });

        describe("RECEIVE_EXAMPLE_INSTANCES", () => {

            let action;

            beforeEach(() => {
                action = {
                    type: RECEIVE_EXAMPLE_INSTANCES
                };
            });

            it("should set example instances", () => {
                action.instances = [];
                let exampleState = getExampleState();
                action.cid = exampleState.cid;
                let state = example(exampleState, action);
                assert.equal(state.instances, action.instances);
            });

        });

        describe("RECEIVE_EXAMPLE_INSTANCES_ERROR", () => {

            let action;

            beforeEach(() => {
                action = {
                    type: RECEIVE_EXAMPLE_INSTANCES_ERROR,
                    error: "Test Error"
                }
            });

            it("should empty array", () => {
                let exampleState = getExampleState();
                action.cid = exampleState.cid;
                let state = example(exampleState, action);
                assert.equal(state.instances.length, 0);
            });

            it("should set requesting to false", () => {
                let exampleState = getExampleState();
                action.cid = exampleState.cid;
                let state = example(exampleState, action);
                assert.equal(state.requesting, false);
            });

            it("should add error to state", () => {
                let exampleState = getExampleState();
                action.cid = exampleState.cid;
                let state = example(exampleState, action);
                assert.equal(state.error, "Test Error");
            });
        });
    });

});