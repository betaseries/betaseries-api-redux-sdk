import { createSelector } from 'reselect';
import _filter from 'lodash/filter';
import * as commons from './commons';

/**
 * Select article comments from state
 *
 * @alias module:Comments.getArticleComments
 * @category selectors
 *
 * @example
 * const mapStateToProps = (state, props) => ({
 *   show: BetaSeries.getSelector('comments', 'getArticleComments')(state, {
 *     articleId: props.articleId
 *   });
 * });
 *
 * @param {Object}  [state]           Redux state
 * @param {Object}  [obj]             Accept the following:
 * @param {Object}  [obj.articleId]   Article ID
 *
 * @returns {Array}                   List of comments or `undefined`
 */
const getArticleComments = createSelector(
  [commons.getComments, commons.getArticleComments, commons.getArticleId],
  (comments, articleComments, articleId) => {
    const commentIds = !Object.prototype.hasOwnProperty.call(
      articleComments,
      articleId
    )
      ? null
      : articleComments[articleId];

    if (!commentIds) {
      return undefined;
    }

    const commentsFiltered = _filter(
      comments,
      comment => commentIds.indexOf(comment.id) !== -1
    );

    return commentsFiltered.length === 0 ? undefined : commentsFiltered;
  }
);

export default getArticleComments;
