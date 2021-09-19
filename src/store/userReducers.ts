import { preloadedState } from './preloadedState/preloadedState';

const auth = (state = preloadedState, action) => {
  const { payload } = action;
  switch (action.type) {
    case 'SAVE_USER':
      return {
        ...state,
        userData: payload,
      };
    default:
      return state;
  }
};

export default auth;
