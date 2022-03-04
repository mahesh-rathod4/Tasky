import {combineReducers} from 'redux';
import getUserReducer from '../src/modules/NewChat/reducer';

const rootReducer = combineReducers({
    getUserReducer: getUserReducer,
})

export default rootReducer;