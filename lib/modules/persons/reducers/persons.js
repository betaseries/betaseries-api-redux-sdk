import constants from '../constants';

const initialState = {};

/**
 * List of persons
 *
 * **Actions listened**:
 *
 *  * `FETCH_PERSON`
 *
 * @alias module:Persons.persons
 * @category reducers
 *
 * @example
 * // get reducer
 * BetaSeries.getReducer('persons', 'persons').persons;
 *
 * // state example
 * {
 *   '1275': {      // person ID
 *     id: 1275,    // person element
 *     ...person,
 *   },
 *   ...,
 * }
 *
 * @param {Object} state
 * @param {Object} action
 *
 * @returns {Object}
 */
export default function personsReducer(state = initialState, action) {
  switch (action.type) {
    case constants.FETCH_PERSON:
      return {
        ...state,
        [action.payload.personId]: action.payload.person
      };

    default:
      return state;
  }
}
