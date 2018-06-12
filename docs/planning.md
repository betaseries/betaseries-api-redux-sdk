[Back to API index](README.md)

# Planning

* [Planning](#module_Planning)
    * _actions_
        * [.doClearCalendar()](#module_Planning.doClearCalendar) ⇒ {Promise}
        * [.doClearTimeline()](#module_Planning.doClearTimeline) ⇒ {Promise}
        * [.doFetchCalendar([obj])](#module_Planning.doFetchCalendar) ⇒ {Promise}
        * [.doFetchTimeline([obj])](#module_Planning.doFetchTimeline) ⇒ {Promise}
    * _reducers_
        * [.calendar(state, action)](#module_Planning.calendar) ⇒ {Object}
        * [.timeline(state, action)](#module_Planning.timeline) ⇒ {Object}
    * _selectors_
        * [.getCalendar](#module_Planning.getCalendar) ⇒ {Array}
        * [.getTimeline](#module_Planning.getTimeline) ⇒ {Array}

<a name="module_Planning.doClearCalendar"></a>

### .doClearCalendar()

Clear planning calendar

**Dispatch**: `CLEAR_PLANNING_CALENDAR`

**Returns**: {Promise}

**Category**: actions  
**Example**  

```js
BetaSeries.getAction('planning', 'doClearCalendar')();
```

<a name="module_Planning.doClearTimeline"></a>

### .doClearTimeline()

Clear planning timeline feed

**Dispatch**: `CLEAR_PLANNING_TIMELINE`

**Returns**: {Promise}

**Category**: actions  
**Example**  

```js
BetaSeries.getAction('planning', 'doClearTimeline')();
```

<a name="module_Planning.doFetchCalendar"></a>

### .doFetchCalendar([obj])

Retrieve show

**Dispatch**: `FETCH_PLANNING_CALENDAR`

**Returns**: {Promise}

**Category**: actions  

| Param | Type | Description |
| --- | --- | --- |
| [obj] | {Object} | Accept the following: |
| [obj.start] | {String} | The start date of the calendar (format `Y-m-d`) |
| [obj.end] | {String} | The end date of the calendar (format `Y-m-d`) |

**Example**  

```js
BetaSeries.getAction('planning', 'doFetchCalendar')({
  start: '2017-07-01',
  end: '2017-07-31',
});
```

<a name="module_Planning.doFetchTimeline"></a>

### .doFetchTimeline([obj])

Retrieve show

**Dispatch**: `FETCH_PLANNING_TIMELINE`

**Returns**: {Promise}

**Category**: actions  

| Param | Type | Description |
| --- | --- | --- |
| [obj] | {Object} | Accept the following: |
| [obj.date] | {String} | The selection date reference (format `Y-m-d`) |
| [obj.selection] | {String} | The selection type (`before`, `around` or `after`) |

**Example**  

```js
BetaSeries.getAction('planning', 'doFetchTimeline')({
  date: '2017-07-17',
  selection: 'around',
});
```

<a name="module_Planning.calendar"></a>

### .calendar(state, action)

List of the calendar events

**Actions listened**:

 * `FETCH_PLANNING_CALENDAR`
 * `CLEAR_PLANNING_CALENDAR`

**Returns**: {Object}

**Category**: reducers  

| Param | Type |
| --- | --- |
| state | {Object} | 
| action | {Object} | 

**Example**  

```js
// get reducer
BetaSeries.getReducer('planning', 'calendar').planningCalendar;

// state example
{
  '12': [                    // member ID
    {
      date: '2017-07-08',
      density: 'light',
      amount: 1
    },
    ...days
  ]
}
```

<a name="module_Planning.timeline"></a>

### .timeline(state, action)

List of the timeline events

**Actions listened**:

 * `FETCH_PLANNING_TIMELINE`
 * `CLEAR_PLANNING_TIMELINE`

**Returns**: {Object}

**Category**: reducers  

| Param | Type |
| --- | --- |
| state | {Object} | 
| action | {Object} | 

**Example**  

```js
// get reducer
BetaSeries.getReducer('planning', 'timeline').planningCalendar;

// state example
{
  '12': [                    // member ID
    {
      date: '2017-07-08',
      events: [
        {
          type: 'episode_release',
          payload: { ... } // according event type
        },
        ...events
      ],
    },
    ...days
  ]
}
```

<a name="module_Planning.getCalendar"></a>

### .getCalendar

Select calendar events by member from state

**Returns**: {Array} - List of calendar events or `undefined`

**Category**: selectors  

| Param | Type | Description |
| --- | --- | --- |
| [state] | {Object} | Redux state |
| [obj] | {Object} | Accept the following: |
| [obj.start] | {String} | The start date of the calendar (format `Y-m-d`) |
| [obj.end] | {String} | The end date of the calendar (format `Y-m-d`) |

**Example**  

```js
const mapStateToProps = (state, props) => ({
  episode: BetaSeries.getSelector('planning', 'getCalendar')(state, {
    start: '2017-07-01',
    end: '2017-07-31'
  });
});
```

<a name="module_Planning.getTimeline"></a>

### .getTimeline

Select timeline events by member from state

**Returns**: {Array} - List of timeline events or `undefined`

**Category**: selectors  

| Param | Type | Description |
| --- | --- | --- |
| [state] | {Object} | Redux state |

**Example**  

```js
const mapStateToProps = (state, props) => ({
  episode: BetaSeries.getSelector('planning', 'getTimeline')(state);
});
```

