[Back to API index](README.md)

# Timelines

* [Timelines](#module_Timelines)
    * _reducers_
        * [.friends(state, action)](#module_Timelines.friends) ⇒ {Object}
    * _selectors_
        * [.getFriendsTimeline](#module_Timelines.getFriendsTimeline) ⇒ {Object}

<a name="module_Timelines.friends"></a>

### .friends(state, action)

List of the friends timeline events

**Actions listened**:

 * `FETCH_FRIENDS_TIMELINE`

**Returns**: {Object}

**Category**: reducers  

| Param | Type |
| --- | --- |
| state | {Object} | 
| action | {Object} | 

**Example**  

```js
// get reducer
BetaSeries.getReducer('timelines', 'friends').timelinesFriends;

// state example
[
  {
    id: 3215,          // event ID
    ...event,        // event element
  },
  ...,
]
```

<a name="module_Timelines.getFriendsTimeline"></a>

### .getFriendsTimeline

Select friends timeline events from state

**Returns**: {Object} - Friends timeline events element or `undefined`

**Category**: selectors  

| Param | Type | Description |
| --- | --- | --- |
| [state] | {Object} | Redux state |

**Example**  

```js
const mapStateToProps = (state, props) => ({
  events: BetaSeries.getSelector('timelines', 'getFriendsTimeline')(state),
});
```

