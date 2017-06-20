import { createSelector } from 'reselect';
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
    const elements = !Object.prototype.hasOwnProperty.call(
      memberShows,
      memberId
    )
      ? null
      : memberShows[memberId];

    if (!elements) {
      return undefined;
    }

    return elements.reduce(
      (sum, user) => [
        ...sum,
        {
          ...shows[user.id],
          user: user.infos
        }
      ],
      []
    ) || undefined;
  }
);

export default getMemberShows;
