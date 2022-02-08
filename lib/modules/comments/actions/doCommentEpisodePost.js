import ApiFetch from '../../../utils/fetch/ApiFetch';
import constants from '../constants';

/**
 * Add comment on episode
 *
 * **Dispatch**: `COMMENT_EPISODE`
 *
 * @alias module:Comments.doCommentEpisodePost
 * @category actions
 *
 * @example
 * BetaSeries.getAction('comments', 'doCommentEpisodePost')({
 *   episodeId: 438,
 *   text: 'Trop bien cette épisode !',
 * });
 *
 * @param {Object}  [obj]             Accept the following:
 * @param {Number}  [obj.episodeId]   Episode ID
 * @param {String}  [obj.text]        Text of comment
 * @param {String}  [obj.in_reply_to] If this is a response, `inner_id` of the corresponding comment
 *
 * @returns {Promise}
 */
const doCommentEpisodePost = ({ episodeId, text, ...props }) =>
  dispatch =>
    ApiFetch.post(
      'comments/comment',
      {
        ...props,
        id: episodeId,
        type: 'episode'
      },
      {
        text
      }
    ).then(response =>
      dispatch({
        type: constants.COMMENT_EPISODE,
        payload: {
          ...props,
          episodeId,
          text,
          comment: response.comment
        }
      }));

export default doCommentEpisodePost;
