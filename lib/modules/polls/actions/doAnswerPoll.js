import constants from '../constants';
import ApiFetch from '../../../utils/fetch/ApiFetch';

/**
 * Add answer on poll
 *
 * **Dispatch**: `ANSWER_POLL`
 *
 * @alias module:Polls.doAnswerPoll
 * @category actions
 *
 * @example
 * BetaSeries.getAction('polls', 'doAnswerPoll')({
 *   pollId: 120,
 *   answer: 1,
 * });
 *
 * @param {Object}  [obj]           Accept the folling:
 * @param {Number}  [obj.pollId]    Poll ID
 * @param {String}  [obj.answer]    Index of answer
 *
 * @returns {Promise}
 */
const doAnswerPoll = ({ pollId, answer }) =>
  dispatch =>
    ApiFetch.post('polls/answer', {
      id: pollId,
      answer
    }).then(response =>
      dispatch({
        type: constants.ANSWER_POLL,
        payload: {
          pollId,
          answer,
          poll: response.poll
        }
      }));

export default doAnswerPoll;
