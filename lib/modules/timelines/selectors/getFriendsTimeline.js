import { createSelector } from 'reselect';
import _reduce from 'lodash/reduce';
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
  [commons.getEventsTimeline, commons.getFriendsTimeline],
  (events, friendEvents) => {
    const eventsFiltered = _reduce(
      friendEvents,
      (sum, eventId) =>
        Object.prototype.hasOwnProperty.call(events, eventId)
          ? [...sum, events[eventId]]
          : sum,
      []
    );

    return eventsFiltered.length === 0 ? undefined : eventsFiltered;
  }
);

export default getFriendsTimeline;
