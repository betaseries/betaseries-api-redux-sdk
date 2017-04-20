import { createSelector } from 'reselect';
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
  [commons.getEventsTimeline, commons.getEventId],
  (events, eventId) =>
    !Object.prototype.hasOwnProperty.call(events, eventId)
      ? undefined
      : events[eventId]
);

export default getEvent;
