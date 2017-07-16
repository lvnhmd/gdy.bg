import { FETCH_SOURCES } from '../actions/index';

export default function (state = [], action) {
    switch (action.type) {
        case FETCH_SOURCES:
            return action.payload.data;
    }
    return state;
}