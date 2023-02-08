import _uniqBy from 'lodash/uniqBy';
import constants from '../constants';

const initialState = {};

/**
 * List of the person articles
 *
 * **Actions listened**:
 *
 *  * `FETCH_PERSON_ARTICLES`
 *
 * @alias module:Persons.articles
 * @category reducers
 *
 * @example
 * // get reducer
 * BetaSeries.getReducer('persons', 'articles').personsArticles;
 *
 * // state example
 * {
 *   '1275': [              // person ID
 *     {
 *       id: 123543,        // article ID
 *       ...article         // article element
 *     },
 *     ...
 *   ]
 * }
 *
 * @param {Object} state
 * @param {Object} action
 *
 * @returns {Object}
 */
export default function personsArticlesReducer(state = initialState, action) {
  switch (action.type) {
    case constants.FETCH_PERSON_ARTICLES: {
      const personId = action.payload.personId;
      const articles = state[personId] || [];

      if (action.payload.articles.length === 0) {
        return state;
      }

      return {
        ...state,
        [personId]: _uniqBy([...articles, ...action.payload.articles], 'id')
      };
    }

    default:
      return state;
  }
}
