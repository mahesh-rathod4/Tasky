 import {combineReducers} from 'redux';
//import getUserReducer from '../src/modules/NewChat/reducer';
import saveGroupReducer from '../src/modules/Home/reducer';

const rootReducer = combineReducers({
    saveGroupReducer: saveGroupReducer,
})

export default rootReducer;