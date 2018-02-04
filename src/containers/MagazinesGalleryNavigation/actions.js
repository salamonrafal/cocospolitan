export const SET_MAGAZINES = 'SET_MAGAZINES';
export const CHANGE_VISIBLE_MAGAZINES = 'CHANGE_VISIBLE_MAGAZINES';

export function setMagazines(data, last, length, fullSizeImage) {
    return {
        type: SET_MAGAZINES,
        payload: {
            data,
            last,
            length,
            fullSizeImage
        }
    }
}

export function changeVisibleItem (itemId) {
    return {
        type: CHANGE_VISIBLE_MAGAZINES,
        payload: {
            itemId
        }
    }
}