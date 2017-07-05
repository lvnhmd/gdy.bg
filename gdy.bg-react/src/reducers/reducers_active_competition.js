import { COMP_CLICKED } from '../actions/index';

export default function (state = null, action) {
    switch (action.type) {
        case COMP_CLICKED:
            return action.payload;
    }
    return state;
}