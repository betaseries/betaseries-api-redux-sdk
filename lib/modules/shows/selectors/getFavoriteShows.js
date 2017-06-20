import { createSelector } from 'reselect';
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
  [commons.getShows, commons.getMembersShows, commons.getMemberId],
  (shows, membersShows, memberId) => {
    const elements = !Object.prototype.hasOwnProperty.call(
      membersShows,
      memberId
    )
      ? null
      : membersShows[memberId];

    if (!elements) {
      return undefined;
    }

    return elements
      .filter(user => user.infos.favorited === true)
      .map(show => shows[show.id]) || undefined;
  }
);

export default getFavoriteShows;
