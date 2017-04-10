import { createSelector } from 'reselect';
import _reduce from 'lodash/reduce';
import * as commons from './commons';

/**
 * Select episodes to see by member from state
 *
 * @alias module:Shows.getEpisodesToSee
 * @category selectors
 *
 * @example
 * const mapStateToProps = (state, props) => ({
 *   episode: BetaSeries.getSelector('shows', 'getEpisodesToSee')(state, {
 *     memberId: props.memberId,
 *   });
 * });
 *
 * @param {Object}  [state]           Redux state
 * @param {Object}  [obj]             Accept the folling:
 * @param {Number}  [obj.memberId]    Member ID (optional)
 *
 * @returns {Array}                   List of episodes to see element or `undefined`
 */
const getEpisodesToSee = createSelector(
  [commons.getEpisodes, commons.getMemberEpisodesToSee, commons.getMemberId],
  (episodes, membersEpisodes, memberId) => {
    const episodeIds = !Object.prototype.hasOwnProperty.call(
      membersEpisodes,
      memberId
    )
      ? null
      : membersEpisodes[memberId];

    if (!episodeIds) {
      return undefined;
    }

    return _reduce(
      episodeIds,
      (sum, episodeId) => [...sum, episodes[episodeId]],
      []
    );
  }
);

export default getEpisodesToSee;
