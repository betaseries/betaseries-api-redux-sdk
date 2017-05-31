import { createSelector } from 'reselect';
import _filter from 'lodash/filter';
import * as commons from './commons';

/**
 * Select favorite shows from state
 *
 * @alias module:Shows.getFavoriteShows
 * @category selectors
 *
 * @example
 * const mapStateToProps = (state, props) => ({
 *   show: BetaSeries.getSelector('shows', 'getFavoriteShows')(state, { memberId: props.memberId });
 * });
 *
 * @param {Object}  [state]           Redux state
 * @param {Object}  [obj]             Accept the following:
 * @param {Object}  [obj.memberId]    Member ID
 *
 * @returns {Array}                  Shows list or `undefined`
 */
const getFavoriteShows = createSelector(
  [commons.getShows, commons.getFavoriteShows, commons.getMemberId],
  (shows, favoriteShows, memberId) => {
    const favoriteShowIds = !Object.prototype.hasOwnProperty.call(
      favoriteShows,
      memberId
    )
      ? null
      : favoriteShows[memberId];

    if (!favoriteShowIds) {
      return undefined;
    }

    return _filter(shows, show => favoriteShowIds.indexOf(show.id) !== -1) ||
      undefined;
  }
);

export default getFavoriteShows;
