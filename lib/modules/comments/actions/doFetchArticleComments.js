import constants from '../constants';
import ApiFetch from '../../../utils/fetch/ApiFetch';

const defaultProps = {
  order: 'asc',
  replies: 1
};

/**
 * Retrieve comment of the article
 *
 * **Dispatch**: `FETCH_ARTICLE_COMMENTS`
 *
 * @alias module:Comments.doFetchArticleComments
 * @category actions
 *
 * @example
 * BetaSeries.getAction('comments', 'doFetchArticleComments')({ articleId: 42315431 });
 *
 * @param {Object}  [obj]             Accept the following:
 * @param {Number}  [obj.articleId]   Article ID
 * @param {Number}  [obj.nbpp]        Number of comments per page
 * @param {Number}  [obj.since_id]    ID of last comment received (optional)
 * @param {String}  [obj.order]       Chronological order of return, `desc` or `asc` (default `asc`)
 * @param {Number}  [obj.replies]     Include comments reply (`1` or `0`, default `1`)
 *
 * @returns {Promise}
 */
const doFetchArticleComments = ({ articleId, ...props }) =>
  dispatch =>
    ApiFetch.get('comments/comments', {
      id: articleId,
      ...defaultProps,
      ...props,
      type: 'article'
    }).then(response =>
      dispatch({
        type: constants.FETCH_ARTICLE_COMMENTS,
        payload: {
          ...props,
          articleId,
          ...response
        }
      }));

export default doFetchArticleComments;
