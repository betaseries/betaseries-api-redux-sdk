import constants from '../constants';

/**
 * Clear comments for a specific show
 *
 * **Dispatch**: `CLEAR_SHOW_COMMENTS`
 *
 * @alias module:Comments.doClearShowComments
 * @category actions
 *
 * @example
 * BetaSeries.getAction('comments', 'doClearShowComments')({ showId: 481 });
 *
 * @param {Object}  [obj]             Accept the following:
 * @param {Number}  [obj.showId]      Show ID
 *
 * @returns {Promise}
 */
const doClearShowComments = ({ showId }) =>
  dispatch =>
    dispatch({
      type: constants.CLEAR_SHOW_COMMENTS,
      payload: {
        showId
      }
    });

export default doClearShowComments;
