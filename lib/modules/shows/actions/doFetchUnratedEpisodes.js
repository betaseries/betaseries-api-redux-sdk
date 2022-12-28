import constants from '../constants';
import ApiFetch from '../../../utils/fetch/ApiFetch';
import BetaSeries from '../../../betaseries';

const defaultProps = {
  page: 1,
  date: 'yesterday'
};

/**
 * Retrieve unrated episodes
 *
 * **Dispatch**: `FETCH_UNRATED_EPISODES`
 *
 * @alias module:Shows.doFetchUnratedEpisodes
 * @category actions
 *
 * @example
 * BetaSeries.getAction('shows', 'doFetchUnratedEpisodes')();
 *
 * @param {Object}  [obj]                 Accept the following:
 * @param {String}  [obj.date]            Date to retrieve unrated episodes (default: yesterday, all)
 * @param {Number}  [obj.page]            Pagination
 *
 * @returns {Promise}
 */
const doFetchUnratedEpisodes = ({ ...props }) =>
  dispatch =>
    ApiFetch.get('episodes/unrated', {
      ...defaultProps,
      ...props
    }).then(response =>
      dispatch({
        type: constants.FETCH_UNRATED_EPISODES,
        payload: {
          ...props,
          userId: BetaSeries.user.userId,
          episodes: response.episodes,
          total: response.total
        }
      }));

export default doFetchUnratedEpisodes;
