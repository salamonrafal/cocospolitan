
import { SET_MAGAZINES, CHANGE_VISIBLE_MAGAZINES } from './actions.js';

let defaultState = {
    magazinesData: {},
    visible: 0,
    length: 0
};

export default function(state = defaultState, action) {
    switch(action.type) {

        case SET_MAGAZINES: {
            return {
                ...state,
                magazinesData: action.payload.data,
                visible: action.payload.last,
                length: action.payload.length
            };
        }

        case CHANGE_VISIBLE_MAGAZINES: {
            return {
                ...state,
                visible: action.payload.itemId
            };
        }

        default:
            return state
    }
}