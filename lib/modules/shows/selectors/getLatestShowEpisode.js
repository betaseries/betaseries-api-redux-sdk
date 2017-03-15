import { createSelector } from 'reselect';
import * as commons from './commons';

/**
 * Select last episode by show from state
 *
 * @alias module:Shows.getLatestShowEpisode
 * @category selectors
 *
 * @example
 * const mapStateToProps = (state, props) => ({
 *   episode: BetaSeries.getSelector('shows', 'getLatestShowEpisode')(state, {
 *     showId: props.showId,
 *   });
 * });
 *
 * @param {Object}  [state]           Redux state
 * @param {Object}  [obj]             Accept the folling:
 * @param {Object}  [obj.showId]      Show ID
 *
 * @returns {Object}                  Episode element or `undefined`
 */
const getLatestShowEpisode = createSelector(
  [commons.getEpisodes, commons.getLatestEpisodes, commons.getShowId],
  (episodes, latestEpisodes, showId) => {
    const episodeId = !Object.prototype.hasOwnProperty.call(latestEpisodes, showId) ? null : (
      latestEpisodes[showId]
    );

    if (!episodeId) {
      return undefined;
    }

    return !Object.prototype.hasOwnProperty.call(episodes, episodeId) ? undefined : (
      episodes[episodeId]
    );
  },
);

export default getLatestShowEpisode;
