import constants from '../constants';
import ApiFetch from '../../../utils/fetch/ApiFetch';

/**
 * Retrieve user stats
 *
 * **Dispatch**: `FETCH_MEMBER_STATS`
 *
 * @alias module:Members.doFetchMemberStats
 * @category actions
 *
 * @example
 * BetaSeries.getAction('members', 'doFetchMemberStats')({ userId: 90 });
 *
 * @param {Object}  [obj]          Accept the following:
 * @param {Bool}    [obj.userId]   user ID
 *
 * @returns {Promise}
 */
const doFetchMemberStats = ({ userId, ...props }) =>
  dispatch =>
    ApiFetch.get('members/stats', {
      id: userId,
      ...props
    }).then(response => {
      const memberStats = response || {};
      if (memberStats.locale) {
        delete memberStats.locale;
      }
      if (memberStats.errors) {
        delete memberStats.errors;
      }

      return dispatch({
        type: constants.FETCH_MEMBER_STATS,
        payload: {
          ...props,
          userId,
          memberStats
        }
      });
    });

export default doFetchMemberStats;
