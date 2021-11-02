[Back to API index](README.md)

# Polls

* [Polls](#module_Polls)
    * _actions_
        * [.doAnswerPoll([obj])](#module_Polls.doAnswerPoll) ⇒ {Promise}
        * [.doFetchLastPoll()](#module_Polls.doFetchLastPoll) ⇒ {Promise}
        * [.doFetchPoll([obj])](#module_Polls.doFetchPoll) ⇒ {Promise}
        * [.doFetchPolls([obj])](#module_Polls.doFetchPolls) ⇒ {Promise}
        * [.doAddReport([obj])](#module_Polls.doAddReport) ⇒ {Promise}
        * [.doAskUpdate([obj])](#module_Polls.doAskUpdate) ⇒ {Promise}
    * _reducers_
        * [.polls(state, action)](#module_Polls.polls) ⇒ {Object}
    * _selectors_
        * [.getLastPoll](#module_Polls.getLastPoll) ⇒ {Array}
        * [.getLastPollUnAnswer](#module_Polls.getLastPollUnAnswer) ⇒ {Array}
        * [.getPoll](#module_Polls.getPoll) ⇒ {Array}

<a name="module_Polls.doAnswerPoll"></a>

### .doAnswerPoll([obj])

Add answer on poll

**Dispatch**: `ANSWER_POLL`

**Returns**: {Promise}

**Category**: actions  

| Param | Type | Description |
| --- | --- | --- |
| [obj] | {Object} | Accept the following: |
| [obj.pollId] | {Number} | Poll ID |
| [obj.answer] | {String} | Index of answer |

**Example**  

```js
BetaSeries.getAction('polls', 'doAnswerPoll')({
  pollId: 120,
  answer: 1,
});
```

<a name="module_Polls.doFetchLastPoll"></a>

### .doFetchLastPoll()

Retrieve last poll

**Dispatch**: `FETCH_LAST_POLL`

**Returns**: {Promise}

**Category**: actions  
**Example**  

```js
BetaSeries.getAction('polls', 'doFetchLastPoll')();
```

<a name="module_Polls.doFetchPoll"></a>

### .doFetchPoll([obj])

Retrieve specific poll

**Dispatch**: `FETCH_POLL`

**Returns**: {Promise}

**Category**: actions  

| Param | Type | Description |
| --- | --- | --- |
| [obj] | {Object} | Accept the following: |
| [obj.pollId] | {Number} | Poll ID |

**Example**  

```js
BetaSeries.getAction('polls', 'doFetchPoll')({
  pollId: 120,
});
```

<a name="module_Polls.doFetchPolls"></a>

### .doFetchPolls([obj])

Retrieve all polls

**Dispatch**: `FETCH_POLLS`

**Returns**: {Promise}

**Category**: actions  

| Param | Type | Description |
| --- | --- | --- |
| [obj] | {Object} | Accept the following: |
| [obj.nbpp] | {Number} | Limit number of polls (default `10`) |
| [obj.page] | {Number} | Page number (default `1`) |

**Example**  

```js
BetaSeries.getAction('polls', 'doFetchPolls')({
  nbpp: 32,
});
```

<a name="module_Polls.doAddReport"></a>

### .doAddReport([obj])

Add a report for a media

**Dispatch**: ``

**Returns**: {Promise}

**Category**: actions  

| Param | Type | Description |
| --- | --- | --- |
| [obj] | {Object} | Accept the following: |
| [obj.targetId] | {Number} | Media ID for the report |
| [obj.type] | {String} | Type of media: show or film |
| [obj.reason] | {String} | Reason of report |

**Example**  

```js
BetaSeries.getAction('reports', 'doAddReport')({
  targetId: 120,
  type: 'show',
  reason: 'foo',
});
```

<a name="module_Polls.doAskUpdate"></a>

### .doAskUpdate([obj])

Ask for an update for a media

**Dispatch**: ``

**Returns**: {Promise}

**Category**: actions  

| Param | Type | Description |
| --- | --- | --- |
| [obj] | {Object} | Accept the following: |
| [obj.id] | {Number} | Media ID for the report |
| [obj.type] | {String} | Type of media: show or film |

**Example**  

```js
BetaSeries.getAction('reports', 'doAskUpdate')({
  id: 120,
  type: 'show'
});
```

<a name="module_Polls.polls"></a>

### .polls(state, action)

List of polls

**Actions listened**:

 * `FETCH_LAST_POLL`
 * `FETCH_POLL`
 * `FETCH_POLLS`
 * `ANSWER_POLL`

**Returns**: {Object}

**Category**: reducers  

| Param | Type |
| --- | --- |
| state | {Object} | 
| action | {Object} | 

**Example**  

```js
// get reducer
BetaSeries.getReducer('polls', 'polls').polls;

// state value example
{
  '12': {      // poll ID
    id: 12,    // poll element
    ...poll,
  },
  ...,
}
```

<a name="module_Polls.getLastPoll"></a>

### .getLastPoll

Select last poll from state

**Returns**: {Array} - Poll element or `undefined`

**Category**: selectors  

| Param | Type | Description |
| --- | --- | --- |
| [state] | {Object} | Redux state |

**Example**  

```js
const mapStateToProps = (state, props) => ({
  poll: BetaSeries.getSelector('polls', 'getLastPoll')(state);
});
```

<a name="module_Polls.getLastPollUnAnswer"></a>

### .getLastPollUnAnswer

Select last poll from state

**Returns**: {Array} - Poll element or `undefined`

**Category**: selectors  

| Param | Type | Description |
| --- | --- | --- |
| [state] | {Object} | Redux state |

**Example**  

```js
const mapStateToProps = (state, props) => ({
  poll: BetaSeries.getSelector('polls', 'getLastPollUnAnswer')(state);
});
```

<a name="module_Polls.getPoll"></a>

### .getPoll

Select poll by ID from state

**Returns**: {Array} - Poll element or `undefined`

**Category**: selectors  

| Param | Type | Description |
| --- | --- | --- |
| [state] | {Object} | Redux state |
| [obj] | {Object} | Accept the following: |
| [obj.pollId] | {Number} | Poll ID |

**Example**  

```js
const mapStateToProps = (state, props) => ({
  poll: BetaSeries.getSelector('polls', 'getPoll')(state, {
    pollId: props.pollId,
  });
});
```

