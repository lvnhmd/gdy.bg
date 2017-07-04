// Action creator
import axios from 'axios';

const ROOT_URL = `https://dev.gdy.bg/api/v1`;

export const SRC_SELECTED = 'SRC_SELECTED';
export const SRCH_CHANGED = 'SRCH_CHANGED';
export const FETCH_COMPETITIONS = 'FETCH_COMPETITIONS';
export const FETCH_SOURCES = 'FETCH_SOURCES';
export const LOGIN = 'LOGIN';

export function sourceSelected(source) {
    return {
        type: SRC_SELECTED,
        payload: source
    };
}

export function searchTermChanged(term) {
    return {
        type: SRCH_CHANGED,
        payload: term
    };
}


export function fetchCompetitions() {
    const url = `${ROOT_URL}/competitions`;
    const request = axios.get(url);

    return {
        type: FETCH_COMPETITIONS,
        payload: request
    }

}

export function fetchSources() {
    const url = `${ROOT_URL}/sources`;
    const request = axios.get(url);

    return {
        type: FETCH_SOURCES,
        payload: request
    }

}

export function login(user) {
    return {
        type: LOGIN,
        payload: user
    };
}