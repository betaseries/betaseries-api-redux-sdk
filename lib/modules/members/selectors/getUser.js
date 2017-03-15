import { createSelector } from 'reselect';
import * as commons from './commons';

/**
 * Select authenticated user from state
 *
 * @alias module:Members.getUser
 * @category selectors
 *
 * @example
 * const mapStateToProps = (state, props) => ({
 *   show: BetaSeries.getSelector('members', 'getUser')(state);
 * });
 *
 * @param {Object}  [state]           Redux state
 *
 * @returns {Object}                  Member element or `undefined`
 */
const getUser = createSelector(
  [commons.getUser, commons.getMembers],
  (user, members) =>
    !Object.prototype.hasOwnProperty.call(members, user)
      ? undefined
      : members[user]
);

export default getUser;
