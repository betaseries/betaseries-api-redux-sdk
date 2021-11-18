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
 * BetaSeries.getAction('home', 'doFetchHomeBlocks')();
 *
 * @param {Object}  [obj]       Accept the following:
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
