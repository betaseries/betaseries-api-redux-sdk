import constants from '../constants';

/**
 * Clear comments for a specific poll
 *
 * **Dispatch**: `CLEAR_POLL_COMMENTS`
 *
 * @alias module:Comments.doClearPollComments
 * @category actions
 *
 * @example
 * BetaSeries.getAction('comments', 'doClearPollComments')({ pollId: 481 });
 *
 * @param {Object}  [obj]           Accept the following:
 * @param {Number}  [obj.pollId]    PollID
 *
 * @returns {Promise}
 */
const doClearPollComments = ({ pollId }) =>
  dispatch =>
    dispatch({
      type: constants.CLEAR_POLL_COMMENTS,
      payload: {
        pollId
      }
    });

export default doClearPollComments;
