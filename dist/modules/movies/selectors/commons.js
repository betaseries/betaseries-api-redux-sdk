"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Retrieve movies from state
 */
var getMovies = exports.getMovies = function getMovies(state) {
  return state.movies;
};

/**
 * Retrieve member movies from state
 */
var getMemberMovies = exports.getMemberMovies = function getMemberMovies(state) {
  return state.moviesMembers;
};

/**
 * Retrieve member ID from parameters
 */
var getMemberId = exports.getMemberId = function getMemberId(state, _ref) {
  var memberId = _ref.memberId;
  return parseInt(memberId, 10);
};

/**
 * Retrieve state from parameters
 */
var getMovieState = exports.getMovieState = function getMovieState(state, props) {
  var movieState = parseInt(props.state, 10);

  return Number.isInteger(movieState) ? movieState : null;
};