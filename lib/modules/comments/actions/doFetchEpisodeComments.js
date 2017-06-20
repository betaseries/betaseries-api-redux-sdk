import constants from '../constants';
import ApiFetch from '../../../utils/fetch/ApiFetch';

const defaultProps = {
  order: 'asc',
  replies: 1
};

/**
 * Retrieve comment of the episode
 *
 * **Dispatch**: `FETCH_EPISODE_COMMENTS`
 *
 * @alias module:Comments.doFetchEpisodeComments
 * @category actions
 *
 * @example
 * BetaSeries.getAction('comments', 'doFetchEpisodeComments')({ episodeId: 438 });
 *
 * @param {Object}  [obj]             Accept the following:
 * @param {Number}  [obj.episodeId]   Episode ID
 * @param {Number}  [obj.nbpp]        Number of comments per page
 * @param {Number}  [obj.since_id]    ID of last comment received (optional)
 * @param {String}  [obj.order]       Chronological order of return, `desc` or `asc` (default `asc`)
 * @param {Number}  [obj.replies]     Include comments reply (`1` or `0`, default `1`)
 *
 * @returns {Promise}
 */
const doFetchEpisodeComments = ({ episodeId, ...props }) =>
  dispatch =>
    ApiFetch.get('comments/comments', {
      id: episodeId,
      ...defaultProps,
      ...props,
      type: 'episode'
    }).then(response =>
      dispatch({
        type: constants.FETCH_EPISODE_COMMENTS,
        payload: {
          ...props,
          episodeId,
          comments: response.comments
        }
      }));

export default doFetchEpisodeComments;
