// Action creator
import axios from 'axios';
import { browserHistory } from 'react-router';

import {
    SRC_SELECTED,
    SRCH_CHANGED,
    FETCH_COMPETITIONS,
    FETCH_SOURCES,
    AUTH_USER,
    AUTH_ERROR,
    DEAUTH_USER,
    TRACK_ENTRY,
    ERROR
} from './types';

const ROOT_URL = process.env.REACT_APP_API_URL;

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

    var returnObj = {
        type: FETCH_COMPETITIONS,
        payload: request
    };

    return returnObj;

}

export function fetchSources() {
    const url = `${ROOT_URL}/sources`;
    const request = axios.get(url);

    return {
        type: FETCH_SOURCES,
        payload: request
    }

}

export function authError(error) {
    return {
        type: AUTH_ERROR,
        payload: error
    };
}

export function signin(user, entry) {
    return function (dispatch) {
        axios.post(`${ROOT_URL}/user`, user)
            .then(response => {
                console.log('signin user');
                dispatch({ type: AUTH_USER, payload: JSON.stringify(user) });
                localStorage.setItem('user', JSON.stringify(user));
                browserHistory.push('/');

                if (entry) {
                    entry.userId = user._provider + '_' + user._profile.id;
                    dispatch({ type: TRACK_ENTRY, payload: entry });

                    window.open(entry.uri, '_blank');

                    axios.post(`${ROOT_URL}/track`, entry)
                        .then(response => {
                            console.log('track entry success');
                        })
                        .catch(response => {
                            console.log('track entry : an error occured');
                            dispatch(error(response.data.error))
                        });
                }
            })
            .catch(response => {
                console.log('signin user : an error occured');
                dispatch(authError(response.data.error))
            });
    }
}

export function signout() {
    localStorage.removeItem('user');
    return { type: DEAUTH_USER };
}

export function gotoSignin() {
    return function (dispatch) {
        browserHistory.push('/signin');
    }
}

export function trackEntry(entry, isAuthenticated) {
    return function (dispatch) {
        console.log('track entry ', entry);

        if (isAuthenticated) {
            // only track entry and open external page if the user is auth
            // else forward to login page
            window.open(entry.uri, '_blank');

            axios.post(`${ROOT_URL}/track`, entry)
                .then(response => {
                    console.log('track entry success');
                })
                .catch(response => {
                    console.log('track entry : an error occured');
                    dispatch(error(response.data.error))
                });
        }
        else {
            entry.userId = null;
            dispatch({ type: TRACK_ENTRY, payload: entry });
            browserHistory.push('/signin');
        }
    }
}

export function error(error) {
    return {
        type: ERROR,
        payload: error
    };
}