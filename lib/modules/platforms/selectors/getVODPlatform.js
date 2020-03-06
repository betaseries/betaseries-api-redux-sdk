import { createSelector } from 'reselect';
import * as commons from './commons';
import getPlatformsVOD from './getPlatformsVOD';

/**
 * Select VOD platform by ID from state
 *
 * @alias module:Platforms.getVODPlatform
 * @category selectors
 *
 * @example
 * const mapStateToProps = (state, props) => ({
 *   platform: BetaSeries.getSelector('platforms', 'getVODPlatform')(state, {
 *     platformId: props.platformId,
 *   });
 * });
 *
 * @param {Object}  [state]           Redux state
 * @param {Object}  [obj]             Accept the following:
 * @param {Number}  [obj.platformId]  Platform ID
 *
 * @returns {Array}                   Platform element or `undefined`
 */
const getVODPlatform = createSelector(
  [getPlatformsVOD, commons.getPlatformId],
  (platforms, platformId) =>
    !Object.prototype.hasOwnProperty.call(platforms, platformId)
      ? undefined
      : platforms[platformId]
);

export default getVODPlatform;
