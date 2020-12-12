/*
 *
 * HomePage reducer
 *
 */
import produce from 'immer';
import * as constants from './constants';

export const initialState = {
  data: [],
  errors: {},
  isLoading: false,
};

/* eslint-disable default-case, no-param-reassign */
const homePageReducer = (state = initialState, action) =>
  produce(state, newState => {
    switch (action.type) {
      case constants.GET_CATS:
        newState.errors = {};
        newState.isLoading = true;
        break;
      case constants.GET_CATS_SUCCESS:
        newState.isLoading = false;
        newState.data = action.payload;
        break;
      case constants.GET_CATS_FAILED:
        newState.isLoading = false;
        newState.errors = action.payload;
    }
  });

export default homePageReducer;
