import _trim from 'lodash/trim';
import constants from '../constants';
import ApiFetch from '../../../utils/fetch/ApiFetch';

const defaultProps = {
  summary: false,
  order: 'title',
  nbpp: 5,
  page: 1
};

/**
 * Search show by title
 *
 * **Dispatch**: `SEARCH_SHOWS`
 *
 * @alias module:Searchs.doSearchShows
 * @category actions
 *
 * @example
 * BetaSeries.getAction('searchs', 'doSearchShows')({ title: 'alking DEA' });
 *
 * @param {Object}  [obj]         Accept the following:
 * @param {Number}  [obj.title]   Title search
 * @param {Bool}    [obj.summary] Returns only summary infos of the show elements (default `false`)
 * @param {Number}  [obj.order]   Return order (`title`|`popularity`|`followers`), (default `title`)
 * @param {Number}  [obj.nbpp]    Number of results per page (default `5`, maximum `100`)
 * @param {Number}  [obj.page]    Page number (default `1`)
 *
 * @returns {Promise}
 */
const doSearchShows = ({ title, ...props }) =>
  dispatch => {
    const titleTrimed = `%${_trim(title).toLowerCase()}%`;

    return ApiFetch.get('shows/search', {
      title: titleTrimed,
      ...defaultProps,
      ...props
    }).then(response =>
      dispatch({
        type: constants.SEARCH_SHOWS,
        payload: {
          title,
          titleTrimed,
          ...props,
          shows: response.shows
        }
      }));
  };

export default doSearchShows;
