[Back to API index](README.md)

# Movies

* [Movies](#module_Movies)
    * _actions_
        * [.doFetchFavoriteMovies([obj])](#module_Movies.doFetchFavoriteMovies) ⇒ {Promise}
        * [.doFetchManyMovies([obj])](#module_Movies.doFetchManyMovies) ⇒ {Promise}
        * [.doFetchMemberMovies([obj])](#module_Movies.doFetchMemberMovies) ⇒ {Promise}
        * [.doFetchMemberMoviesList([obj])](#module_Movies.doFetchMemberMoviesList) ⇒ {Promise}
        * [.doFetchMovie([obj])](#module_Movies.doFetchMovie) ⇒ {Promise}
        * [.doFetchMovieArticles([obj])](#module_Movies.doFetchMovieArticles) ⇒ {Promise}
        * [.doFetchMovieCharacters([obj])](#module_Movies.doFetchMovieCharacters) ⇒ {Promise}
        * [.doRateMovie([obj])](#module_Movies.doRateMovie) ⇒ {Promise}
        * [.doRemoveMovieFavorite([obj])](#module_Movies.doRemoveMovieFavorite) ⇒ {Promise}
        * [.doRemoveMovieMember([obj])](#module_Movies.doRemoveMovieMember) ⇒ {Promise}
        * [.doUpdateMovieState([obj])](#module_Movies.doUpdateMovieState) ⇒ {Promise}
    * _reducers_
        * [.articles(state, action)](#module_Movies.articles) ⇒ {Object}
        * [.characters(state, action)](#module_Movies.characters) ⇒ {Object}
        * [.favorites(state, action)](#module_Movies.favorites) ⇒ {Object}
        * [.members(state, action)](#module_Movies.members) ⇒ {Object}
        * [.movies(state, action)](#module_Movies.movies) ⇒ {Object}
    * _selectors_
        * [.getMemberMovies](#module_Movies.getMemberMovies) ⇒ {Array}
        * [.getMovie](#module_Movies.getMovie) ⇒ {Array}
        * [.getMovieArticles](#module_Movies.getMovieArticles) ⇒ {Array}

<a name="module_Movies.doFetchFavoriteMovies"></a>

### .doFetchFavoriteMovies([obj])

Retrieve favorite movies of the member

**Dispatch**: `FETCH_FAVORITE_MOVIES`

**Returns**: {Promise}

**Category**: actions  

| Param | Type | Description |
| --- | --- | --- |
| [obj] | {Object} | Accept the following: |
| [obj.memberId] | {Number} | member ID |
| [obj.start] | {Number} | Used for paginate (`0` by default) |
| [obj.limit] | {Number} | Used for paginate (optional) |
| [obj.summary] | {String} | Only importanzt info (optional) |

**Example**  

```js
BetaSeries.getAction('movies', 'doFetchFavoriteMovies')({ memberId: 1 });
```

<a name="module_Movies.doFetchManyMovies"></a>

### .doFetchManyMovies([obj])

Retrieve many movies

**Dispatch**: `FETCH_MANY_MOVIES`

**Returns**: {Promise}

**Category**: actions  

| Param | Type | Description |
| --- | --- | --- |
| [obj] | {Object} | Accept the following: |
| [obj.movieIds] | {Array} | List of movies ID |

**Example**  

```js
BetaSeries.getAction('movies', 'doFetchManyMovies')({ movieIds: [1275, 481] });
```

<a name="module_Movies.doFetchMemberMovies"></a>

### .doFetchMemberMovies([obj])

Retrieve movies of the member

**Dispatch**: `FETCH_MEMBER_MOVIES`

**Returns**: {Promise}

**Category**: actions  

| Param | Type | Description |
| --- | --- | --- |
| [obj] | {Object} | Accept the following: |
| [obj.memberId] | {Number} | Member ID |
| [obj.state] | {Number} | State of movie   (`0` = to see, `1` = seen, `2` = doesn't want to see (`0` by default)) |
| [obj.start] | {Number} | Used for paginate (`0` by default) |
| [obj.limit] | {Number} | Used for paginate (optional) |
| [obj.order] | {String} | Sort order (`alphabetical`, `popularity`, `added` (optional)) |

**Example**  

```js
BetaSeries.getAction('movies', 'doFetchMemberMovies')({ memberId: 1 });
```

<a name="module_Movies.doFetchMemberMoviesList"></a>

### .doFetchMemberMoviesList([obj])

Retrieve movies list of the member

**Dispatch**: `FETCH_MEMBER_MOVIES_LIST`

**Returns**: {Promise}

**Category**: actions  

| Param | Type | Description |
| --- | --- | --- |
| [obj] | {Object} | Accept the following: |
| [obj.memberId] | {Number} | Member ID |
| [obj.state] | {Number} | State of movie   (`0` = to see, `1` = seen, `2` = doesn't want to see (`0` by default)) |
| [obj.start] | {Number} | Used for paginate (`0` by default) |
| [obj.limit] | {Number} | Used for paginate (optional) |
| [obj.order] | {String} | Sort order (`alphabetical`, `popularity`, `added` (optional)) |

**Example**  

```js
BetaSeries.getAction('movies', 'doFetchMemberMoviesList')({ memberId: 1 });
```

<a name="module_Movies.doFetchMovie"></a>

### .doFetchMovie([obj])

Retrieve movie

**Dispatch**: `FETCH_MOVIE`

**Returns**: {Promise}

**Category**: actions  

| Param | Type | Description |
| --- | --- | --- |
| [obj] | {Object} | Accept the following: |
| [obj.movieId] | {Number} | Movie ID |

**Example**  

```js
BetaSeries.getAction('movies', 'doFetchMovie')({ movieId: 438 });
```

<a name="module_Movies.doFetchMovieArticles"></a>

### .doFetchMovieArticles([obj])

Retrieve articles of the movie

**Dispatch**: `FETCH_MOVIE_ARTICLES`

**Returns**: {Promise}

**Category**: actions  

| Param | Type | Description |
| --- | --- | --- |
| [obj] | {Object} | Accept the following: |
| [obj.movieId] | {Number} | Movie ID |

**Example**  

```js
BetaSeries.getAction('movies', 'doFetchMovieArticles')({ movieId: 591 });
```

<a name="module_Movies.doFetchMovieCharacters"></a>

### .doFetchMovieCharacters([obj])

Retrieve characters of the movie

**Dispatch**: `FETCH_MOVIE_CHARACTERS`

**Returns**: {Promise}

**Category**: actions  

| Param | Type | Description |
| --- | --- | --- |
| [obj] | {Object} | Accept the following: |
| [obj.movieId] | {Number} | Movie ID |

**Example**  

```js
BetaSeries.getAction('movies', 'doFetchMovieCharacters')({ movieId: 591 });
```

<a name="module_Movies.doRateMovie"></a>

### .doRateMovie([obj])

Add note on movie

**Dispatch**: `RATE_MOVIE`

**Returns**: {Promise}

**Category**: actions  

| Param | Type | Description |
| --- | --- | --- |
| [obj] | {Object} | Accept the following: |
| [obj.movieId] | {Number} | Movie ID |
| [obj.note] | {Number} | Note (from `1` to `5`) |

**Example**  

```js
BetaSeries.getAction('movies', 'doRateMovie')({
  movieId: 438,
  note: 4,
});
```

<a name="module_Movies.doRemoveMovieFavorite"></a>

### .doRemoveMovieFavorite([obj])

Remove movie from favorite

**Dispatch**: `REMOVE_MOVIE_FAVORITE`

**Returns**: {Promise}

**Category**: actions  

| Param | Type | Description |
| --- | --- | --- |
| [obj] | {Object} | Accept the following: |
| [obj.movieId] | {Number} | Movie ID |

**Example**  

```js
BetaSeries.getAction('movies', 'doRemoveMovieFavorite')({
  movieId: 438
});
```

<a name="module_Movies.doRemoveMovieMember"></a>

### .doRemoveMovieMember([obj])

Retrieve movie

**Dispatch**: `REMOVE_MEMBER_MOVIE`

**Returns**: {Promise}

**Category**: actions  

| Param | Type | Description |
| --- | --- | --- |
| [obj] | {Object} | Accept the following: |
| [obj.movieId] | {Number} | Movie ID |

**Example**  

```js
BetaSeries.getAction('movies', 'doRemoveMovieMember')({ movieId: 438 });
```

<a name="module_Movies.doUpdateMovieState"></a>

### .doUpdateMovieState([obj])

Add note on movie

**Dispatch**: `UPDATE_MOVIE_STATE`

**Returns**: {Promise}

**Category**: actions  

| Param | Type | Description |
| --- | --- | --- |
| [obj] | {Object} | Accept the following: |
| [obj.movieId] | {Number} | Movie ID |
| [obj.state] | {Number} | State of movie   (`0` = to see, `1` = seen, `2` = doesn't want to see |

**Example**  

```js
BetaSeries.getAction('movies', 'doUpdateMovieState')({
  movieId: 438,
  state: 2,
});
```

<a name="module_Movies.articles"></a>

### .articles(state, action)

List of the movie articles

**Actions listened**:

 * `FETCH_MOVIE_ARTICLES`

**Returns**: {Object}

**Category**: reducers  

| Param | Type |
| --- | --- |
| state | {Object} | 
| action | {Object} | 

**Example**  

```js
// get reducer
BetaSeries.getReducer('movies', 'articles').moviesArticles;

// state value example
{
  '1243': [              // movie ID
    {
      id: 123543,        // article ID
      ...article       // article element
    },
    ...
  ]
}
```

<a name="module_Movies.characters"></a>

### .characters(state, action)

List of the movie characters

**Actions listened**:

 * `FETCH_MOVIE_CHARACTERS`

**Returns**: {Object}

**Category**: reducers  

| Param | Type |
| --- | --- |
| state | {Object} | 
| action | {Object} | 

**Example**  

```js
// get reducer
BetaSeries.getReducer('movies', 'characters').moviesCharacters;

// state value example
{
  '1243': [              // movie ID
    {
      id: 123543,        // character ID
      ...character       // character element
    },
    ...
  ]
}
```

<a name="module_Movies.favorites"></a>

### .favorites(state, action)

List the favorite movies of the member

**Actions listened**:

 * `FETCH_FAVORITE_MOVIES`

**Returns**: {Object}

**Category**: reducers  

| Param | Type |
| --- | --- |
| state | {Object} | 
| action | {Object} | 

**Example**  

```js
// get reducer
BetaSeries.getReducer('movies', 'favorites').moviesFavorites;

// state value example
{
  '12': [               // member ID
    1234, 213, 2343,    // list of movies ID
  ],
  ...,
}
```

<a name="module_Movies.members"></a>

### .members(state, action)

List movies of the member

**Actions listened**:

 * `FETCH_MEMBER_MOVIES`

**Returns**: {Object}

**Category**: reducers  

| Param | Type |
| --- | --- |
| state | {Object} | 
| action | {Object} | 

**Example**  

```js
// get reducer
BetaSeries.getReducer('movies', 'members').moviesMembers;

// state value example
{
  '12': [               // member ID
    1234, 213, 2343,    // list of movies ID
  ],
  ...,
}
```

<a name="module_Movies.movies"></a>

### .movies(state, action)

List of movies

**Actions listened**:

 * `FETCH_FAVORITE_MOVIES`
 * `FETCH_MEMBER_MOVIES`
 * `FETCH_MANY_MOVIES`
 * `FETCH_MOVIE`
 * `RATE_MOVIE`
 * `UPDATE_MOVIE_STATE`

**Returns**: {Object}

**Category**: reducers  

| Param | Type |
| --- | --- |
| state | {Object} | 
| action | {Object} | 

**Example**  

```js
// get reducer
BetaSeries.getReducer('movies', 'movies').movies;

// state value example
{
  '12': {      // movie ID
    id: 12,    // movie element
    ...movie,
  },
  ...,
}
```

<a name="module_Movies.getMemberMovies"></a>

### .getMemberMovies

Select movies by member from state

**Returns**: {Array} - List of movies element or `undefined`

**Category**: selectors  

| Param | Type | Description |
| --- | --- | --- |
| [state] | {Object} | Redux state |
| [obj] | {Object} | Accept the following: |
| [obj.memberId] | {Number} | Member ID |
| [obj.state] | {Number} | State of movie   (`0` = to see, `1` = seen, `2` = doesn't want to see (`null` by default)) |

**Example**  

```js
const mapStateToProps = (state, props) => ({
  episode: BetaSeries.getSelector('movies', 'getMemberMovies')(state, {
    memberId: props.memberId,
    state: 0,
  });
});
```

<a name="module_Movies.getMovie"></a>

### .getMovie

Select movie by ID from state

**Returns**: {Array} - Movie element or `undefined`

**Category**: selectors  

| Param | Type | Description |
| --- | --- | --- |
| [state] | {Object} | Redux state |
| [obj] | {Object} | Accept the following: |
| [obj.movieId] | {Number} | Movie ID |

**Example**  

```js
const mapStateToProps = (state, props) => ({
  episode: BetaSeries.getSelector('movies', 'getMovie')(state, {
    movieId: props.movieId,
  });
});
```

<a name="module_Movies.getMovieArticles"></a>

### .getMovieArticles

Select movie articles by ID from state

**Returns**: {Array} - Movie articles or `undefined`

**Category**: selectors  

| Param | Type | Description |
| --- | --- | --- |
| [state] | {Object} | Redux state |
| [obj] | {Object} | Accept the following: |
| [obj.movieId] | {Number} | Movie ID |

**Example**  

```js
const mapStateToProps = (state, props) => ({
  episode: BetaSeries.getSelector('movies', 'getMovieArticles')(state, {
    movieId: props.movieId,
  });
});
```

