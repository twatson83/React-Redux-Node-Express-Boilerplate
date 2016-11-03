import {REQUEST_EXAMPLE_INSTANCES,
    RECEIVE_EXAMPLE_INSTANCES,
    RECEIVE_EXAMPLE_INSTANCES_ERROR} from '../constants/actionTypes';
import {example as exampleState} from '../initialState';
import objectAssign from 'object-assign';

export default function audit (state = exampleState(), action) {
    if(action.cid !== state.cid) {
        return state;
    }

    switch (action.type) {

        case REQUEST_EXAMPLE_INSTANCES:
            return objectAssign({}, state, {
                requesting: true
            });

        case RECEIVE_EXAMPLE_INSTANCES:

            return objectAssign({}, state, {
                instances: action.instances,
                requesting: false,
                error: null
            });

        case RECEIVE_EXAMPLE_INSTANCES_ERROR:
            return objectAssign({}, state, {
                instances: [],
                requesting: false,
                error: action.error
            });

        default:
            return state;
    }
}
