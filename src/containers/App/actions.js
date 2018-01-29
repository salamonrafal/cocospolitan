import Api from './api.js';

export const LOADED_HEADLINES = Symbol('LOADED_HEADLINES');
export const SET_HEADLINES = Symbol('SET_HEADLINES');
export const SEARCH_HEADLINES = Symbol('SEARCH_HEADLINES');

export const setHeadlines = (value) => ({
    type: SET_HEADLINES,
    payload: value
});

export const loadHeadlines = () => ({
    type: LOADED_HEADLINES
});
