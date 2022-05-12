/**
 * Retrieve persons from state
 */
export const getPersons = state => state.persons;

/**
 * Retrieve person ID from parameters
 */
export const getPersonId = (state, { personId }) => parseInt(personId, 10);

/**
 * Retrieve parameters
 */
export const getExtraProps = (state, props) => props;
