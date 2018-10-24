import constants from '../constants';
import ApiFetch from '../../../utils/fetch/ApiFetch';

/**
 * Close comments for a media
 *
 * **Dispatch**: `CLOSE_COMMENTS`
 *
 * @alias module:Comments.doCloseComments
 * @category actions
 *
 * @example
 * BetaSeries.getAction('comments', 'doCloseComments')({
 *   id: 438,
 *   type: 'show',
 * });
 *
 * @param {Object}  [obj]             Accept the following:
 * @param {Number}  [obj.id]          Media ID
 * @param {String}  [obj.type]        Media type => episode|show|member|movie
  *
 * @returns {Promise}
 */
const doCloseComments = ({ id, type }) =>
  dispatch =>
    ApiFetch.remove('comments/close', {
      id,
      type
    }).then(() =>
      dispatch({
        type: constants.CLOSE_COMMENTS,
        payload: {
          id,
          type
        }
      }));

export default doCloseComments;
