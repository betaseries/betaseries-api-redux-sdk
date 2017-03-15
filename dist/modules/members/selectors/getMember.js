'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reselect = require('reselect');

var _commons = require('./commons');

var commons = _interopRequireWildcard(_commons);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * Select member from state
 *
 * @alias module:Members.getMember
 * @category selectors
 *
 * @example
 * const mapStateToProps = (state, props) => ({
 *   show: BetaSeries.getSelector('members', 'getMember')(state, {
 *     memberId: props.memberId,
 *   });
 * });
 *
 * @param {Object}  [state]           Redux state
 * @param {Object}  [obj]             Accept the folling:
 * @param {Object}  [obj.memberId]    Member ID
 *
 * @returns {Object}                  Member element or `undefined`
 */
var getMember = (0, _reselect.createSelector)([commons.getMembers, commons.getMemberId], function (members, memberId) {
  return !Object.prototype.hasOwnProperty.call(members, memberId) ? undefined : members[memberId];
});

exports.default = getMember;