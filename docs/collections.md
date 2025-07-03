[Back to API index](README.md)

# Collections

* [Collections](#module_Collections)
    * _actions_
        * [.doEditCollection([obj])](#module_Collections.doEditCollection) ⇒ {Promise}
        * [.doFetchCollection([obj])](#module_Collections.doFetchCollection) ⇒ {Promise}
        * [.doFetchCollectionList([obj])](#module_Collections.doFetchCollectionList) ⇒ {Promise}
        * [.doFetchSubscribedCollectionList([obj])](#module_Collections.doFetchSubscribedCollectionList) ⇒ {Promise}
        * [.doPostCollection([obj])](#module_Collections.doPostCollection) ⇒ {Promise}
        * [.doRemoveCollection([obj])](#module_Collections.doRemoveCollection) ⇒ {Promise}
        * [.doSubscribeCollection([obj])](#module_Collections.doSubscribeCollection) ⇒ {Promise}
        * [.doToggleNotificationsCollection([obj])](#module_Collections.doToggleNotificationsCollection) ⇒ {Promise}
        * [.doUnsubscribeCollection([obj])](#module_Collections.doUnsubscribeCollection) ⇒ {Promise}
    * _reducers_
        * [.collections(state, action)](#module_Collections.collections) ⇒ {Object}
        * [.members(state, action)](#module_Collections.members) ⇒ {Object}
        * [.subscribed(state, action)](#module_Collections.subscribed) ⇒ {Object}
    * _selectors_
        * [.getCollection](#module_Collections.getCollection) ⇒ {Object}
        * [.getCollectionList](#module_Collections.getCollectionList) ⇒ {Array}
        * [.getCollectionSubscribedList](#module_Collections.getCollectionSubscribedList) ⇒ {Array}

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
| [obj.user_id] | {Number} | User ID (optional: connected user if not added) |

**Example**  

```js
BetaSeries.getAction('collections', 'doFetchCollectionList')({ user_id: 45 });
```

<a name="module_Collections.doFetchSubscribedCollectionList"></a>

### .doFetchSubscribedCollectionList([obj])

Retrieve subscribed collection list

**Dispatch**: `FETCH_SUBSCRIBED_COLLECTIONS_LIST`

**Returns**: {Promise}

**Category**: actions  

| Param | Type | Description |
| --- | --- | --- |
| [obj] | {Object} | Accept the following: |
| [obj.user_id] | {Number} | User ID (optional: connected user if not added) |

**Example**  

```js
BetaSeries.getAction('collections', 'doFetchSubscribedCollectionList')({ user_id: 45 });
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

<a name="module_Collections.doSubscribeCollection"></a>

### .doSubscribeCollection([obj])

Subscribe to collection

**Dispatch**: `SUBSCRIBE_COLLECTION`

**Returns**: {Promise}

**Category**: actions  

| Param | Type | Description |
| --- | --- | --- |
| [obj] | {Object} | Accept the following: |
| [obj.id] | {Number} | Collection ID |

**Example**  

```js
BetaSeries.getAction('collections', 'doSubscribeCollection')({ id: 456 });
```

<a name="module_Collections.doToggleNotificationsCollection"></a>

### .doToggleNotificationsCollection([obj])

Enable/disable alert collection

**Dispatch**: `TOGGLE_ALERT_COLLECTION`

**Returns**: {Promise}

**Category**: actions  

| Param | Type | Description |
| --- | --- | --- |
| [obj] | {Object} | Accept the following: |
| [obj.id] | {Number} | Collection ID |

**Example**  

```js
BetaSeries.getAction('collections', 'doToggleNotificationsCollection')({ id: 456 });
```

<a name="module_Collections.doUnsubscribeCollection"></a>

### .doUnsubscribeCollection([obj])

Unsubscribe to collection

**Dispatch**: `UNSUBSCRIBE_COLLECTION`

**Returns**: {Promise}

**Category**: actions  

| Param | Type | Description |
| --- | --- | --- |
| [obj] | {Object} | Accept the following: |
| [obj.id] | {Number} | Collection ID |

**Example**  

```js
BetaSeries.getAction('collections', 'doUnsubscribeCollection')({ id: 456 });
```

<a name="module_Collections.collections"></a>

### .collections(state, action)

List of collections

**Actions listened**:

 * `FETCH_COLLECTION`

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
{
  '12': {           // collection ID
    id: 12,    // collection
    ...collection,
  },
 ...,
}
```

<a name="module_Collections.members"></a>

### .members(state, action)

List of collections of members

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
BetaSeries.getReducer('collections', 'members').collectionsMembers;

// state example
{
  '12': [{           // member ID
    id: 384144,    // collection
    ...collection,
  }, ...,
 ],
}
```

<a name="module_Collections.subscribed"></a>

### .subscribed(state, action)

List of subscribed collections of members

**Actions listened**:

 * `FETCH_SUBSCRIBED_COLLECTIONS_LIST`

**Returns**: {Object}

**Category**: reducers  

| Param | Type |
| --- | --- |
| state | {Object} | 
| action | {Object} | 

**Example**  

```js
// get reducer
BetaSeries.getReducer('collections', 'subscribed').collectionsSubscribed;

// state example
{
  '12': [{           // member ID
    id: 384144,    // collection
    ...collection,
  }, ...,
 ],
}
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
  collection: BetaSeries.getSelector('collections', 'getCollection')(state, { id: props.id });
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
  collections:
 BetaSeries.getSelector('collections', 'getCollectionList')(state, { memberId: 1 });
});
```

<a name="module_Collections.getCollectionSubscribedList"></a>

### .getCollectionSubscribedList

Select subscribed collection list from state

**Returns**: {Array} - Array of collections or `[]`

**Category**: selectors  

| Param | Type | Description |
| --- | --- | --- |
| [state] | {Object} | Redux state |

**Example**  

```js
const mapStateToProps = (state, props) => ({
  collections:
 BetaSeries.getSelector('collections', 'getCollectionSubscribedList')(state, { memberId: 1 });
});
```

