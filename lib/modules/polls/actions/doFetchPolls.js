import constants from '../constants';
import ApiFetch from '../../../utils/fetch/ApiFetch';

const defaultProps = {
  nbpp: 10,
  page: 1
};

/**
 * Retrieve all polls
 *
 * **Dispatch**: `FETCH_POLLS`
 *
 * @alias module:Polls.doFetchPolls
 * @category actions
 *
 * @example
 * BetaSeries.getAction('polls', 'doFetchPolls')({
 *   nbpp: 32,
 * });
 *
 * @param {Object}  [obj]             Accept the following:
 * @param {Number}  [obj.nbpp]        Limit number of polls (default `10`)
 * @param {Number}  [obj.page]        Page number (default `1`)
 *
 * @returns {Promise}
 */
const doFetchPolls = (props = {}) =>
  dispatch =>
    ApiFetch.get('polls/list', {
      ...defaultProps,
      ...props
    }).then(response =>
      dispatch({
        type: constants.FETCH_POLLS,
        payload: {
          ...props,
          polls: response.polls || []
        }
      }));

export default doFetchPolls;
