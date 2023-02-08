import { createSelector } from 'reselect';
import * as commons from './commons';

/**
 * Select person from state
 *
 * @alias module:Persons.getPerson
 * @category selectors
 *
 * @example
 * const mapStateToProps = (state, props) => ({
 *   person: BetaSeries.getSelector('persons', 'getPerson')(state, { personId: props.personId });
 * });
 *
 * @param {Object}  [state]           Redux state
 * @param {Object}  [obj]             Accept the following:
 * @param {Object}  [obj.personId]    Person ID
 *
 * @returns {Object}                  Person element or `undefined`
 */
const getPerson = createSelector(
  [commons.getPersons, commons.getPersonId],
  (persons, personId) =>
    !Object.prototype.hasOwnProperty.call(persons, personId)
      ? undefined
      : persons[personId]
);

export default getPerson;
