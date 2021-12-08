import constants from '../constants';
import ApiFetch from '../../../utils/fetch/ApiFetch';

/**
 * Retrieve Home blocks
 *
 * **Dispatch**: `FETCH_HOME_BLOCKS`
 *
 * @alias module:Home.doFetchHomeBlocks
 * @category actions
 *
 * @example
 * BetaSeries.getAction('home', 'doFetchHomeBlocks')({ app: 1 });
 *
 * @param {Object}  [obj]       Accept the following:
 * @param {Number}  [obj.app]   Info to display blocks for app or not, [0 = web by default, 1 = app] (optional)
 *
 * @returns {Promise}
 */
const doFetchHomeBlocks = ({ ...props }) =>
  dispatch =>
    ApiFetch.get('home/blocks', { ...props }).then(response =>
      dispatch({
        type: constants.FETCH_HOME_BLOCKS,
        payload: {
          ...props,
          blocks: response.blocks
        }
      }));

export default doFetchHomeBlocks;
