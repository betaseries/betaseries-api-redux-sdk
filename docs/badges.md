[Back to API index](README.md)

# Badges

* [Badges](#module_Badges)
    * _actions_
        * [.doFetchBadge([obj])](#module_Badges.doFetchBadge) ⇒ {Promise}
    * _reducers_
        * [.badges(state, action)](#module_Badges.badges) ⇒ {Object}
    * _selectors_
        * [.getBadge](#module_Badges.getBadge) ⇒ {Array}

<a name="module_Badges.doFetchBadge"></a>

### .doFetchBadge([obj])

Retrieve badge

**Dispatch**: `FETCH_BADGE`

**Returns**: {Promise}

**Category**: actions  

| Param | Type | Description |
| --- | --- | --- |
| [obj] | {Object} | Accept the folling: |
| [obj.badgeId] | {Number} | Badge ID |

**Example**  

```js
BetaSeries.getAction('shows', 'doFetchBadge')({ badgeId: 123 });
```

<a name="module_Badges.badges"></a>

### .badges(state, action)

List of badges

**Actions listened**:

 * `FETCH_BADGE`

**Returns**: {Object}

**Category**: reducers  

| Param | Type |
| --- | --- |
| state | {Object} | 
| action | {Object} | 

**Example**  

```js
// get reducer
BetaSeries.getReducer('badges', 'badges').badges;

// state example
{
  '4': {      // badge ID
    id: 4,    // badge element
    ...badge,
  },
  ...,
}
```

<a name="module_Badges.getBadge"></a>

### .getBadge

Select badge by ID from state

**Returns**: {Array} - Badge element or `undefined`

**Category**: selectors  

| Param | Type | Description |
| --- | --- | --- |
| [state] | {Object} | Redux state |
| [obj] | {Object} | Accept the folling: |
| [obj.badgeId] | {Number} | Badge ID |

**Example**  

```js
const mapStateToProps = (state, props) => ({
  episode: BetaSeries.getSelector('badges', 'getBadge')(state, {
    badgeId: props.badgeId,
  });
});
```

