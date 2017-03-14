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

var _commons = require('./comments/selectors/commons');

var _commons2 = _interopRequireDefault(_commons);

var _getComment = require('./comments/selectors/getComment');

var _getComment2 = _interopRequireDefault(_getComment);

var _getEpisodeComments = require('./comments/selectors/getEpisodeComments');

var _getEpisodeComments2 = _interopRequireDefault(_getEpisodeComments);

var _getShowComments = require('./comments/selectors/getShowComments');

var _getShowComments2 = _interopRequireDefault(_getShowComments);

var _constants = require('./comments/constants');

var _constants2 = _interopRequireDefault(_constants);

var _doFetchMember = require('./members/actions/doFetchMember');

var _doFetchMember2 = _interopRequireDefault(_doFetchMember);

var _doFetchUser = require('./members/actions/doFetchUser');

var _doFetchUser2 = _interopRequireDefault(_doFetchUser);

var _members = require('./members/reducers/members');

var _members2 = _interopRequireDefault(_members);

var _commons3 = require('./members/selectors/commons');

var _commons4 = _interopRequireDefault(_commons3);

var _getMember = require('./members/selectors/getMember');

var _getMember2 = _interopRequireDefault(_getMember);

var _getUser = require('./members/selectors/getUser');

var _getUser2 = _interopRequireDefault(_getUser);

var _constants3 = require('./members/constants');

var _constants4 = _interopRequireDefault(_constants3);

var _doFetchFavoriteMovies = require('./movies/actions/doFetchFavoriteMovies');

var _doFetchFavoriteMovies2 = _interopRequireDefault(_doFetchFavoriteMovies);

var _doFetchMemberMovies = require('./movies/actions/doFetchMemberMovies');

var _doFetchMemberMovies2 = _interopRequireDefault(_doFetchMemberMovies);

var _doFetchMovie = require('./movies/actions/doFetchMovie');

var _doFetchMovie2 = _interopRequireDefault(_doFetchMovie);

var _doFetchMovieCharacters = require('./movies/actions/doFetchMovieCharacters');

var _doFetchMovieCharacters2 = _interopRequireDefault(_doFetchMovieCharacters);

var _doRateMovie = require('./movies/actions/doRateMovie');

var _doRateMovie2 = _interopRequireDefault(_doRateMovie);

var _doRemoveMovieMember = require('./movies/actions/doRemoveMovieMember');

var _doRemoveMovieMember2 = _interopRequireDefault(_doRemoveMovieMember);

var _doUpdateMovieState = require('./movies/actions/doUpdateMovieState');

var _doUpdateMovieState2 = _interopRequireDefault(_doUpdateMovieState);

var _characters = require('./movies/reducers/characters');

var _characters2 = _interopRequireDefault(_characters);

var _favorites = require('./movies/reducers/favorites');

var _favorites2 = _interopRequireDefault(_favorites);

var _members3 = require('./movies/reducers/members');

var _members4 = _interopRequireDefault(_members3);

var _movies = require('./movies/reducers/movies');

var _movies2 = _interopRequireDefault(_movies);

var _commons5 = require('./movies/selectors/commons');

var _commons6 = _interopRequireDefault(_commons5);

var _getMemberMovies = require('./movies/selectors/getMemberMovies');

var _getMemberMovies2 = _interopRequireDefault(_getMemberMovies);

var _constants5 = require('./movies/constants');

var _constants6 = _interopRequireDefault(_constants5);

var _doClearSearchShows = require('./searchs/actions/doClearSearchShows');

var _doClearSearchShows2 = _interopRequireDefault(_doClearSearchShows);

var _doSearchShows = require('./searchs/actions/doSearchShows');

var _doSearchShows2 = _interopRequireDefault(_doSearchShows);

var _shows3 = require('./searchs/reducers/shows');

var _shows4 = _interopRequireDefault(_shows3);

var _commons7 = require('./searchs/selectors/commons');

var _commons8 = _interopRequireDefault(_commons7);

var _getSearchShows = require('./searchs/selectors/getSearchShows');

var _getSearchShows2 = _interopRequireDefault(_getSearchShows);

var _constants7 = require('./searchs/constants');

var _constants8 = _interopRequireDefault(_constants7);

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

var _commons9 = require('./shows/selectors/commons');

var _commons10 = _interopRequireDefault(_commons9);

var _getEpisode = require('./shows/selectors/getEpisode');

var _getEpisode2 = _interopRequireDefault(_getEpisode);

var _getLatestShowEpisode = require('./shows/selectors/getLatestShowEpisode');

var _getLatestShowEpisode2 = _interopRequireDefault(_getLatestShowEpisode);

var _getShow = require('./shows/selectors/getShow');

var _getShow2 = _interopRequireDefault(_getShow);

var _getShowEpisodeByCode = require('./shows/selectors/getShowEpisodeByCode');

var _getShowEpisodeByCode2 = _interopRequireDefault(_getShowEpisodeByCode);

var _getShowEpisodes = require('./shows/selectors/getShowEpisodes');

var _getShowEpisodes2 = _interopRequireDefault(_getShowEpisodes);

var _getSimilarShows = require('./shows/selectors/getSimilarShows');

var _getSimilarShows2 = _interopRequireDefault(_getSimilarShows);

var _constants9 = require('./shows/constants');

var _constants10 = _interopRequireDefault(_constants9);

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
    selectors: {
      commons: _commons2.default,
      getComment: _getComment2.default,
      getEpisodeComments: _getEpisodeComments2.default,
      getShowComments: _getShowComments2.default
    },
    constants: _constants2.default
  },
  members: {
    actions: {
      doFetchMember: _doFetchMember2.default,
      doFetchUser: _doFetchUser2.default
    },
    reducers: {
      members: _members2.default
    },
    selectors: {
      commons: _commons4.default,
      getMember: _getMember2.default,
      getUser: _getUser2.default
    },
    constants: _constants4.default
  },
  movies: {
    actions: {
      doFetchFavoriteMovies: _doFetchFavoriteMovies2.default,
      doFetchMemberMovies: _doFetchMemberMovies2.default,
      doFetchMovie: _doFetchMovie2.default,
      doFetchMovieCharacters: _doFetchMovieCharacters2.default,
      doRateMovie: _doRateMovie2.default,
      doRemoveMovieMember: _doRemoveMovieMember2.default,
      doUpdateMovieState: _doUpdateMovieState2.default
    },
    reducers: {
      characters: _characters2.default,
      favorites: _favorites2.default,
      members: _members4.default,
      movies: _movies2.default
    },
    selectors: {
      commons: _commons6.default,
      getMemberMovies: _getMemberMovies2.default
    },
    constants: _constants6.default
  },
  searchs: {
    actions: {
      doClearSearchShows: _doClearSearchShows2.default,
      doSearchShows: _doSearchShows2.default
    },
    reducers: {
      shows: _shows4.default
    },
    selectors: {
      commons: _commons8.default,
      getSearchShows: _getSearchShows2.default
    },
    constants: _constants8.default
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
    selectors: {
      commons: _commons10.default,
      getEpisode: _getEpisode2.default,
      getLatestShowEpisode: _getLatestShowEpisode2.default,
      getShow: _getShow2.default,
      getShowEpisodeByCode: _getShowEpisodeByCode2.default,
      getShowEpisodes: _getShowEpisodes2.default,
      getSimilarShows: _getSimilarShows2.default
    },
    constants: _constants10.default
  }
};