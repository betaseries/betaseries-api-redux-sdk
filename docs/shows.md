[Back to API index](README.md)

# Shows

* [Shows](#module_Shows)
    * _actions_
        * [.doAddShow([obj])](#module_Shows.doAddShow) ⇒ {Promise}
        * [.doFetchDiscoverShows([obj])](#module_Shows.doFetchDiscoverShows) ⇒ {Promise}
        * [.doFetchEpisode([obj])](#module_Shows.doFetchEpisode) ⇒ {Promise}
        * [.doFetchEpisodeByCode([obj])](#module_Shows.doFetchEpisodeByCode) ⇒ {Promise}
        * [.doFetchEpisodesList([obj])](#module_Shows.doFetchEpisodesList) ⇒ {Promise}
        * [.doFetchFavoriteShows([obj])](#module_Shows.doFetchFavoriteShows) ⇒ {Promise}
        * [.doFetchLatestEpisode([obj])](#module_Shows.doFetchLatestEpisode) ⇒ {Promise}
        * [.doFetchManyEpisodes([obj])](#module_Shows.doFetchManyEpisodes) ⇒ {Promise}
        * [.doFetchManyShows([obj])](#module_Shows.doFetchManyShows) ⇒ {Promise}
        * [.doFetchShow([obj])](#module_Shows.doFetchShow) ⇒ {Promise}
        * [.doFetchShowCharacters([obj])](#module_Shows.doFetchShowCharacters) ⇒ {Promise}
        * [.doFetchShowEpisodes([obj])](#module_Shows.doFetchShowEpisodes) ⇒ {Promise}
        * [.doFetchSimilarShows([obj])](#module_Shows.doFetchSimilarShows) ⇒ {Promise}
        * [.doRateShow([obj])](#module_Shows.doRateShow) ⇒ {Promise}
        * [.doRemoveShow([obj])](#module_Shows.doRemoveShow) ⇒ {Promise}
    * _reducers_
        * [.characters(state, action)](#module_Shows.characters) ⇒ {Object}
        * [.discover(state, action)](#module_Shows.discover) ⇒ {Object}
        * [.episodes(state, action)](#module_Shows.episodes) ⇒ {Object}
        * [.favorites(state, action)](#module_Shows.favorites) ⇒ {Object}
        * [.latestEpisodes(state, action)](#module_Shows.latestEpisodes) ⇒ {Object}
        * [.membersEpisodesToSee(state, action)](#module_Shows.membersEpisodesToSee) ⇒ {Object}
        * [.shows(state, action)](#module_Shows.shows) ⇒ {Object}
        * [.similars(state, action)](#module_Shows.similars) ⇒ {Object}
    * _selectors_
        * [.getDiscoverShows](#module_Shows.getDiscoverShows) ⇒ {Array}
        * [.getEpisode](#module_Shows.getEpisode) ⇒ {Object}
        * [.getEpisodesToSee](#module_Shows.getEpisodesToSee) ⇒ {Array}
        * [.getFavoriteShows](#module_Shows.getFavoriteShows) ⇒ {Array}
        * [.getLatestShowEpisode](#module_Shows.getLatestShowEpisode) ⇒ {Object}
        * [.getShow](#module_Shows.getShow) ⇒ {Object}
        * [.getShowEpisodeByCode](#module_Shows.getShowEpisodeByCode) ⇒ {Object}
        * [.getShowEpisodes](#module_Shows.getShowEpisodes) ⇒ {Array}
        * [.getSimilarShows](#module_Shows.getSimilarShows) ⇒ {Array}

<a name="module_Shows.doAddShow"></a>

### .doAddShow([obj])

Add show

**Dispatch**: `ADD_SHOW`

**Returns**: {Promise}

**Category**: actions  

| Param | Type | Description |
| --- | --- | --- |
| [obj] | {Object} | Accept the following: |
| [obj.showId] | {Number} | Show ID |
| [obj.episode_id] | {Number} | Episode ID |

**Example**  

```js
BetaSeries.getAction('shows', 'doAddShow')({
  showId: 438
});
```

<a name="module_Shows.doFetchDiscoverShows"></a>

### .doFetchDiscoverShows([obj])

Retrieve discover shows

**Dispatch**: `FETCH_DISCOVER_SHOWS`

**Returns**: {Promise}

**Category**: actions  

| Param | Type | Description |
| --- | --- | --- |
| [obj] | {Object} | Accept the following: |
| [obj.order] | {String} | Chronological order of return, `alphabetical`, `popularity` or `followers` |
| [obj.since] | {Number} | Display shows from this date |
| [obj.starting] | {Number} | Display shows starting with query |
| [obj.start] | {Number} | Start number of show list (default `0`) |
| [obj.limit] | {Number} | Limit number of shows |

**Example**  

```js
BetaSeries.getAction('shows', 'doFetchDiscoverShows')();
```

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

<a name="module_Shows.doFetchEpisodesList"></a>

### .doFetchEpisodesList([obj])

Retrieve episodes list

**Dispatch**: `FETCH_EPISODES_LIST`

**Returns**: {Promise}

**Category**: actions  

| Param | Type | Description |
| --- | --- | --- |
| [obj] | {Object} | Accept the following: |
| [obj.subtitles] | {String} | Displays episodes with some subtitles available |
| [obj.limit] | {Number} | Limit number of episodes per shows (default `1`) |
| [obj.showId] | {Number} | Show ID (optional) |
| [obj.userId] | {Number} | User ID (optional) |
| [obj.released] | {Number} | Returns only released episodes (default `1`)   (`0` = both, `1` = released episodes, `2` = not released episodes |
| [obj.specials] | {Bool} | Includes special episodes (default `false`) |

**Example**  

```js
BetaSeries.getAction('shows', 'doFetchEpisodesList')();
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

<a name="module_Shows.doRateShow"></a>

### .doRateShow([obj])

Add note on show

**Dispatch**: `RATE_SHOW`

**Returns**: {Promise}

**Category**: actions  

| Param | Type | Description |
| --- | --- | --- |
| [obj] | {Object} | Accept the following: |
| [obj.movieId] | {Number} | Show ID |
| [obj.note] | {Number} | Note (from `1` to `5`) |

**Example**  

```js
BetaSeries.getAction('shows', 'doRateShow')({
  showId: 438,
  note: 4,
});
```

<a name="module_Shows.doRemoveShow"></a>

### .doRemoveShow([obj])

Remove show

**Dispatch**: `REMOVE_SHOW`

**Returns**: {Promise}

**Category**: actions  

| Param | Type | Description |
| --- | --- | --- |
| [obj] | {Object} | Accept the following: |
| [obj.showId] | {Number} | Show ID |

**Example**  

```js
BetaSeries.getAction('shows', 'doRemoveShow')({
  showId: 438
});
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
BetaSeries.getReducer('shows', 'characters').showsCharacters;

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

<a name="module_Shows.discover"></a>

### .discover(state, action)

List of discover shows

**Actions listened**:

 * `FETCH_DISCOVER_SHOWS`

**Returns**: {Object}

**Category**: reducers  

| Param | Type |
| --- | --- |
| state | {Object} | 
| action | {Object} | 

**Example**  

```js
// get reducer
BetaSeries.getReducer('shows', 'discover').showsDiscover;

// state example
{
  '1275': {      // show ID
    id: 1275,    // show element
    ...show,
  },
  ...,
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
BetaSeries.getReducer('shows', 'episodes').showsEpisodes;

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
BetaSeries.getReducer('shows', 'favorites').showsFavorites;

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
BetaSeries.getReducer('shows', 'latestEpisodes').showsLatestEpisodes;

// state example
{
  '12': 568786372645,  // Show ID : Episode ID
  ...,
}
```

<a name="module_Shows.membersEpisodesToSee"></a>

### .membersEpisodesToSee(state, action)

List episodes to see of the member

**Actions listened**:

 * `FETCH_EPISODES_LIST`

**Returns**: {Object}

**Category**: reducers  

| Param | Type |
| --- | --- |
| state | {Object} | 
| action | {Object} | 

**Example**  

```js
// get reducer
BetaSeries.getReducer('shows', 'membersEpisodesToSee').showsMembersEpisodesToSee;

// state value example
{
  '12': [               // member ID
    1234, 213, 2343,    // list of episodes ID
  ],
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
BetaSeries.getReducer('shows', 'shows').shows;

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
BetaSeries.getReducer('shows', 'similars').showsSimilars;

// state value example
{
  '1275': [           // show ID
    481, 2135, 23     // list of shows ID
  ],
  ...,
}
```

<a name="module_Shows.getDiscoverShows"></a>

### .getDiscoverShows

Select discovers shows from state

**Returns**: {Array} - Array of shows or `[]`

**Category**: selectors  

| Param | Type | Description |
| --- | --- | --- |
| [state] | {Object} | Redux state |

**Example**  

```js
const mapStateToProps = (state, props) => ({
  discover: BetaSeries.getSelector('shows', 'getDiscoverShows')(state);
});
```

<a name="module_Shows.getEpisode"></a>

### .getEpisode

Select episode from state

**Returns**: {Object} - Episode element or `undefined`

**Category**: selectors  

| Param | Type | Description |
| --- | --- | --- |
| [state] | {Object} | Redux state |
| [obj] | {Object} | Accept the folling: |
| [obj.episodeId] | {Object} | Episode ID |

**Example**  

```js
const mapStateToProps = (state, props) => ({
  show: BetaSeries.getSelector('shows', 'getEpisode')(state, { episodeId: props.episodeId });
});
```

<a name="module_Shows.getEpisodesToSee"></a>

### .getEpisodesToSee

Select episodes to see by member from state

**Returns**: {Array} - List of episodes to see element or `undefined`

**Category**: selectors  

| Param | Type | Description |
| --- | --- | --- |
| [state] | {Object} | Redux state |
| [obj] | {Object} | Accept the folling: |
| [obj.memberId] | {Number} | Member ID (optional) |

**Example**  

```js
const mapStateToProps = (state, props) => ({
  episode: BetaSeries.getSelector('shows', 'getEpisodesToSee')(state, {
    memberId: props.memberId,
  });
});
```

<a name="module_Shows.getFavoriteShows"></a>

### .getFavoriteShows

Select favorite shows from state

**Returns**: {Array} - Shows list or `undefined`

**Category**: selectors  

| Param | Type | Description |
| --- | --- | --- |
| [state] | {Object} | Redux state |
| [obj] | {Object} | Accept the following: |
| [obj.memberId] | {Object} | Member ID |

**Example**  

```js
const mapStateToProps = (state, props) => ({
  show: BetaSeries.getSelector('shows', 'getFavoriteShows')(state, { memberId: props.memberId });
});
```

<a name="module_Shows.getLatestShowEpisode"></a>

### .getLatestShowEpisode

Select last episode by show from state

**Returns**: {Object} - Episode element or `undefined`

**Category**: selectors  

| Param | Type | Description |
| --- | --- | --- |
| [state] | {Object} | Redux state |
| [obj] | {Object} | Accept the folling: |
| [obj.showId] | {Object} | Show ID |

**Example**  

```js
const mapStateToProps = (state, props) => ({
  episode: BetaSeries.getSelector('shows', 'getLatestShowEpisode')(state, {
    showId: props.showId,
  });
});
```

<a name="module_Shows.getShow"></a>

### .getShow

Select show from state

**Returns**: {Object} - Show element or `undefined`

**Category**: selectors  

| Param | Type | Description |
| --- | --- | --- |
| [state] | {Object} | Redux state |
| [obj] | {Object} | Accept the folling: |
| [obj.showId] | {Object} | Show ID |

**Example**  

```js
const mapStateToProps = (state, props) => ({
  show: BetaSeries.getSelector('shows', 'getShow')(state, { showId: props.showId });
});
```

<a name="module_Shows.getShowEpisodeByCode"></a>

### .getShowEpisodeByCode

Select episode by code and show from state

**Returns**: {Object} - Episode element or `undefined`

**Category**: selectors  

| Param | Type | Description |
| --- | --- | --- |
| [state] | {Object} | Redux state |
| [obj] | {Object} | Accept the folling: |
| [obj.showId] | {Object} | Show ID |
| [obj.code] | {Object} | Episode code |

**Example**  

```js
const mapStateToProps = (state, props) => ({
  episode: BetaSeries.getSelector('shows', 'getShowEpisodeByCode')(state, {
    showId: props.showId,
    code: 'SO4E01',
  });
});
```

<a name="module_Shows.getShowEpisodes"></a>

### .getShowEpisodes

Select episode by show from state

**Returns**: {Array} - List of episodes element order by code or `undefined`

**Category**: selectors  

| Param | Type | Description |
| --- | --- | --- |
| [state] | {Object} | Redux state |
| [obj] | {Object} | Accept the folling: |
| [obj.showId] | {Object} | Show ID |

**Example**  

```js
const mapStateToProps = (state, props) => ({
  episode: BetaSeries.getSelector('shows', 'getShowEpisodes')(state, {
    showId: props.showId,
  });
});
```

<a name="module_Shows.getSimilarShows"></a>

### .getSimilarShows

Select similar shows from state

**Returns**: {Array} - Shows list or `undefined`

**Category**: selectors  

| Param | Type | Description |
| --- | --- | --- |
| [state] | {Object} | Redux state |
| [obj] | {Object} | Accept the folling: |
| [obj.showId] | {Object} | Show ID |

**Example**  

```js
const mapStateToProps = (state, props) => ({
  show: BetaSeries.getSelector('shows', 'getSimilarShows')(state, { showId: props.showId });
});
```

