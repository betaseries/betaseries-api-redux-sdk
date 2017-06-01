import { createSelector } from 'reselect';
import * as commons from './commons';

/**
 * Select episode from state
 *
 * @alias module:Shows.getEpisode
 * @category selectors
 *
 * @example
 * const mapStateToProps = (state, props) => ({
 *   show: BetaSeries.getSelector('shows', 'getEpisode')(state, { episodeId: props.episodeId });
 * });
 *
 * @param {Object}  [state]           Redux state
 * @param {Object}  [obj]             Accept the following:
 * @param {Object}  [obj.episodeId]   Episode ID
 *
 * @returns {Object}                  Episode element or `undefined`
 */
const getEpisode = createSelector(
  [commons.getEpisodes, commons.getEpisodeId],
  (episodes, episodeId) =>
    !Object.prototype.hasOwnProperty.call(episodes, episodeId)
      ? undefined
      : episodes[episodeId]
);

export default getEpisode;
