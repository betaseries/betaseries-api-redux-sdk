import constants from '../constants';
import ApiFetch from '../../../utils/fetch/ApiFetch';

/**
 * Retrieve Trakt profile data
 *
 * **Dispatch**: `GET_TRAKT_PROFILE`
 *
 * @alias module:Sync.doFetchTraktProfile
 * @category actions
 *
 * @example
 * BetaSeries.getAction('sync', 'doFetchTraktProfile')({ username: 'maxime' });
 *
 * @param {Object}  [obj]             Accept the following:
 * @param {String}  [obj.username]    Trakt username
 *
 * @returns {Promise}
 */
const doFetchTraktProfile = ({ username }) =>
  dispatch =>
    ApiFetch.post('sync/trakt_profile', {}, { username }).then(response =>
      dispatch({
        type: constants.GET_TRAKT_PROFILE,
        payload: response
      }));

export default doFetchTraktProfile;
