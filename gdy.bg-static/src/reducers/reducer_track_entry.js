import { TRACK_ENTRY } from '../actions/types';

export default function (state = null, action) {
    switch (action.type) {
        case TRACK_ENTRY:
            return action.payload;
        // no default
    }
    return state;
}