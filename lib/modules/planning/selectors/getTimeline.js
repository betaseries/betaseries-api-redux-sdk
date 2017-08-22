import { createSelector } from 'reselect';
import * as commons from './commons';

/**
 * Select timeline events by member from state
 *
 * @alias module:Planning.getTimeline
 * @category selectors
 *
 * @example
 * const mapStateToProps = (state, props) => ({
 *   episode: BetaSeries.getSelector('planning', 'getTimeline')(state);
 * });
 *
 * @param {Object}  [state]           Redux state
 *
 * @returns {Array}                   List of timeline events or `undefined`
 */
const getTimeline = createSelector(
  [commons.getTimeline, commons.getMemberId],
  (timeline, memberId) => {
    const events = !Object.prototype.hasOwnProperty.call(timeline, memberId)
      ? null
      : timeline[memberId] || [];

    if (!events) {
      return undefined;
    }

    return events;
  }
);

export default getTimeline;
