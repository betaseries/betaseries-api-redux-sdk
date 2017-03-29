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
 * @alias module:Shows.doFetchEpisodesListsList
 * @category actions
 *
 * @example
 * BetaSeries.getAction('shows', 'doFetchEpisodesList')();
 *
 * @param {Object}  [obj]                 Accept the folling:
 * @param {String}  [obj.subtitles]       Displays episodes with some subtitles available
 * @param {Number}  [obj.limit]           Limit number of episodes per shows (default `1`)
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
          shows: response.shows
        }
      }));

export default doFetchEpisodesList;
