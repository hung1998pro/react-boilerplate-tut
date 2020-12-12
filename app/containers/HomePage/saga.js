import { takeLatest, call, put } from 'redux-saga/effects';
import request from 'utils/request';

import * as actions from './actions';
import * as constants from './constants';
import { CATS } from 'urls';

function* onGetCats() {
  try {
    const res = yield call(request, CATS, {});
    yield put(actions.getCatsSuccess(res));
  } catch (err) {
    yield put(actions.getCatsFailed(err));
  }
}

export default function* homePageSaga() {
  yield takeLatest(constants.GET_CATS, onGetCats);
}
