import constants from '../constants';
import ApiFetch from '../../../utils/fetch/ApiFetch';

/**
 * Post Netflix credentials data
 *
 * **Dispatch**: `POST_NETFLIX`
 *
 * @alias module:Sync.doPostNetflixCredentials
 * @category actions
 *
 * @example
 * BetaSeries.getAction('sync', 'doPostNetflixCredentials')({ email: 'email', password: 'password' });
 *
 * @param {Object}  [obj]             Accept the following:
 * @param {String}  [obj.email]       netflix email address
 * @param {String}  [obj.password]    netflix password
 *
 * @returns {Promise}
 */
const doPostNetflixCredentials = ({ email, password }) =>
  dispatch =>
    ApiFetch.post(
      'sync/netflix_profiles',
      {},
      { email, password }
    ).then(response =>
      dispatch({
        type: constants.POST_NETFLIX,
        payload: response
      }));

export default doPostNetflixCredentials;
