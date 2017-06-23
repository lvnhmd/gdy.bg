import { FETCH_COMPETITIONS } from '../actions/index';

export default function (state = { competitions: [] }, action) {
    switch (action.type) {
        case FETCH_COMPETITIONS:
            return { ...state, competitions: action.payload.data.Items };
    }
    return state;
}

