'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMemberId = exports.getMembers = exports.getUser = undefined;

var _betaseries = require('../../../betaseries');

var _betaseries2 = _interopRequireDefault(_betaseries);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Retrieve user from state
 */
var getUser = exports.getUser = function getUser() {
  return _betaseries2.default.user.userId;
};

/**
 * Retrieve member from state
 */
var getMembers = exports.getMembers = function getMembers(state) {
  return state.members;
};

/**
 * Retrieve member ID from parameters
 */
var getMemberId = exports.getMemberId = function getMemberId(state, _ref) {
  var memberId = _ref.memberId;
  return parseInt(memberId, 10);
};