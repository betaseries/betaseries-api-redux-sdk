import { createSelector } from 'reselect';
import _filter from 'lodash/filter';
import * as commons from './commons';

/**
 * Select episode by show from state
 *
 * @alias module:Shows.getShowEpisodes
 * @category selectors
 *
 * @example
 * const mapStateToProps = (state, props) => ({
 *   episode: BetaSeries.getSelector('shows', 'getShowEpisodes')(state, {
 *     showId: props.showId,
 *   });
 * });
 *
 * @param {Object}  [state]           Redux state
 * @param {Object}  [obj]             Accept the folling:
 * @param {Object}  [obj.showId]      Show ID
 *
 * @returns {Array}                   List of episodes element order by code or `undefined`
 */
const getShowEpisodes = createSelector(
  [commons.getEpisodes, commons.getShowId],
  (episodes, showId) => (
    _filter(episodes, (episode => (
      episode.show.id === showId
    ))) || undefined
  ),
);

export default getShowEpisodes;
