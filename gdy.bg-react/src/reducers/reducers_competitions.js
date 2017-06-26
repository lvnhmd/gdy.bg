import { FETCH_COMPETITIONS } from '../actions/index';

export default function (state = [], action) {
    switch (action.type) {
        case FETCH_COMPETITIONS:
            return action.payload.data.Items;

    }
    return state;
}

