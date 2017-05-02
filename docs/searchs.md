[Back to API index](README.md)

# Searchs

* [Searchs](#module_Searchs)
    * _actions_
        * [.doClearSearchAll()](#module_Searchs.doClearSearchAll) ⇒ {Promise}
        * [.doClearSearchShows()](#module_Searchs.doClearSearchShows) ⇒ {Promise}
        * [.doSearchAll([obj])](#module_Searchs.doSearchAll) ⇒ {Promise}
        * [.doSearchShows([obj])](#module_Searchs.doSearchShows) ⇒ {Promise}
    * _reducers_
        * [.all(state, action)](#module_Searchs.all) ⇒ {Object}
        * [.shows(state, action)](#module_Searchs.shows) ⇒ {Object}
    * _selectors_
        * [.getSearchAll](#module_Searchs.getSearchAll) ⇒ {Object}
        * [.getSearchShows](#module_Searchs.getSearchShows) ⇒ {Object}

<a name="module_Searchs.doClearSearchAll"></a>

### .doClearSearchAll()

Clear search show

**Dispatch**: `CLEAR_SEARCH_ALL`

**Returns**: {Promise}

**Category**: actions  
**Example**  

```js
BetaSeries.getAction('searchs', 'doClearSearchAll')();
```

<a name="module_Searchs.doClearSearchShows"></a>

### .doClearSearchShows()

Clear search show

**Dispatch**: `CLEAR_SEARCH_SHOWS`

**Returns**: {Promise}

**Category**: actions  
**Example**  

```js
BetaSeries.getAction('searchs', 'doClearSearchShows')();
```

<a name="module_Searchs.doSearchAll"></a>

### .doSearchAll([obj])

Search all type of element by query

**Dispatch**: `SEARCH_ALL`

**Returns**: {Promise}

**Category**: actions  

| Param | Type | Description |
| --- | --- | --- |
| [obj] | {Object} | Accept the folling: |
| [obj.query] | {Number} | Query search |

**Example**  

```js
BetaSeries.getAction('searchs', 'doSearchAll')({ query: 'alk' });
```

<a name="module_Searchs.doSearchShows"></a>

### .doSearchShows([obj])

Search show by title

**Dispatch**: `SEARCH_SHOWS`

**Returns**: {Promise}

**Category**: actions  

| Param | Type | Description |
| --- | --- | --- |
| [obj] | {Object} | Accept the folling: |
| [obj.title] | {Number} | Title search |
| [obj.summary] | {Bool} | Returns only summary infos of the show elements (default `false`) |
| [obj.order] | {Number} | Return order (`title`|`popularity`|`followers`), (default `title`) |
| [obj.nbpp] | {Number} | Number of results per page (default `5`, maximum `100`) |
| [obj.page] | {Number} | Page number (default `1`) |

**Example**  

```js
BetaSeries.getAction('searchs', 'doSearchShows')({ title: 'alking DEA' });
```

<a name="module_Searchs.all"></a>

### .all(state, action)

List of all search

**Actions listened**:

 * `SEARCH_ALL`
 * `CLEAN_SEARCH_ALL`

**Returns**: {Object}

**Category**: reducers  

| Param | Type |
| --- | --- |
| state | {Object} | 
| action | {Object} | 

**Example**  

```js
// get reducer
BetaSeries.getReducer('searchs', 'all').searchAll;

// state example
{
  shows: ...shows,      // list of shows search
  movies: ...movies,    // list of movies search
  users: ...users,      // list of users search
}
```

<a name="module_Searchs.shows"></a>

### .shows(state, action)

List of the search shows

**Actions listened**:

 * `SEARCH_SHOWS`

**Returns**: {Object}

**Category**: reducers  

| Param | Type |
| --- | --- |
| state | {Object} | 
| action | {Object} | 

**Example**  

```js
// get reducer
BetaSeries.getReducer('searchs', 'shows').searchShows;

// state example
[
  ...shows               // list of search shows
]
```

<a name="module_Searchs.getSearchAll"></a>

### .getSearchAll

Select episode from state

**Returns**: {Object} - List of shows or empty array

**Category**: selectors  

| Param | Type | Description |
| --- | --- | --- |
| [state] | {Object} | Redux state |

**Example**  

```js
const mapStateToProps = (state, props) => ({
  searchs: BetaSeries.getSelector('searchs', 'getSearchAll')(state);
});
```

<a name="module_Searchs.getSearchShows"></a>

### .getSearchShows

Select episode from state

**Returns**: {Object} - List of shows or empty array

**Category**: selectors  

| Param | Type | Description |
| --- | --- | --- |
| [state] | {Object} | Redux state |

**Example**  

```js
const mapStateToProps = (state, props) => ({
  show: BetaSeries.getSelector('searchs', 'getSearchShows')(state);
});
```

