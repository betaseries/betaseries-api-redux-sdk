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
 *
 * @returns {Array}                   services elements or `undefined`
 */
const getPlatformsServices = createSelector(
  [commons.getServices],
  services => services || []
);

export default getPlatformsServices;
