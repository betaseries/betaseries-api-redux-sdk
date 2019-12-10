import constants from '../constants';
import ApiFetch from '../../../utils/fetch/ApiFetch';

/**
 * Add reach analytic for a show
 *
 * **Dispatch**: `ADD_SHOW_REACH`
 *
 * @alias module:Shows.doAddShowReach
 * @category actions
 *
 * @example
 * BetaSeries.getAction('shows', 'doAddShowReach')({
 *   id: 438,
 *   url: 'slug-url',
 * });
 *
 * @param {Object}  [obj]       Accept the following:
 * @param {Number}  [obj.id]    Show ID
 * @param {String}  [obj.url]   Show slug
 *
 * @returns {Promise}
 */
const doAddShowReach = ({ ...props }) =>
  dispatch =>
    ApiFetch.post('shows/reach', { ...props }).then(response =>
      dispatch({
        type: constants.ADD_SHOW_REACH,
        payload: {
          ...props,
          response
        }
      }));

export default doAddShowReach;
