import { createSelector } from 'reselect';
import * as commons from './commons';

/**
 * Select Home popular platform shows
 *
 * @alias module:Home.getHomePopularPlatform
 * @category selectors
 *
 * @example
 * const mapStateToProps = (state, props) => ({
 *   home: BetaSeries.getSelector('home', 'getHomePopularPlatform')(state, {
    platformId: '1',
  });
 * });
 *
 * @param {Object}  [state]                Redux state
 * @param {Object}  [obj]                  Accept the following:
 * @param {String}  [obj.platformId]      Platform ID
 *
 * @returns {Array}                   Popular platform shows or `undefined`
 */
const getHomePopularPlatform = createSelector(
  [commons.getPopularPlatform, commons.getPlatformId],
  (shows, platformId) =>
    !Object.prototype.hasOwnProperty.call(shows, platformId)
      ? undefined
      : shows[platformId]
);

export default getHomePopularPlatform;
