[Back to API index](README.md)

# Home

* [Home](#module_Home)
    * _actions_
        * [.doFetchHomeRecommendation([obj])](#module_Home.doFetchHomeRecommendation) ⇒ {Promise}
        * [.doFetchHomeTop([obj])](#module_Home.doFetchHomeTop) ⇒ {Promise}
        * [.doFetchHomeTrailers([obj])](#module_Home.doFetchHomeTrailers) ⇒ {Promise}
    * _reducers_
        * [.reco(state, action)](#module_Home.reco) ⇒ {Object}
        * [.top(state, action)](#module_Home.top) ⇒ {Object}
        * [.trailers(state, action)](#module_Home.trailers) ⇒ {Object}
    * _selectors_
        * [.getHomeLastTop](#module_Home.getHomeLastTop) ⇒ {Array}
        * [.getHomeRecommendation](#module_Home.getHomeRecommendation) ⇒ {Array}
        * [.getHomeTrailers](#module_Home.getHomeTrailers) ⇒ {Array}

<a name="module_Home.doFetchHomeRecommendation"></a>

### .doFetchHomeRecommendation([obj])

Retrieve Home recommendation shows

**Dispatch**: `FETCH_HOME_RECO`

**Returns**: {Promise}

**Category**: actions  

| Param | Type | Description |
| --- | --- | --- |
| [obj] | {Object} | Accept the following: |

**Example**  

```js
BetaSeries.getAction('home', 'doFetchHomeRecommendation')();
```

<a name="module_Home.doFetchHomeTop"></a>

### .doFetchHomeTop([obj])

Retrieve Home Top 10 shows of the day

**Dispatch**: `FETCH_HOME_TOP`

**Returns**: {Promise}

**Category**: actions  

| Param | Type | Description |
| --- | --- | --- |
| [obj] | {Object} | Accept the following: |
| [obj.day] | {Number} | Day format 'Y-m-d', past day by default (optional) |

**Example**  

```js
BetaSeries.getAction('home', 'doFetchHomeTop')({ day: '2021-10-01' });
```

<a name="module_Home.doFetchHomeTrailers"></a>

### .doFetchHomeTrailers([obj])

Retrieve trailers list for home page

**Dispatch**: `FETCH_HOME_TRAILERS`

**Returns**: {Promise}

**Category**: actions  

| Param | Type | Description |
| --- | --- | --- |
| [obj] | {Object} | Accept the following: |
| [obj.start] | {Number} | Used for paginate (`0` by default) |
| [obj.limit] | {Number} | Used for paginate (optional) |

**Example**  

```js
BetaSeries.getAction('home', 'doFetchHomeTrailers')({ start: 0, limit: 10 });
```

<a name="module_Home.reco"></a>

### .reco(state, action)

List of the recommendation shows

**Actions listened**:

 * `FETCH_HOME_RECO`

**Returns**: {Object}

**Category**: reducers  

| Param | Type |
| --- | --- |
| state | {Object} | 
| action | {Object} | 

**Example**  

```js
// get reducer
BetaSeries.getReducer('home', 'reco').homeReco;

// state example
[
    {
      id: 123543,     // show ID
      ...show       // show element
    },
    ...
]
```

<a name="module_Home.top"></a>

### .top(state, action)

List of the Top 10 shows

**Actions listened**:

 * `FETCH_HOME_TOP`

**Returns**: {Object}

**Category**: reducers  

| Param | Type |
| --- | --- |
| state | {Object} | 
| action | {Object} | 

**Example**  

```js
// get reducer
BetaSeries.getReducer('home', 'top').homeTop;

// state example
[
    {
      id: 123543,     // show ID
      ...show       // show element
    },
    ...
]
```

<a name="module_Home.trailers"></a>

### .trailers(state, action)

List of trailers for home page

**Actions listened**:

 * `FETCH_HOME_TRAILERS`

**Returns**: {Object}

**Category**: reducers  

| Param | Type |
| --- | --- |
| state | {Object} | 
| action | {Object} | 

**Example**  

```js
// get reducer
BetaSeries.getReducer('home', 'trailers').homeTrailers;

// state example
[
  {
    id: 384144,    // trailer id
    ...trailer,
  },
  ...,
]
```

<a name="module_Home.getHomeLastTop"></a>

### .getHomeLastTop

Select Top 10 shows from state

**Returns**: {Array} - Top 10 shows or `undefined`

**Category**: selectors  

| Param | Type | Description |
| --- | --- | --- |
| [state] | {Object} | Redux state |

**Example**  

```js
const mapStateToProps = (state, props) => ({
  home: BetaSeries.getSelector('home', 'getHomeLastTop')(state);
});
```

<a name="module_Home.getHomeRecommendation"></a>

### .getHomeRecommendation

Select recommendation shows from state

**Returns**: {Array} - Recommendation shows or `undefined`

**Category**: selectors  

| Param | Type | Description |
| --- | --- | --- |
| [state] | {Object} | Redux state |

**Example**  

```js
const mapStateToProps = (state, props) => ({
  home: BetaSeries.getSelector('home', 'getHomeRecommendation')(state);
});
```

<a name="module_Home.getHomeTrailers"></a>

### .getHomeTrailers

Select home trailers from state

**Returns**: {Array} - Trailers elements or `undefined`

**Category**: selectors  

| Param | Type | Description |
| --- | --- | --- |
| [state] | {Object} | Redux state |

**Example**  

```js
const mapStateToProps = (state, props) => ({
  home: BetaSeries.getSelector('home', 'getHomeTrailers')(state);
});
```

