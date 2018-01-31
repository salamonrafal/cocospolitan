import { combineReducers } from 'redux';
import AppReducers from '../../containers/App/reducers';
import TagListReducers from '../../containers/TagList/reducers';

export const makeRootReducer = () => {
    return combineReducers({
        app: AppReducers,
        tagList: TagListReducers
    })
}

export default makeRootReducer;