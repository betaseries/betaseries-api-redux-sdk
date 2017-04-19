import { createSelector } from 'reselect';
import _findIndex from 'lodash/findIndex';
import * as commons from './commons';

/**
 * Select timeline event from state
 *
 * @alias module:Timelines.getEvent
 * @category selectors
 *
 * @example
 * const mapStateToProps = (state, props) => ({
 *   event: BetaSeries.getSelector('timelines', 'getEvent')(state, {
 *     eventId: 2674,
 *   }),
 * });
 *
 * @param {Object}  [state]           Redux state
 *
 * @returns {Object}                  Event element or `undefined`
 */
const getEvent = createSelector(
  [commons.getFriendsTimeline, commons.getEventId],
  (events, eventId) => {
    const eventIndex = _findIndex(events, { id: eventId });

    return eventIndex === -1 ? undefined : events[eventIndex];
  }
);

export default getEvent;
