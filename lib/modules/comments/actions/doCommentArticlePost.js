import ApiFetch from '../../../utils/fetch/ApiFetch';
import constants from '../constants';

/**
 * Add comment on article
 *
 * **Dispatch**: `COMMENT_ARTICLE`
 *
 * @alias module:Comments.doCommentArticlePost
 * @category actions
 *
 * @example
 * BetaSeries.getAction('comments', 'doCommentArticlePost')({
 *   articleId: 438,
 *   text: 'Trop bien cet article !',
 * });
 *
 * @param {Object}  [obj]             Accept the following:
 * @param {Number}  [obj.articleId]   Article ID
 * @param {String}  [obj.text]        Text of comment
 * @param {String}  [obj.in_reply_to] If this is a response, `inner_id` of the corresponding comment
 *
 * @returns {Promise}
 */
const doCommentArticlePost = ({ articleId, text, ...props }) =>
  dispatch =>
    ApiFetch.post(
      'comments/comment',
      {
        ...props,
        id: articleId,
        type: 'article'
      },
      {
        text
      }
    ).then(response =>
      dispatch({
        type: constants.COMMENT_ARTICLE,
        payload: {
          ...props,
          articleId,
          text,
          comment: response.comment
        }
      }));

export default doCommentArticlePost;
