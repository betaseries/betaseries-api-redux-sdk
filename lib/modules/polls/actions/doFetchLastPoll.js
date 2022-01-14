import ApiFetch from '../../../utils/fetch/ApiFetch';
import constants from '../constants';

/**
 * Retrieve last poll
 *
 * **Dispatch**: `FETCH_LAST_POLL`
 *
 * @alias module:Polls.doFetchLastPoll
 * @category actions
 *
 * @example
 * BetaSeries.getAction('polls', 'doFetchLastPoll')();
 *
 * @returns {Promise}
 */
const doFetchLastPoll = ({ ...props }) =>
  dispatch =>
    ApiFetch.get('polls/last', { ...props }).then(response =>
      dispatch({
        type: constants.FETCH_LAST_POLL,
        payload: {
          poll: {
            ...response.poll,
            last: true
          }
        }
      }));

export default doFetchLastPoll;
