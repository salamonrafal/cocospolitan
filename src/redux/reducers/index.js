import { combineReducers } from 'redux';
import appReducers from '../../containers/App/reducers';

export const makeRootReducer = () => {
    return combineReducers({
        appReducers
    })
}

export default makeRootReducer;