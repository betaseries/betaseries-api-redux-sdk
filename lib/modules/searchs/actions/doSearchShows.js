import constants from '../constants';
import ApiFetch from '../../../utils/fetch/ApiFetch';

/**
 * Search show by text
 *
 * **Dispatch**: `SEARCH_SHOWS`
 *
 * @alias module:Searchs.doSearchShows
 * @category actions
 *
 * @example
 * BetaSeries.getAction('searchs', 'doSearchShows')({ text: 'alking DEA' });
 *
 * @param {Object}  [obj]         Accept the following:
 * see https://www.betaseries.com/api/methodes/search
 *
 * @returns {Promise}
 */
const doSearchShows = ({ ...props }) =>
  dispatch =>
    ApiFetch.get('search/shows', {
      ...props
    }).then(response =>
      dispatch({
        type: constants.SEARCH_SHOWS,
        payload: {
          ...props,
          shows: response.shows
        }
      }));

export default doSearchShows;
