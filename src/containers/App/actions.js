export const SET_HEADLINES = 'SET_HEADLINES';
export const SET_APPLICATION_CONFIG = 'SET_APPLICATION_CONFIG';

export function setHeadlines(headlines) {
    return {
        type: SET_HEADLINES,
        payload: headlines
    }
}

export function setApplicationConfig (config) {
    return {
        type: SET_APPLICATION_CONFIG,
        payload: config,
    }
}