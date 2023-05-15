import constants from '../constants';
import ApiFetch from '../../../utils/fetch/ApiFetch';

/**
 * Retrieve TV Time profiles data
 *
 * **Dispatch**: `GET_TVTIME_PROFILES`
 *
 * @alias module:Sync.doFetchTvTimeProfiles
 * @category actions
 *
 * @example
 * BetaSeries.getAction('sync', 'doFetchTvTimeProfiles')({ username: 'maxime' });
 *
 * @param {Object}  [obj]             Accept the following:
 * @param {String}  [obj.username]    TVTime username
 *
 * @returns {Promise}
 */
const doFetchTvTimeProfiles = ({ username }) =>
  dispatch =>
    ApiFetch.get('sync/tvtime_profiles', { username }).then(response =>
      dispatch({
        type: constants.GET_TVTIME_PROFILES,
        payload: response
      }));

export default doFetchTvTimeProfiles;
