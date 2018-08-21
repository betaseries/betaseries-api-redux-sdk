import _filter from 'lodash/filter';
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
const getLastPoll = createSelector([commons.getPolls], polls => {
  const filteredPolls = _filter(polls, poll => poll.last === true);
  return filteredPolls.length < 1 ? undefined : filteredPolls[0];
});

export default getLastPoll;
