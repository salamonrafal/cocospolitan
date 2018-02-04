export const OPEN_MODAL = 'OPEN_MODAL';

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