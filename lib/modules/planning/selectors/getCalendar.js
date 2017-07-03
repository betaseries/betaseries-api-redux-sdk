import { createSelector } from 'reselect';
import * as commons from './commons';

/**
 * Select calendar events by member from state
 *
 * @alias module:Planning.getCalendar
 * @category selectors
 *
 * @example
 * const mapStateToProps = (state, props) => ({
 *   episode: BetaSeries.getSelector('planning', 'getCalendar')(state, {
 *     start: '2017-07-01',
 *     end: '2017-07-31'
 *   });
 * });
 *
 * @param {Object}  [state]           Redux state
 * @param {Object}  [obj]             Accept the following:
 * @param {String}  [obj.start]       The start date of the calendar (format `Y-m-d`)
 * @param {String}  [obj.end]         The end date of the calendar (format `Y-m-d`)
 *
 * @returns {Array}                   List of calendar events or `undefined`
 */
const getEpisodesToSee = createSelector(
  [commons.getCalendar, commons.getMemberId, commons.getStart, commons.getEnd],
  (calendar, memberId, start, end) => {
    const events = !Object.prototype.hasOwnProperty.call(calendar, memberId)
      ? null
      : calendar[memberId] || [];

    if (!events) {
      return undefined;
    }

    return events.filter(event => event.date >= start && event.date <= end);
  }
);

export default getEpisodesToSee;
