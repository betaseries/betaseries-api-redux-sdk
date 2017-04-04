import { createSelector } from 'reselect';
import * as commons from './commons';

/**
 * Select last poll from state
 *
 * @alias module:Polls.getLastPoll
 * @category selectors
 *
 * @example
 * const mapStateToProps = (state, props) => ({
 *   poll: BetaSeries.getSelector('polls', 'getLastPoll')(state);
 * });
 *
 * @param {Object}  [state]           Redux state
 *
 * @returns {Array}                   Poll element or `undefined`
 */
const getPoll = createSelector([commons.getPolls], polls => {
  const lastPollIndex = Math.max(...Object.keys(polls));

  return !Object.prototype.hasOwnProperty.call(polls, lastPollIndex)
    ? undefined
    : polls[lastPollIndex];
});

export default getPoll;
