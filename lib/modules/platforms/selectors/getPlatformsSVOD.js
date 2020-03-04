import { createSelector } from 'reselect';
import * as commons from './commons';

/**
 * Select SVOD platforms from state
 *
 * @alias module:Platforms.getPlatformsSVOD
 * @category selectors
 *
 * @example
 * const mapStateToProps = (state, props) => ({
 *   platforms: BetaSeries.getSelector('platforms', 'getPlatformsSVOD')(state, { country: 'fr' });
 * });
 *
 * @param {Object}  [state]           Redux state
 *
 * @returns {Array}                   elements or `undefined`
 */
const getPlatformsSVOD = createSelector(
  [commons.getPlatforms, commons.getPlatformCountry],
  (platforms, country) =>
    (platforms && platforms[country] && platforms[country].svod) || []
);

export default getPlatformsSVOD;
