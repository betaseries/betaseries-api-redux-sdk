import { createSelector } from 'reselect';
import * as commons from './commons';

/**
 * Select articles from state
 *
 * @alias module:Persons.getPersonArticles
 * @category selectors
 *
 * @example
 * const mapStateToProps = (state, props) => ({
 *   articles: BetaSeries.getSelector('persons', 'getPersonArticles')(state, { personId: props.personId });
 * });
 *
 * @param {Object}  [state]           Redux state
 * @param {Object}  [obj]             Accept the following:
 * @param {Object}  [obj.personId]    Person ID
 *
 * @returns {Array}                   List of articles element or `undefined`
 */
const getPersonArticles = createSelector(
  [commons.getArticles, commons.getPersonId],
  (articles, personId) =>
    !Object.prototype.hasOwnProperty.call(articles, personId)
      ? undefined
      : articles[personId]
);

export default getPersonArticles;
