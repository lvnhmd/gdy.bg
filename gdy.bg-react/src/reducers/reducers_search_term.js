import { SRCH_CHANGED } from '../actions/index';

export default function (state = '', action) {
    switch (action.type) {
        case SRCH_CHANGED: {
            return action.payload;
        }
        default: '';
    }

    return state;
}  