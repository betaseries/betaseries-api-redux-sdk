'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _doFetchComment = require('./comments/actions/doFetchComment');

var _doFetchComment2 = _interopRequireDefault(_doFetchComment);

var _doFetchEpisodeComments = require('./comments/actions/doFetchEpisodeComments');

var _doFetchEpisodeComments2 = _interopRequireDefault(_doFetchEpisodeComments);

var _doFetchShowComments = require('./comments/actions/doFetchShowComments');

var _doFetchShowComments2 = _interopRequireDefault(_doFetchShowComments);

var _comments = require('./comments/reducers/comments');

var _comments2 = _interopRequireDefault(_comments);

var _episodes = require('./comments/reducers/episodes');

var _episodes2 = _interopRequireDefault(_episodes);

var _shows = require('./comments/reducers/shows');

var _shows2 = _interopRequireDefault(_shows);

var _constants = require('./comments/constants');

var _constants2 = _interopRequireDefault(_constants);

var _doFetchFavoriteMovies = require('./movies/actions/doFetchFavoriteMovies');

var _doFetchFavoriteMovies2 = _interopRequireDefault(_doFetchFavoriteMovies);

var _doFetchMemberMovies = require('./movies/actions/doFetchMemberMovies');

var _doFetchMemberMovies2 = _interopRequireDefault(_doFetchMemberMovies);

var _doFetchMovie = require('./movies/actions/doFetchMovie');

var _doFetchMovie2 = _interopRequireDefault(_doFetchMovie);

var _doFetchMovieCharacters = require('./movies/actions/doFetchMovieCharacters');

var _doFetchMovieCharacters2 = _interopRequireDefault(_doFetchMovieCharacters);

var _characters = require('./movies/reducers/characters');

var _characters2 = _interopRequireDefault(_characters);

var _favorites = require('./movies/reducers/favorites');

var _favorites2 = _interopRequireDefault(_favorites);

var _members = require('./movies/reducers/members');

var _members2 = _interopRequireDefault(_members);

var _movies = require('./movies/reducers/movies');

var _movies2 = _interopRequireDefault(_movies);

var _constants3 = require('./movies/constants');

var _constants4 = _interopRequireDefault(_constants3);

var _doClearSearchShows = require('./searchs/actions/doClearSearchShows');

var _doClearSearchShows2 = _interopRequireDefault(_doClearSearchShows);

var _doSearchShows = require('./searchs/actions/doSearchShows');

var _doSearchShows2 = _interopRequireDefault(_doSearchShows);

var _shows3 = require('./searchs/reducers/shows');

var _shows4 = _interopRequireDefault(_shows3);

var _constants5 = require('./searchs/constants');

var _constants6 = _interopRequireDefault(_constants5);

var _doFetchEpisode = require('./shows/actions/doFetchEpisode');

var _doFetchEpisode2 = _interopRequireDefault(_doFetchEpisode);

var _doFetchEpisodeByCode = require('./shows/actions/doFetchEpisodeByCode');

var _doFetchEpisodeByCode2 = _interopRequireDefault(_doFetchEpisodeByCode);

var _doFetchFavoriteShows = require('./shows/actions/doFetchFavoriteShows');

var _doFetchFavoriteShows2 = _interopRequireDefault(_doFetchFavoriteShows);

var _doFetchLatestEpisode = require('./shows/actions/doFetchLatestEpisode');

var _doFetchLatestEpisode2 = _interopRequireDefault(_doFetchLatestEpisode);

var _doFetchManyEpisodes = require('./shows/actions/doFetchManyEpisodes');

var _doFetchManyEpisodes2 = _interopRequireDefault(_doFetchManyEpisodes);

var _doFetchManyShows = require('./shows/actions/doFetchManyShows');

var _doFetchManyShows2 = _interopRequireDefault(_doFetchManyShows);

var _doFetchShow = require('./shows/actions/doFetchShow');

var _doFetchShow2 = _interopRequireDefault(_doFetchShow);

var _doFetchShowCharacters = require('./shows/actions/doFetchShowCharacters');

var _doFetchShowCharacters2 = _interopRequireDefault(_doFetchShowCharacters);

var _doFetchShowEpisodes = require('./shows/actions/doFetchShowEpisodes');

var _doFetchShowEpisodes2 = _interopRequireDefault(_doFetchShowEpisodes);

var _doFetchSimilarShows = require('./shows/actions/doFetchSimilarShows');

var _doFetchSimilarShows2 = _interopRequireDefault(_doFetchSimilarShows);

var _characters3 = require('./shows/reducers/characters');

var _characters4 = _interopRequireDefault(_characters3);

var _episodes3 = require('./shows/reducers/episodes');

var _episodes4 = _interopRequireDefault(_episodes3);

var _favorites3 = require('./shows/reducers/favorites');

var _favorites4 = _interopRequireDefault(_favorites3);

var _latestEpisodes = require('./shows/reducers/latestEpisodes');

var _latestEpisodes2 = _interopRequireDefault(_latestEpisodes);

var _shows5 = require('./shows/reducers/shows');

var _shows6 = _interopRequireDefault(_shows5);

var _similars = require('./shows/reducers/similars');

var _similars2 = _interopRequireDefault(_similars);

var _constants7 = require('./shows/constants');

var _constants8 = _interopRequireDefault(_constants7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  comments: {
    actions: {
      doFetchComment: _doFetchComment2.default,
      doFetchEpisodeComments: _doFetchEpisodeComments2.default,
      doFetchShowComments: _doFetchShowComments2.default
    },
    reducers: {
      comments: _comments2.default,
      episodes: _episodes2.default,
      shows: _shows2.default
    },
    constants: _constants2.default
  },
  movies: {
    actions: {
      doFetchFavoriteMovies: _doFetchFavoriteMovies2.default,
      doFetchMemberMovies: _doFetchMemberMovies2.default,
      doFetchMovie: _doFetchMovie2.default,
      doFetchMovieCharacters: _doFetchMovieCharacters2.default
    },
    reducers: {
      characters: _characters2.default,
      favorites: _favorites2.default,
      members: _members2.default,
      movies: _movies2.default
    },
    constants: _constants4.default
  },
  searchs: {
    actions: {
      doClearSearchShows: _doClearSearchShows2.default,
      doSearchShows: _doSearchShows2.default
    },
    reducers: {
      shows: _shows4.default
    },
    constants: _constants6.default
  },
  shows: {
    actions: {
      doFetchEpisode: _doFetchEpisode2.default,
      doFetchEpisodeByCode: _doFetchEpisodeByCode2.default,
      doFetchFavoriteShows: _doFetchFavoriteShows2.default,
      doFetchLatestEpisode: _doFetchLatestEpisode2.default,
      doFetchManyEpisodes: _doFetchManyEpisodes2.default,
      doFetchManyShows: _doFetchManyShows2.default,
      doFetchShow: _doFetchShow2.default,
      doFetchShowCharacters: _doFetchShowCharacters2.default,
      doFetchShowEpisodes: _doFetchShowEpisodes2.default,
      doFetchSimilarShows: _doFetchSimilarShows2.default
    },
    reducers: {
      characters: _characters4.default,
      episodes: _episodes4.default,
      favorites: _favorites4.default,
      latestEpisodes: _latestEpisodes2.default,
      shows: _shows6.default,
      similars: _similars2.default
    },
    constants: _constants8.default
  }
};