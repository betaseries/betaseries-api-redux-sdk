import { createSelector } from 'reselect';
import * as commons from './commons';

/**
 * Select unrated shows from state
 *
 * @alias module:Shows.getUnratedShows
 * @category selectors
 *
 * @example
 * const mapStateToProps = (state, props) => ({
 *   episode: BetaSeries.getSelector('shows', 'getUnratedShows')(state, {
 *     memberId: props.memberId,
 * });
 *
 * @param {Object}  [state]           Redux state
 * @param {Object}  [obj]             Accept the following:
 * @param {Number}  [obj.memberId]    Member ID (optional)
 *
 * @returns {Object}                  Unrated shows list or `undefined`
 */
const getUnratedShows = createSelector(
  [commons.getUnratedShows, commons.getMemberId],
  (unratedShows, memberId) => {
    const shows = unratedShows && unratedShows[memberId];
    if (!shows) {
      return undefined;
    }

    return shows;
  }
);

export default getUnratedShows;
