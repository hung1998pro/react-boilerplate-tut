/*
 *
 * HomePage actions
 *
 */

import * as constants from './constants';

export function getCats(payload = {}) {
  return {
    type: constants.GET_CATS,
    payload,
  };
}

export function getCatsSuccess(payload) {
  return {
    type: constants.GET_CATS_SUCCESS,
    payload,
  };
}

export function getCatsFailed(payload) {
  return {
    type: constants.GET_CATS_FAILED,
    payload,
  };
}
