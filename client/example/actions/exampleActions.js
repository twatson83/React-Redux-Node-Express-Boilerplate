import {REQUEST_EXAMPLE_INSTANCES,
    RECEIVE_EXAMPLE_INSTANCES,
    RECEIVE_EXAMPLE_INSTANCES_ERROR} from '../constants/actionTypes';

export function requestExampleInstances(cid) {
    return function(dispatch){
        dispatch({ type: REQUEST_EXAMPLE_INSTANCES, cid });
        fetch("/example")
            .then(response => response.json())
            .then(instances => dispatch({ type: RECEIVE_EXAMPLE_INSTANCES, instances, cid}))
            .catch(error => dispatch({ type: RECEIVE_EXAMPLE_INSTANCES_ERROR, error, cid}));
    };
}
