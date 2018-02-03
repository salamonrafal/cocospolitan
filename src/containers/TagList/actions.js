export const SELECT_TAG = 'SELECT_TAG';

export function selectTag(headlines, activeTag) {
    return {
        type: SELECT_TAG,
        payload: {
            headlines,
            activeTag
        }
    }
}