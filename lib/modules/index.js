import doFetchFavoriteMoviesMovies from './movies/actions/doFetchFavoriteMovies';
import doFetchMemberMoviesMovies from './movies/actions/doFetchMemberMovies';
import doFetchMovieMovies from './movies/actions/doFetchMovie';
import doFetchMovieCharactersMovies from './movies/actions/doFetchMovieCharacters';
import charactersMovies from './movies/reducers/characters';
import favoritesMovies from './movies/reducers/favorites';
import membersMovies from './movies/reducers/members';
import moviesMovies from './movies/reducers/movies';
import constantsMovies from './movies/constants';
import doFetchFavoriteShowsShows from './shows/actions/doFetchFavoriteShows';
import doFetchManyShowsShows from './shows/actions/doFetchManyShows';
import doFetchShowShows from './shows/actions/doFetchShow';
import doFetchShowCharactersShows from './shows/actions/doFetchShowCharacters';
import doFetchShowEpisodesShows from './shows/actions/doFetchShowEpisodes';
import doFetchSimilarShowsShows from './shows/actions/doFetchSimilarShows';
import charactersShows from './shows/reducers/characters';
import episodesShows from './shows/reducers/episodes';
import favoritesShows from './shows/reducers/favorites';
import showsShows from './shows/reducers/shows';
import similarsShows from './shows/reducers/similars';
import constantsShows from './shows/constants';

export default {
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
  shows: {
    actions: {
      doFetchFavoriteShows: doFetchFavoriteShowsShows,
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
      shows: showsShows,
      similars: similarsShows,
    },
    constants: constantsShows,
  },
}