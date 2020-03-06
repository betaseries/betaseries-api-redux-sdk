import { createSelector } from 'reselect';
import * as commons from './commons';

/**
 * Select interests from state
 *
 * @alias module:Shows.getShowInterests
 * @category selectors
 *
 * @example
 * const mapStateToProps = (state, props) => ({
 *   show: BetaSeries.getSelector('shows', 'getShowInterests')(state, { showId: props.showId });
 * });
 *
 * @param {Object}  [state]           Redux state
 * @param {Object}  [obj]             Accept the following:
 * @param {Object}  [obj.showId]      Show ID
 *
 * @returns {Object}                  List of interests shows or `undefined`
 */
const getShowInterests = createSelector(
  [commons.getInterests, commons.getShowId],
  (shows, showId) =>
    !Object.prototype.hasOwnProperty.call(shows, showId)
      ? undefined
      : shows[showId]
);

export default getShowInterests;
