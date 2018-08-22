import _map from 'lodash/map';
import constants from '../constants';
import arrayToHash from '../../../utils/func/arrayToHash';

const initialState = {};

/**
 * List of polls
 *
 * **Actions listened**:
 *
 *  * `FETCH_LAST_POLL`
 *  * `FETCH_POLL`
 *  * `FETCH_POLLS`
 *  * `ANSWER_POLL`
 *
 * @alias module:Polls.polls
 * @category reducers
 *
 * @example
 * // get reducer
 * BetaSeries.getReducer('polls', 'polls').polls;
 *
 * // state value example
 * {
 *   '12': {      // poll ID
 *     id: 12,    // poll element
 *     ...poll,
 *   },
 *   ...,
 * }
 *
 * @param {Object} state
 * @param {Object} action
 *
 * @returns {Object}
 */
export default function pollsReducer(state = initialState, action) {
  switch (action.type) {
    case constants.FETCH_LAST_POLL: {
      return {
        ...state,
        ...arrayToHash([action.payload.poll])
      };
    }

    case constants.FETCH_POLL:
    case constants.ANSWER_POLL: {
      const pollId = action.payload.pollId;
      let poll = action.payload.poll;

      if (Object.prototype.hasOwnProperty.call(state, pollId)) {
        poll = {
          ...action.payload.poll,
          last: state[pollId].last || false
        };
      }

      return {
        ...state,
        ...arrayToHash([poll])
      };
    }

    case constants.FETCH_POLLS: {
      const polls = _map(action.payload.polls, poll => {
        if (Object.prototype.hasOwnProperty.call(state, poll.id)) {
          return {
            ...poll,
            last: state[poll.id].last || false
          };
        }

        return poll;
      });

      return {
        ...state,
        ...arrayToHash(polls)
      };
    }

    default:
      return state;
  }
}
