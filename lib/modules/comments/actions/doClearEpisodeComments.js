import constants from '../constants';

/**
 * Clear comments for a specific episode
 *
 * **Dispatch**: `CLEAR_EPISODE_COMMENTS`
 *
 * @alias module:Comments.doClearEpisodeComments
 * @category actions
 *
 * @example
 * BetaSeries.getAction('comments', 'doClearEpisodeComments')({ episodeId: 481 });
 *
 * @param {Object}  [obj]             Accept the following:
 * @param {Number}  [obj.episodeId]      Episode ID
 *
 * @returns {Promise}
 */
const doClearEpisodeComments = ({ episodeId }) =>
  dispatch =>
    dispatch({
      type: constants.CLEAR_EPISODE_COMMENTS,
      payload: {
        episodeId
      }
    });

export default doClearEpisodeComments;
