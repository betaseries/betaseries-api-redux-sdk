import { createSelector } from 'reselect';

/**
 * Retrieve shows from state
 */
const getShows = state => state.shows;

/**
 * Retrieve ID from parameters
 */
const getShowId = (state, { showId }) => showId;

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
 * @returns {Object}                  Show element or null
 */
const getShow = createSelector(
  [getShows, getShowId],
  (shows, showId) => (
    !Object.prototype.hasOwnProperty.call(shows, showId) ? null : (
      shows[showId]
    )
  ),
);

export default getShow;
