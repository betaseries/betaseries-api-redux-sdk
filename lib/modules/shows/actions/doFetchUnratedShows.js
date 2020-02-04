import constants from '../constants';
import ApiFetch from '../../../utils/fetch/ApiFetch';
import BetaSeries from '../../../betaseries';

const defaultProps = {
  page: 1,
  date: 'month'
};

/**
 * Retrieve unrated shows
 *
 * **Dispatch**: `FETCH_UNRATED_SHOWS`
 *
 * @alias module:Shows.doFetchUnratedShows
 * @category actions
 *
 * @example
 * BetaSeries.getAction('shows', 'doFetchUnratedShows')();
 *
 * @param {Object}  [obj]                 Accept the following:
 * @param {String}  [obj.date]            Date to retrieve unrated shows (default: month, all)
 * @param {Number}  [obj.page]            Pagination
 *
 * @returns {Promise}
 */
const doFetchUnratedShows = ({ ...props }) =>
  dispatch =>
    ApiFetch.get('shows/unrated', {
      ...defaultProps,
      ...props
    }).then(response =>
      dispatch({
        type: constants.FETCH_UNRATED_SHOWS,
        payload: {
          ...props,
          userId: BetaSeries.user.userId,
          totalShows: response.total,
          shows: response.shows
        }
      }));

export default doFetchUnratedShows;
