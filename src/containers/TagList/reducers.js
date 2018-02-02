import { SELECT_TAG } from './actions.js';
import Headlines from '../../commons/helpers/Headlines.js';

let defaultState = {
    activeTag: '',
    headlines: new Headlines([]),
};

export default function(state = defaultState, action) {
    switch(action.type) {
        case SELECT_TAG: {
            return {
                ...state,
                activeTag: action.payload.activeTag,
                headlines: action.payload.headlines,
                refreshHeadlines: String(Math.random())
            };
        }
        
        default:
            return state
    }
}