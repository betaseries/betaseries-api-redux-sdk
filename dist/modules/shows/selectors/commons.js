"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Retrieve shows from state
 */
var getShows = exports.getShows = function getShows(state) {
  return state.shows;
};

/**
 * Retrieve episodes from state
 */
var getEpisodes = exports.getEpisodes = function getEpisodes(state) {
  return state.showsEpisodes;
};

/**
 * Retrieve similar shows from state
 */
var getSimilarShows = exports.getSimilarShows = function getSimilarShows(state) {
  return state.showsSimilars;
};

/**
 * Retrieve show ID from parameters
 */
var getShowId = exports.getShowId = function getShowId(state, _ref) {
  var showId = _ref.showId;
  return parseInt(showId, 10);
};

/**
 * Retrieve episode ID from parameters
 */
var getEpisodeId = exports.getEpisodeId = function getEpisodeId(state, _ref2) {
  var episodeId = _ref2.episodeId;
  return parseInt(episodeId, 10);
};

/**
 * Retrieve parameters
 */
var getExtraProps = exports.getExtraProps = function getExtraProps(state, props) {
  return props;
};