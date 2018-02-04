import { OPEN_MODAL, REFRESH_CONTENT_MODAL } from './actions.js';

let defaultState = {
    modalOpened: false,
    modalContent: '',
    modalTitle: '',
    modalFooter: ''
};

export default function(state = defaultState, action) {
    switch(action.type) {
        case OPEN_MODAL: {
            return {
                ...state,
                modalOpened: action.payload.isOpen,
                modalContent: action.payload.content,
                modalTitle: action.payload.title,
                modalFooter: action.payload.footer,
            };
        }

        case REFRESH_CONTENT_MODAL: {
            return {
                ...state,
                modalContent: action.payload.content,
            };
        }
        
        default:
            return state
    }
}