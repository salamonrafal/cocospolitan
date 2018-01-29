
import {LOADED_HEADLINES, SET_HEADLINES, SEARCH_HEADLINES} from './actions.js';

let defaultState = {
    headlines: []
};

export default function(state = defaultState, action) {
    switch(action.type) {

        case LOADED_HEADLINES:
            return state;

        case SET_HEADLINES:
            state.headlines = action.payload;
            return state;

        case SEARCH_HEADLINES:
            state.headlines = action.payload;
            return state;

        default:
            return state
    }
}