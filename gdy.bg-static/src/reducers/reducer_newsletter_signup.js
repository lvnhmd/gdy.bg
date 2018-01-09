import { NEWSLETTER_SIGNUP } from '../actions/types';

export default function (state = false, action) {
    
    switch (action.type) {
        case NEWSLETTER_SIGNUP:{
            console.log('NEWSLETTER_SIGNUP action ', action);
            return action.payload;
        }
            

        // no default
    }
    return state;
}