import constants from '../constants';
import ApiFetch from '../../../utils/fetch/ApiFetch';

/**
 * Add comment on episode
 *
 * **Dispatch**: `COMMENT_EPISODE`
 *
 * @alias module:Comments.doCommentEpisode
 * @category actions
 *
 * @example
 * BetaSeries.getAction('comments', 'doCommentEpisode')({
 *   episodeId: 438,
 *   text: 'Trop bien cette épisode !',
 * });
 *
 * @param {Object}  [obj]             Accept the folling:
 * @param {Number}  [obj.episodeId]   Episode ID
 * @param {String}  [obj.text]        Text of comment
 * @param {String}  [obj.in_reply_to] If this is a response, `inner_id` of the corresponding comment
 *
 * @returns {Promise}
 */
const doCommentEpisode = ({ episodeId, text, ...props }) =>
  dispatch =>
    ApiFetch.post('comments/comment', {
      ...props,
      id: episodeId,
      type: 'episode',
      text
    }).then(response =>
      dispatch({
        type: constants.COMMENT_EPISODE,
        payload: {
          ...props,
          episodeId,
          text,
          comment: response.comment
        }
      }));

export default doCommentEpisode;
