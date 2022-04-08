import { createSelector } from 'reselect';
import * as commons from './commons';

/**
 * Select tags from state
 *
 * @alias module:Shows.getShowTags
 * @category selectors
 *
 * @example
 * const mapStateToProps = (state, props) => ({
 *   show: BetaSeries.getSelector('shows', 'getShowTags')(state, { showId: props.showId });
 * });
 *
 * @param {Object}  [state]           Redux state
 * @param {Object}  [obj]             Accept the following:
 * @param {Object}  [obj.showId]      Show ID
 *
 * @returns {Array}                   List of tags element or `undefined`
 */
const getShowTags = createSelector(
  [commons.getTags, commons.getShowId],
  (tags, showId) =>
    !Object.prototype.hasOwnProperty.call(tags, showId)
      ? undefined
      : tags[showId]
);

export default getShowTags;
