import { createSelector } from 'reselect';
import * as commons from './commons';

/**
 * Select episode subtitles from state
 *
 * @alias module:Subtitles.getEpisodeSubtitles
 * @category selectors
 *
 * @example
 * const mapStateToProps = (state, props) => ({
 *   show: BetaSeries.getSelector('subtitles', 'getEpisodeSubtitles')(state, { episodeId: props.episodeId });
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
  (subtitles, episodeId) =>
    !Object.prototype.hasOwnProperty.call(subtitles, episodeId)
      ? undefined
      : subtitles[episodeId]
);

export default getEpisodeSubtitles;
