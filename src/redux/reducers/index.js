import { combineReducers } from 'redux';
import AppReducers from '../../containers/App/reducers';
import TagListReducers from '../../containers/TagList/reducers';
import MagazinesGalleryReducers from '../../containers/MagazinesGallery/reducers';
import ModalWindowReducers from '../../containers/ModalWindow/reducers';
import MagazinesGalleryNavigationReducers from '../../containers/MagazinesGalleryNavigation/reducers';

export const makeRootReducer = () => {
    return combineReducers({
        app: AppReducers,
        tagList: TagListReducers,
        magazinesGallery: MagazinesGalleryReducers,
        modalWindow: ModalWindowReducers,
        MagazinesGalleryNavigation: MagazinesGalleryNavigationReducers
    })
}

export default makeRootReducer;