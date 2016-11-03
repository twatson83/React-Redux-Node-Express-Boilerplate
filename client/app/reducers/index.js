import { combineReducers } from 'redux';
import {routerReducer} from 'react-router-redux';
import example from '../../example/reducers/example';

const rootReducer = combineReducers({
    example,
    routing: routerReducer
});

export default rootReducer;
