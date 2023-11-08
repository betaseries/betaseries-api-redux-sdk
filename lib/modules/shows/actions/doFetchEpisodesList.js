import constants from '../constants';
import ApiFetch from '../../../utils/fetch/ApiFetch';
import BetaSeries from '../../../betaseries';

const defaultProps = {
  limit: 1,
  specials: false,
  released: 1
};

/**
 * Retrieve episodes list
 *
 * **Dispatch**: `FETCH_EPISODES_LIST`
 *
 * @alias module:Shows.doFetchEpisodesList
 * @category actions
 *
 * @example
 * BetaSeries.getAction('shows', 'doFetchEpisodesList')();
 *
 * @param {Object}  [obj]                 Accept the following:
 * @param {String}  [obj.subtitles]       Displays episodes with some subtitles available
 * @param {Number}  [obj.limit]           Limit number of episodes per shows (default `1`)
 * @param {Number}  [obj.showsLimit]      Limit number of shows (default `50`)
 * @param {Number}  [obj.page]            Pagination per show (default `1`)
 * @param {Number}  [obj.showId]          Show ID (optional)
 * @param {Number}  [obj.userId]          User ID (optional)
 * @param {Number}  [obj.released]        Returns only released episodes (default `1`)
 *   (`0` = both, `1` = released episodes, `2` = not released episodes
 * @param {Bool}    [obj.specials]        Includes special episodes (default `false`)
 *
 * @returns {Promise}
 */
const doFetchEpisodesList = ({ ...props }) =>
  dispatch =>
    ApiFetch.get('episodes/list', {
      ...defaultProps,
      ...props
    }).then(response =>
      dispatch({
        type: constants.FETCH_EPISODES_LIST,
        payload: {
          ...props,
          userId: props.userId ? props.userId : BetaSeries.user.userId,
          total: response.total,
          totalEpisodes: response.totalEpisodes,
          totalMissingShows: response.totalMissingShows,
          totalMissingEpisodes: response.totalMissingEpisodes,
          shows: response.shows
        }
      }));

export default doFetchEpisodesList;
