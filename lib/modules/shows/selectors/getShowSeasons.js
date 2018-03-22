import { createSelector } from 'reselect';
import * as commons from './commons';

/**
 * Select seasons by show from state
 *
 * @alias module:Shows.getShowSeasons
 * @category selectors
 *
 * @example
 * const mapStateToProps = (state, props) => ({
 *   episode: BetaSeries.getSelector('shows', 'getShowSeasons')(state, {
 *     showId: props.showId,
 *   });
 * });
 *
 * @param {Object}  [state]           Redux state
 * @param {Object}  [obj]             Accept the following:
 * @param {Object}  [obj.showId]      Show ID
 *
 * @returns {Array}                   List of seasons
 */
const getShowSeasons = createSelector(
  [commons.getSeasons, commons.getShowId],
  (seasons, showId) =>
    !Object.prototype.hasOwnProperty.call(seasons, showId)
      ? undefined
      : seasons[showId].seasons
);

export default getShowSeasons;
