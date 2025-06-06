import { types } from '../types/types';

// const initialState = {
//   logged: false,
// };

export const authReducer = (state = {}, action) => {
  switch (action.type) {
    case types.login:
      return {
        ...state,
        logged: true,
        name: 'Lennin Ibarra',
      };

    case types.logout:
      return {
        ...state,
        logged: false,
        name: null,
      };

    default:
      return state;
  }
};
