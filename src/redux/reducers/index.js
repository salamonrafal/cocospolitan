import { combineReducers } from 'redux';
import AppReducers from '../../containers/App/reducers';
import TagListReducers from '../../containers/TagList/reducers';
import MagazinesGalleryReducers from '../../containers/MagazinesGallery/reducers';

export const makeRootReducer = () => {
    return combineReducers({
        app: AppReducers,
        tagList: TagListReducers,
        magazinesGallery: MagazinesGalleryReducers
    })
}

export default makeRootReducer;