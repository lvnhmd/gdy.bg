import { FETCH_SOURCES } from '../actions/types';

export default function (state = [], action) {
    switch (action.type) {
        case FETCH_SOURCES:
            return action.payload.data;
    }
    return state;
}