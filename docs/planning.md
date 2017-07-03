[Back to API index](README.md)

# Planning

* [Planning](#module_Planning)
    * _actions_
        * [.doFetchCalendar([obj])](#module_Planning.doFetchCalendar) ⇒ {Promise}
    * _reducers_
        * [.calendar(state, action)](#module_Planning.calendar) ⇒ {Object}
    * _selectors_
        * [.getCalendar](#module_Planning.getCalendar) ⇒ {Array}

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
BetaSeries.getAction('planning', 'doFetchCalendar')({ showId: 1275 });
```

<a name="module_Planning.calendar"></a>

### .calendar(state, action)

List of the calendar events

**Actions listened**:

 * `FETCH_PLANNING_CALENDAR`

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

