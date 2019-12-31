import constants from '../constants';
import ApiFetch from '../../../utils/fetch/ApiFetch';

/**
 * Retrieve authenticated user year infos
 *
 * **Dispatch**: `FETCH_MEMBER_YEAR_STATS`
 *
 * @alias module:Members.doFetchMemberYearStats
 * @category actions
 *
 * @example
 * BetaSeries.getAction('members', 'doFetchMemberYearStats')();
 *
 * @param {Object}  [obj]          Accept the following:
 * @param {Bool}    [obj.memberId] Member ID
 * @param {Number}  [obj.year]     Year
 *
 * @returns {Promise}
 */
const doFetchMemberYearStats = ({ memberId, ...props }) =>
  dispatch =>
    ApiFetch.get('members/year', {
      id: memberId,
      ...props
    }).then(response =>
      dispatch({
        type: constants.FETCH_MEMBER_YEAR_STATS,
        payload: {
          ...props,
          memberId,
          stats: response.stats
        }
      }));

export default doFetchMemberYearStats;
