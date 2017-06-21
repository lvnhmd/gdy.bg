import { FETCH_WEATHER } from '../actions/index';

export default function (state = [], action) {
    console.log('action.type ', action.type);
    switch (action.type) {

        case FETCH_WEATHER: {
            console.log('case FETCH_WEATHER ');
            // why don't I want to do push - lecture 60
            // return state.push([ action.payload.data ]);

            // return state.concat([ action.payload.data ]);
            console.log('action.payload.data ', action.payload.data);
            return [action.payload.data, ...state];
        }
        default: {
            console.log('defaulting to ', state);
            return state;
        }
    }
    // return state;
}