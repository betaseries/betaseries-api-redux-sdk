import _difference from 'lodash/difference';
import constants from '../constants';
import ApiFetch from '../../../utils/fetch/ApiFetch';

/**
 * Retrieve many badges
 *
 * **Dispatch**: `FETCH_MANY_BADGES`
 *
 * @alias module:Badges.doFetchManyBadges
 * @category actions
 *
 * @example
 * BetaSeries.getAction('badges', 'doFetchManyBadges')({ badgeIds: [1275, 481] });
 *
 * @param {Object}  [obj]             Accept the following:
 * @param {Array}   [obj.badgeIds]    List of badges ID
 *
 * @returns {Promise}
 */
const doFetchManyBadges = ({ badgeIds }) =>
  (dispatch, getState) => {
    const state = getState();

    // fetch badges only if does not exist on reducers
    const cleanBadgeIds = _difference(
      badgeIds,
      Object.keys(state.badges).map(badge => parseInt(badge, 10))
    );

    if (cleanBadgeIds.length === 0) {
      return Promise.resolve();
    }

    return ApiFetch.get('badges/badge', {
      id: cleanBadgeIds.join(',')
    }).then(response =>
      dispatch({
        type: constants.FETCH_MANY_BADGES,
        payload: {
          badgeIds: cleanBadgeIds,
          badges: cleanBadgeIds.length === 1
            ? [response.badge]
            : response.badges
        }
      }));
  };

export default doFetchManyBadges;
