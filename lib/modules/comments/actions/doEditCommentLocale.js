import constants from '../constants';
import ApiFetch from '../../../utils/fetch/ApiFetch';

/**
 * Edit the locale of a comment
 *
 * **Dispatch**: `EDIT_COMMENT_LOCALE`
 *
 * @alias module:Comments.doCommentShow
 * @category actions
 *
 * @example
 * BetaSeries.getAction('comments', 'doEditCommentLocale')({
 *   commentId: 438,
 *   locale: 'en',
 * });
 *
 * @param {Object}  [obj]             Accept the following:
 * @param {Number}  [obj.commentId]      Comment ID
 * @param {String}  [obj.locale]        Locale ['fr', 'en', 'de', 'es', 'it', 'nl', 'pl', 'se', 'pt']
 *
 * @returns {Promise}
 */
const doEditCommentLocale = ({ commentId, locale, ...props }) =>
  dispatch =>
    ApiFetch.post('comments/locale', {
      ...props,
      id: commentId,
      locale
    }).then(response =>
      dispatch({
        type: constants.EDIT_COMMENT_LOCALE,
        payload: {
          ...props,
          commentId,
          locale,
          comment: response.comment
        }
      }));

export default doEditCommentLocale;
