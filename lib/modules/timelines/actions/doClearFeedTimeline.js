import constants from '../constants';

/**
 * Clear timeline feed events
 *
 * **Dispatch**: `CLEAR_TIMELINE_FEED`
 *
 * @alias module:Timelines.doClearFeedTimeline
 * @category actions
 *
 * @example
 * BetaSeries.getAction('timelines', 'doClearFeedTimeline')();
 *
 * @returns {Promise}
 */
const doClearFeedTimeline = () =>
  dispatch =>
    dispatch({
      type: constants.CLEAR_TIMELINE_FEED
    });

export default doClearFeedTimeline;
