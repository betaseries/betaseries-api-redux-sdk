"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Retrieve comments from state
 */
var getComments = exports.getComments = function getComments(state) {
  return state.comments;
};

/**
 * Retrieve show comments from state
 */
var getShowComments = exports.getShowComments = function getShowComments(state) {
  return state.commentsShows;
};

/**
 * Retrieve episode comments from state
 */
var getEpisodeComments = exports.getEpisodeComments = function getEpisodeComments(state) {
  return state.commentsEpisodes;
};

/**
 * Retrieve comment ID from parameters
 */
var getCommentId = exports.getCommentId = function getCommentId(state, _ref) {
  var commentId = _ref.commentId;
  return parseInt(commentId, 10);
};

/**
 * Retrieve show ID from parameters
 */
var getShowId = exports.getShowId = function getShowId(state, _ref2) {
  var showId = _ref2.showId;
  return parseInt(showId, 10);
};

/**
 * Retrieve episode ID from parameters
 */
var getEpisodeId = exports.getEpisodeId = function getEpisodeId(state, _ref3) {
  var episodeId = _ref3.episodeId;
  return parseInt(episodeId, 10);
};