import { createSelector } from 'reselect';
import * as commons from './commons';

/**
 * Select videos from state
 *
 * @alias module:Shows.getVideos
 * @category selectors
 *
 * @example
 * const mapStateToProps = (state, props) => ({
 *   show: BetaSeries.getSelector('shows', 'getVideos')(state, { showId: props.showId });
 * });
 *
 * @param {Object}  [state]           Redux state
 * @param {Object}  [obj]             Accept the following:
 * @param {Object}  [obj.showId]      Show ID
 *
 * @returns {Array}                   List of videos element or `undefined`
 */
const getVideos = createSelector(
  [commons.getVideos, commons.getShowId],
  (videos, showId) =>
    !Object.prototype.hasOwnProperty.call(videos, showId)
      ? undefined
      : videos[showId]
);

export default getVideos;
