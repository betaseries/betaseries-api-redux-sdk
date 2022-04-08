import constants from '../constants';
import ApiFetch from '../../../utils/fetch/ApiFetch';

/**
 * Add tag to a show
 *
 * **Dispatch**: `POST_SHOW_TAG`
 *
 * @alias module:Shows.doAddShowTag
 * @category actions
 *
 * @example
 * BetaSeries.getAction('shows', 'doAddShowTag')({
 *   showId: 438,
 *   tag: 'animation',
 * });
 *
 * @param {Object}  [obj]         Accept the following:
 * @param {Number}  [obj.showId]  Show ID
 * @param {String}  [obj.tag]     Tag ou tags à ajouter séparés par une virgule
 *
 * @returns {Promise}
 */
const doAddShowTag = ({ showId, tag, ...props }) =>
  dispatch =>
    ApiFetch.post('tags/tag', {
      show_id: showId,
      tag,
      ...props
    }).then(response =>
      dispatch({
        type: constants.POST_SHOW_TAG,
        payload: {
          showId,
          tag,
          ...props,
          tags: response.tags || []
        }
      }));

export default doAddShowTag;
