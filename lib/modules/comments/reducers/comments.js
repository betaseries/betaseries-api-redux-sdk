import constants from '../constants';
import timelineConstants from '../../timelines/constants';
import arrayToHash from '../../../utils/func/arrayToHash';

const initialState = {};

/**
 * List of comments
 *
 * **Actions listened**:
 *
 *  * `FETCH_EPISODE_COMMENTS`
 *  * `FETCH_SHOW_COMMENTS`
 *  * `FETCH_EVENT_COMMENTS`
 *  * `FETCH_MEMBER_COMMENTS`
 *  * `FETCH_MOVIE_COMMENTS`
 *  * `FETCH_COMMENT`
 *  * `FETCH_FRIENDS_TIMELINE`
 *  * `FETCH_FEED_TIMELINE`
 *  * `FETCH_TIMELINE_EVENT`
 *  * `FETCH_REPLIES`
 *  * `COMMENT_EVENT`
 *  * `COMMENT_EPISODE`
 *  * `COMMENT_SHOW`
 *  * `COMMENT_MEMBER`
 *  * `COMMENT_MOVIE`
 *
 * @alias module:Comments.comments
 * @category reducers
 *
 * @example
 * // get reducer
 * BetaSeries.getReducer('comments', 'comments').comments;
 *
 * // state example
 * {
 *   '384144': {      // comment ID
 *     id: 384144,    // comment element
 *     ...comments,
 *   },
 *   ...,
 * }
 *
 * @param {Object} state
 * @param {Object} action
 *
 * @returns {Object}
 */
export default function commentsReducer(state = initialState, action) {
  switch (action.type) {
    case constants.FETCH_EPISODE_COMMENTS:
    case constants.FETCH_EVENT_COMMENTS:
    case constants.FETCH_SHOW_COMMENTS:
    case constants.FETCH_MEMBER_COMMENTS:
    case constants.FETCH_MOVIE_COMMENTS:
    case constants.FETCH_REPLIES:
      return {
        ...state,
        ...arrayToHash(action.payload.comments)
      };

    case constants.FETCH_COMMENT:
    case constants.COMMENT_EVENT:
    case constants.COMMENT_EPISODE:
    case constants.COMMENT_SHOW:
    case constants.COMMENT_MEMBER:
    case constants.COMMENT_MOVIE:
      return {
        ...state,
        ...arrayToHash([action.payload.comment])
      };

    case timelineConstants.FETCH_FEED_TIMELINE:
    case timelineConstants.FETCH_FRIENDS_TIMELINE: {
      if (action.payload.events.length === 0) {
        return state;
      }

      return {
        ...state,
        ...arrayToHash(
          action.payload.events.reduce(
            (sum, event) => [...sum, ...event.first_comments],
            []
          )
        )
      };
    }

    case timelineConstants.FETCH_TIMELINE_EVENT: {
      if (action.payload.event.first_comments.length === 0) {
        return state;
      }

      return {
        ...state,
        ...arrayToHash(action.payload.event.first_comments)
      };
    }

    default:
      return state;
  }
}
