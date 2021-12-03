import { createSelector } from 'reselect';
import * as commons from './commons';

/**
 * Select reco reference show from state
 *
 * @alias module:Home.getHomeRecoReferenceShow
 * @category selectors
 *
 * @example
 * const mapStateToProps = (state, props) => ({
 *   home: BetaSeries.getSelector('home', 'getHomeRecoReferenceShow')(state);
 * });
 *
 * @param {Object}  [state]           Redux state
 *
 * @returns {Object}                  Recommendation reference show or `null`
 */
const getHomeRecoReferenceShow = createSelector(
  [commons.getReco],
  reco => reco.show || null
);

export default getHomeRecoReferenceShow;
