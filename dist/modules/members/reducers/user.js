'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = membersUserReducer;

var _constants = require('../constants');

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = null;

/**
 * Informations of the authenticated user
 *
 * **Actions listened**:
 *
 *  * `FETCH_USER`
 *
 * @alias module:Members.user
 * @category reducers
 *
 * @example
 * // get reducer
 * BetaSeries.getReducer('members', 'user').membersUser;
 *
 * // state example
 * {
 *   ...user         // user informations
 * }
 *
 * @param {Object} state
 * @param {Object} action
 *
 * @returns {Object}
 */
function membersUserReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case _constants2.default.FETCH_USER:
      return action.payload.member.id;

    default:
      return state;
  }
}