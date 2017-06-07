import _find from 'lodash/find';
import { createSelector } from 'reselect';
import * as commons from './commons';

/**
 * Select show from state
 *
 * @alias module:Shows.getShow
 * @category selectors
 *
 * @example
 * const mapStateToProps = (state, props) => ({
 *   show: BetaSeries.getSelector('shows', 'getShow')(state, { showId: props.showId });
 * });
 *
 * @param {Object}  [state]           Redux state
 * @param {Object}  [obj]             Accept the following:
 * @param {Object}  [obj.showId]      Show ID
 *
 * @returns {Object}                  Show element or `undefined`
 */
const getShow = createSelector(
  [
    commons.getShows,
    commons.getShowId,
    commons.getMembersShows,
    commons.getMemberId
  ],
  (shows, showId, membersShows, memberId) => {
    const show = !Object.prototype.hasOwnProperty.call(shows, showId)
      ? undefined
      : shows[showId];

    if (!show) {
      return undefined;
    }

    const memberShows = !Object.prototype.hasOwnProperty.call(
      membersShows,
      memberId
    )
      ? []
      : membersShows[memberId];

    const user = _find(memberShows, { id: showId }) || null;

    show.user = user ? user.infos : null;

    return show;
  }
);

export default getShow;
