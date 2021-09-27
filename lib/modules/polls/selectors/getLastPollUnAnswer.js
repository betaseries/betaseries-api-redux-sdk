import _find from 'lodash/find';
import { createSelector } from 'reselect';
import * as commons from './commons';

/**
 * Select last poll from state
 *
 * @alias module:Polls.getLastPollUnAnswer
 * @category selectors
 *
 * @example
 * const mapStateToProps = (state, props) => ({
 *   poll: BetaSeries.getSelector('polls', 'getLastPollUnAnswer')(state);
 * });
 *
 * @param {Object}  [state]           Redux state
 *
 * @returns {Array}                   Poll element or `undefined`
 */

// On recherche le sondage sans réponse, sinon on retourne un sondage avec l'argument 'last'
const getLastPollUnAnswer = createSelector([commons.getPolls], polls => {
  const filteredPolls = _find(polls, poll => poll.user_answer === null);
  return filteredPolls || _find(polls, poll => poll.last === true);
});

export default getLastPollUnAnswer;
