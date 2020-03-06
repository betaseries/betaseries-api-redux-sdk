import { createSelector } from 'reselect';
import * as commons from './commons';

/**
 * Select interests genres from state
 *
 * @alias module:Shows.getShowInterestGenres
 * @category selectors
 *
 * @example
 * const mapStateToProps = (state, props) => ({
 *   show: BetaSeries.getSelector('shows', 'getShowInterestGenres')(state, { showId: props.showId });
 * });
 *
 * @param {Object}  [state]           Redux state
 * @param {Object}  [obj]             Accept the following:
 * @param {Object}  [obj.showId]      Show ID
 *
 * @returns {Object}                  List of interest genres or `undefined`
 */
const getShowInterestGenres = createSelector(
  [commons.getInterestGenres, commons.getShowId],
  (genres, showId) =>
    !Object.prototype.hasOwnProperty.call(genres, showId)
      ? undefined
      : genres[showId]
);

export default getShowInterestGenres;
