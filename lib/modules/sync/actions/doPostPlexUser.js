import constants from '../constants';
import ApiFetch from '../../../utils/fetch/ApiFetch';

/**
 * Post Plex user
 *
 * **Dispatch**: `POST_PLEX_USER`
 *
 * @alias module:Sync.doPostPlexUser
 * @category actions
 *
 * @example
 * BetaSeries.getAction('sync', 'doPostPlexUser')({ username: 'maxime' });
 *
 * @param {Object}  [obj]             Accept the following:
 * @param {String}  [obj.username]    Plex username
 *
 * @returns {Promise}
 */
const doPostPlexUser = ({ username }) =>
  dispatch =>
    ApiFetch.post('sync/plex_user', {}, { username }).then(response =>
      dispatch({
        type: constants.POST_PLEX_USER,
        payload: response
      }));

export default doPostPlexUser;
