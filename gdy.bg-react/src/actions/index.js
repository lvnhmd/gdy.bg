// Action creator
import axios from 'axios';

const ROOT_URL = `https://dev.gdy.bg/api/v1`;

export const SRC_SELECTED = 'SRC_SELECTED';
export const FETCH_COMPETITIONS = 'FETCH_COMPETITIONS';
export const FETCH_SOURCES = 'FETCH_SOURCES';

export function selectSource(source) {
    console.log('A source has been selected: ', source);
    return {
        type: SRC_SELECTED,
        payload: source
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

    console.log('fetchSources Request', request);

    return {
        type: FETCH_SOURCES,
        payload: request
    }

}