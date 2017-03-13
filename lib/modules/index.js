import doFetchCommentComments from './comments/actions/doFetchComment';
import doFetchEpisodeCommentsComments from './comments/actions/doFetchEpisodeComments';
import doFetchShowCommentsComments from './comments/actions/doFetchShowComments';
import commentsComments from './comments/reducers/comments';
import episodesComments from './comments/reducers/episodes';
import showsComments from './comments/reducers/shows';
import commonsComments from './comments/selectors/commons';
import getCommentComments from './comments/selectors/getComment';
import getEpisodeCommentsComments from './comments/selectors/getEpisodeComments';
import getShowCommentsComments from './comments/selectors/getShowComments';
import constantsComments from './comments/constants';
import doFetchMemberMembers from './members/actions/doFetchMember';
import doFetchUserMembers from './members/actions/doFetchUser';
import membersMembers from './members/reducers/members';
import userMembers from './members/reducers/user';
import commonsMembers from './members/selectors/commons';
import getMemberMembers from './members/selectors/getMember';
import getUserMembers from './members/selectors/getUser';
import constantsMembers from './members/constants';
import doFetchFavoriteMoviesMovies from './movies/actions/doFetchFavoriteMovies';
import doFetchMemberMoviesMovies from './movies/actions/doFetchMemberMovies';
import doFetchMovieMovies from './movies/actions/doFetchMovie';
import doFetchMovieCharactersMovies from './movies/actions/doFetchMovieCharacters';
import doRateMovieMovies from './movies/actions/doRateMovie';
import doRemoveMovieMemberMovies from './movies/actions/doRemoveMovieMember';
import doUpdateMovieStateMovies from './movies/actions/doUpdateMovieState';
import charactersMovies from './movies/reducers/characters';
import favoritesMovies from './movies/reducers/favorites';
import membersMovies from './movies/reducers/members';
import moviesMovies from './movies/reducers/movies';
import commonsMovies from './movies/selectors/commons';
import getMemberMoviesMovies from './movies/selectors/getMemberMovies';
import constantsMovies from './movies/constants';
import doClearSearchShowsSearchs from './searchs/actions/doClearSearchShows';
import doSearchShowsSearchs from './searchs/actions/doSearchShows';
import showsSearchs from './searchs/reducers/shows';
import commonsSearchs from './searchs/selectors/commons';
import getSearchShowsSearchs from './searchs/selectors/getSearchShows';
import constantsSearchs from './searchs/constants';
import doFetchEpisodeShows from './shows/actions/doFetchEpisode';
import doFetchEpisodeByCodeShows from './shows/actions/doFetchEpisodeByCode';
import doFetchFavoriteShowsShows from './shows/actions/doFetchFavoriteShows';
import doFetchLatestEpisodeShows from './shows/actions/doFetchLatestEpisode';
import doFetchManyEpisodesShows from './shows/actions/doFetchManyEpisodes';
import doFetchManyShowsShows from './shows/actions/doFetchManyShows';
import doFetchShowShows from './shows/actions/doFetchShow';
import doFetchShowCharactersShows from './shows/actions/doFetchShowCharacters';
import doFetchShowEpisodesShows from './shows/actions/doFetchShowEpisodes';
import doFetchSimilarShowsShows from './shows/actions/doFetchSimilarShows';
import charactersShows from './shows/reducers/characters';
import episodesShows from './shows/reducers/episodes';
import favoritesShows from './shows/reducers/favorites';
import latestEpisodesShows from './shows/reducers/latestEpisodes';
import showsShows from './shows/reducers/shows';
import similarsShows from './shows/reducers/similars';
import commonsShows from './shows/selectors/commons';
import getEpisodeShows from './shows/selectors/getEpisode';
import getLatestShowEpisodeShows from './shows/selectors/getLatestShowEpisode';
import getShowShows from './shows/selectors/getShow';
import getShowEpisodeByCodeShows from './shows/selectors/getShowEpisodeByCode';
import getShowEpisodesShows from './shows/selectors/getShowEpisodes';
import getSimilarShowsShows from './shows/selectors/getSimilarShows';
import constantsShows from './shows/constants';

export default {
  comments: {
    actions: {
      doFetchComment: doFetchCommentComments,
      doFetchEpisodeComments: doFetchEpisodeCommentsComments,
      doFetchShowComments: doFetchShowCommentsComments,
    },
    reducers: {
      comments: commentsComments,
      episodes: episodesComments,
      shows: showsComments,
    },
    selectors: {
      commons: commonsComments,
      getComment: getCommentComments,
      getEpisodeComments: getEpisodeCommentsComments,
      getShowComments: getShowCommentsComments,
    },
    constants: constantsComments,
  },
  members: {
    actions: {
      doFetchMember: doFetchMemberMembers,
      doFetchUser: doFetchUserMembers,
    },
    reducers: {
      members: membersMembers,
      user: userMembers,
    },
    selectors: {
      commons: commonsMembers,
      getMember: getMemberMembers,
      getUser: getUserMembers,
    },
    constants: constantsMembers,
  },
  movies: {
    actions: {
      doFetchFavoriteMovies: doFetchFavoriteMoviesMovies,
      doFetchMemberMovies: doFetchMemberMoviesMovies,
      doFetchMovie: doFetchMovieMovies,
      doFetchMovieCharacters: doFetchMovieCharactersMovies,
      doRateMovie: doRateMovieMovies,
      doRemoveMovieMember: doRemoveMovieMemberMovies,
      doUpdateMovieState: doUpdateMovieStateMovies,
    },
    reducers: {
      characters: charactersMovies,
      favorites: favoritesMovies,
      members: membersMovies,
      movies: moviesMovies,
    },
    selectors: {
      commons: commonsMovies,
      getMemberMovies: getMemberMoviesMovies,
    },
    constants: constantsMovies,
  },
  searchs: {
    actions: {
      doClearSearchShows: doClearSearchShowsSearchs,
      doSearchShows: doSearchShowsSearchs,
    },
    reducers: {
      shows: showsSearchs,
    },
    selectors: {
      commons: commonsSearchs,
      getSearchShows: getSearchShowsSearchs,
    },
    constants: constantsSearchs,
  },
  shows: {
    actions: {
      doFetchEpisode: doFetchEpisodeShows,
      doFetchEpisodeByCode: doFetchEpisodeByCodeShows,
      doFetchFavoriteShows: doFetchFavoriteShowsShows,
      doFetchLatestEpisode: doFetchLatestEpisodeShows,
      doFetchManyEpisodes: doFetchManyEpisodesShows,
      doFetchManyShows: doFetchManyShowsShows,
      doFetchShow: doFetchShowShows,
      doFetchShowCharacters: doFetchShowCharactersShows,
      doFetchShowEpisodes: doFetchShowEpisodesShows,
      doFetchSimilarShows: doFetchSimilarShowsShows,
    },
    reducers: {
      characters: charactersShows,
      episodes: episodesShows,
      favorites: favoritesShows,
      latestEpisodes: latestEpisodesShows,
      shows: showsShows,
      similars: similarsShows,
    },
    selectors: {
      commons: commonsShows,
      getEpisode: getEpisodeShows,
      getLatestShowEpisode: getLatestShowEpisodeShows,
      getShow: getShowShows,
      getShowEpisodeByCode: getShowEpisodeByCodeShows,
      getShowEpisodes: getShowEpisodesShows,
      getSimilarShows: getSimilarShowsShows,
    },
    constants: constantsShows,
  },
};
