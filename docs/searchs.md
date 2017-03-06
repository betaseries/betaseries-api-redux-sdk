[Back to API index](README.md)

# Searchs

* [Searchs](#module_Searchs)
    * _actions_
        * [.doClearSearchShows()](#module_Searchs.doClearSearchShows) ⇒ {Promise}
        * [.doSearchShows([obj])](#module_Searchs.doSearchShows) ⇒ {Promise}
    * _reducers_
        * [.shows(state, action)](#module_Searchs.shows) ⇒ {Object}

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
| [obj.summary] | {Number} | Returns only summary infos of the series (default `false`) |
| [obj.order] | {Number} | Return order (`title`|`popularity`|`followers`), (default `title`) |
| [obj.nbpp] | {Number} | Number of results per page (default `5`, maximum `100`) |
| [obj.page] | {Number} | Page number (default `1`) |

**Example**  

```js
BetaSeries.getAction('searchs', 'doSearchShows')({ title: 'alking DEA' });
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
BetaSeries.getReducer('shows', 'characters');

// state example
[
  ...shows               // list of search shows
]
```

