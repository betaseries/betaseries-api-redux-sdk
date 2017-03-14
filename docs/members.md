[Back to API index](README.md)

# Members

* [Members](#module_Members)
    * _actions_
        * [.doFetchMember([obj])](#module_Members.doFetchMember) ⇒ {Promise}
        * [.doFetchUser([obj])](#module_Members.doFetchUser) ⇒ {Promise}
    * _reducers_
        * [.members(state, action)](#module_Members.members) ⇒ {Object}
    * _selectors_
        * [.getMember](#module_Members.getMember) ⇒ {Object}
        * [.getUser](#module_Members.getUser) ⇒ {Object}

<a name="module_Members.doFetchMember"></a>

### .doFetchMember([obj])

Retrieve authenticated user infos

**Dispatch**: `FETCH_MEMBER`

**Returns**: {Promise}

**Category**: actions  

| Param | Type | Description |
| --- | --- | --- |
| [obj] | {Object} | Accept the folling: |
| [obj.memberId] | {Bool} | Member ID |
| [obj.summary] | {Bool} | Display only the information |
| [obj.only] | {String} | Display only `movies` or `shows` |

**Example**  

```js
BetaSeries.getAction('members', 'doFetchMember')();
```

<a name="module_Members.doFetchUser"></a>

### .doFetchUser([obj])

Retrieve authenticated user infos

**Dispatch**: `FETCH_USER`

**Returns**: {Promise}

**Category**: actions  

| Param | Type | Description |
| --- | --- | --- |
| [obj] | {Object} | Accept the folling: |
| [obj.summary] | {Bool} | Display only the information (default `true`) |
| [obj.only] | {String} | Display only `movies` or `shows` |

**Example**  

```js
BetaSeries.getAction('members', 'doFetchUser')();
```

<a name="module_Members.members"></a>

### .members(state, action)

List of members

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
BetaSeries.getReducer('members', 'members').members;

// state value example
{
  '12': {      // member ID
    id: 12,    // member element
    ...member,
  },
  ...,
}
```

<a name="module_Members.getMember"></a>

### .getMember

Select member from state

**Returns**: {Object} - Member element or `null`

**Category**: selectors  

| Param | Type | Description |
| --- | --- | --- |
| [state] | {Object} | Redux state |
| [obj] | {Object} | Accept the folling: |
| [obj.memberId] | {Object} | Member ID |

**Example**  

```js
const mapStateToProps = (state, props) => ({
  show: BetaSeries.getSelector('members', 'getMember')(state, {
    memberId: props.memberId,
  });
});
```

<a name="module_Members.getUser"></a>

### .getUser

Select authenticated user from state

**Returns**: {Object} - Member element or `null`

**Category**: selectors  

| Param | Type | Description |
| --- | --- | --- |
| [state] | {Object} | Redux state |

**Example**  

```js
const mapStateToProps = (state, props) => ({
  show: BetaSeries.getSelector('members', 'getUser')(state);
});
```

