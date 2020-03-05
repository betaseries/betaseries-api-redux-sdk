[Back to API index](README.md)

# Platforms

* [Platforms](#module_Platforms)
    * _actions_
        * [.doFetchPlatformsList()](#module_Platforms.doFetchPlatformsList) ⇒ {Promise}
    * _reducers_
        * [.platforms(state, action)](#module_Platforms.platforms) ⇒ {Object}
    * _selectors_
        * [.getPlatformsSVOD](#module_Platforms.getPlatformsSVOD) ⇒ {Array}
        * [.getPlatformsVOD](#module_Platforms.getPlatformsVOD) ⇒ {Array}
        * [.getSVODPlatform](#module_Platforms.getSVODPlatform) ⇒ {Object}
        * [.getVODPlatform](#module_Platforms.getVODPlatform) ⇒ {Object}

<a name="module_Platforms.doFetchPlatformsList"></a>

### .doFetchPlatformsList([obj])

Retrieve all platforms

**Dispatch**: `FETCH_PLATFORMS_LIST`

**Returns**: {Promise}

**Category**: actions  

| Param | Type | Description |
| --- | --- | --- |
| [obj] | {Object} | Accept the following: |
| [obj.country] | {String} | Country code (2 caracters) |

**Example**  

```js
BetaSeries.getAction('platforms', 'doFetchPlatformsList')({
  country: 'fr',
});
```

<a name="module_Platforms.platforms"></a>

### .platforms(state, action)

List of platforms

**Actions listened**:

 * `FETCH_PLATFORMS_LIST`

**Returns**: {Object}

**Category**: reducers  

| Param | Type |
| --- | --- |
| state | {Object} |
| action | {Object} |

**Example**  

```js
// get reducer
BetaSeries.getReducer('platforms', 'platforms').platformsPlatforms;

// state value example
{
  'fr': [{      // country code
    id: 12,    // platform element
    ...poll,
  }, ...],
  ...,
}
```

<a name="module_Platforms.getPlatformsSVOD"></a>

### .getPlatformsSVOD

Select SVOD platforms from state

**Returns**: {Array} - elements or `undefined`

**Category**: selectors  

| Param | Type | Description |
| --- | --- | --- |
| [state] | {Object} | Redux state |
| [obj.country] | {String} | Country code |

**Example**  

```js
const mapStateToProps = (state, props) => ({
  platforms: BetaSeries.getSelector('platforms', 'getPlatformsSVOD')(state, {
    platformId: props.platformId,
  });
});
```

<a name="module_Platforms.getPlatformsVOD"></a>

### .getPlatformsVOD

Select VOD platforms from state

**Returns**: {Array} - elements or `undefined`

**Category**: selectors  

| Param | Type | Description |
| --- | --- | --- |
| [state] | {Object} | Redux state |
| [obj.country] | {String} | Country code |

**Example**  

```js
const mapStateToProps = (state, props) => ({
  platforms: BetaSeries.getSelector('platforms', 'getPlatformsVOD')(state, {
    country: props.country,
  });
});
```

<a name="module_Platforms.getSVODPlatform"></a>

### .getSVODPlatform

Select SVOD platform by ID from state

**Returns**: {Object} - Platform element or `undefined`

**Category**: selectors  

| Param | Type | Description |
| --- | --- | --- |
| [state] | {Object} | Redux state |
| [obj.platformId] | {Number} | Platform ID |

**Example**  

```js
const mapStateToProps = (state, props) => ({
  platform: BetaSeries.getSelector('platforms', 'getSVODPlatform')(state, {
    platformId: props.platformId,
  });
});
```

<a name="module_Platforms.getVODPlatform"></a>

### .getVODPlatform

Select VOD platform by ID from state

**Returns**: {Object} - Platform element or `undefined`

**Category**: selectors  

| Param | Type | Description |
| --- | --- | --- |
| [state] | {Object} | Redux state |
| [obj.platformId] | {Number} | Platform ID |

**Example**  

```js
const mapStateToProps = (state, props) => ({
  platform: BetaSeries.getSelector('platforms', 'getVODPlatform')(state, {
    platformId: props.platformId,
  });
});
```
