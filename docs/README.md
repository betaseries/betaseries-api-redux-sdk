# Docs

Here is the guide for using BetaSeries API Redux SDK. Enjoy.

## Topics

* [BetaSeries API](betaseries.md)
* [Shows module](shows.md)
* [Movies module](movies.md)

## Usage example

```js
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import BetaSeries from 'betaseries-api-redux-sdk';

BetaSeries.init({ apiKey: '*******'});
BetaSeries.setToken('*******');

const store = createStore(
  combineReducers({
    favoriteMovies: BetaSeries.getReducer('movies', 'favorites'),
    memberMovies: BetaSeries.getReducer('movies', 'members'),
    movies: BetaSeries.getReducer('movies', 'movies'),
  }),
  compose(applyMiddleware(thunkMiddleware)),
);

store.dispatch(
  BetaSeries.getAction('movies', 'doFetchMovie')({ movieId: 1 })
)
.then(console.log)
.catch(console.error);
```
