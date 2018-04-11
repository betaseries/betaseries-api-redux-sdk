import { createSelector } from 'reselect';
import * as commons from './commons';

/**
 * Select season subtitles from state
 *
 * @alias module:Subtitles.getSeasonSubtitles
 * @category selectors
 *
 * @example
 * const mapStateToProps = (state, props) => ({
 *   show: BetaSeries.getSelector('subtitles', 'getSeasonSubtitles')(state, { showId: props.showId, season: props.season });
 * });
 *
 * @param {Object}  [state]        Redux state
 * @param {Object}  [obj]          Accept the following:
 * @param {Object}  [obj.showId]   Show ID
 * @param {Object}  [obj.season]   Season number
 *
 * @returns {Array}                List of season subtitles element or `undefined`
 */
const getSeasonSubtitles = createSelector(
  [commons.getShowsSubtitles, commons.getShowId, commons.getSeason],
  (subtitles, showId, season) => {
    if (!Object.prototype.hasOwnProperty.call(subtitles, showId)) {
      return undefined;
    }

    let key = season;
    if (!key) {
      key = 'all';
    }

    const show = subtitles[showId];

    return show[season] || undefined;
  }
);

export default getSeasonSubtitles;
