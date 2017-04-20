[Back to API index](README.md)

# Timelines

* [Timelines](#module_Timelines)
    * _actions_
        * [.doFetchEvent([obj])](#module_Timelines.doFetchEvent) ⇒ {Promise}
        * [.doFetchFeedTimeline([obj])](#module_Timelines.doFetchFeedTimeline) ⇒ {Promise}
        * [.doFetchFriendsTimeline([obj])](#module_Timelines.doFetchFriendsTimeline) ⇒ {Promise}
    * _reducers_
        * [.events(state, action)](#module_Timelines.events) ⇒ {Object}
        * [.feed(state, action)](#module_Timelines.feed) ⇒ {Object}
        * [.friends(state, action)](#module_Timelines.friends) ⇒ {Object}
    * _selectors_
        * [.getEvent](#module_Timelines.getEvent) ⇒ {Object}
        * [.getFeedTimeline](#module_Timelines.getFeedTimeline) ⇒ {Object}
        * [.getFriendsTimeline](#module_Timelines.getFriendsTimeline) ⇒ {Object}

<a name="module_Timelines.doFetchEvent"></a>

### .doFetchEvent([obj])

Retrieve event

**Dispatch**: `FETCH_TIMELINE_EVENT`

**Returns**: {Promise}

**Category**: actions  

| Param | Type | Description |
| --- | --- | --- |
| [obj] | {Object} | Accept the folling: |
| [obj.eventId] | {Number} | ID of event |

**Example**  

```js
BetaSeries.getAction('timelines', 'doFetchEvent')({
  eventId: 32,
});
```

<a name="module_Timelines.doFetchFeedTimeline"></a>

### .doFetchFeedTimeline([obj])

Retrieve episode

**Dispatch**: `FETCH_FEED_TIMELINE`

**Returns**: {Promise}

**Category**: actions  

| Param | Type | Description |
| --- | --- | --- |
| [obj] | {Object} | Accept the folling: |
| [obj.nbpp] | {Number} | Limit number of events (default `20`) |
| [obj.page] | {Number} | Page number (default `1`) |

**Example**  

```js
BetaSeries.getAction('timelines', 'doFetchFeedTimeline')({
  nbpp: 32,
});
```

<a name="module_Timelines.doFetchFriendsTimeline"></a>

### .doFetchFriendsTimeline([obj])

Retrieve episode

**Dispatch**: `FETCH_FRIENDS_TIMELINE`

**Returns**: {Promise}

**Category**: actions  

| Param | Type | Description |
| --- | --- | --- |
| [obj] | {Object} | Accept the folling: |
| [obj.nbpp] | {Number} | Limit number of events (default `20`) |
| [obj.since_id] | {Number} | ID of event. I will received previous events (optional) |
| [obj.last_id] | {Number} | ID of event. I will received following events  (optional) |
| [obj.self] | {Bool} | Includes events of the authenticated user (default `false`) |
| [obj.types] | {Array} | Types of events separated by a comma (optional) |

**Example**  

```js
BetaSeries.getAction('timelines', 'doFetchFriendsTimeline')({
  nbpp: 32,
  since_id: 153465413,
  types: ['markas'],
});
```

<a name="module_Timelines.events"></a>

### .events(state, action)

List of the events

**Actions listened**:

 * `FETCH_FRIENDS_TIMELINE`
 * `FETCH_TIMELINE_EVENT`
 * `COMMENT_EVENT`

**Returns**: {Object}

**Category**: reducers  

| Param | Type |
| --- | --- |
| state | {Object} | 
| action | {Object} | 

**Example**  

```js
// get reducer
BetaSeries.getReducer('timelines', 'events').timelinesEvents;

// state example
{
  '3215': {
    id: 3215,          // event ID
    ...event,        // event element
  },
  ...,
}
```

<a name="module_Timelines.feed"></a>

### .feed(state, action)

List of the feed timeline events

**Actions listened**:

 * `FETCH_FEED_TIMELINE`
 * `FETCH_TIMELINE_EVENT`

**Returns**: {Object}

**Category**: reducers  

| Param | Type |
| --- | --- |
| state | {Object} | 
| action | {Object} | 

**Example**  

```js
// get reducer
BetaSeries.getReducer('timelines', 'feed').timelinesFeed;

// state example
[ 3215, 2576, 9234, ...] // Event Ids
```

<a name="module_Timelines.friends"></a>

### .friends(state, action)

List of the friends timeline events

**Actions listened**:

 * `FETCH_FRIENDS_TIMELINE`
 * `FETCH_TIMELINE_EVENT`
 * `COMMENT_EVENT`

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
[ 3215, 2576, 9234, ...] // Event Ids
```

<a name="module_Timelines.getEvent"></a>

### .getEvent

Select timeline event from state

**Returns**: {Object} - Event element or `undefined`

**Category**: selectors  

| Param | Type | Description |
| --- | --- | --- |
| [state] | {Object} | Redux state |

**Example**  

```js
const mapStateToProps = (state, props) => ({
  event: BetaSeries.getSelector('timelines', 'getEvent')(state, {
    eventId: 2674,
  }),
});
```

<a name="module_Timelines.getFeedTimeline"></a>

### .getFeedTimeline

Select feed timeline events from state

**Returns**: {Object} - Feed timeline events element or `undefined`

**Category**: selectors  

| Param | Type | Description |
| --- | --- | --- |
| [state] | {Object} | Redux state |

**Example**  

```js
const mapStateToProps = (state, props) => ({
  events: BetaSeries.getSelector('timelines', 'getFeedTimeline')(state),
});
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

