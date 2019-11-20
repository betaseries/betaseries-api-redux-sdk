import constants from '../constants';
import ApiFetch from '../../../utils/fetch/ApiFetch';

/**
 * Retrieve show with slug
 *
 * **Dispatch**: `FETCH_SHOW`
 *
 * @alias module:Shows.doFetchShowWithUrl
 * @category actions
 *
 * @example
 * BetaSeries.getAction('shows', 'doFetchShowWithUrl')({ url: 'slug' });
 *
 * @param {Object}  [obj]           Accept the following:
 * @param {String}  [obj.url]       Show Slug
 *
 * @returns {Promise}
 */
const doFetchShowWithUrl = ({ url }) =>
  dispatch =>
    ApiFetch.get('shows/display', { url }).then(response =>
      dispatch({
        type: constants.FETCH_MANY_SHOWS,
        payload: {
          url,
          showIds: [response.show.id],
          shows: [response.show]
        }
      }));

export default doFetchShowWithUrl;
