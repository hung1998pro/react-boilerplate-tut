import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the homePage state domain
 */

const selectHomePageDomain = state => state.homePage || initialState;

const makeSelectHomePage = () =>
  createSelector(
    selectHomePageDomain,
    substate => substate,
  );

export const makeSelectData = () =>
  createSelector(
    selectHomePageDomain,
    substate => substate.data,
  );

export default makeSelectHomePage;
export { selectHomePageDomain };
