/**
 * Retrieve movies from state
 */
export const getMovies = state => state.movies;

/**
 * Retrieve member movies from state
 */
export const getMemberMovies = state => state.moviesMembers;

/**
 * Retrieve movies articles from state
 */
export const getArticles = state => state.moviesArticles;

/**
 * Retrieve genres movies from state
 */
export const getGenres = state => state.moviesGenres;

/**
 * Retrieve member ID from parameters
 */
export const getMemberId = (state, { memberId }) => parseInt(memberId, 10);

/**
 * Retrieve movie ID from parameters
 */
export const getMovieId = (state, { movieId }) => parseInt(movieId, 10);

/**
 * Retrieve state from parameters
 */
export const getMovieState = (state, props) => {
  const movieState = parseInt(props.state, 10);

  return Number.isInteger(movieState) ? movieState : null;
};

/**
 * Retrieve tags from state
 */
export const getTags = state => state.moviesTags;
