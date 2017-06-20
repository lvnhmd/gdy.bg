// Action creator
import axios from 'axios';

const ROOT_URL = `https://dev.gdy.bg/api/v1/competitions`;

export const SRC_SELECTED = 'SRC_SELECTED';
export const FETCH_COMPETITIONS = 'FETCH_COMPETITIONS';

export function selectSource(source) {
    console.log('A source has been selected: ', source.name);
    return {
        type: SRC_SELECTED,
        payload: source
    };
}

export function fetchCompetitions() {

    const url = `${ROOT_URL}`;
    const request = axios.get(url);

    console.log('Request', request);

    return {
        type: FETCH_COMPETITIONS,
        payload: request
    }

}