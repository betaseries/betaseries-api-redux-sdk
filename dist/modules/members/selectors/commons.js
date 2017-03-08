"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Retrieve user from state
 */
var getUser = exports.getUser = function getUser(state) {
  return state.membersUser;
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