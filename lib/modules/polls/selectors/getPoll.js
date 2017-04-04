import { createSelector } from 'reselect';
import * as commons from './commons';

/**
 * Select poll by ID from state
 *
 * @alias module:Polls.getPoll
 * @category selectors
 *
 * @example
 * const mapStateToProps = (state, props) => ({
 *   poll: BetaSeries.getSelector('polls', 'getPoll')(state, {
 *     pollId: props.pollId,
 *   });
 * });
 *
 * @param {Object}  [state]           Redux state
 * @param {Object}  [obj]             Accept the folling:
 * @param {Number}  [obj.pollId]      Poll ID
 *
 * @returns {Array}                   Poll element or `undefined`
 */
const getPoll = createSelector(
  [commons.getPolls, commons.getPollId],
  (polls, pollId) =>
    !Object.prototype.hasOwnProperty.call(polls, pollId)
      ? undefined
      : polls[pollId]
);

export default getPoll;
