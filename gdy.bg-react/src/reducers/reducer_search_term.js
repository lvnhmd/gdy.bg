import { SRCH_CHANGED } from '../actions/types';

export default function (state = '', action) {
    switch (action.type) {
        case SRCH_CHANGED: {
            return action.payload;
        }
    }

    return state;
}  