import constants from '../constants';
import ApiFetch from '../../../utils/fetch/ApiFetch';

/**
 * Retrieve specific poll
 *
 * **Dispatch**: `FETCH_POLL`
 *
 * @alias module:Polls.doFetchPoll
 * @category actions
 *
 * @example
 * BetaSeries.getAction('polls', 'doFetchPoll')({
 *   pollId: 120,
  * });
 *
 * @param {Object}  [obj]           Accept the following:
 * @param {Number}  [obj.pollId]    Poll ID
 *
 * @returns {Promise}
 */
const doFetchPoll = ({ pollId }) =>
  dispatch =>
    ApiFetch.get('polls/poll', {
      id: pollId
    }).then(response =>
      dispatch({
        type: constants.FETCH_POLL,
        payload: {
          pollId,
          poll: response.poll
        }
      }));

export default doFetchPoll;
