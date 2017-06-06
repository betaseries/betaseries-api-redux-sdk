import constants from '../constants';
import ApiFetch from '../../../utils/fetch/ApiFetch';
import BetaSeries from '../../../betaseries';

/**
 * Retrieve member shows
 *
 * **Dispatch**: `FETCH_MEMBER_SHOWS`
 *
 * @alias module:Shows.doFetchMemberShows
 * @category actions
 *
 * @example
 * BetaSeries.getAction('shows', 'doFetchMemberShows')({ memberId: 1, offset: 0, limit: 100, order: remaining_episodes });
 *
 * @param {Object}  [obj]           Accept the following:
 * @param {Array}   [obj.memberId]  Member ID (optional: connected user if not added)
 * @param {Number}  [obj.order]     Order of sort: alphabetical (default), progression, remaining_time, remaining_episodes
 * @param {Number}  [obj.offset]    Start number of show list (default `0`)
 * @param {Number}  [obj.limit]     Limit number of shows
 *
 * @returns {Promise}
 */
const doFetchMemberShows = (
  { memberId = BetaSeries.user.userId, ...props } = {}
) =>
  dispatch =>
    ApiFetch.get('shows/member', {
      id: memberId,
      ...props
    }).then(response =>
      dispatch({
        type: constants.FETCH_MEMBER_SHOWS,
        payload: {
          ...props,
          memberId,
          shows: response.shows
        }
      }));

export default doFetchMemberShows;
