
import { SET_MAGAZINES, CHANGE_VISIBLE_MAGAZINES } from './actions.js';

let defaultState = {
    magazinesData: {},
    visibleMagazines: 0,
    lengthMagazines: 0,
    currentFullSizeImageMagazines: ''
};

export default function(state = defaultState, action) {
    switch(action.type) {

        case SET_MAGAZINES: {
            return {
                ...state,
                magazinesData: action.payload.data,
                visibleMagazines: action.payload.last,
                lengthMagazines: action.payload.length,
                currentFullSizeImageMagazines: action.payload.fullSizeImage
            };
        }

        case CHANGE_VISIBLE_MAGAZINES: {
            return {
                ...state,
                visibleMagazines: action.payload.itemId
            };
        }

        default:
            return state
    }
}