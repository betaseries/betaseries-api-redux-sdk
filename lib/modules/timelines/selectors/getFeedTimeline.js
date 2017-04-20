import { createSelector } from 'reselect';
import _filter from 'lodash/filter';
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
    const eventsFiltered = _filter(
      events,
      event => feedEvents.indexOf(event.id) !== -1
    );

    return eventsFiltered.length === 0 ? undefined : eventsFiltered;
  }
);

export default getFeedTimeline;
