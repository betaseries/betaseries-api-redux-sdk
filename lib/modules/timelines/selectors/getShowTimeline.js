import { createSelector } from 'reselect';
import _reduce from 'lodash/reduce';
import * as commons from './commons';

/**
 * Select show timeline events from state
 *
 * @alias module:Timelines.getShowTimeline
 * @category selectors
 *
 * @example
 * const mapStateToProps = (state, props) => ({
 *   events: BetaSeries.getSelector('timelines', 'getShowTimeline')(state, {
 *     showId: 4,
 *   }),
 * });
 *
 * @param {Object}  [state]           Redux state
 * @param {Object}  [obj]             Accept the folling:
 * @param {Number}  [obj.showId]      Show ID
 *
 * @returns {Object}                  Show timeline events element or `undefined`
 */
const getShowTimeline = createSelector(
  [commons.getEventsTimeline, commons.getShowsTimeline, commons.getShowId],
  (events, showsEvents, showId) => {
    const eventIds = !Object.prototype.hasOwnProperty.call(showsEvents, showId)
      ? null
      : showsEvents[showId];

    if (!eventIds) {
      return undefined;
    }

    return _reduce(eventIds, (sum, eventId) => [...sum, events[eventId]], []);
  }
);

export default getShowTimeline;
