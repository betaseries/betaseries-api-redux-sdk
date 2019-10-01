import { createSelector } from 'reselect';
import * as commons from './commons';

/**
 * Select unrated episodes from state
 *
 * @alias module:Shows.getUnratedEpisodes
 * @category selectors
 *
 * @example
 * const mapStateToProps = (state, props) => ({
 *   episode: BetaSeries.getSelector('shows', 'getUnratedEpisodes')(state, {
 *     memberId: props.memberId,
 * });
 *
 * @param {Object}  [state]           Redux state
 * @param {Object}  [obj]             Accept the following:
 * @param {Number}  [obj.memberId]    Member ID (optional)
 *
 * @returns {Object}                  Unrated Episodes list or `undefined`
 */
const getUnratedEpisodes = createSelector(
  [commons.getUnratedEpisodes, commons.getMemberId],
  (unratedEpisodes, memberId) => {
    const episodes = unratedEpisodes && unratedEpisodes[memberId];
    if (!episodes) {
      return undefined;
    }

    return episodes;
  }
);

export default getUnratedEpisodes;
