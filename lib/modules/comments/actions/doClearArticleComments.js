import constants from '../constants';

/**
 * Clear comments for a specific article
 *
 * **Dispatch**: `CLEAR_ARTICLE_COMMENTS`
 *
 * @alias module:Comments.doClearArticleComments
 * @category actions
 *
 * @example
 * BetaSeries.getAction('comments', 'doClearArticleComments')({ articleId: 481 });
 *
 * @param {Object}  [obj]           Accept the following:
 * @param {Number}  [obj.articleId] Article ID
 *
 * @returns {Promise}
 */
const doClearArticleComments = ({ articleId }) =>
  dispatch =>
    dispatch({
      type: constants.CLEAR_ARTICLE_COMMENTS,
      payload: {
        articleId
      }
    });

export default doClearArticleComments;
