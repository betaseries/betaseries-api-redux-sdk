import constants from '../constants';
import arrayToID from '../../../utils/func/arrayToID';

const initialState = {};

/**
 * List the comments of the article
 *
 * **Actions listened**:
 *
 *  * `FETCH_ARTICLE_COMMENTS`
 *  * `CLEAR_ARTICLE_COMMENTS`
 *  * `COMMENT_ARTICLE`
 *
 * @alias module:Comments.articles
 * @category reducers
 *
 * @example
 * // get reducer
 * BetaSeries.getReducer('comments', 'articles').commentsArticles;
 *
 * // state value example
 * {
 *   '12': [               // article ID
 *     1234, 213, 2343,    // list of comments ID
 *   ],
 *   ...,
 * }
 *
 * @param {Object} state
 * @param {Object} action
 *
 * @returns {Object}
 */
export default function articleCommentsReducer(state = initialState, action) {
  switch (action.type) {
    case constants.CLEAR_ARTICLE_COMMENTS: {
      if (!Object.prototype.hasOwnProperty.call(action.payload, 'articleId')) {
        return state;
      }

      const newState = { ...state };
      delete newState[action.payload.articleId];

      return newState;
    }

    case constants.FETCH_ARTICLE_COMMENTS: {
      const prevCommentIds = state[action.payload.articleId] || [];

      return {
        ...state,
        [action.payload.articleId]: [
          ...prevCommentIds,
          ...arrayToID(action.payload.comments)
        ]
      };
    }

    case constants.COMMENT_ARTICLE: {
      const prevCommentIds = state[action.payload.articleId] || [];

      return {
        ...state,
        [action.payload.articleId]: [
          ...prevCommentIds,
          ...arrayToID([action.payload.comment])
        ]
      };
    }

    default:
      return state;
  }
}
