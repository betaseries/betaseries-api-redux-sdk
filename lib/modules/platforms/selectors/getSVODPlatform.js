import { createSelector } from 'reselect';
import * as commons from './commons';
import getPlatformsSVOD from './getPlatformsSVOD';

/**
 * Select SVOD platform by ID from state
 *
 * @alias module:Platforms.getSVODPlatform
 * @category selectors
 *
 * @example
 * const mapStateToProps = (state, props) => ({
 *   platform: BetaSeries.getSelector('platforms', 'getSVODPlatform')(state, {
 *     platformId: props.platformId,
 *   });
 * });
 *
 * @param {Object}  [state]           Redux state
 * @param {Object}  [obj]             Accept the following:
 * @param {Number}  [obj.platformId]  Platform ID
 *
 * @returns {Object}                   Platform element or `undefined`
 */
const getSVODPlatform = createSelector(
  [getPlatformsSVOD, commons.getPlatformId],
  (platforms, platformId) =>
    !Object.prototype.hasOwnProperty.call(platforms, platformId)
      ? undefined
      : platforms[platformId]
);

export default getSVODPlatform;
