import _find from 'lodash/find';
import { createSelector } from 'reselect';
import * as commons from './commons';

/**
 * Select show from state by url
 *
 * @alias module:Shows.getShowByUrl
 * @category selectors
 *
 * @example
 * const mapStateToProps = (state, props) => ({
 *   show: BetaSeries.getSelector('shows', 'getShowByUrl')(state, { showUrl: props.showUrl });
 * });
 *
 * @param {Object}  [state]           Redux state
 * @param {Object}  [obj]             Accept the following:
 * @param {Object}  [obj.showUrl]     Show slug url
 *
 * @returns {Object}                  Show element or `undefined`
 */
const getShowByUrl = createSelector(
  [
    commons.getShows,
    commons.getShowUrl,
    commons.getMembersShows,
    commons.getMemberId
  ],
  (shows, showUrl, membersShows, memberId) => {
    // resource_url
    const show = _find(shows, { resource_url: showUrl }) || null;
    if (!show) {
      return undefined;
    }

    const showId = show.id;

    const memberShows = !Object.prototype.hasOwnProperty.call(
      membersShows,
      memberId
    )
      ? []
      : membersShows[memberId];

    const user = _find(memberShows, { id: showId }) || null;

    return {
      ...show,
      user: user ? user.infos : null
    };
  }
);

export default getShowByUrl;
