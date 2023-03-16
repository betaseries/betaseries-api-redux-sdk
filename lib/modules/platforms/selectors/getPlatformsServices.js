import { createSelector } from 'reselect';
import * as commons from './commons';

/**
 * Select platforms services from state
 *
 * @alias module:Blog.getPlatformsServices
 * @category selectors
 *
 * @example
 * const mapStateToProps = (state) => ({
 *   services: BetaSeries.getSelector('platforms', 'getPlatformsServices')(state);
 * });
 *
 * @param {Object}  [state]           Redux state
 * @param {Object}  [obj.userId]      User ID
 *
 * @returns {Array}                   services elements or `undefined`
 */
const getPlatformsServices = createSelector(
  [commons.getServices, commons.getUserId],
  (services, userId) => {
    const memberServices = !Object.prototype.hasOwnProperty.call(
      services,
      userId
    )
      ? []
      : services[userId];

    return memberServices;
  }
);

export default getPlatformsServices;
