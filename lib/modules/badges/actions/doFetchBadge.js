import constants from '../constants';
import ApiFetch from '../../../utils/fetch/ApiFetch';

/**
 * Retrieve badge
 *
 * **Dispatch**: `FETCH_BADGE`
 *
 * @alias module:Badges.doFetchBadge
 * @category actions
 *
 * @example
 * BetaSeries.getAction('shows', 'doFetchBadge')({ badgeId: 123 });
 *
 * @param {Object}  [obj]             Accept the following:
 * @param {Number}  [obj.badgeId]   Badge ID
 *
 * @returns {Promise}
 */
const doFetchBadge = ({ badgeId, ...props }) =>
  dispatch =>
    ApiFetch.get('badges/badge', { id: badgeId, ...props }).then(response =>
      dispatch({
        type: constants.FETCH_BADGE,
        payload: {
          badgeId,
          ...props,
          badge: response.badge
        }
      }));

export default doFetchBadge;
