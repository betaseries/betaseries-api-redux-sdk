import constants from '../constants';
import ApiFetch from '../../../utils/fetch/ApiFetch';

/**
 * Retrieve tags for the shows
 *
 * **Dispatch**: `FETCH_TAGS_LIST`
 *
 * @alias module:Shows.doFetchTagsList
 * @category actions
 *
 * @example
 * BetaSeries.getAction('shows', 'doFetchTagsList')();
 *
 * @param {Object}  [obj]    Accept the following:
 *
 * @returns {Promise}
 */
const doFetchTagsList = ({ ...props }) =>
  dispatch =>
    ApiFetch.get('tags/list', { ...props }).then(response =>
      dispatch({
        type: constants.FETCH_TAGS_LIST,
        payload: {
          ...props,
          tags: response.tags || []
        }
      }));

export default doFetchTagsList;
