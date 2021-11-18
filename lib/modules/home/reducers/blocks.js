import constants from '../constants';

const initialState = [];

/**
 * List of the home blocks
 *
 * **Actions listened**:
 *
 *  * `FETCH_HOME_BLOCKS`
 *
 * @alias module:Home.blocks
 * @category reducers
 *
 * @example
 * // get reducer
 * BetaSeries.getReducer('home', 'blocks').homeBlocks;
 *
 * // state example
 * [
 *     {
 *       type: 'meta',     // block type
 *       ...block       // block element
 *     },
 *     ...
  * ]
 *
 * @param {Object} state
 * @param {Object} action
 *
 * @returns {Object}
 */
export default function blocksHomeReducer(state = initialState, action) {
  switch (action.type) {
    case constants.FETCH_HOME_BLOCKS:
      return action.payload.blocks;

    default:
      return state;
  }
}
