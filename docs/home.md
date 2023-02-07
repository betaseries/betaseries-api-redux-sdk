[Back to API index](README.md)

# Home

* [Home](#module_Home)
    * _actions_
        * [.doFetchHomeBanner([obj])](#module_Home.doFetchHomeBanner) ⇒ {Promise}
        * [.doFetchHomeBlocks([obj])](#module_Home.doFetchHomeBlocks) ⇒ {Promise}
        * [.doFetchHomePopular([obj])](#module_Home.doFetchHomePopular) ⇒ {Promise}
        * [.doFetchHomePopularArticles([obj])](#module_Home.doFetchHomePopularArticles) ⇒ {Promise}
        * [.doFetchHomePopularPlatform([obj])](#module_Home.doFetchHomePopularPlatform) ⇒ {Promise}
        * [.doFetchHomeRecommendation([obj])](#module_Home.doFetchHomeRecommendation) ⇒ {Promise}
        * [.doFetchHomeTop([obj])](#module_Home.doFetchHomeTop) ⇒ {Promise}
        * [.doFetchHomeTrailers([obj])](#module_Home.doFetchHomeTrailers) ⇒ {Promise}
    * _reducers_
        * [.articles(state, action)](#module_Home.articles) ⇒ {Object}
        * [.blocks(state, action)](#module_Home.blocks) ⇒ {Object}
        * [.popular(state, action)](#module_Home.popular) ⇒ {Object}
        * [.popularPlatform(state, action)](#module_Home.popularPlatform) ⇒ {Object}
        * [.reco(state, action)](#module_Home.reco) ⇒ {Object}
        * [.top(state, action)](#module_Home.top) ⇒ {Object}
        * [.trailers(state, action)](#module_Home.trailers) ⇒ {Object}
    * _selectors_
        * [.getHomeBlocks](#module_Home.getHomeBlocks) ⇒ {Array}
        * [.getHomeLastTop](#module_Home.getHomeLastTop) ⇒ {Array}
        * [.getHomePopular](#module_Home.getHomePopular) ⇒ {Array}
        * [.getHomePopularArticles](#module_Home.getHomePopularArticles) ⇒ {Array}
        * [.getHomePopularPlatform](#module_Home.getHomePopularPlatform) ⇒ {Array}
        * [.getHomeRecommendation](#module_Home.getHomeRecommendation) ⇒ {Array}
        * [.getHomeRecoReferenceShow](#module_Home.getHomeRecoReferenceShow) ⇒ {Object}
        * [.getHomeTrailers](#module_Home.getHomeTrailers) ⇒ {Array}

<a name="module_Home.doFetchHomeBanner"></a>

### .doFetchHomeBanner([obj])

Retrieve Home banner info

**Dispatch**: `FETCH_HOME_BANNER`

**Returns**: {Promise}

**Category**: actions  

| Param | Type | Description |
| --- | --- | --- |
| [obj] | {Object} | Accept the following: |
| [obj.bannerId] | {String} | Id of the banner to retrieve the info from |

**Example**  

```js
BetaSeries.getAction('home', 'doFetchHomeBanner')({ bannerId: '1' });
```

<a name="module_Home.doFetchHomeBlocks"></a>

### .doFetchHomeBlocks([obj])

Retrieve Home blocks

**Dispatch**: `FETCH_HOME_BLOCKS`

**Returns**: {Promise}

**Category**: actions  

| Param | Type | Description |
| --- | --- | --- |
| [obj] | {Object} | Accept the following: |
| [obj.app] | {Number} | Info to display blocks for app or not, [0 = web by default, 1 = app] (optional) |

**Example**  

```js
BetaSeries.getAction('home', 'doFetchHomeBlocks')({ app: 1 });
```

<a name="module_Home.doFetchHomePopular"></a>

### .doFetchHomePopular([obj])

Retrieve Home popular shows for the last 30 days

**Dispatch**: `FETCH_HOME_POPULAR`

**Returns**: {Promise}

**Category**: actions  

| Param | Type | Description |
| --- | --- | --- |
| [obj] | {Object} | Accept the following: |
| [obj.day] | {Number} | Day format 'Y-m-d', past day by default (optional) |
| [obj.summary] | {Boolean} | Summary info, false by default (optional) |

**Example**  

```js
BetaSeries.getAction('home', 'doFetchHomePopular')({ day: '2021-10-01', summary: true });
```

<a name="module_Home.doFetchHomePopularArticles"></a>

### .doFetchHomePopularArticles([obj])

Retrieve popular articles for the last 30 days

**Dispatch**: `FETCH_HOME_POPULAR_ARTICLES`

**Returns**: {Promise}

**Category**: actions  

| Param | Type | Description |
| --- | --- | --- |
| [obj] | {Object} | Accept the following: |
| [obj.limit] | {Number} | Results limit per page |

**Example**  

```js
BetaSeries.getAction('home', 'doFetchHomePopularArticles')({ limit: 10 });
```

<a name="module_Home.doFetchHomePopularPlatform"></a>

### .doFetchHomePopularPlatform([obj])

Retrieve Home popular platform shows

**Dispatch**: `FETCH_HOME_POPULAR_PLATFORM`

**Returns**: {Promise}

**Category**: actions  

| Param | Type | Description |
| --- | --- | --- |
| [obj] | {Object} | Accept the following: |
| [obj.platformId] | {String} | platformId return in config home/blocks |

**Example**  

```js
BetaSeries.getAction('home', 'doFetchHomePopularPlatform')({ platformId: '1'});
```

<a name="module_Home.doFetchHomeRecommendation"></a>

### .doFetchHomeRecommendation([obj])

Retrieve Home recommendation shows and reference show

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

<a name="module_Home.articles"></a>

### .articles(state, action)

List of home popular articles

**Actions listened**:

 * `FETCH_HOME_POPULAR_ARTICLES`

**Returns**: {Object}

**Category**: reducers  

| Param | Type |
| --- | --- |
| state | {Object} | 
| action | {Object} | 

**Example**  

```js
// get reducer
BetaSeries.getReducer('home', 'articles').homeArticles;

// state example
[
  {
    id: 384144,    // article post
    ...post,
  },
  ...,
]
```

<a name="module_Home.blocks"></a>

### .blocks(state, action)

List of the home blocks

**Actions listened**:

 * `FETCH_HOME_BLOCKS`

**Returns**: {Object}

**Category**: reducers  

| Param | Type |
| --- | --- |
| state | {Object} | 
| action | {Object} | 

**Example**  

```js
// get reducer
BetaSeries.getReducer('home', 'blocks').homeBlocks;

// state example
[
    {
      type: 'meta',     // block type
      ...block       // block element
    },
    ...
]
```

<a name="module_Home.popular"></a>

### .popular(state, action)

List of the popular shows from the last 30 days

**Actions listened**:

 * `FETCH_HOME_POPULAR`

**Returns**: {Object}

**Category**: reducers  

| Param | Type |
| --- | --- |
| state | {Object} | 
| action | {Object} | 

**Example**  

```js
// get reducer
BetaSeries.getReducer('home', 'popular').homePopular;

// state example
[
    {
      id: 123543,     // show ID
      ...show       // show element
    },
    ...
]
```

<a name="module_Home.popularPlatform"></a>

### .popularPlatform(state, action)

List of the shows on popular platform

**Actions listened**:

 * `FETCH_HOME_POPULAR_PLATFORM`

**Returns**: {Object}

**Category**: reducers  

| Param | Type |
| --- | --- |
| state | {Object} | 
| action | {Object} | 

**Example**  

```js
// get reducer
BetaSeries.getReducer('home', 'popularPlatform').homePopularPlatform;

// state example
{
 119: 
   [
      {
        id: 123543,     // show ID
        ...show       // show element
       },
       ...
   ]
}
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
{
 shows: [
    {
      id: 123543,     // show ID
      ...show         // show element
    },
    ...
 ],
 show: {}             // ref show or forced show (can be null)
} 
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

<a name="module_Home.getHomeBlocks"></a>

### .getHomeBlocks

Select home blocks from state

**Returns**: {Array} - Home blocks or `undefined`

**Category**: selectors  

| Param | Type | Description |
| --- | --- | --- |
| [state] | {Object} | Redux state |

**Example**  

```js
const mapStateToProps = (state, props) => ({
  home: BetaSeries.getSelector('home', 'getHomeBlocks')(state);
});
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

<a name="module_Home.getHomePopular"></a>

### .getHomePopular

Select Home popular shows for the last 30 days

**Returns**: {Array} - Popular shows or `undefined`

**Category**: selectors  

| Param | Type | Description |
| --- | --- | --- |
| [state] | {Object} | Redux state |

**Example**  

```js
const mapStateToProps = (state, props) => ({
  home: BetaSeries.getSelector('home', 'getHomePopular')(state);
});
```

<a name="module_Home.getHomePopularArticles"></a>

### .getHomePopularArticles

Select popular articles from state

**Returns**: {Array} - Article posts elements or `undefined`

**Category**: selectors  

| Param | Type | Description |
| --- | --- | --- |
| [state] | {Object} | Redux state |

**Example**  

```js
const mapStateToProps = (state, props) => ({
  blog: BetaSeries.getSelector('home', 'getHomePopularArticles')(state);
});
```

<a name="module_Home.getHomePopularPlatform"></a>

### .getHomePopularPlatform

Select Home popular platform shows

**Returns**: {Array} - Popular platform shows or `undefined`

**Category**: selectors  

| Param | Type | Description |
| --- | --- | --- |
| [state] | {Object} | Redux state |
| [obj] | {Object} | Accept the following: |
| [obj.platformId] | {String} | Platform ID |

**Example**  

```js
const mapStateToProps = (state, props) => ({
  home: BetaSeries.getSelector('home', 'getHomePopularPlatform')(state, {
    platformId: '1',
  });
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

<a name="module_Home.getHomeRecoReferenceShow"></a>

### .getHomeRecoReferenceShow

Select reco reference show from state

**Returns**: {Object} - Recommendation reference show or `null`

**Category**: selectors  

| Param | Type | Description |
| --- | --- | --- |
| [state] | {Object} | Redux state |

**Example**  

```js
const mapStateToProps = (state, props) => ({
  home: BetaSeries.getSelector('home', 'getHomeRecoReferenceShow')(state);
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

