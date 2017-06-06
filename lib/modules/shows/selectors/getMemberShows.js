import { createSelector } from 'reselect';
import _filter from 'lodash/filter';
import * as commons from './commons';

/**
 * Select member shows from state
 *
 * @alias module:Shows.getMemberShows
 * @category selectors
 *
 * @example
 * const mapStateToProps = (state, props) => ({
 *   show: BetaSeries.getSelector('shows', 'getMemberShows')(state, { memberId: props.memberId });
 * });
 *
 * @param {Object}  [state]           Redux state
 * @param {Object}  [obj]             Accept the following:
 * @param {Object}  [obj.memberId]    Member ID
 *
 * @returns {Array}                   Shows list or `undefined`
 */
const getMemberShows = createSelector(
  [commons.getShows, commons.getMembersShows, commons.getMemberId],
  (shows, memberShows, memberId) => {
    const memberShowIds = !Object.prototype.hasOwnProperty.call(
      memberShows,
      memberId
    )
      ? null
      : memberShows[memberId];

    if (!memberShowIds) {
      return undefined;
    }

    return _filter(shows, show => memberShowIds.indexOf(show.id) !== -1) ||
      undefined;
  }
);

export default getMemberShows;
