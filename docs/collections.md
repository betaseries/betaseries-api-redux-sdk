[Back to API index](README.md)

# Collections

* [Collections](#module_Collections)
    * _actions_
        * [.doEditCollection([obj])](#module_Collections.doEditCollection) ⇒ {Promise}
        * [.doFetchCollection([obj])](#module_Collections.doFetchCollection) ⇒ {Promise}
        * [.doFetchCollectionList([obj])](#module_Collections.doFetchCollectionList) ⇒ {Promise}
        * [.doPostCollection([obj])](#module_Collections.doPostCollection) ⇒ {Promise}
        * [.doRemoveCollection([obj])](#module_Collections.doRemoveCollection) ⇒ {Promise}
    * _reducers_
        * [.collections(state, action)](#module_Collections.collections) ⇒ {Object}
    * _selectors_
        * [.getCollection](#module_Collections.getCollection) ⇒ {Object}
        * [.getCollectionList](#module_Collections.getCollectionList) ⇒ {Array}

<a name="module_Collections.doEditCollection"></a>

### .doEditCollection([obj])

Edit an existing collection

**Dispatch**: `UPDATE_COLLECTION`

**Returns**: {Promise}

**Category**: actions  

| Param | Type | Description |
| --- | --- | --- |
| [obj] | {Object} | Accept the following: |
| [obj.id] | {Number} | Collection id for edit |
| [obj.name] | {String} | Collection name |
| [obj.private] | {Boolean} | Collection is private or not |
| [obj.description] | {String} | Collection description (optional) |
| [obj.items] | {Array} | Collection items (show or movie) |

**Example**  

```js
BetaSeries.getAction('collections', 'doEditCollection')({
  id: 456,
  name: 'Test',
  private: true,
  description: '',
  items: [{ id: 1, type: 'show', note: 'Test' }],
});
```

<a name="module_Collections.doFetchCollection"></a>

### .doFetchCollection([obj])

Retrieve collection

**Dispatch**: `FETCH_COLLECTION`

**Returns**: {Promise}

**Category**: actions  

| Param | Type | Description |
| --- | --- | --- |
| [obj] | {Object} | Accept the following: |
| [obj.id] | {Number} | Collection ID |

**Example**  

```js
BetaSeries.getAction('collections', 'doFetchCollection')({ id: 456 });
```

<a name="module_Collections.doFetchCollectionList"></a>

### .doFetchCollectionList([obj])

Retrieve collection list

**Dispatch**: `FETCH_COLLECTIONS_LIST`

**Returns**: {Promise}

**Category**: actions  

| Param | Type | Description |
| --- | --- | --- |
| [obj] | {Object} | Accept the following: |
| [obj.memberId] | {Number} | Member ID (optional: connected user if not added) |

**Example**  

```js
BetaSeries.getAction('collections', 'doFetchCollectionList')({ memberId: 45 });
```

<a name="module_Collections.doPostCollection"></a>

### .doPostCollection([obj])

Post a new collection

**Dispatch**: `ADD_COLLECTION`

**Returns**: {Promise}

**Category**: actions  

| Param | Type | Description |
| --- | --- | --- |
| [obj] | {Object} | Accept the following: |
| [obj.name] | {String} | Collection name |
| [obj.private] | {Boolean} | Collection is private or not |
| [obj.description] | {String} | Collection description (optional) |
| [obj.items] | {Array} | Collection items (show or movie) |

**Example**  

```js
BetaSeries.getAction('collections', 'doPostCollection')({
  name: 'Test',
  private: true,
  description: '',
  items: [{ id: 1, type: 'show', note: 'Test' }],
});
```

<a name="module_Collections.doRemoveCollection"></a>

### .doRemoveCollection([obj])

Remove collection

**Dispatch**: `DELETE_COLLECTION`

**Returns**: {Promise}

**Category**: actions  

| Param | Type | Description |
| --- | --- | --- |
| [obj] | {Object} | Accept the following: |
| [obj.id] | {Number} | Collection ID |

**Example**  

```js
BetaSeries.getAction('collections', 'doRemoveCollection')({
  id: 438
});
```

<a name="module_Collections.collections"></a>

### .collections(state, action)

List of collections

**Actions listened**:

 * `FETCH_COLLECTIONS_LIST`

**Returns**: {Object}

**Category**: reducers  

| Param | Type |
| --- | --- |
| state | {Object} | 
| action | {Object} | 

**Example**  

```js
// get reducer
BetaSeries.getReducer('collections', 'collections').collectionsCollections;

// state example
[
  {
    id: 384144,    // collection
    ...collection,
  },
  ...,
]
```

<a name="module_Collections.getCollection"></a>

### .getCollection

Select collection from state

**Returns**: {Object} - Collection element or `undefined`

**Category**: selectors  

| Param | Type | Description |
| --- | --- | --- |
| [state] | {Object} | Redux state |
| [obj] | {Object} | Accept the following: |
| [obj.id] | {Object} | Collection ID |

**Example**  

```js
const mapStateToProps = (state, props) => ({
  show: BetaSeries.getSelector('collections', 'getCollection')(state, { id: props.collectionId });
});
```

<a name="module_Collections.getCollectionList"></a>

### .getCollectionList

Select collection list from state

**Returns**: {Array} - Array of collections or `[]`

**Category**: selectors  

| Param | Type | Description |
| --- | --- | --- |
| [state] | {Object} | Redux state |

**Example**  

```js
const mapStateToProps = (state, props) => ({
  discover: BetaSeries.getSelector('collections', 'getCollectionList')(state);
});
```

