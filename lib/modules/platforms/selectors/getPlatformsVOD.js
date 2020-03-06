import { createSelector } from 'reselect';
import * as commons from './commons';

/**
 * Select VOD platforms from state
 *
 * @alias module:Platforms.getPlatformsVOD
 * @category selectors
 *
 * @example
 * const mapStateToProps = (state, props) => ({
 *   platforms: BetaSeries.getSelector('platforms', 'getPlatformsVOD')(state, { country: 'fr' });
 * });
 *
 * @param {Object}  [state]           Redux state
 *
 * @returns {Array}                   elements or `undefined`
 */
const getPlatformsVOD = createSelector(
  [commons.getPlatforms, commons.getPlatformCountry],
  (platforms, country) =>
    (platforms && platforms[country] && platforms[country].vod) || []
);

export default getPlatformsVOD;
