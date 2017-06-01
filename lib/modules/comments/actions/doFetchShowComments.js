import constants from '../constants';
import ApiFetch from '../../../utils/fetch/ApiFetch';

const defaultProps = {
  order: 'asc',
  replies: 1
};

/**
 * Retrieve comments of the show
 *
 * **Dispatch**: `FETCH_SHOW_COMMENTS`
 *
 * @alias module:Comments.doFetchShowComments
 * @category actions
 *
 * @example
 * BetaSeries.getAction('comments', 'doFetchShowComments')({ showId: 481 });
 *
 * @param {Object}  [obj]             Accept the following:
 * @param {Number}  [obj.showId]      Show ID
 * @param {Number}  [obj.nbpp]        Number of comments per page
 * @param {Number}  [obj.since_id]    ID of last comment received (optional)
 * @param {String}  [obj.order]       Chronological order of return, `desc` or `asc` (default `asc`)
 * @param {Number}  [obj.replies]     Include comments reply (`1` or `0`, default `1`)
 *
 * @returns {Promise}
 */
const doFetchShowComments = ({ showId, ...props }) =>
  dispatch =>
    ApiFetch.get('comments/comments', {
      id: showId,
      ...defaultProps,
      ...props,
      type: 'show'
    }).then(response =>
      dispatch({
        type: constants.FETCH_SHOW_COMMENTS,
        payload: {
          ...props,
          showId,
          comments: response.comments
        }
      }));

export default doFetchShowComments;
