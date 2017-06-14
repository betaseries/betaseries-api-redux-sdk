import { createSelector } from 'reselect';
import _reduce from 'lodash/reduce';
import * as commons from './commons';

/**
 * Select member timeline events from state
 *
 * @alias module:Timelines.getMemberTimeline
 * @category selectors
 *
 * @example
 * const mapStateToProps = (state, props) => ({
 *   events: BetaSeries.getSelector('timelines', 'getMemberTimeline')(state, {
 *     memberId: 4,
 *   }),
 * });
 *
 * @param {Object}  [state]           Redux state
 * @param {Object}  [obj]             Accept the folling:
 * @param {Number}  [obj.memberId]    Member ID (optional)
 *
 * @returns {Object}                  Friends timeline events element or `undefined`
 */
const getMemberTimeline = createSelector(
  [commons.getEventsTimeline, commons.getMembersTimeline, commons.getMemberId],
  (events, membersEvents, memberId) => {
    const eventIds = !Object.prototype.hasOwnProperty.call(
      membersEvents,
      memberId
    )
      ? null
      : membersEvents[memberId];

    if (!eventIds) {
      return undefined;
    }

    return _reduce(eventIds, (sum, eventId) => [...sum, events[eventId]], []);
  }
);

export default getMemberTimeline;
