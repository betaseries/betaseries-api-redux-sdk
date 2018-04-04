import { createSelector } from 'reselect';
import * as commons from './commons';

/**
 * Select similar shows from state
 *
 * @alias module:Shows.getSimilarShows
 * @category selectors
 *
 * @example
 * const mapStateToProps = (state, props) => ({
 *   show: BetaSeries.getSelector('shows', 'getSimilarShows')(state, { showId: props.showId });
 * });
 *
 * @param {Object}  [state]           Redux state
 * @param {Object}  [obj]             Accept the following:
 * @param {Object}  [obj.showId]      Show ID
 *
 * @returns {Array}                  Shows list or `undefined`
 */
const getSimilarShows = createSelector(
  [commons.getSimilarShows, commons.getShowId],
  (similarShows, showId) =>
    !Object.prototype.hasOwnProperty.call(similarShows, showId)
      ? undefined
      : similarShows[showId]
);

export default getSimilarShows;
