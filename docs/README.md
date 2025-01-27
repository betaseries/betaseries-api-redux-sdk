# Docs

Here is the guide for using BetaSeries API Redux SDK. Enjoy.

## Topics

* [BetaSeries API](betaseries.md)
* [Members module](members.md)
* [Shows module](shows.md)
* [Movies module](movies.md)
* [Comments module](comments.md)
* [Searchs module](searchs.md)
* [Timelines module](timelines.md)
* [Badges module](badges.md)
* [Polls module](polls.md)
* [Blog module](blog.md)
* [Platforms module](platforms.md)
* [Collections module](collections.md)
* [Home module](home.md)
* [Quiz module](quiz.md)

## Usage example

```js
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import BetaSeries from 'betaseries-api-redux-sdk';

BetaSeries.init({ apiKey: '*******'});
BetaSeries.setUser({ token: '*******' userId: 28113 });

const store = createStore(
  combineReducers({
    ...BetaSeries.getReducer('movies', 'favorites'),    // moviesFavorites
    ...BetaSeries.getReducer('movies', 'members'),      // moviesMembers
    ...BetaSeries.getReducer('movies', 'movies'),       // movies
  }),
  compose(applyMiddleware(thunkMiddleware)),
);

store.dispatch(
  BetaSeries.getAction('movies', 'doFetchMovie')({ movieId: 1 })
)
.then(console.log)
.catch(console.error);
```
