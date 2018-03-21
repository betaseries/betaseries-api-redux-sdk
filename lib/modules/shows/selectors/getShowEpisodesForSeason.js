import { createSelector } from 'reselect';
import _filter from 'lodash/filter';
import * as commons from './commons';

/**
 * Select episode by show from state for season
 *
 * @alias module:Shows.getShowEpisodesForSeason
 * @category selectors
 *
 * @example
 * const mapStateToProps = (state, props) => ({
 *   episode: BetaSeries.getSelector('shows', 'getShowEpisodesForSeason')(state, {
 *     showId: props.showId,
 *     season: props.season,
 *   });
 * });
 *
 * @param {Object}  [state]           Redux state
 * @param {Object}  [obj]             Accept the following:
 * @param {Object}  [obj.showId]      Show ID
 * @param {Object}  [obj.season]      Season number
 *
 * @returns {Array}                   List of episodes element order by code or `undefined`
 */
const getShowEpisodesForSeason = createSelector(
  [commons.getEpisodes, commons.getShowId, commons.getSeason],
  (episodes, showId, season) =>
    _filter(
      episodes,
      episode => episode.show.id === showId && episode.season === season
    ) || undefined
);

export default getShowEpisodesForSeason;
