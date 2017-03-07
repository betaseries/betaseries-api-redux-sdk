import { createSelector } from 'reselect';
import _find from 'lodash/find';
import * as commons from './commons';

/**
 * Select episode by code and show from state
 *
 * @alias module:Shows.getShowEpisodeByCode
 * @category selectors
 *
 * @example
 * const mapStateToProps = (state, props) => ({
 *   episode: BetaSeries.getSelector('shows', 'getShowEpisodeByCode')(state, {
 *     showId: props.showId,
 *     code: 'SO4E01',
 *   });
 * });
 *
 * @param {Object}  [state]           Redux state
 * @param {Object}  [obj]             Accept the folling:
 * @param {Object}  [obj.showId]      Show ID
 * @param {Object}  [obj.code]        Episode code
 *
 * @returns {Object}                  Episode element or `null`
 */
const getShowEpisodeByCode = createSelector(
  [commons.getEpisodes, commons.getShowId, commons.getExtraProps],
  (episodes, showId, extraProps) => (
    _find(episodes, (episode => (
      episode.code === extraProps.code && episode.show.id === showId
    ))) || null
  ),
);

export default getShowEpisodeByCode;
