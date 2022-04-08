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
 * @param {Object}  [obj]               Accept the following:
 * @param {Array}   [obj.memberId]      Member ID (optional: connected user if not added)
 * @param {String}  [obj.order]         Order of sort: last_seen (default), last_added, alphabetical, progression, remaining_time, remaining_episodes
 * @param {String}  [obj.status]        Status: current, active, not_started, completed, stopped, archived
 * @param {String}  [obj.tags]          1 ou plusieurs tags séparés par une virgule
 * @param {String}  [obj.excluded_tags] 1 ou plusieurs tags exclus, séparés par une virgule
 * @param {Number}  [obj.offset]        Start number of show list (default `0`)
 * @param {Number}  [obj.limit]         Limit number of shows
 * @param {Number}  [obj.summary]       Summary: 1 or 0
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
          total: response.total,
          shows: response.shows
        }
      }));

export default doFetchMemberShows;
