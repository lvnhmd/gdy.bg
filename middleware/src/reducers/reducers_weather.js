import FETCH_WEATHER from '../actions/index'

export default function (state = [], action) {
    switch (action.type) {
        case FETCH_WEATHER:
            // why don't I want to do push - lecture 60
            // return state.push([ action.payload.data ]);
            
            // return state.concat([ action.payload.data ]);
            return [action.payload.data,...state];
    }
    return state;
}