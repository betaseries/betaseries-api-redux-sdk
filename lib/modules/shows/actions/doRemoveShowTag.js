import constants from '../constants';
import ApiFetch from '../../../utils/fetch/ApiFetch';

/**
 * Remove tag for a show
 *
 * **Dispatch**: `DELETE_SHOW_TAG`
 *
 * @alias module:Shows.doRemoveShowTag
 * @category actions
 *
 * @example
 * BetaSeries.getAction('shows', 'doRemoveShowTag')({
 *   showId: 438,
 *   tag: 'animation'
 * });
 *
 * @param {Object}  [obj]         Accept the following:
 * @param {Number}  [obj.showId]  Show ID
 * @param {String}  [obj.tag]     Tag ou tags à supprimer séparés par une virgule
 * @returns {Promise}
 */
const doRemoveShowTag = ({ showId, tag, ...props }) =>
  dispatch =>
    ApiFetch.remove('tags/tag', {
      show_id: showId,
      tag,
      ...props
    }).then(response =>
      dispatch({
        type: constants.DELETE_SHOW_TAG,
        payload: {
          showId,
          tag,
          ...props,
          tags: response.tags || []
        }
      }));

export default doRemoveShowTag;
