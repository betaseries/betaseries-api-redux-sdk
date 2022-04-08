import { createSelector } from 'reselect';
import * as commons from './commons';

/**
 * Select tags list from state
 *
 * @alias module:Shows.getTagsList
 * @category selectors
 *
 * @example
 * const mapStateToProps = (state, props) => ({
 *   discover: BetaSeries.getSelector('shows', 'getTagsList')(state);
 * });
 *
 * @param {Object}  [state]      Redux state
 *
 * @returns {Array}              Array of tags or `[]`
 */
const getTagsList = createSelector([commons.getTags], tags => tags || []);

export default getTagsList;
