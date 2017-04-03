import { createSelector } from 'reselect';
import * as commons from './commons';

/**
 * Select badge by ID from state
 *
 * @alias module:Badges.getBadge
 * @category selectors
 *
 * @example
 * const mapStateToProps = (state, props) => ({
 *   episode: BetaSeries.getSelector('badges', 'getBadge')(state, {
 *     badgeId: props.badgeId,
 *   });
 * });
 *
 * @param {Object}  [state]           Redux state
 * @param {Object}  [obj]             Accept the folling:
 * @param {Number}  [obj.badgeId]     Badge ID
 *
 * @returns {Array}                   Badge element or `undefined`
 */
const getBadge = createSelector(
  [commons.getBadges, commons.getBadgeId],
  (badges, badgeId) =>
    !Object.prototype.hasOwnProperty.call(badges, badgeId)
      ? undefined
      : badges[badgeId]
);

export default getBadge;
