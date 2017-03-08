'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reselect = require('reselect');

var _commons = require('./commons');

var commons = _interopRequireWildcard(_commons);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * Select authenticated user from state
 *
 * @alias module:Members.getUser
 * @category selectors
 *
 * @example
 * const mapStateToProps = (state, props) => ({
 *   show: BetaSeries.getSelector('members', 'getUser')(state);
 * });
 *
 * @param {Object}  [state]           Redux state
 *
 * @returns {Object}                  Member element or `null`
 */
var getUser = (0, _reselect.createSelector)([commons.getUser, commons.getMembers], function (user, members) {
  return !Object.prototype.hasOwnProperty.call(members, user) ? null : members[user];
});

exports.default = getUser;