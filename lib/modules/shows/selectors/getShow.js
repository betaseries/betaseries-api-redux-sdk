import { createSelector } from 'reselect';
import * as commons from './commons';

/**
 * Select show from state
 *
 * @alias module:Shows.getShow
 * @category selectors
 *
 * @example
 * const mapStateToProps = (state, props) => ({
 *   show: BetaSeries.getSelector('shows', 'getShow')(state, { showId: props.showId });
 * });
 *
 * @param {Object}  [state]           Redux state
 * @param {Object}  [obj]             Accept the folling:
 * @param {Object}  [obj.showId]      Show ID
 *
 * @returns {Object}                  Show element or `undefined`
 */
const getShow = createSelector(
  [commons.getShows, commons.getShowId],
  (shows, showId) =>
    !Object.prototype.hasOwnProperty.call(shows, showId)
      ? undefined
      : shows[showId]
);

export default getShow;
