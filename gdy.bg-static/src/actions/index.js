// Action creator
import axios from 'axios';
import { browserHistory } from 'react-router';
import _ from 'lodash';

import {
    SRCH_CHANGED,
    FETCH_COMPETITIONS,
    FETCH_SOURCES,
    AUTH_USER,
    AUTH_ERROR,
    DEAUTH_USER,
    TRACK_ENTRY,
    ERROR,
    APPLY_FILTERS
} from './types';

const ROOT_URL = process.env.REACT_APP_API_URL;

export function toggleSource(source) {

    console.log('toggleSource ', source);

    source.active ? source.active = false : source.active = true;

    var filters = localStorage.getItem('filters');

    if (filters) {

        filters = JSON.parse(filters);

        var index = _.indexOf(filters, _.find(filters, function (f) {
            return f.name === source.name;
        }));

        filters.splice(index, 1, source);

        localStorage.setItem('filters', JSON.stringify(filters));

        return {
            type: APPLY_FILTERS,
            payload: filters
        };
    }
    else
        return {
            type: APPLY_FILTERS,
            payload: []
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
    };

}

export function fetchSources() {

    return function (dispatch) {

        const url = `${ROOT_URL}/sources`;
        axios.get(url)
            .then(response => {

                var fetchedSources = response.data;
                var sources = [];
                var filters = localStorage.getItem('filters');

                if (filters && filters.length > 0) {
                    sources = JSON.parse(filters);
                }

                fetchedSources.forEach(function (fetchedSource) {

                    fetchedSource.active = false;
                    // only push source if not there already
                    if ((sources.filter(s => (s.name === fetchedSource.name))).length === 0) {
                        sources.push(fetchedSource);
                    }
                });

                localStorage.setItem('filters', JSON.stringify(sources));

                dispatch({ type: FETCH_SOURCES, payload: { 'data': sources } });

            })
            .catch(response => {
                console.log('fetchSources : an error occured');
                dispatch(error(response.data.error))
            });
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
                    entry.userName = user.name;

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
            entry.userName = null;
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