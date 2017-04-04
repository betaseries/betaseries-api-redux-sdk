import constants from '../constants';
import ApiFetch from '../../../utils/fetch/ApiFetch';

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
const doFetchLastPoll = () =>
  dispatch =>
    ApiFetch.get('polls/last').then(response =>
      dispatch({
        type: constants.FETCH_LAST_POLL,
        payload: {
          poll: response.poll
        }
      }));

export default doFetchLastPoll;
