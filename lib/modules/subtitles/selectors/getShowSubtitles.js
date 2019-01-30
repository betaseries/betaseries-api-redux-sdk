import { createSelector } from 'reselect';
import * as commons from './commons';

/**
 * Select show subtitles from state
 *
 * @alias module:Subtitles.getShowSubtitles
 * @category selectors
 *
 * @example
 * const mapStateToProps = (state, props) => ({
 *   show: BetaSeries.getSelector('subtitles', 'getShowSubtitles')(state, { showId: props.showId });
 * });
 *
 * @param {Object}  [state]        Redux state
 * @param {Object}  [obj]          Accept the following:
 * @param {Object}  [obj.showId]   Show ID
 *
 * @returns {Array}                List of show subtitles element or `undefined`
 */
const getShowSubtitles = createSelector(
  [commons.getShowsSubtitles, commons.getShowId],
  (subtitles, showId) => {
    if (!Object.prototype.hasOwnProperty.call(subtitles, showId)) {
      return undefined;
    }

    const show = subtitles[showId];
    return show.all || undefined;
  }
);

export default getShowSubtitles;
