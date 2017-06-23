import { FETCH_SOURCES } from '../actions/index';

export default function (state = { sources: [] }, action) {
    switch (action.type) {
        case FETCH_SOURCES:
            return { ...state, sources: action.payload.data.Items };
    }
    return state;
}