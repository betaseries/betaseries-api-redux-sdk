'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reselect = require('reselect');

/**
 * Retrieve shows from state
 */
var getShows = function getShows(state) {
  return state.shows;
};

/**
 * Retrieve ID from parameters
 */
var getShowId = function getShowId(state, _ref) {
  var showId = _ref.showId;
  return showId;
};

/**
 * Select show from state
 *
 * @alias module:Shows.getShow
 * @category selectors
 *
 * @example
 * const mapStateToProps = (state, props) => ({
 *   show: BetaSeries.getSelector('shows', 'getShow')(state, { showId: props.showId });
 * });
 *
 * @param {Object}  [state]           Redux state
 * @param {Object}  [obj]             Accept the folling:
 * @param {Object}  [obj.showId]      Show ID
 *
 * @returns {Object}                  Show element or null
 */
var getShow = (0, _reselect.createSelector)([getShows, getShowId], function (shows, showId) {
  return !Object.prototype.hasOwnProperty.call(shows, showId) ? null : shows[showId];
});

exports.default = getShow;