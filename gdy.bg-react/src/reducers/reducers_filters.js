import _ from 'lodash';

export default function (state = [], action) {
    switch (action.type) {
        case 'SRC_SELECTED': {
            //add source to filters only if its not already there
            if(!_.includes(state, action.payload))
                return [...state, action.payload];
            //else remove filter , toggle source
            return state.filter(src => src.name !== action.payload.name);
        }
        default: state;
    }

    return state;
}  