import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import BetaSeries from '../lib/betaseries';

BetaSeries.init({ apiKey: 'ca8c5c15dfba'});
BetaSeries.setToken('af19aa2122eb');

const store = createStore(
  combineReducers({
    favoriteMovies: BetaSeries.getReducer('movies', 'favorites'),
    movieCharacters: BetaSeries.getReducer('movies', 'characters'),
    memberMovies: BetaSeries.getReducer('movies', 'members'),
    movies: BetaSeries.getReducer('movies', 'movies'),
    shows: BetaSeries.getReducer('shows', 'shows'),
    showCharacters: BetaSeries.getReducer('shows', 'characters'),
    showEpisodes: BetaSeries.getReducer('shows', 'episodes'),
    similarShows: BetaSeries.getReducer('shows', 'similars'),
    favoriteShows: BetaSeries.getReducer('shows', 'favorites'),
  }),
  compose(
    applyMiddleware(
      thunkMiddleware
    )
  ),
);

store.dispatch(BetaSeries.getAction('shows', 'doFetchFavoriteShows')({ memberId: 1 })).then(() => {
  console.log(store.getState());
}).catch(error => {
  console.log({ error });
});
