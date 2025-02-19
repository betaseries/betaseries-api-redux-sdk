[Back to API index](README.md)

# Shows

* [Shows](#module_Shows)
    * _actions_
        * [.doAddShow([obj])](#module_Shows.doAddShow) ⇒ {Promise}
        * [.doAddShowAgendaRewatch([obj])](#module_Shows.doAddShowAgendaRewatch) ⇒ {Promise}
        * [.doAddShowArchive([obj])](#module_Shows.doAddShowArchive) ⇒ {Promise}
        * [.doAddShowFavorite([obj])](#module_Shows.doAddShowFavorite) ⇒ {Promise}
        * [.doAddShowReach([obj])](#module_Shows.doAddShowReach) ⇒ {Promise}
        * [.doAddShowTag([obj])](#module_Shows.doAddShowTag) ⇒ {Promise}
        * [.doClearDiscoverShows()](#module_Shows.doClearDiscoverShows) ⇒ {Promise}
        * [.doClearDiscoverShowsPlatforms()](#module_Shows.doClearDiscoverShowsPlatforms) ⇒ {Promise}
        * [.doFetchDiscoverShows([obj])](#module_Shows.doFetchDiscoverShows) ⇒ {Promise}
        * [.doFetchDiscoverShowsPlatforms([obj])](#module_Shows.doFetchDiscoverShowsPlatforms) ⇒ {Promise}
        * [.doFetchEpisode([obj])](#module_Shows.doFetchEpisode) ⇒ {Promise}
        * [.doFetchEpisodeByCode([obj])](#module_Shows.doFetchEpisodeByCode) ⇒ {Promise}
        * [.doFetchEpisodesList([obj])](#module_Shows.doFetchEpisodesList) ⇒ {Promise}
        * [.doFetchFavoriteShows([obj])](#module_Shows.doFetchFavoriteShows) ⇒ {Promise}
        * [.doFetchLatestEpisode([obj])](#module_Shows.doFetchLatestEpisode) ⇒ {Promise}
        * [.doFetchManyEpisodes([obj])](#module_Shows.doFetchManyEpisodes) ⇒ {Promise}
        * [.doFetchManyShows([obj])](#module_Shows.doFetchManyShows) ⇒ {Promise}
        * [.doFetchMemberShows([obj])](#module_Shows.doFetchMemberShows) ⇒ {Promise}
        * [.doFetchShow([obj])](#module_Shows.doFetchShow) ⇒ {Promise}
        * [.doFetchShowArticles([obj])](#module_Shows.doFetchShowArticles) ⇒ {Promise}
        * [.doFetchShowCharacters([obj])](#module_Shows.doFetchShowCharacters) ⇒ {Promise}
        * [.doFetchShowEpisodes([obj])](#module_Shows.doFetchShowEpisodes) ⇒ {Promise}
        * [.doFetchShowGenres([obj])](#module_Shows.doFetchShowGenres) ⇒ {Promise}
        * [.doFetchShowInterestGenres([obj])](#module_Shows.doFetchShowInterestGenres) ⇒ {Promise}
        * [.doFetchShowInterests([obj])](#module_Shows.doFetchShowInterests) ⇒ {Promise}
        * [.doFetchShowPhotos([obj])](#module_Shows.doFetchShowPhotos) ⇒ {Promise}
        * [.doFetchShowSeasons([obj])](#module_Shows.doFetchShowSeasons) ⇒ {Promise}
        * [.doFetchShowVideos([obj])](#module_Shows.doFetchShowVideos) ⇒ {Promise}
        * [.doFetchShowWithUrl([obj])](#module_Shows.doFetchShowWithUrl) ⇒ {Promise}
        * [.doFetchSimilarShows([obj])](#module_Shows.doFetchSimilarShows) ⇒ {Promise}
        * [.doFetchTagsList([obj])](#module_Shows.doFetchTagsList) ⇒ {Promise}
        * [.doFetchUnratedEpisodes([obj])](#module_Shows.doFetchUnratedEpisodes) ⇒ {Promise}
        * [.doFetchUnratedShows([obj])](#module_Shows.doFetchUnratedShows) ⇒ {Promise}
        * [.doMarkEpisodeAsDownloaded([obj])](#module_Shows.doMarkEpisodeAsDownloaded) ⇒ {Promise}
        * [.doMarkEpisodeAsHidden([obj])](#module_Shows.doMarkEpisodeAsHidden) ⇒ {Promise}
        * [.doMarkEpisodeAsRewatched([obj])](#module_Shows.doMarkEpisodeAsRewatched) ⇒ {Promise}
        * [.doMarkEpisodeAsWatched([obj])](#module_Shows.doMarkEpisodeAsWatched) ⇒ {Promise}
        * [.doMarkManyEpisodeAsWatched([obj])](#module_Shows.doMarkManyEpisodeAsWatched) ⇒ {Promise}
        * [.doMarkSeasonAsHidden([obj])](#module_Shows.doMarkSeasonAsHidden) ⇒ {Promise}
        * [.doMarkSeasonAsRewatched([obj])](#module_Shows.doMarkSeasonAsRewatched) ⇒ {Promise}
        * [.doMarkSeasonAsWatched([obj])](#module_Shows.doMarkSeasonAsWatched) ⇒ {Promise}
        * [.doMarkShowAsRewatched([obj])](#module_Shows.doMarkShowAsRewatched) ⇒ {Promise}
        * [.doMarkShowAsWatched([obj])](#module_Shows.doMarkShowAsWatched) ⇒ {Promise}
        * [.doRateEpisode([obj])](#module_Shows.doRateEpisode) ⇒ {Promise}
        * [.doRateSeason([obj])](#module_Shows.doRateSeason) ⇒ {Promise}
        * [.doRateShow([obj])](#module_Shows.doRateShow) ⇒ {Promise}
        * [.doRemoveShow([obj])](#module_Shows.doRemoveShow) ⇒ {Promise}
        * [.doRemoveShowArchive([obj])](#module_Shows.doRemoveShowArchive) ⇒ {Promise}
        * [.doRemoveShowFavorite([obj])](#module_Shows.doRemoveShowFavorite) ⇒ {Promise}
        * [.doRemoveShowTag([obj])](#module_Shows.doRemoveShowTag) ⇒ {Promise}
        * [.doUnmarkEpisodeAsDownloaded([obj])](#module_Shows.doUnmarkEpisodeAsDownloaded) ⇒ {Promise}
        * [.doUnmarkEpisodeAsHidden([obj])](#module_Shows.doUnmarkEpisodeAsHidden) ⇒ {Promise}
        * [.doUnmarkEpisodeAsRewatched([obj])](#module_Shows.doUnmarkEpisodeAsRewatched) ⇒ {Promise}
        * [.doUnmarkEpisodeAsWatched([obj])](#module_Shows.doUnmarkEpisodeAsWatched) ⇒ {Promise}
        * [.doUnmarkManyEpisodeAsWatched([obj])](#module_Shows.doUnmarkManyEpisodeAsWatched) ⇒ {Promise}
        * [.doUnmarkSeasonAsHidden([obj])](#module_Shows.doUnmarkSeasonAsHidden) ⇒ {Promise}
        * [.doUnmarkSeasonAsRewatched([obj])](#module_Shows.doUnmarkSeasonAsRewatched) ⇒ {Promise}
        * [.doUnmarkSeasonAsWatched([obj])](#module_Shows.doUnmarkSeasonAsWatched) ⇒ {Promise}
        * [.doUnmarkShowAsRewatched([obj])](#module_Shows.doUnmarkShowAsRewatched) ⇒ {Promise}
        * [.doUnmarkShowAsWatched([obj])](#module_Shows.doUnmarkShowAsWatched) ⇒ {Promise}
    * _reducers_
        * [.articles(state, action)](#module_Shows.articles) ⇒ {Object}
        * [.characters(state, action)](#module_Shows.characters) ⇒ {Object}
        * [.discover(state, action)](#module_Shows.discover) ⇒ {Object}
        * [.discoverPlatforms(state, action)](#module_Shows.discoverPlatforms) ⇒ {Object}
        * [.episodes(state, action)](#module_Shows.episodes) ⇒ {Object}
        * [.genres(state, action)](#module_Shows.genres) ⇒ {Object}
        * [.interestGenres(state, action)](#module_Shows.interestGenres) ⇒ {Object}
        * [.interests(state, action)](#module_Shows.interests) ⇒ {Object}
        * [.latestEpisodes(state, action)](#module_Shows.latestEpisodes) ⇒ {Object}
        * [.members(state, action)](#module_Shows.members) ⇒ {Object}
        * [.membersEpisodesToSee(state, action)](#module_Shows.membersEpisodesToSee) ⇒ {Object}
        * [.photos(state, action)](#module_Shows.photos) ⇒ {Object}
        * [.seasons(state, action)](#module_Shows.seasons) ⇒ {Object}
        * [.shows(state, action)](#module_Shows.shows) ⇒ {Object}
        * [.similars(state, action)](#module_Shows.similars) ⇒ {Object}
        * [.tags(state, action)](#module_Shows.tags) ⇒ {Object}
        * [.unratedEpisodes(state, action)](#module_Shows.unratedEpisodes) ⇒ {Object}
        * [.unratedShows(state, action)](#module_Shows.unratedShows) ⇒ {Object}
        * [.videos(state, action)](#module_Shows.videos) ⇒ {Object}
    * _selectors_
        * [.getCharacters](#module_Shows.getCharacters) ⇒ {Array}
        * [.getDiscoverPlatformsShows](#module_Shows.getDiscoverPlatformsShows) ⇒ {Array}
        * [.getDiscoverShows](#module_Shows.getDiscoverShows) ⇒ {Array}
        * [.getEpisode](#module_Shows.getEpisode) ⇒ {Object}
        * [.getEpisodesToSee](#module_Shows.getEpisodesToSee) ⇒ {Array}
        * [.getFavoriteShows](#module_Shows.getFavoriteShows) ⇒ {Array}
        * [.getLatestShowEpisode](#module_Shows.getLatestShowEpisode) ⇒ {Object}
        * [.getMemberShows](#module_Shows.getMemberShows) ⇒ {Array}
        * [.getPhotos](#module_Shows.getPhotos) ⇒ {Array}
        * [.getShow](#module_Shows.getShow) ⇒ {Object}
        * [.getShowArticles](#module_Shows.getShowArticles) ⇒ {Array}
        * [.getShowByUrl](#module_Shows.getShowByUrl) ⇒ {Object}
        * [.getShowEpisodeByCode](#module_Shows.getShowEpisodeByCode) ⇒ {Object}
        * [.getShowEpisodes](#module_Shows.getShowEpisodes) ⇒ {Array}
        * [.getShowEpisodesForSeason](#module_Shows.getShowEpisodesForSeason) ⇒ {Array}
        * [.getShowGenres](#module_Shows.getShowGenres) ⇒ {Array}
        * [.getShowInterestGenres](#module_Shows.getShowInterestGenres) ⇒ {Object}
        * [.getShowInterests](#module_Shows.getShowInterests) ⇒ {Object}
        * [.getShowSeasons](#module_Shows.getShowSeasons) ⇒ {Array}
        * [.getSimilarShows](#module_Shows.getSimilarShows) ⇒ {Array}
        * [.getTagsList](#module_Shows.getTagsList) ⇒ {Array}
        * [.getUnratedEpisodes](#module_Shows.getUnratedEpisodes) ⇒ {Object}
        * [.getUnratedShows](#module_Shows.getUnratedShows) ⇒ {Object}
        * [.getVideos](#module_Shows.getVideos) ⇒ {Array}

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

<a name="module_Shows.doAddShowAgendaRewatch"></a>

### .doAddShowAgendaRewatch([obj])

Manage agenda_rewatch option for a show

**Dispatch**: `ADD_SHOW_AGENDA_REWATCH`

**Returns**: {Promise}

**Category**: actions  

| Param | Type | Description |
| --- | --- | --- |
| [obj] | {Object} | Accept the following: |
| [obj.id] | {Number} | Show ID |
| [obj.value] | {Number} | Either 1 to activate agenda rewatch for the show or 0 to deactivate |

**Example**  

```js
BetaSeries.getAction('shows', 'doAddShowAgendaRewatch')({
  id: 438,
  value: 1
});
```

<a name="module_Shows.doAddShowArchive"></a>

### .doAddShowArchive([obj])

Archive show

**Dispatch**: `ADD_SHOW_ARCHIVE`

**Returns**: {Promise}

**Category**: actions  

| Param | Type | Description |
| --- | --- | --- |
| [obj] | {Object} | Accept the following: |
| [obj.showId] | {Number} | Show ID |

**Example**  

```js
BetaSeries.getAction('shows', 'doAddShowArchive')({
  showId: 438
});
```

<a name="module_Shows.doAddShowFavorite"></a>

### .doAddShowFavorite([obj])

Add show to favorite

**Dispatch**: `ADD_SHOW_FAVORITE`

**Returns**: {Promise}

**Category**: actions  

| Param | Type | Description |
| --- | --- | --- |
| [obj] | {Object} | Accept the following: |
| [obj.showId] | {Number} | Show ID |

**Example**  

```js
BetaSeries.getAction('shows', 'doAddShowFavorite')({
  showId: 438
});
```

<a name="module_Shows.doAddShowReach"></a>

### .doAddShowReach([obj])

Add reach analytic for a show

**Dispatch**: `ADD_SHOW_REACH`

**Returns**: {Promise}

**Category**: actions  

| Param | Type | Description |
| --- | --- | --- |
| [obj] | {Object} | Accept the following: |
| [obj.id] | {Number} | Show ID |
| [obj.url] | {String} | Show slug |

**Example**  

```js
BetaSeries.getAction('shows', 'doAddShowReach')({
  id: 438,
  url: 'slug-url',
});
```

<a name="module_Shows.doAddShowTag"></a>

### .doAddShowTag([obj])

Add tag to a show

**Dispatch**: `POST_SHOW_TAG`

**Returns**: {Promise}

**Category**: actions  

| Param | Type | Description |
| --- | --- | --- |
| [obj] | {Object} | Accept the following: |
| [obj.showId] | {Number} | Show ID |
| [obj.tag] | {String} | Tag ou tags à ajouter séparés par une virgule |

**Example**  

```js
BetaSeries.getAction('shows', 'doAddShowTag')({
  showId: 438,
  tag: 'animation',
});
```

<a name="module_Shows.doClearDiscoverShows"></a>

### .doClearDiscoverShows()

Clear discover shows

**Dispatch**: `CLEAR_DISCOVER_SHOWS`

**Returns**: {Promise}

**Category**: actions  
**Example**  

```js
BetaSeries.getAction('shows', 'doClearDiscoverShows')();
```

<a name="module_Shows.doClearDiscoverShowsPlatforms"></a>

### .doClearDiscoverShowsPlatforms()

Clear discover shows platforms

**Dispatch**: `CLEAR_DISCOVER_SHOWS_PLATFORMS`

**Returns**: {Promise}

**Category**: actions  
**Example**  

```js
BetaSeries.getAction('shows', 'doClearDiscoverShowsPlatforms')();
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
| [obj.offset] | {Number} | Start number of show list (default `0`) |
| [obj.limit] | {Number} | Limit number of shows |

**Example**  

```js
BetaSeries.getAction('shows', 'doFetchDiscoverShows')();
```

<a name="module_Shows.doFetchDiscoverShowsPlatforms"></a>

### .doFetchDiscoverShowsPlatforms([obj])

Retrieve discover shows platforms

**Dispatch**: `FETCH_DISCOVER_SHOWS_PLATFORMS`

**Returns**: {Promise}

**Category**: actions  

| Param | Type | Description |
| --- | --- | --- |
| [obj] | {Object} | Accept the following: |
| [obj.offset] | {Number} | Start number of show list (default `0`) |
| [obj.limit] | {Number} | Limit number of shows |

**Example**  

```js
BetaSeries.getAction('shows', 'doFetchDiscoverShowsPlatforms')();
```

<a name="module_Shows.doFetchEpisode"></a>

### .doFetchEpisode([obj])

Retrieve episode

**Dispatch**: `FETCH_EPISODE`

**Returns**: {Promise}

**Category**: actions  

| Param | Type | Description |
| --- | --- | --- |
| [obj] | {Object} | Accept the following: |
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
| [obj] | {Object} | Accept the following: |
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
| [obj.showsLimit] | {Number} | Limit number of shows (default `50`) |
| [obj.page] | {Number} | Pagination per show (default `1`) |
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
| [obj] | {Object} | Accept the following: |
| [obj.memberId] | {Number} | member ID |
| [obj.offset] | {Number} | Start number of show list (default `0`) |
| [obj.limit] | {Number} | Limit number of shows |
| [obj.summary] | {String} | Only importanzt info (optional) |

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
| [obj] | {Object} | Accept the following: |
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
| [obj] | {Object} | Accept the following: |
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
| [obj] | {Object} | Accept the following: |
| [obj.showIds] | {Array} | List of shows ID |

**Example**  

```js
BetaSeries.getAction('shows', 'doFetchManyShows')({ showIds: [1275, 481] });
```

<a name="module_Shows.doFetchMemberShows"></a>

### .doFetchMemberShows([obj])

Retrieve member shows

**Dispatch**: `FETCH_MEMBER_SHOWS`

**Returns**: {Promise}

**Category**: actions  

| Param | Type | Description |
| --- | --- | --- |
| [obj] | {Object} | Accept the following: |
| [obj.memberId] | {Array} | Member ID (optional: connected user if not added) |
| [obj.order] | {String} | Order of sort: last_seen (default), last_added, alphabetical, progression, remaining_time, remaining_episodes |
| [obj.status] | {String} | Status: current, active, not_started, completed, stopped, archived |
| [obj.tags] | {String} | 1 ou plusieurs tags séparés par une virgule |
| [obj.excluded_tags] | {String} | 1 ou plusieurs tags exclus, séparés par une virgule |
| [obj.offset] | {Number} | Start number of show list (default `0`) |
| [obj.limit] | {Number} | Limit number of shows |
| [obj.summary] | {Number} | Summary: 1 or 0 |

**Example**  

```js
BetaSeries.getAction('shows', 'doFetchMemberShows')({ memberId: 1, offset: 0, limit: 100, order: remaining_episodes });
```

<a name="module_Shows.doFetchShow"></a>

### .doFetchShow([obj])

Retrieve show

**Dispatch**: `FETCH_SHOW`

**Returns**: {Promise}

**Category**: actions  

| Param | Type | Description |
| --- | --- | --- |
| [obj] | {Object} | Accept the following: |
| [obj.showId] | {Number} | Show ID |

**Example**  

```js
BetaSeries.getAction('shows', 'doFetchShow')({ showId: 1275 });
```

<a name="module_Shows.doFetchShowArticles"></a>

### .doFetchShowArticles([obj])

Retrieve articles of the show

**Dispatch**: `FETCH_SHOW_ARTICLES`

**Returns**: {Promise}

**Category**: actions  

| Param | Type | Description |
| --- | --- | --- |
| [obj] | {Object} | Accept the following: |
| [obj.showId] | {Number} | Show ID |

**Example**  

```js
BetaSeries.getAction('shows', 'doFetchShowArticles')({ showId: 1275 });
```

<a name="module_Shows.doFetchShowCharacters"></a>

### .doFetchShowCharacters([obj])

Retrieve characters of the show

**Dispatch**: `FETCH_SHOW_CHARACTERS`

**Returns**: {Promise}

**Category**: actions  

| Param | Type | Description |
| --- | --- | --- |
| [obj] | {Object} | Accept the following: |
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
| [obj] | {Object} | Accept the following: |
| [obj.showId] | {Number} | Show ID |
| [obj.season] | {Number} | Season number (optional) |
| [obj.episode] | {Number} | Episode Number (optional) |
| [obj.subtitles] | {Bool} | Displays subtitles and information (optional) |

**Example**  

```js
BetaSeries.getAction('shows', 'doFetchShowEpisodes')({ showId: 1275, season: 1 });
```

<a name="module_Shows.doFetchShowGenres"></a>

### .doFetchShowGenres([obj])

Retrieve genres of shows

**Dispatch**: `FETCH_SHOW_GENRES`

**Returns**: {Promise}

**Category**: actions  

| Param | Type | Description |
| --- | --- | --- |
| [obj] | {Object} | Accept the following: |

**Example**  

```js
BetaSeries.getAction('shows', 'doFetchShowGenres')();
```

<a name="module_Shows.doFetchShowInterestGenres"></a>

### .doFetchShowInterestGenres([obj])

Retrieve genres of interest show

**Dispatch**: `FETCH_SHOW_INTEREST_GENRES`

**Returns**: {Promise}

**Category**: actions  

| Param | Type | Description |
| --- | --- | --- |
| [obj] | {Object} | Accept the following: |
| [obj.showId] | {Number} | Show ID |
| [obj.country] | {String} | Country code |
| [obj.platforms] | {Number} | Platforms ids |

**Example**  

```js
BetaSeries.getAction('shows', 'doFetchShowInterestGenres')({
  showId: 118,
  country: 'fr',
  platforms: 1,34,
});
```

<a name="module_Shows.doFetchShowInterests"></a>

### .doFetchShowInterests([obj])

Retrieve show interests

**Dispatch**: `FETCH_SHOW_INTERESTS`

**Returns**: {Promise}

**Category**: actions  

| Param | Type | Description |
| --- | --- | --- |
| [obj] | {Object} | Accept the following: |
| [obj.showId] | {Number} | Show ID |
| [obj.country] | {String} | Country code |
| [obj.platforms] | {Number} | Platforms ids |
| [obj.genre] | {String} | Genre type |

**Example**  

```js
BetaSeries.getAction('shows', 'doFetchShowInterests')({
  showId: 118,
  country: 'fr',
  platforms: 1,34,
  genre: 'Crime',
});
```

<a name="module_Shows.doFetchShowPhotos"></a>

### .doFetchShowPhotos([obj])

Retrieve photos of the show

**Dispatch**: `FETCH_SHOW_PHOTOS`

**Returns**: {Promise}

**Category**: actions  

| Param | Type | Description |
| --- | --- | --- |
| [obj] | {Object} | Accept the following: |
| [obj.showId] | {Number} | Show ID |

**Example**  

```js
BetaSeries.getAction('shows', 'doFetchShowPhotos')({ showId: 1275 });
```

<a name="module_Shows.doFetchShowSeasons"></a>

### .doFetchShowSeasons([obj])

Retrieve seasons details list

**Dispatch**: `FETCH_SEASONS`

**Returns**: {Promise}

**Category**: actions  

| Param | Type | Description |
| --- | --- | --- |
| [obj] | {Object} | Accept the following: |
| [obj.showId] | {Number} | Show ID |

**Example**  

```js
BetaSeries.getAction('shows', 'doFetchShowSeasons')({ showId: 12 });
```

<a name="module_Shows.doFetchShowVideos"></a>

### .doFetchShowVideos([obj])

Retrieve videos of the show

**Dispatch**: `FETCH_SHOW_VIDEOS`

**Returns**: {Promise}

**Category**: actions  

| Param | Type | Description |
| --- | --- | --- |
| [obj] | {Object} | Accept the following: |
| [obj.showId] | {Number} | Show ID |

**Example**  

```js
BetaSeries.getAction('shows', 'doFetchShowVideos')({ showId: 1275 });
```

<a name="module_Shows.doFetchShowWithUrl"></a>

### .doFetchShowWithUrl([obj])

Retrieve show with slug

**Dispatch**: `FETCH_SHOW`

**Returns**: {Promise}

**Category**: actions  

| Param | Type | Description |
| --- | --- | --- |
| [obj] | {Object} | Accept the following: |
| [obj.url] | {String} | Show Slug |

**Example**  

```js
BetaSeries.getAction('shows', 'doFetchShowWithUrl')({ url: 'slug' });
```

<a name="module_Shows.doFetchSimilarShows"></a>

### .doFetchSimilarShows([obj])

Retrieve similar shows

**Dispatch**:

 * `FETCH_SIMILAR_SHOWS`

**Returns**: {Promise}

**Category**: actions  

| Param | Type | Description |
| --- | --- | --- |
| [obj] | {Object} | Accept the following: |
| [obj.showId] | {Number} | Show ID |

**Example**  

```js
BetaSeries.getAction('shows', 'doFetchSimilarShows')({ showId: 1275 });
```

<a name="module_Shows.doFetchTagsList"></a>

### .doFetchTagsList([obj])

Retrieve tags for the shows

**Dispatch**: `FETCH_TAGS_LIST`

**Returns**: {Promise}

**Category**: actions  

| Param | Type | Description |
| --- | --- | --- |
| [obj] | {Object} | Accept the following: |

**Example**  

```js
BetaSeries.getAction('shows', 'doFetchTagsList')();
```

<a name="module_Shows.doFetchUnratedEpisodes"></a>

### .doFetchUnratedEpisodes([obj])

Retrieve unrated episodes

**Dispatch**: `FETCH_UNRATED_EPISODES`

**Returns**: {Promise}

**Category**: actions  

| Param | Type | Description |
| --- | --- | --- |
| [obj] | {Object} | Accept the following: |
| [obj.date] | {String} | Date to retrieve unrated episodes (default: yesterday, all) |
| [obj.page] | {Number} | Pagination |

**Example**  

```js
BetaSeries.getAction('shows', 'doFetchUnratedEpisodes')();
```

<a name="module_Shows.doFetchUnratedShows"></a>

### .doFetchUnratedShows([obj])

Retrieve unrated shows

**Dispatch**: `FETCH_UNRATED_SHOWS`

**Returns**: {Promise}

**Category**: actions  

| Param | Type | Description |
| --- | --- | --- |
| [obj] | {Object} | Accept the following: |
| [obj.date] | {String} | Date to retrieve unrated shows (default: month, all) |
| [obj.page] | {Number} | Pagination |

**Example**  

```js
BetaSeries.getAction('shows', 'doFetchUnratedShows')();
```

<a name="module_Shows.doMarkEpisodeAsDownloaded"></a>

### .doMarkEpisodeAsDownloaded([obj])

Watch episode

**Dispatch**: `MARK_EPISODE_AS_DOWNLOADED`

**Returns**: {Promise}

**Category**: actions  

| Param | Type | Description |
| --- | --- | --- |
| [obj] | {Object} | Accept the following: |
| [obj.episodeId] | {Number} | Episode ID |

**Example**  

```js
BetaSeries.getAction('shows', 'doMarkEpisodeAsDownloaded')({
  episodeId: 438,
});
```

<a name="module_Shows.doMarkEpisodeAsHidden"></a>

### .doMarkEpisodeAsHidden([obj])

Mark episode as hidden

**Dispatch**: `MARK_EPISODE_AS_HIDDEN`

**Returns**: {Promise}

**Category**: actions  

| Param | Type | Description |
| --- | --- | --- |
| [obj] | {Object} | Accept the following: |
| [obj.episodeId] | {Number} | Episode ID |

**Example**  

```js
BetaSeries.getAction('shows', 'doMarkEpisodeAsHidden')({ episodeId: 123 });
```

<a name="module_Shows.doMarkEpisodeAsRewatched"></a>

### .doMarkEpisodeAsRewatched([obj])

Rewatch episode

**Dispatch**: `MARK_EPISODE_AS_REWATCHED`

**Returns**: {Promise}

**Category**: actions  

| Param | Type | Description |
| --- | --- | --- |
| [obj] | {Object} | Accept the following: |
| [obj.id] | {Number} | Episode ID, multiple episodes ids separated by commas |
| [obj.bulk] | {Boolean} | Mark as watched previous episodes |

**Example**  

```js
BetaSeries.getAction('shows', 'doMarkEpisodeAsRewatched')({
  id: 438,
  bulk: false,
  note: 4,
});
```

<a name="module_Shows.doMarkEpisodeAsWatched"></a>

### .doMarkEpisodeAsWatched([obj])

Watch episode

**Dispatch**: `MARK_EPISODE_AS_WATCHED`

**Returns**: {Promise}

**Category**: actions  

| Param | Type | Description |
| --- | --- | --- |
| [obj] | {Object} | Accept the following: |
| [obj.episodeId] | {Number} | Episode ID |
| [obj.bulk] | {Boolean} | Mark as watched previous episodes |
| [obj.delete] | {Boolean} | Unmark as watched next episodes |
| [obj.note] | {Number} | Note (from `1` to `5`) |

**Example**  

```js
BetaSeries.getAction('shows', 'doMarkEpisodeAsWatched')({
  episodeId: 438,
  bulk: false,
  note: 4,
});
```

<a name="module_Shows.doMarkManyEpisodeAsWatched"></a>

### .doMarkManyEpisodeAsWatched([obj])

Mark many episode as watch

**Dispatch**: `MARK_MANY_EPISODE_AS_WATCHED`

**Returns**: {Promise}

**Category**: actions  

| Param | Type | Description |
| --- | --- | --- |
| [obj] | {Object} | Accept the following: |
| [obj.episodeIds] | {Number} | Episodes ID |
| [obj.bulk] | {Boolean} | Mark as watched previous episodes |
| [obj.delete] | {Boolean} | Unmark as watched next episodes |

**Example**  

```js
BetaSeries.getAction('shows', 'doMarkManyEpisodeAsWatched')({
  episodeIds: 438,
  bulk: false,
});
```

<a name="module_Shows.doMarkSeasonAsHidden"></a>

### .doMarkSeasonAsHidden([obj])

Mark season as hidden

**Dispatch**: `MARK_SEASON_AS_HIDDEN`

**Returns**: {Promise}

**Category**: actions  

| Param | Type | Description |
| --- | --- | --- |
| [obj] | {Object} | Accept the following: |
| [obj.showId] | {Number} | Show ID |
| [obj.season] | {Number} | Season number to hide |

**Example**  

```js
BetaSeries.getAction('shows', 'doMarkSeasonAsHidden')({ showId: 123, season: 3 });
```

<a name="module_Shows.doMarkSeasonAsRewatched"></a>

### .doMarkSeasonAsRewatched([obj])

Mark entire season as rewatched

**Dispatch**: `MARK_SEASON_AS_REWATCHED`

**Returns**: {Promise}

**Category**: actions  

| Param | Type | Description |
| --- | --- | --- |
| [obj] | {Object} | Accept the following: |
| [obj.showId] | {Number} | Show ID |
| [obj.season] | {Number} | Number of season to mark as rewatched |

**Example**  

```js
BetaSeries.getAction('shows', 'doMarkSeasonAsRewatched')({
  showId: 438,
  season: 2,
});
```

<a name="module_Shows.doMarkSeasonAsWatched"></a>

### .doMarkSeasonAsWatched([obj])

Mark entire season as watched

**Dispatch**: `MARK_SEASON_AS_WATCHED`

**Returns**: {Promise}

**Category**: actions  

| Param | Type | Description |
| --- | --- | --- |
| [obj] | {Object} | Accept the following: |
| [obj.showId] | {Number} | Show ID |
| [obj.season] | {Number} | Number of season to mark as watched |
| [obj.note] | {Number} | (optional) Note for the season |

**Example**  

```js
BetaSeries.getAction('shows', 'doMarkSeasonAsWatched')({
  showId: 438,
  season: 2,
});
```

<a name="module_Shows.doMarkShowAsRewatched"></a>

### .doMarkShowAsRewatched([obj])

Mark show as rewatched

**Dispatch**: `MARK_SHOW_AS_REWATCHED`

**Returns**: {Promise}

**Category**: actions  

| Param | Type | Description |
| --- | --- | --- |
| [obj] | {Object} | Accept the following: |
| [obj.id] | {String} | List of shows IDs, separated by commas |

**Example**  

```js
BetaSeries.getAction('shows', 'doMarkShowAsRewatched')({ id: '1275' });
```

<a name="module_Shows.doMarkShowAsWatched"></a>

### .doMarkShowAsWatched([obj])

Mark show as watched

**Dispatch**: `MARK_SHOW_AS_WATCHED`

**Returns**: {Promise}

**Category**: actions  

| Param | Type | Description |
| --- | --- | --- |
| [obj] | {Object} | Accept the following: |
| [obj.id] | {String} | List of shows IDs, separated by commas |

**Example**  

```js
BetaSeries.getAction('shows', 'doMarkShowAsWatched')({ id: '1275' });
```

<a name="module_Shows.doRateEpisode"></a>

### .doRateEpisode([obj])

Add note on episode

**Dispatch**: `RATE_EPISODE`

**Returns**: {Promise}

**Category**: actions  

| Param | Type | Description |
| --- | --- | --- |
| [obj] | {Object} | Accept the following: |
| [obj.episodeId] | {Number} | Episode ID |
| [obj.note] | {Number} | Note (from `1` to `5`) |

**Example**  

```js
BetaSeries.getAction('shows', 'doRateEpisode')({
  episodeId: 438,
  note: 4,
});
```

<a name="module_Shows.doRateSeason"></a>

### .doRateSeason([obj])

Add note on a season show

**Dispatch**: `RATE_SEASON`

**Returns**: {Promise}

**Category**: actions  

| Param | Type | Description |
| --- | --- | --- |
| [obj] | {Object} | Accept the following: |
| [obj.showId] | {Number} | Show ID |
| [obj.season] | {Number} | Season number |
| [obj.note] | {Number} | Note (from `1` to `5`) |

**Example**  

```js
BetaSeries.getAction('shows', 'doRateSeason')({
  showId: 438,
  season: 3,
  note: 4,
});
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
| [obj.showId] | {Number} | Show ID |
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

<a name="module_Shows.doRemoveShowArchive"></a>

### .doRemoveShowArchive([obj])

Remove show from archives

**Dispatch**: `REMOVE_SHOW_ARCHIVE`

**Returns**: {Promise}

**Category**: actions  

| Param | Type | Description |
| --- | --- | --- |
| [obj] | {Object} | Accept the following: |
| [obj.showId] | {Number} | Show ID |

**Example**  

```js
BetaSeries.getAction('shows', 'doRemoveShowArchive')({
  showId: 438
});
```

<a name="module_Shows.doRemoveShowFavorite"></a>

### .doRemoveShowFavorite([obj])

Remove show from favorite

**Dispatch**: `REMOVE_SHOW_FAVORITE`

**Returns**: {Promise}

**Category**: actions  

| Param | Type | Description |
| --- | --- | --- |
| [obj] | {Object} | Accept the following: |
| [obj.showId] | {Number} | Show ID |

**Example**  

```js
BetaSeries.getAction('shows', 'doRemoveShowFavorite')({
  showId: 438
});
```

<a name="module_Shows.doRemoveShowTag"></a>

### .doRemoveShowTag([obj])

Remove tag for a show

**Dispatch**: `DELETE_SHOW_TAG`

**Returns**: {Promise}

**Category**: actions  

| Param | Type | Description |
| --- | --- | --- |
| [obj] | {Object} | Accept the following: |
| [obj.showId] | {Number} | Show ID |
| [obj.tag] | {String} | Tag ou tags à supprimer séparés par une virgule |

**Example**  

```js
BetaSeries.getAction('shows', 'doRemoveShowTag')({
  showId: 438,
  tag: 'animation'
});
```

<a name="module_Shows.doUnmarkEpisodeAsDownloaded"></a>

### .doUnmarkEpisodeAsDownloaded([obj])

Downloaded episode

**Dispatch**: `MARK_EPISODE_AS_DOWNLOADED`

**Returns**: {Promise}

**Category**: actions  

| Param | Type | Description |
| --- | --- | --- |
| [obj] | {Object} | Accept the following: |
| [obj.episodeId] | {Number} | Episode ID |

**Example**  

```js
BetaSeries.getAction('shows', 'doUnmarkEpisodeAsDownloaded')({
  episodeId: 438,
});
```

<a name="module_Shows.doUnmarkEpisodeAsHidden"></a>

### .doUnmarkEpisodeAsHidden([obj])

Unmark episode as hidden

**Dispatch**: `UNMARK_EPISODE_AS_HIDDEN`

**Returns**: {Promise}

**Category**: actions  

| Param | Type | Description |
| --- | --- | --- |
| [obj] | {Object} | Accept the following: |
| [obj.episodeId] | {Number} | Episode ID |

**Example**  

```js
BetaSeries.getAction('shows', 'doUnmarkEpisodeAsHidden')({ episodeId: 123 });
```

<a name="module_Shows.doUnmarkEpisodeAsRewatched"></a>

### .doUnmarkEpisodeAsRewatched([obj])

Unmark episode as rewatched

**Dispatch**: `UNMARK_EPISODE_AS_REWATCHED`

**Returns**: {Promise}

**Category**: actions  

| Param | Type | Description |
| --- | --- | --- |
| [obj] | {Object} | Accept the following: |
| [obj.id] | {Number} | Episode ids, separated by commas |
| [obj.all] | {Number} | All=1 means unmark all rewatched for that episode |
| [obj.date] | {String} | Unmark episode for specific date of rewatch |

**Example**  

```js
BetaSeries.getAction('shows', 'doUnmarkEpisodeAsRewatched')({
  id: 438,
});
```

<a name="module_Shows.doUnmarkEpisodeAsWatched"></a>

### .doUnmarkEpisodeAsWatched([obj])

Watch episode

**Dispatch**: `MARK_EPISODE_AS_WATCHED`

**Returns**: {Promise}

**Category**: actions  

| Param | Type | Description |
| --- | --- | --- |
| [obj] | {Object} | Accept the following: |
| [obj.episodeId] | {Number} | Episode ID |

**Example**  

```js
BetaSeries.getAction('shows', 'doUnmarkEpisodeAsWatched')({
  episodeId: 438,
});
```

<a name="module_Shows.doUnmarkManyEpisodeAsWatched"></a>

### .doUnmarkManyEpisodeAsWatched([obj])

Watch episode

**Dispatch**: `MARK_MANY_EPISODE_AS_WATCHED`

**Returns**: {Promise}

**Category**: actions  

| Param | Type | Description |
| --- | --- | --- |
| [obj] | {Object} | Accept the following: |
| [obj.episodeIds] | {Number} | Episodes ID |

**Example**  

```js
BetaSeries.getAction('shows', 'doUnmarkManyEpisodeAsWatched')({
  episodeIds: 438,
});
```

<a name="module_Shows.doUnmarkSeasonAsHidden"></a>

### .doUnmarkSeasonAsHidden([obj])

Unmark season as hidden

**Dispatch**: `UNMARK_SEASON_AS_HIDDEN`

**Returns**: {Promise}

**Category**: actions  

| Param | Type | Description |
| --- | --- | --- |
| [obj] | {Object} | Accept the following: |
| [obj.showId] | {Number} | Season ID |
| [obj.season] | {Number} | Season number to hide |

**Example**  

```js
BetaSeries.getAction('shows', 'doUnmarkSeasonAsHidden')({ showId: 123, season: 3 });
```

<a name="module_Shows.doUnmarkSeasonAsRewatched"></a>

### .doUnmarkSeasonAsRewatched([obj])

Unmark entire season as rewatched

**Dispatch**: `UNMARK_SEASON_AS_REWATCHED`

**Returns**: {Promise}

**Category**: actions  

| Param | Type | Description |
| --- | --- | --- |
| [obj] | {Object} | Accept the following: |
| [obj.showId] | {Number} | Show ID |
| [obj.season] | {Number} | Number of season to unmark as rewatched |
| [obj.all] | {Number} | All=1 means unmark all rewatched for that season |

**Example**  

```js
BetaSeries.getAction('shows', 'doUnmarkSeasonAsRewatched')({
  showId: 438,
  season: 2,
});
```

<a name="module_Shows.doUnmarkSeasonAsWatched"></a>

### .doUnmarkSeasonAsWatched([obj])

Unmark entire season as watched

**Dispatch**: `UNMARK_SEASON_AS_WATCHED`

**Returns**: {Promise}

**Category**: actions  

| Param | Type | Description |
| --- | --- | --- |
| [obj] | {Object} | Accept the following: |
| [obj.showId] | {Number} | Show ID |
| [obj.season] | {Number} | Number of season to unmark as watched |

**Example**  

```js
BetaSeries.getAction('shows', 'doUnmarkSeasonAsWatched')({
  showId: 438,
  season: 2,
});
```

<a name="module_Shows.doUnmarkShowAsRewatched"></a>

### .doUnmarkShowAsRewatched([obj])

Unmark show as rewatched

**Dispatch**: `UNMARK_SHOW_AS_REWATCHED`

**Returns**: {Promise}

**Category**: actions  

| Param | Type | Description |
| --- | --- | --- |
| [obj] | {Object} | Accept the following: |
| [obj.id] | {String} | List of shows IDs, separated by commas |
| [obj.all] | {Number} | All=1 means unmark all rewatched for that serie |

**Example**  

```js
BetaSeries.getAction('shows', 'doUnmarkShowAsRewatched')({ id: '1275' });
```

<a name="module_Shows.doUnmarkShowAsWatched"></a>

### .doUnmarkShowAsWatched([obj])

Unmark show as watched

**Dispatch**: `UNMARK_SHOW_AS_WATCHED`

**Returns**: {Promise}

**Category**: actions  

| Param | Type | Description |
| --- | --- | --- |
| [obj] | {Object} | Accept the following: |
| [obj.id] | {String} | List of shows IDs, separated by commas |

**Example**  

```js
BetaSeries.getAction('shows', 'doUnmarkShowAsWatched')({ id: '1275' });
```

<a name="module_Shows.articles"></a>

### .articles(state, action)

List of the show articles

**Actions listened**:

 * `FETCH_SHOW_ARTICLES`

**Returns**: {Object}

**Category**: reducers  

| Param | Type |
| --- | --- |
| state | {Object} | 
| action | {Object} | 

**Example**  

```js
// get reducer
BetaSeries.getReducer('shows', 'articles').showsArticles;

// state example
{
  '1275': [              // show ID
    {
      id: 123543,        // article ID
      ...article           // article element
    },
    ...
  ]
}
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
  [
   {
    id: 1275,    // show element
    ...show,
  },
  ...,
 ]
```

<a name="module_Shows.discoverPlatforms"></a>

### .discoverPlatforms(state, action)

List of discover platforms shows

**Actions listened**:

 * `FETCH_DISCOVER_SHOWS_PLATFORMS`

**Returns**: {Object}

**Category**: reducers  

| Param | Type |
| --- | --- |
| state | {Object} | 
| action | {Object} | 

**Example**  

```js
// get reducer
BetaSeries.getReducer('shows', 'discoverPlatforms').showsDiscoverPlatforms;

// state example
  [
   {
    id: 1275,    // show element
    ...show,
  },
  ...,
 ]
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
 * `MARK_MANY_EPISODE_AS_WATCHED`
 * `UNMARK_MANY_EPISODE_AS_WATCHED`
 * `MARK_MANY_EPISODE_AS_REWATCHED`
 * `UNMARK_MANY_EPISODE_AS_REWATCHED`
 * `MARK_EPISODE_AS_REWATCHED`
 * `UNMARK_EPISODE_AS_REWATCHED`
 * `MARK_EPISODE_AS_WATCHED`
 * `UNMARK_EPISODE_AS_WATCHED`
 * `ADD_SHOW`
 * `REMOVE_SHOW`

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

<a name="module_Shows.genres"></a>

### .genres(state, action)

List of the show genres

**Actions listened**:

 * `FETCH_SHOW_GENRES`

**Returns**: {Object}

**Category**: reducers  

| Param | Type |
| --- | --- |
| state | {Object} | 
| action | {Object} | 

**Example**  

```js
// get reducer
BetaSeries.getReducer('shows', 'genres').showsGenres;

// state example
[
    {
      id: 123543,        // genre ID
      ...genre       // genre element
    },
    ...
]
```

<a name="module_Shows.interestGenres"></a>

### .interestGenres(state, action)

List of the show interest genres

**Actions listened**:

 * `FETCH_SHOW_INTEREST_GENRES`

**Returns**: {Object}

**Category**: reducers  

| Param | Type |
| --- | --- |
| state | {Object} | 
| action | {Object} | 

**Example**  

```js
// get reducer
BetaSeries.getReducer('shows', 'interestGenres').showsInterestGenres;

// state example
{
  '1275': {                // show ID
      ...interestGenres   // interestGenres elements
   },
   ...
}
```

<a name="module_Shows.interests"></a>

### .interests(state, action)

List of the show interests

**Actions listened**:

 * `FETCH_SHOW_INTERESTS`

**Returns**: {Object}

**Category**: reducers  

| Param | Type |
| --- | --- |
| state | {Object} | 
| action | {Object} | 

**Example**  

```js
// get reducer
BetaSeries.getReducer('shows', 'interests').showsInterests;

// state example
{
  '1275': [              // show ID
    {
      id: 123543,        // interestShow ID
      ...interestShow       // interestShow element
    },
    ...
  ]
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

<a name="module_Shows.members"></a>

### .members(state, action)

List shows of the member

**Actions listened**:

 * `FETCH_MEMBER`

**Returns**: {Object}

**Category**: reducers  

| Param | Type |
| --- | --- |
| state | {Object} | 
| action | {Object} | 

**Example**  

```js
// get reducer
BetaSeries.getReducer('shows', 'members').showsMembers;

// state value example
{
  '12': [                // member ID
    {                    // show ID
      'archived': false,
      ...show.user
    },
    ...shows,            // list of shows ID
  ],
  ...,
}
```

<a name="module_Shows.membersEpisodesToSee"></a>

### .membersEpisodesToSee(state, action)

List episodes to see of the member

**Actions listened**:

 * `FETCH_EPISODES_LIST`
 * `MARK_EPISODE_AS_HIDDEN`

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

<a name="module_Shows.photos"></a>

### .photos(state, action)

List of the show photos

**Actions listened**:

 * `FETCH_SHOW_PHOTOS`

**Returns**: {Object}

**Category**: reducers  

| Param | Type |
| --- | --- |
| state | {Object} | 
| action | {Object} | 

**Example**  

```js
// get reducer
BetaSeries.getReducer('shows', 'photos').showsPhotos;

// state example
{
  '1275': [              // show ID
    {
      id: 123543,        // photo ID
      ...photo           // photo element
    },
    ...
  ]
}
```

<a name="module_Shows.seasons"></a>

### .seasons(state, action)

List of seasons

**Actions listened**:

 * `FETCH_SEASONS`
 * `MARK_SEASON_AS_HIDDEN`
 * `UNMARK_SEASON_AS_HIDDEN`

**Returns**: {Object}

**Category**: reducers  

| Param | Type |
| --- | --- |
| state | {Object} | 
| action | {Object} | 

**Example**  

```js
// get reducer
BetaSeries.getReducer('shows', 'seasons').showsSeasons;

// state example
{
  '1275': {      // show ID
    id: 1275,    // show element
    ...show,
  },
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
  '1275': [              // show ID
    {
      id: 123543,        // similar ID
      ...similar       // similar element
    },
    ...
  ]
}
```

<a name="module_Shows.tags"></a>

### .tags(state, action)

List of the show tags

**Actions listened**:

 * `FETCH_TAGS_LIST`
 * `POST_SHOW_TAG`
 * `DELETE_SHOW_TAG`

**Returns**: {Object}

**Category**: reducers  

| Param | Type |
| --- | --- |
| state | {Object} | 
| action | {Object} | 

**Example**  

```js
// get reducer
BetaSeries.getReducer('shows', 'tags').showsTags;

// state example
[              // list of tags
  {
    ...tag           // tag element
  },
  ...
]
```

<a name="module_Shows.unratedEpisodes"></a>

### .unratedEpisodes(state, action)

List of unrated episodes of the connected member

**Actions listened**:

 * `FETCH_UNRATED_EPISODES`

**Returns**: {Object}

**Category**: reducers  

| Param | Type |
| --- | --- |
| state | {Object} | 
| action | {Object} | 

**Example**  

```js
// get reducer
BetaSeries.getReducer('shows', 'unratedEpisodes').showsUnratedEpisodes;

// state value example
{
  '12': [{
    'id': 1323421,
    'title': 'xxx',
    ...
   }, // list of episodes
  ]
}
```

<a name="module_Shows.unratedShows"></a>

### .unratedShows(state, action)

List of unrated shows of the connected member

**Actions listened**:

 * `FETCH_UNRATED_SHOWS`

**Returns**: {Object}

**Category**: reducers  

| Param | Type |
| --- | --- |
| state | {Object} | 
| action | {Object} | 

**Example**  

```js
// get reducer
BetaSeries.getReducer('shows', 'unratedShows').showsUnratedShows;

// state value example
{
  '12': [{
    'id': 1323421,
    'title': 'xxx',
    ...
   }, // list of shows
  ]
}
```

<a name="module_Shows.videos"></a>

### .videos(state, action)

List of the show videos

**Actions listened**:

 * `FETCH_SHOW_VIDEOS`

**Returns**: {Object}

**Category**: reducers  

| Param | Type |
| --- | --- |
| state | {Object} | 
| action | {Object} | 

**Example**  

```js
// get reducer
BetaSeries.getReducer('shows', 'videos').showsVideos;

// state example
{
  '1275': [              // show ID
    {
      id: 123543,        // video ID
      ...video       // video element
    },
    ...
  ]
}
```

<a name="module_Shows.getCharacters"></a>

### .getCharacters

Select characters from state

**Returns**: {Array} - List of characters element or `undefined`

**Category**: selectors  

| Param | Type | Description |
| --- | --- | --- |
| [state] | {Object} | Redux state |
| [obj] | {Object} | Accept the following: |
| [obj.showId] | {Object} | Show ID |

**Example**  

```js
const mapStateToProps = (state, props) => ({
  show: BetaSeries.getSelector('shows', 'getCharacters')(state, { showId: props.showId });
});
```

<a name="module_Shows.getDiscoverPlatformsShows"></a>

### .getDiscoverPlatformsShows

Select discovers platforms shows from state

**Returns**: {Array} - Array of shows or `[]`

**Category**: selectors  

| Param | Type | Description |
| --- | --- | --- |
| [state] | {Object} | Redux state |

**Example**  

```js
const mapStateToProps = (state, props) => ({
  discover: BetaSeries.getSelector('shows', 'getDiscoverPlatformsShows')(state);
});
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
| [obj] | {Object} | Accept the following: |
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
| [obj] | {Object} | Accept the following: |
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
| [obj] | {Object} | Accept the following: |
| [obj.showId] | {Object} | Show ID |

**Example**  

```js
const mapStateToProps = (state, props) => ({
  episode: BetaSeries.getSelector('shows', 'getLatestShowEpisode')(state, {
    showId: props.showId,
  });
});
```

<a name="module_Shows.getMemberShows"></a>

### .getMemberShows

Select member shows from state

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
  show: BetaSeries.getSelector('shows', 'getMemberShows')(state, { memberId: props.memberId });
});
```

<a name="module_Shows.getPhotos"></a>

### .getPhotos

Select photos from state

**Returns**: {Array} - List of photos element or `undefined`

**Category**: selectors  

| Param | Type | Description |
| --- | --- | --- |
| [state] | {Object} | Redux state |
| [obj] | {Object} | Accept the following: |
| [obj.showId] | {Object} | Show ID |

**Example**  

```js
const mapStateToProps = (state, props) => ({
  show: BetaSeries.getSelector('shows', 'getPhotos')(state, { showId: props.showId });
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
| [obj] | {Object} | Accept the following: |
| [obj.showId] | {Object} | Show ID |

**Example**  

```js
const mapStateToProps = (state, props) => ({
  show: BetaSeries.getSelector('shows', 'getShow')(state, { showId: props.showId });
});
```

<a name="module_Shows.getShowArticles"></a>

### .getShowArticles

Select articles from state

**Returns**: {Array} - List of articles element or `undefined`

**Category**: selectors  

| Param | Type | Description |
| --- | --- | --- |
| [state] | {Object} | Redux state |
| [obj] | {Object} | Accept the following: |
| [obj.showId] | {Object} | Show ID |

**Example**  

```js
const mapStateToProps = (state, props) => ({
  show: BetaSeries.getSelector('shows', 'getShowArticles')(state, { showId: props.showId });
});
```

<a name="module_Shows.getShowByUrl"></a>

### .getShowByUrl

Select show from state by url

**Returns**: {Object} - Show element or `undefined`

**Category**: selectors  

| Param | Type | Description |
| --- | --- | --- |
| [state] | {Object} | Redux state |
| [obj] | {Object} | Accept the following: |
| [obj.showUrl] | {String} | Show slug url |

**Example**  

```js
const mapStateToProps = (state, props) => ({
  show: BetaSeries.getSelector('shows', 'getShowByUrl')(state, { showUrl: props.showUrl });
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
| [obj] | {Object} | Accept the following: |
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
| [obj] | {Object} | Accept the following: |
| [obj.showId] | {Object} | Show ID |

**Example**  

```js
const mapStateToProps = (state, props) => ({
  episode: BetaSeries.getSelector('shows', 'getShowEpisodes')(state, {
    showId: props.showId,
  });
});
```

<a name="module_Shows.getShowEpisodesForSeason"></a>

### .getShowEpisodesForSeason

Select episode by show from state for season

**Returns**: {Array} - List of episodes element order by code or `undefined`

**Category**: selectors  

| Param | Type | Description |
| --- | --- | --- |
| [state] | {Object} | Redux state |
| [obj] | {Object} | Accept the following: |
| [obj.showId] | {Object} | Show ID |
| [obj.season] | {Object} | Season number |

**Example**  

```js
const mapStateToProps = (state, props) => ({
  episode: BetaSeries.getSelector('shows', 'getShowEpisodesForSeason')(state, {
    showId: props.showId,
    season: props.season,
  });
});
```

<a name="module_Shows.getShowGenres"></a>

### .getShowGenres

Select genres from state

**Returns**: {Array} - List of genres or `undefined`

**Category**: selectors  

| Param | Type | Description |
| --- | --- | --- |
| [state] | {Object} | Redux state |
| [obj] | {Object} | Accept the following: |

**Example**  

```js
const mapStateToProps = (state, props) => ({
  show: BetaSeries.getSelector('shows', 'getShowGenres')(state);
});
```

<a name="module_Shows.getShowInterestGenres"></a>

### .getShowInterestGenres

Select interests genres from state

**Returns**: {Object} - List of interest genres or `undefined`

**Category**: selectors  

| Param | Type | Description |
| --- | --- | --- |
| [state] | {Object} | Redux state |
| [obj] | {Object} | Accept the following: |
| [obj.showId] | {Object} | Show ID |

**Example**  

```js
const mapStateToProps = (state, props) => ({
  show: BetaSeries.getSelector('shows', 'getShowInterestGenres')(state, { showId: props.showId });
});
```

<a name="module_Shows.getShowInterests"></a>

### .getShowInterests

Select interests from state

**Returns**: {Object} - List of interests shows or `undefined`

**Category**: selectors  

| Param | Type | Description |
| --- | --- | --- |
| [state] | {Object} | Redux state |
| [obj] | {Object} | Accept the following: |
| [obj.showId] | {Object} | Show ID |

**Example**  

```js
const mapStateToProps = (state, props) => ({
  show: BetaSeries.getSelector('shows', 'getShowInterests')(state, { showId: props.showId });
});
```

<a name="module_Shows.getShowSeasons"></a>

### .getShowSeasons

Select seasons by show from state

**Returns**: {Array} - List of seasons

**Category**: selectors  

| Param | Type | Description |
| --- | --- | --- |
| [state] | {Object} | Redux state |
| [obj] | {Object} | Accept the following: |
| [obj.showId] | {Object} | Show ID |

**Example**  

```js
const mapStateToProps = (state, props) => ({
  episode: BetaSeries.getSelector('shows', 'getShowSeasons')(state, {
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
| [obj] | {Object} | Accept the following: |
| [obj.showId] | {Object} | Show ID |

**Example**  

```js
const mapStateToProps = (state, props) => ({
  show: BetaSeries.getSelector('shows', 'getSimilarShows')(state, { showId: props.showId });
});
```

<a name="module_Shows.getTagsList"></a>

### .getTagsList

Select tags list from state

**Returns**: {Array} - Array of tags or `[]`

**Category**: selectors  

| Param | Type | Description |
| --- | --- | --- |
| [state] | {Object} | Redux state |

**Example**  

```js
const mapStateToProps = (state, props) => ({
  discover: BetaSeries.getSelector('shows', 'getTagsList')(state);
});
```

<a name="module_Shows.getUnratedEpisodes"></a>

### .getUnratedEpisodes

Select unrated episodes from state

**Returns**: {Object} - Unrated Episodes list or `undefined`

**Category**: selectors  

| Param | Type | Description |
| --- | --- | --- |
| [state] | {Object} | Redux state |
| [obj] | {Object} | Accept the following: |
| [obj.memberId] | {Number} | Member ID (optional) |

**Example**  

```js
const mapStateToProps = (state, props) => ({
  episode: BetaSeries.getSelector('shows', 'getUnratedEpisodes')(state, {
    memberId: props.memberId,
});
```

<a name="module_Shows.getUnratedShows"></a>

### .getUnratedShows

Select unrated shows from state

**Returns**: {Object} - Unrated shows list or `undefined`

**Category**: selectors  

| Param | Type | Description |
| --- | --- | --- |
| [state] | {Object} | Redux state |
| [obj] | {Object} | Accept the following: |
| [obj.memberId] | {Number} | Member ID (optional) |

**Example**  

```js
const mapStateToProps = (state, props) => ({
  episode: BetaSeries.getSelector('shows', 'getUnratedShows')(state, {
    memberId: props.memberId,
});
```

<a name="module_Shows.getVideos"></a>

### .getVideos

Select videos from state

**Returns**: {Array} - List of videos element or `undefined`

**Category**: selectors  

| Param | Type | Description |
| --- | --- | --- |
| [state] | {Object} | Redux state |
| [obj] | {Object} | Accept the following: |
| [obj.showId] | {Object} | Show ID |

**Example**  

```js
const mapStateToProps = (state, props) => ({
  show: BetaSeries.getSelector('shows', 'getVideos')(state, { showId: props.showId });
});
```

