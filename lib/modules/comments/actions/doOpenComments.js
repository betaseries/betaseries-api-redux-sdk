import constants from '../constants';
import ApiFetch from '../../../utils/fetch/ApiFetch';

/**
 * Open comments for a media
 *
 * **Dispatch**: `OPEN_COMMENTS`
 *
 * @alias module:Comments.doOpenComments
 * @category actions
 *
 * @example
 * BetaSeries.getAction('comments', 'doOpenComments')({
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
const doOpenComments = ({ id, type }) =>
  dispatch =>
    ApiFetch.post('comments/open', {
      id,
      type
    }).then(() =>
      dispatch({
        type: constants.OPEN_COMMENTS,
        payload: {
          id,
          type
        }
      }));

export default doOpenComments;
