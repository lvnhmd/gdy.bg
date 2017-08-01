// Action creator
import axios from 'axios';

const ROOT_URL = `https://h5ixs3u9pi.execute-api.eu-west-1.amazonaws.com/dev`;
const ROOT_URL_PATH = `/api/v1`;

export const SRC_SELECTED = 'SRC_SELECTED';
export const SRCH_CHANGED = 'SRCH_CHANGED';
export const FETCH_COMPETITIONS = 'FETCH_COMPETITIONS';
export const FETCH_SOURCES = 'FETCH_SOURCES';
export const LOGIN = 'LOGIN';
export const COMP_CLICKED = 'COMP_CLICKED';
export const CREATE_USER = 'CREATE_USER';
export const TRACK_ENTRY = 'TRACK_ENTRY';

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
    const url = `${ROOT_URL}${ROOT_URL_PATH}/competitions`;
    const request = axios.get(url);

    return {
        type: FETCH_COMPETITIONS,
        payload: request
    }

}

export function fetchSources() {
    const url = `${ROOT_URL}${ROOT_URL_PATH}/sources`;
    const request = axios.get(url);

    return {
        type: FETCH_SOURCES,
        payload: request
    }

}

export function login(user, callback) {
    console.log('ACTION LOGIN ', user);
    // lecture 142
    callback();
    return {
        type: LOGIN,
        payload: user
    };
}

export function competitionClicked(comp) {
    console.log('competitionClicked ', comp);
    return {
        type: COMP_CLICKED,
        payload: comp
    };
}

// actually I do not need to return anything in the next two methods,
// what do I use 
export function createUser(user) {
    console.log('createUser ', user);

    const url = `${ROOT_URL}${ROOT_URL_PATH}/user`;
    const request = axios.post(url, user);

    return {
        type: CREATE_USER,
        payload: request
    }

}

export function trackEntry(entry) {
    console.log('trackEntry ', entry);
    
    const url = `${ROOT_URL}${ROOT_URL_PATH}/track`;
    const request = axios.post(url, entry);
    
    return {
        type: TRACK_ENTRY,
        payload: request
    }
}