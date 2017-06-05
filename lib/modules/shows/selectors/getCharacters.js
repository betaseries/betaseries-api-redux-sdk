import { createSelector } from 'reselect';
import * as commons from './commons';

/**
 * Select characters from state
 *
 * @alias module:Shows.getCharacters
 * @category selectors
 *
 * @example
 * const mapStateToProps = (state, props) => ({
 *   show: BetaSeries.getSelector('shows', 'getCharacters')(state, { showId: props.showId });
 * });
 *
 * @param {Object}  [state]           Redux state
 * @param {Object}  [obj]             Accept the following:
 * @param {Object}  [obj.showId]      Show ID
 *
 * @returns {Array}                   List of characters element or `undefined`
 */
const getCharacters = createSelector(
  [commons.getCharacters, commons.getShowId],
  (characters, showId) =>
    !Object.prototype.hasOwnProperty.call(characters, showId)
      ? undefined
      : characters[showId]
);

export default getCharacters;
