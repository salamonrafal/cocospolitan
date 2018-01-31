
import { SET_APPLICATION_CONFIG, SET_HEADLINES } from './actions.js';
import Config from '../../commons/config/config.js';
import Headlines from '../../commons/helpers/Headlines.js';
let defaultState = {
    headlines: new Headlines([]),
    config: new Config('production')
};

export default function(state = defaultState, action) {
    switch(action.type) {

        case SET_APPLICATION_CONFIG: {
            return {
                ...state,
                config: action.payload
            };
        }

        case SET_HEADLINES: {
            return {
                ...state,
                headlines: action.payload
            };
        }

        default:
            return state
    }
}