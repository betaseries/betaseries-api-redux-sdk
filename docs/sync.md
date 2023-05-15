[Back to API index](README.md)

# Sync

* [Sync](#module_Sync)
    * [.doFetchNetflixData([obj])](#module_Sync.doFetchNetflixData) ⇒ {Promise}
    * [.doFetchPlexWebhook([obj])](#module_Sync.doFetchPlexWebhook) ⇒ {Promise}
    * [.doFetchTraktData([obj])](#module_Sync.doFetchTraktData) ⇒ {Promise}
    * [.doFetchTraktProfile([obj])](#module_Sync.doFetchTraktProfile) ⇒ {Promise}
    * [.doFetchTvTimeData([obj])](#module_Sync.doFetchTvTimeData) ⇒ {Promise}
    * [.doFetchTvTimeProfiles([obj])](#module_Sync.doFetchTvTimeProfiles) ⇒ {Promise}
    * [.doPostNetflixCredentials([obj])](#module_Sync.doPostNetflixCredentials) ⇒ {Promise}
    * [.doPostPlexUser([obj])](#module_Sync.doPostPlexUser) ⇒ {Promise}
    * [.doSyncNetflix([obj])](#module_Sync.doSyncNetflix) ⇒ {Promise}
    * [.doSyncTrakt([obj])](#module_Sync.doSyncTrakt) ⇒ {Promise}
    * [.doSyncTvTime([obj])](#module_Sync.doSyncTvTime) ⇒ {Promise}
    * [.doUnsyncNetflix([obj])](#module_Sync.doUnsyncNetflix) ⇒ {Promise}
    * [.doUnsyncTrakt([obj])](#module_Sync.doUnsyncTrakt) ⇒ {Promise}
    * [.doUnsyncTvTime([obj])](#module_Sync.doUnsyncTvTime) ⇒ {Promise}

<a name="module_Sync.doFetchNetflixData"></a>

### .doFetchNetflixData([obj])

Retrieve Netflix data

**Dispatch**: `FETCH_NETFLIX`

**Returns**: {Promise}

**Category**: actions  

| Param | Type | Description |
| --- | --- | --- |
| [obj] | {Object} | Accept the following: |

**Example**  

```js
BetaSeries.getAction('sync', 'doFetchNetflixData')();
```

<a name="module_Sync.doFetchPlexWebhook"></a>

### .doFetchPlexWebhook([obj])

Retrieve Plex webhook data

**Dispatch**: `FETCH_PLEX_WEBHOOK`

**Returns**: {Promise}

**Category**: actions  

| Param | Type | Description |
| --- | --- | --- |
| [obj] | {Object} | Accept the following: |

**Example**  

```js
BetaSeries.getAction('sync', 'doFetchPlexWebhook')();
```

<a name="module_Sync.doFetchTraktData"></a>

### .doFetchTraktData([obj])

Retrieve Trakt data

**Dispatch**: `GET_TRAKT_DATA`

**Returns**: {Promise}

**Category**: actions  

| Param | Type | Description |
| --- | --- | --- |
| [obj] | {Object} | Accept the following: |

**Example**  

```js
BetaSeries.getAction('sync', 'doFetchTraktData')();
```

<a name="module_Sync.doFetchTraktProfile"></a>

### .doFetchTraktProfile([obj])

Retrieve Trakt profile data

**Dispatch**: `GET_TRAKT_PROFILE`

**Returns**: {Promise}

**Category**: actions  

| Param | Type | Description |
| --- | --- | --- |
| [obj] | {Object} | Accept the following: |
| [obj.username] | {String} | Trakt username |

**Example**  

```js
BetaSeries.getAction('sync', 'doFetchTraktProfile')({ username: 'maxime' });
```

<a name="module_Sync.doFetchTvTimeData"></a>

### .doFetchTvTimeData([obj])

Retrieve TV Time data

**Dispatch**: `GET_TVTIME_DATA`

**Returns**: {Promise}

**Category**: actions  

| Param | Type | Description |
| --- | --- | --- |
| [obj] | {Object} | Accept the following: |

**Example**  

```js
BetaSeries.getAction('sync', 'doFetchTvTimeData')();
```

<a name="module_Sync.doFetchTvTimeProfiles"></a>

### .doFetchTvTimeProfiles([obj])

Retrieve TV Time profiles data

**Dispatch**: `GET_TVTIME_PROFILES`

**Returns**: {Promise}

**Category**: actions  

| Param | Type | Description |
| --- | --- | --- |
| [obj] | {Object} | Accept the following: |
| [obj.username] | {String} | TVTime username |

**Example**  

```js
BetaSeries.getAction('sync', 'doFetchTvTimeProfiles')({ username: 'maxime' });
```

<a name="module_Sync.doPostNetflixCredentials"></a>

### .doPostNetflixCredentials([obj])

Post Netflix credentials data

**Dispatch**: `POST_NETFLIX`

**Returns**: {Promise}

**Category**: actions  

| Param | Type | Description |
| --- | --- | --- |
| [obj] | {Object} | Accept the following: |
| [obj.email] | {String} | netflix email address |
| [obj.password] | {String} | netflix password |

**Example**  

```js
BetaSeries.getAction('sync', 'doPostNetflixCredentials')({ email: 'email', password: 'password' });
```

<a name="module_Sync.doPostPlexUser"></a>

### .doPostPlexUser([obj])

Post Plex user

**Dispatch**: `POST_PLEX_USER`

**Returns**: {Promise}

**Category**: actions  

| Param | Type | Description |
| --- | --- | --- |
| [obj] | {Object} | Accept the following: |
| [obj.username] | {String} | Plex username |

**Example**  

```js
BetaSeries.getAction('sync', 'doPostPlexUser')({ username: 'maxime' });
```

<a name="module_Sync.doSyncNetflix"></a>

### .doSyncNetflix([obj])

Sync netflix user

**Dispatch**: `SYNC_NETFLIX`

**Returns**: {Promise}

**Category**: actions  

| Param | Type | Description |
| --- | --- | --- |
| [obj] | {Object} | Accept the following: |
| [obj.cookie] | {String} | Netflix cookie |
| [obj.guid] | {String} | Netflix guid |
| [obj.name] | {String} | Netflix username |

**Example**  

```js
BetaSeries.getAction('sync', 'doSyncNetflix')({ cookie: 'cookie', guid: 'guid', name: 'maxime' });
```

<a name="module_Sync.doSyncTrakt"></a>

### .doSyncTrakt([obj])

Sync Trakt user

**Dispatch**: `USER_LINK_TRAKT`

**Returns**: {Promise}

**Category**: actions  

| Param | Type | Description |
| --- | --- | --- |
| [obj] | {Object} | Accept the following: |
| [obj.user_id] | {String} | Trakt user id |
| [obj.username] | {String} | Trakt username |

**Example**  

```js
BetaSeries.getAction('sync', 'doSyncTrakt')({ username: 'maxime' });
```

<a name="module_Sync.doSyncTvTime"></a>

### .doSyncTvTime([obj])

Sync TVTime user

**Dispatch**: `USER_LINK_TVTIME`

**Returns**: {Promise}

**Category**: actions  

| Param | Type | Description |
| --- | --- | --- |
| [obj] | {Object} | Accept the following: |
| [obj.user_id] | {String} | TVTime user id |

**Example**  

```js
BetaSeries.getAction('sync', 'doSyncTvTime')({ user_id: 1 });
```

<a name="module_Sync.doUnsyncNetflix"></a>

### .doUnsyncNetflix([obj])

Unsync netflix user

**Dispatch**: `DELETE_NETFLIX`

**Returns**: {Promise}

**Category**: actions  

| Param | Type | Description |
| --- | --- | --- |
| [obj] | {Object} | Accept the following: |

**Example**  

```js
BetaSeries.getAction('sync', 'doUnsyncNetflix')();
```

<a name="module_Sync.doUnsyncTrakt"></a>

### .doUnsyncTrakt([obj])

Unsync Trakt user

**Dispatch**: `USER_UNLINK_TRAKT`

**Returns**: {Promise}

**Category**: actions  

| Param | Type | Description |
| --- | --- | --- |
| [obj] | {Object} | Accept the following: |

**Example**  

```js
BetaSeries.getAction('sync', 'doUnsyncTrakt')();
```

<a name="module_Sync.doUnsyncTvTime"></a>

### .doUnsyncTvTime([obj])

Unsync TVTime user

**Dispatch**: `USER_UNLINK_TVTIME`

**Returns**: {Promise}

**Category**: actions  

| Param | Type | Description |
| --- | --- | --- |
| [obj] | {Object} | Accept the following: |

**Example**  

```js
BetaSeries.getAction('sync', 'doUnsyncTvTime')();
```

