import { createSelector } from 'reselect';
import _reduce from 'lodash/reduce';
import * as commons from './commons';

/**
 * Select feed timeline events from state
 *
 * @alias module:Timelines.getFeedTimeline
 * @category selectors
 *
 * @example
 * const mapStateToProps = (state, props) => ({
 *   events: BetaSeries.getSelector('timelines', 'getFeedTimeline')(state),
 * });
 *
 * @param {Object}  [state]           Redux state
 *
 * @returns {Object}                  Feed timeline events element or `undefined`
 */
const getFeedTimeline = createSelector(
  [commons.getEventsTimeline, commons.getFeedTimeline],
  (events, feedEvents) => {
    const eventsFiltered = _reduce(
      feedEvents,
      (sum, eventId) =>
        Object.prototype.hasOwnProperty.call(events, eventId)
          ? [...sum, events[eventId]]
          : sum,
      []
    );

    return eventsFiltered.length === 0 ? undefined : eventsFiltered;
  }
);

export default getFeedTimeline;
