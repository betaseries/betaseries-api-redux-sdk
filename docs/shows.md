[Back to API index](README.md)

# Shows

* [Shows](#module_Shows)
    * _actions_
        * [.doFetchEpisode([obj])](#module_Shows.doFetchEpisode) ⇒ {Promise}
        * [.doFetchEpisodeByCode([obj])](#module_Shows.doFetchEpisodeByCode) ⇒ {Promise}
        * [.doFetchFavoriteShows([obj])](#module_Shows.doFetchFavoriteShows) ⇒ {Promise}
        * [.doFetchLatestEpisode([obj])](#module_Shows.doFetchLatestEpisode) ⇒ {Promise}
        * [.doFetchManyEpisodes([obj])](#module_Shows.doFetchManyEpisodes) ⇒ {Promise}
        * [.doFetchManyShows([obj])](#module_Shows.doFetchManyShows) ⇒ {Promise}
        * [.doFetchShow([obj])](#module_Shows.doFetchShow) ⇒ {Promise}
        * [.doFetchShowCharacters([obj])](#module_Shows.doFetchShowCharacters) ⇒ {Promise}
        * [.doFetchShowEpisodes([obj])](#module_Shows.doFetchShowEpisodes) ⇒ {Promise}
        * [.doFetchSimilarShows([obj])](#module_Shows.doFetchSimilarShows) ⇒ {Promise}
    * _reducers_
        * [.characters(state, action)](#module_Shows.characters) ⇒ {Object}
        * [.episodes(state, action)](#module_Shows.episodes) ⇒ {Object}
        * [.favorites(state, action)](#module_Shows.favorites) ⇒ {Object}
        * [.latestEpisodes(state, action)](#module_Shows.latestEpisodes) ⇒ {Object}
        * [.shows(state, action)](#module_Shows.shows) ⇒ {Object}
        * [.similars(state, action)](#module_Shows.similars) ⇒ {Object}

<a name="module_Shows.doFetchEpisode"></a>

### .doFetchEpisode([obj])

Retrieve episode

**Dispatch**: `FETCH_EPISODE`

**Returns**: {Promise}

**Category**: actions  

| Param | Type | Description |
| --- | --- | --- |
| [obj] | {Object} | Accept the folling: |
| [obj.episodeId] | {Number} | Episode ID |

**Example**  

```js
BetaSeries.getAction('shows', 'doFetchEpisode')({ episodeId: 123 });
```

<a name="module_Shows.doFetchEpisodeByCode"></a>

### .doFetchEpisodeByCode([obj])

Retrieve episode

**Dispatch**: `FETCH_EPISODE_BY_CODE`

**Returns**: {Promise}

**Category**: actions  

| Param | Type | Description |
| --- | --- | --- |
| [obj] | {Object} | Accept the folling: |
| [obj.showId] | {Number} | Episode ID |
| [obj.code] | {String} | Episode code like `SO3E15` |

**Example**  

```js
BetaSeries.getAction('shows', 'doFetchEpisodeByCode')({ showId: 123, code: 'SO3E15' });
```

<a name="module_Shows.doFetchFavoriteShows"></a>

### .doFetchFavoriteShows([obj])

Retrieve favorite shows of the member

**Dispatch**: `FETCH_FAVORITE_SHOWS`

**Returns**: {Promise}

**Category**: actions  

| Param | Type | Description |
| --- | --- | --- |
| [obj] | {Object} | Accept the folling: |
| [obj.memberId] | {Number} | member ID |

**Example**  

```js
BetaSeries.getAction('shows', 'doFetchFavoriteShows')({ memberId: 1 });
```

<a name="module_Shows.doFetchLatestEpisode"></a>

### .doFetchLatestEpisode([obj])

Retrieve episode

**Dispatch**: `FETCH_LATEST_EPISODE`

**Returns**: {Promise}

**Category**: actions  

| Param | Type | Description |
| --- | --- | --- |
| [obj] | {Object} | Accept the folling: |
| [obj.showId] | {Number} | Show ID |

**Example**  

```js
BetaSeries.getAction('shows', 'doFetchLatestEpisode')({ showId: 481 });
```

<a name="module_Shows.doFetchManyEpisodes"></a>

### .doFetchManyEpisodes([obj])

Retrieve many episodes

**Dispatch**: `FETCH_MANY_EPISODES`

**Returns**: {Promise}

**Category**: actions  

| Param | Type | Description |
| --- | --- | --- |
| [obj] | {Object} | Accept the folling: |
| [obj.episodeIds] | {Array} | List of episodes ID |

**Example**  

```js
BetaSeries.getAction('shows', 'doFetchManyEpisodes')({ episodeIds: [ 1, 2, 3 ] });
```

<a name="module_Shows.doFetchManyShows"></a>

### .doFetchManyShows([obj])

Retrieve many shows

**Dispatch**: `FETCH_MANY_SHOWS`

**Returns**: {Promise}

**Category**: actions  

| Param | Type | Description |
| --- | --- | --- |
| [obj] | {Object} | Accept the folling: |
| [obj.showIds] | {Array} | List of shows ID |

**Example**  

```js
BetaSeries.getAction('shows', 'doFetchManyShows')({ showIds: [1275, 481] });
```

<a name="module_Shows.doFetchShow"></a>

### .doFetchShow([obj])

Retrieve show

**Dispatch**: `FETCH_SHOW`

**Returns**: {Promise}

**Category**: actions  

| Param | Type | Description |
| --- | --- | --- |
| [obj] | {Object} | Accept the folling: |
| [obj.showId] | {Number} | Show ID |

**Example**  

```js
BetaSeries.getAction('shows', 'doFetchShow')({ showId: 1275 });
```

<a name="module_Shows.doFetchShowCharacters"></a>

### .doFetchShowCharacters([obj])

Retrieve characters of the show

**Dispatch**: `FETCH_SHOW_CHARACTERS`

**Returns**: {Promise}

**Category**: actions  

| Param | Type | Description |
| --- | --- | --- |
| [obj] | {Object} | Accept the folling: |
| [obj.showId] | {Number} | Show ID |

**Example**  

```js
BetaSeries.getAction('shows', 'doFetchShowCharacters')({ showId: 1275 });
```

<a name="module_Shows.doFetchShowEpisodes"></a>

### .doFetchShowEpisodes([obj])

Retrieve episodes of the show

**Dispatch**: `FETCH_SHOW_EPISODES`

**Returns**: {Promise}

**Category**: actions  

| Param | Type | Description |
| --- | --- | --- |
| [obj] | {Object} | Accept the folling: |
| [obj.showId] | {Number} | Show ID |
| [obj.season] | {Number} | Season number (optional) |
| [obj.episode] | {Number} | Episode Number (optional) |
| [obj.subtitles] | {Bool} | Displays subtitles and information (optional) |

**Example**  

```js
BetaSeries.getAction('shows', 'doFetchShowEpisodes')({ showId: 1275, season: 1 });
```

<a name="module_Shows.doFetchSimilarShows"></a>

### .doFetchSimilarShows([obj])

Retrieve similar shows

**Dispatch**:

 * `FETCH_SIMILAR_SHOWS`
 * `FETCH_MANY_SHOWS`

**Returns**: {Promise}

**Category**: actions  

| Param | Type | Description |
| --- | --- | --- |
| [obj] | {Object} | Accept the folling: |
| [obj.showId] | {Number} | Show ID |

**Example**  

```js
BetaSeries.getAction('shows', 'doFetchSimilarShows')({ showId: 1275 });
```

<a name="module_Shows.characters"></a>

### .characters(state, action)

List of the show characters

**Actions listened**:

 * `FETCH_SHOW_CHARACTERS`

**Returns**: {Object}

**Category**: reducers  

| Param | Type |
| --- | --- |
| state | {Object} | 
| action | {Object} | 

**Example**  

```js
// get reducer
BetaSeries.getReducer('shows', 'characters');

// state example
{
  '1275': [              // show ID
    {
      id: 123543,        // character ID
      ...character       // character element
    },
    ...
  ]
}
```

<a name="module_Shows.episodes"></a>

### .episodes(state, action)

List of the show episodes group by season and episode number

**Actions listened**:

 * `FETCH_SHOW_EPISODES`
 * `FETCH_MANY_EPISODES`
 * `FETCH_LATEST_EPISODE`
 * `FETCH_EPISODE_BY_CODE`
 * `FETCH_EPISODE`

**Returns**: {Object}

**Category**: reducers  

| Param | Type |
| --- | --- |
| state | {Object} | 
| action | {Object} | 

**Example**  

```js
// get reducer
BetaSeries.getReducer('shows', 'episodes');

// state example
{
  '3215': {            // episode ID
    id: 3215,          // episode ID
    ...episode,        // episode element
  },
  ...,
}
```

<a name="module_Shows.favorites"></a>

### .favorites(state, action)

List the favorite shows of the member

**Actions listened**:

 * `FETCH_FAVORITE_SHOWS`

**Returns**: {Object}

**Category**: reducers  

| Param | Type |
| --- | --- |
| state | {Object} | 
| action | {Object} | 

**Example**  

```js
// get reducer
BetaSeries.getReducer('shows', 'favorites');

// state example
{
  '12': [            // member ID
    1275, 481, ...   // list of shows ID
  ],
  ...,
}
```

<a name="module_Shows.latestEpisodes"></a>

### .latestEpisodes(state, action)

List the latest episode of show

**Actions listened**:

 * `FETCH_LATEST_EPISODE`

**Returns**: {Object}

**Category**: reducers  

| Param | Type |
| --- | --- |
| state | {Object} | 
| action | {Object} | 

**Example**  

```js
// get reducer
BetaSeries.getReducer('shows', 'latestEpisodes');

// state example
{
  '12': 568786372645,  // Show ID : Episode ID
  ...,
}
```

<a name="module_Shows.shows"></a>

### .shows(state, action)

List of shows

**Actions listened**:

 * `FETCH_FAVORITE_SHOWS`
 * `FETCH_MANY_SHOWS`
 * `FETCH_SHOW`

**Returns**: {Object}

**Category**: reducers  

| Param | Type |
| --- | --- |
| state | {Object} | 
| action | {Object} | 

**Example**  

```js
// get reducer
BetaSeries.getReducer('shows', 'shows');

// state example
{
  '1275': {      // show ID
    id: 1275,    // show element
    ...show,
  },
  ...,
}
```

<a name="module_Shows.similars"></a>

### .similars(state, action)

List of similar shows

**Actions listened**:

 * `FETCH_SIMILAR_SHOWS`

**Returns**: {Object}

**Category**: reducers  

| Param | Type |
| --- | --- |
| state | {Object} | 
| action | {Object} | 

**Example**  

```js
// get reducer
BetaSeries.getReducer('shows', 'similars');

// state value example
{
  '1275': [           // show ID
    481, 2135, 23     // list of shows ID
  ],
  ...,
}
```

