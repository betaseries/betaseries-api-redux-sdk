import { createSelector } from 'reselect';
import * as commons from './commons';

/**
 * Select photos from state
 *
 * @alias module:Shows.getPhotos
 * @category selectors
 *
 * @example
 * const mapStateToProps = (state, props) => ({
 *   show: BetaSeries.getSelector('shows', 'getPhotos')(state, { showId: props.showId });
 * });
 *
 * @param {Object}  [state]           Redux state
 * @param {Object}  [obj]             Accept the following:
 * @param {Object}  [obj.showId]      Show ID
 *
 * @returns {Array}                   List of photos element or `undefined`
 */
const getPhotos = createSelector(
  [commons.getPhotos, commons.getShowId],
  (photos, showId) =>
    !Object.prototype.hasOwnProperty.call(photos, showId)
      ? undefined
      : photos[showId]
);

export default getPhotos;
