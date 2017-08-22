import { createSelector } from 'reselect';
import * as commons from './commons';

/**
 * Select episode subtitles from state
 *
 * @alias module:Shows.getEpisodeSubtitles
 * @category selectors
 *
 * @example
 * const mapStateToProps = (state, props) => ({
 *   show: BetaSeries.getSelector('shows', 'getEpisodeSubtitles')(state, { episodeId: props.episodeId });
 * });
 *
 * @param {Object}  [state]           Redux state
 * @param {Object}  [obj]             Accept the following:
 * @param {Object}  [obj.episodeId]   Episode ID
 *
 * @returns {Array}                   List of episode subtitles element or `undefined`
 */
const getEpisodeSubtitles = createSelector(
  [commons.getEpisodesSubtitles, commons.getEpisodeId],
  (episodesSubtitles, episodeId) =>
    !Object.prototype.hasOwnProperty.call(episodesSubtitles, episodeId)
      ? undefined
      : episodesSubtitles[episodeId]
);

export default getEpisodeSubtitles;
