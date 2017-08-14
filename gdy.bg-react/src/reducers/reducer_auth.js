import {
  AUTH_USER,
  DEAUTH_USER,
  // AUTH_ERROR,
  // FETCH_MESSAGE
} from '../actions/types';

export default function (state = {}, action) {

  switch (action.type) {
    case AUTH_USER: {
      var user = JSON.parse(action.payload);
      return {
        ...state,
        error: '',
        isAuthenticated: true,
        id: user._provider + '_' + user._profile.id,
        name: user._profile.name
      };
    }
    case DEAUTH_USER:
      return { ...state, isAuthenticated: false };
    // case AUTH_ERROR:
    //   return { ...state, error: action.payload };
    // case FETCH_MESSAGE:
    //   return { ...state, message: action.payload };
  }
  return state;
}
