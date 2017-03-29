import { createSelector } from 'reselect';
import * as commons from './commons';

/**
 * Select friends timeline events from state
 *
 * @alias module:Timelines.getFriendsTimeline
 * @category selectors
 *
 * @example
 * const mapStateToProps = (state, props) => ({
 *   events: BetaSeries.getSelector('timelines', 'getFriendsTimeline')(state),
 * });
 *
 * @param {Object}  [state]           Redux state
 *
 * @returns {Object}                  Friends timeline events element or `undefined`
 */
const getFriendsTimeline = createSelector(
  [commons.getFriendsTimeline],
  events => events
);

export default getFriendsTimeline;
