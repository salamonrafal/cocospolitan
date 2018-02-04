export const OPEN_MODAL = 'OPEN_MODAL';
export const REFRESH_CONTENT_MODAL = 'REFRESH_CONTENT_MODAL';

export function openModalWindowAction(isOpen, content, title, footer) {
    return {
        type: OPEN_MODAL,
        payload: {
            isOpen,
            content,
            title,
            footer
        }
    }
}

export function refreshModalWindowAction(content) {
    return {
        type: REFRESH_CONTENT_MODAL,
        payload: {
            content
        }
    }
}