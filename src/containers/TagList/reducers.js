import { SELECT_TAG } from './actions.js';

let defaultState = {
    activeTag: ''
};

export default function(state = defaultState, action) {
    switch(action.type) {

        case SELECT_TAG: {
            return {
                ...state,
                activeTag: action.payload.activeTag,
                headlines: action.payload.headlines,
            };
        }

        default:
            return state
    }
}