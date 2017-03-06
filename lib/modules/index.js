import doFetchCommentComments from './comments/actions/doFetchComment';
import doFetchEpisodeCommentsComments from './comments/actions/doFetchEpisodeComments';
import doFetchShowCommentsComments from './comments/actions/doFetchShowComments';
import commentsComments from './comments/reducers/comments';
import episodesComments from './comments/reducers/episodes';
import showsComments from './comments/reducers/shows';
import constantsComments from './comments/constants';
import doFetchFavoriteMoviesMovies from './movies/actions/doFetchFavoriteMovies';
import doFetchMemberMoviesMovies from './movies/actions/doFetchMemberMovies';
import doFetchMovieMovies from './movies/actions/doFetchMovie';
import doFetchMovieCharactersMovies from './movies/actions/doFetchMovieCharacters';
import charactersMovies from './movies/reducers/characters';
import favoritesMovies from './movies/reducers/favorites';
import membersMovies from './movies/reducers/members';
import moviesMovies from './movies/reducers/movies';
import constantsMovies from './movies/constants';
import doClearSearchShowsSearchs from './searchs/actions/doClearSearchShows';
import doSearchShowsSearchs from './searchs/actions/doSearchShows';
import showsSearchs from './searchs/reducers/shows';
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
    constants: constantsComments,
  },
  movies: {
    actions: {
      doFetchFavoriteMovies: doFetchFavoriteMoviesMovies,
      doFetchMemberMovies: doFetchMemberMoviesMovies,
      doFetchMovie: doFetchMovieMovies,
      doFetchMovieCharacters: doFetchMovieCharactersMovies,
    },
    reducers: {
      characters: charactersMovies,
      favorites: favoritesMovies,
      members: membersMovies,
      movies: moviesMovies,
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
    constants: constantsShows,
  },
};
