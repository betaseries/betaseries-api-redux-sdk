[Back to API index](README.md)

# Movies

* [Comments](#module_Comments)
    * _actions_
        * [.doAddVote([obj])](#module_Comments.doAddVote) ⇒ {Promise}
        * [.doClearEpisodeComments([obj])](#module_Comments.doClearEpisodeComments) ⇒ {Promise}
        * [.doClearMemberComments([obj])](#module_Comments.doClearMemberComments) ⇒ {Promise}
        * [.doClearMovieComments([obj])](#module_Comments.doClearMovieComments) ⇒ {Promise}
        * [.doClearPollComments([obj])](#module_Comments.doClearPollComments) ⇒ {Promise}
        * [.doClearShowComments([obj])](#module_Comments.doClearShowComments) ⇒ {Promise}
        * [.doCommentEpisode([obj])](#module_Comments.doCommentEpisode) ⇒ {Promise}
        * [.doCommentEvent([obj])](#module_Comments.doCommentEvent) ⇒ {Promise}
        * [.doCommentMember([obj])](#module_Comments.doCommentMember) ⇒ {Promise}
        * [.doCommentMovie([obj])](#module_Comments.doCommentMovie) ⇒ {Promise}
        * [.doCommentPoll([obj])](#module_Comments.doCommentPoll) ⇒ {Promise}
        * [.doCommentShow([obj])](#module_Comments.doCommentShow) ⇒ {Promise}
        * [.doCommentSpecificEvent([obj])](#module_Comments.doCommentSpecificEvent) ⇒ {Promise}
        * [.doFetchComment([obj])](#module_Comments.doFetchComment) ⇒ {Promise}
        * [.doFetchEpisodeComments([obj])](#module_Comments.doFetchEpisodeComments) ⇒ {Promise}
        * [.doFetchEventComments([obj])](#module_Comments.doFetchEventComments) ⇒ {Promise}
        * [.doFetchMemberComments([obj])](#module_Comments.doFetchMemberComments) ⇒ {Promise}
        * [.doFetchMovieComments([obj])](#module_Comments.doFetchMovieComments) ⇒ {Promise}
        * [.doFetchPollComments([obj])](#module_Comments.doFetchPollComments) ⇒ {Promise}
        * [.doFetchReplies([obj])](#module_Comments.doFetchReplies) ⇒ {Promise}
        * [.doFetchShowComments([obj])](#module_Comments.doFetchShowComments) ⇒ {Promise}
        * [.doRemoveComment([obj])](#module_Comments.doRemoveComment) ⇒ {Promise}
        * [.doRemoveVote([obj])](#module_Comments.doRemoveVote) ⇒ {Promise}
    * _reducers_
        * [.comments(state, action)](#module_Comments.comments) ⇒ {Object}
        * [.episodes(state, action)](#module_Comments.episodes) ⇒ {Object}
        * [.events(state, action)](#module_Comments.events) ⇒ {Object}
        * [.members(state, action)](#module_Comments.members) ⇒ {Object}
        * [.movies(state, action)](#module_Comments.movies) ⇒ {Object}
        * [.polls(state, action)](#module_Comments.polls) ⇒ {Object}
        * [.shows(state, action)](#module_Comments.shows) ⇒ {Object}
    * _selectors_
        * [.getComment](#module_Comments.getComment) ⇒ {Object}
        * [.getEpisodeComments](#module_Comments.getEpisodeComments) ⇒ {Array}
        * [.getEventComments](#module_Comments.getEventComments) ⇒ {Array}
        * [.getMemberComments](#module_Comments.getMemberComments) ⇒ {Array}
        * [.getMovieComments](#module_Comments.getMovieComments) ⇒ {Array}
        * [.getPollComments](#module_Comments.getPollComments) ⇒ {Array}
        * [.getReplies](#module_Comments.getReplies) ⇒ {Array}
        * [.getShowComments](#module_Comments.getShowComments) ⇒ {Array}

<a name="module_Comments.doAddVote"></a>

### .doAddVote([obj])

Add vote on a comment

**Dispatch**: `ADD_COMMENT_VOTE`

**Returns**: {Promise}

**Category**: actions  

| Param | Type | Description |
| --- | --- | --- |
| [obj] | {Object} | Accept the following: |
| [obj.commentId] | {Number} | Comment ID |
| [obj.type] | {Number} | 1 for a thumbs_up, -1 for a thumbs_down |

**Example**  

```js
BetaSeries.getAction('comments', 'doAddVote')({
  commentId: 438,
  type: 1,
});
```

<a name="module_Comments.doClearEpisodeComments"></a>

### .doClearEpisodeComments([obj])

Clear comments for a specific episode

**Dispatch**: `CLEAR_EPISODE_COMMENTS`

**Returns**: {Promise}

**Category**: actions  

| Param | Type | Description |
| --- | --- | --- |
| [obj] | {Object} | Accept the following: |
| [obj.episodeId] | {Number} | Episode ID |

**Example**  

```js
BetaSeries.getAction('comments', 'doClearEpisodeComments')({ episodeId: 481 });
```

<a name="module_Comments.doClearMemberComments"></a>

### .doClearMemberComments([obj])

Clear comments for a specific member

**Dispatch**: `CLEAR_MEMBER_COMMENTS`

**Returns**: {Promise}

**Category**: actions  

| Param | Type | Description |
| --- | --- | --- |
| [obj] | {Object} | Accept the following: |
| [obj.memberId] | {Number} | MemberID |

**Example**  

```js
BetaSeries.getAction('comments', 'doClearMemberComments')({ memberId: 481 });
```

<a name="module_Comments.doClearMovieComments"></a>

### .doClearMovieComments([obj])

Clear comments for a specific movie

**Dispatch**: `CLEAR_MOVIE_COMMENTS`

**Returns**: {Promise}

**Category**: actions  

| Param | Type | Description |
| --- | --- | --- |
| [obj] | {Object} | Accept the following: |
| [obj.movieId] | {Number} | MovieID |

**Example**  

```js
BetaSeries.getAction('comments', 'doClearMovieComments')({ movieId: 481 });
```

<a name="module_Comments.doClearPollComments"></a>

### .doClearPollComments([obj])

Clear comments for a specific poll

**Dispatch**: `CLEAR_POLL_COMMENTS`

**Returns**: {Promise}

**Category**: actions  

| Param | Type | Description |
| --- | --- | --- |
| [obj] | {Object} | Accept the following: |
| [obj.pollId] | {Number} | PollID |

**Example**  

```js
BetaSeries.getAction('comments', 'doClearPollComments')({ pollId: 481 });
```

<a name="module_Comments.doClearShowComments"></a>

### .doClearShowComments([obj])

Clear comments for a specific show

**Dispatch**: `CLEAR_SHOW_COMMENTS`

**Returns**: {Promise}

**Category**: actions  

| Param | Type | Description |
| --- | --- | --- |
| [obj] | {Object} | Accept the following: |
| [obj.showId] | {Number} | Show ID |

**Example**  

```js
BetaSeries.getAction('comments', 'doClearShowComments')({ showId: 481 });
```

<a name="module_Comments.doCommentEpisode"></a>

### .doCommentEpisode([obj])

Add comment on episode

**Dispatch**: `COMMENT_EPISODE`

**Returns**: {Promise}

**Category**: actions  

| Param | Type | Description |
| --- | --- | --- |
| [obj] | {Object} | Accept the following: |
| [obj.episodeId] | {Number} | Episode ID |
| [obj.text] | {String} | Text of comment |
| [obj.in_reply_to] | {String} | If this is a response, `inner_id` of the corresponding comment |

**Example**  

```js
BetaSeries.getAction('comments', 'doCommentEpisode')({
  episodeId: 438,
  text: 'Trop bien cette épisode !',
});
```

<a name="module_Comments.doCommentEvent"></a>

### .doCommentEvent([obj])

Add comment on event

**Dispatch**: `COMMENT_EVENT`

**Returns**: {Promise}

**Category**: actions  

| Param | Type | Description |
| --- | --- | --- |
| [obj] | {Object} | Accept the following: |
| [obj.eventId] | {Number} | Event ID |
| [obj.text] | {String} | Text of comment |

**Example**  

```js
BetaSeries.getAction('comments', 'doCommentEvent')({
  eventId: 438,
  text: 'Trop bien cette épisode !',
});
```

<a name="module_Comments.doCommentMember"></a>

### .doCommentMember([obj])

Add comment on member

**Dispatch**: `COMMENT_MEMBER`

**Returns**: {Promise}

**Category**: actions  

| Param | Type | Description |
| --- | --- | --- |
| [obj] | {Object} | Accept the following: |
| [obj.memberId] | {Number} | Member ID |
| [obj.text] | {String} | Text of comment |
| [obj.in_reply_to] | {String} | If this is a response, `inner_id` of the corresponding comment |

**Example**  

```js
BetaSeries.getAction('comments', 'doCommentMember')({
  memberId: 438,
  text: 'Trop bien cette série !',
});
```

<a name="module_Comments.doCommentMovie"></a>

### .doCommentMovie([obj])

Add comment on movie

**Dispatch**: `COMMENT_MOVIE`

**Returns**: {Promise}

**Category**: actions  

| Param | Type | Description |
| --- | --- | --- |
| [obj] | {Object} | Accept the following: |
| [obj.movieId] | {Number} | Movie ID |
| [obj.text] | {String} | Text of comment |
| [obj.in_reply_to] | {String} | If this is a response, `inner_id` of the corresponding comment |

**Example**  

```js
BetaSeries.getAction('comments', 'doCommentMovie')({
  movieId: 438,
  text: 'Trop bien ce film !',
});
```

<a name="module_Comments.doCommentPoll"></a>

### .doCommentPoll([obj])

Add comment on poll

**Dispatch**: `COMMENT_POLL`

**Returns**: {Promise}

**Category**: actions  

| Param | Type | Description |
| --- | --- | --- |
| [obj] | {Object} | Accept the following: |
| [obj.pollId] | {Number} | Poll ID |
| [obj.text] | {String} | Text of comment |

**Example**  

```js
BetaSeries.getAction('comments', 'doCommentPoll')({
  pollId: 438,
  text: 'Trop bien cette épisode !',
});
```

<a name="module_Comments.doCommentShow"></a>

### .doCommentShow([obj])

Add comment on show

**Dispatch**: `COMMENT_SHOW`

**Returns**: {Promise}

**Category**: actions  

| Param | Type | Description |
| --- | --- | --- |
| [obj] | {Object} | Accept the following: |
| [obj.showId] | {Number} | Show ID |
| [obj.text] | {String} | Text of comment |
| [obj.in_reply_to] | {String} | If this is a response, `inner_id` of the corresponding comment |

**Example**  

```js
BetaSeries.getAction('comments', 'doCommentShow')({
  showId: 438,
  text: 'Trop bien cette série !',
});
```

<a name="module_Comments.doCommentSpecificEvent"></a>

### .doCommentSpecificEvent([obj])

Add specific comment on event

**Dispatch**: `COMMENT_EVENT`

**Returns**: {Promise}

**Category**: actions  

| Param | Type | Description |
| --- | --- | --- |
| [obj] | {Object} | Accept the following: |
| [obj.id] | {Number} | Event ID (optional) |
| [obj.type] | {String} | Element type in the event (optional) |
| [obj.element_id] | {Number} | Element ID in the event (optional) |
| [obj.text] | {String} | Text of comment |

**Example**  

```js
BetaSeries.getAction('comments', 'doCommentSpecificEvent')({
  id: 438,
  text: 'Trop bien cet épisode !',
});
```

<a name="module_Comments.doFetchComment"></a>

### .doFetchComment([obj])

Retrieve comment

**Dispatch**: `FETCH_COMMENT`

**Returns**: {Promise}

**Category**: actions  

| Param | Type | Description |
| --- | --- | --- |
| [obj] | {Object} | Accept the following: |
| [obj.commentId] | {Number} | Comment ID |

**Example**  

```js
BetaSeries.getAction('comments', 'doFetchComment')({ commentId: 438 });
```

<a name="module_Comments.doFetchEpisodeComments"></a>

### .doFetchEpisodeComments([obj])

Retrieve comment of the episode

**Dispatch**: `FETCH_EPISODE_COMMENTS`

**Returns**: {Promise}

**Category**: actions  

| Param | Type | Description |
| --- | --- | --- |
| [obj] | {Object} | Accept the following: |
| [obj.episodeId] | {Number} | Episode ID |
| [obj.nbpp] | {Number} | Number of comments per page |
| [obj.since_id] | {Number} | ID of last comment received (optional) |
| [obj.order] | {String} | Chronological order of return, `desc` or `asc` (default `asc`) |
| [obj.replies] | {Number} | Include comments reply (`1` or `0`, default `1`) |

**Example**  

```js
BetaSeries.getAction('comments', 'doFetchEpisodeComments')({ episodeId: 438 });
```

<a name="module_Comments.doFetchEventComments"></a>

### .doFetchEventComments([obj])

Retrieve comment of the episode

**Dispatch**: `FETCH_EPISODE_COMMENTS`

**Returns**: {Promise}

**Category**: actions  

| Param | Type | Description |
| --- | --- | --- |
| [obj] | {Object} | Accept the following: |
| [obj.eventId] | {Number} | Event ID |
| [obj.nbpp] | {Number} | Number of comments per page |
| [obj.since_id] | {Number} | ID of last comment received (optional) |
| [obj.order] | {String} | Chronological order of return, `desc` or `asc` (default `asc`) |
| [obj.replies] | {Number} | Include comments reply (`1` or `0`, default `1`) |

**Example**  

```js
BetaSeries.getAction('comments', 'doFetchEventComments')({ eventId: 42315431 });
```

<a name="module_Comments.doFetchMemberComments"></a>

### .doFetchMemberComments([obj])

Retrieve comments of the member

**Dispatch**: `FETCH_MEMBER_COMMENTS`

**Returns**: {Promise}

**Category**: actions  

| Param | Type | Description |
| --- | --- | --- |
| [obj] | {Object} | Accept the following: |
| [obj.memberId] | {Number} | Member ID |
| [obj.nbpp] | {Number} | Number of comments per page |
| [obj.since_id] | {Number} | ID of last comment received (optional) |
| [obj.order] | {String} | Chronological order of return, `desc` or `asc` (default `asc`) |
| [obj.replies] | {Number} | Include comments reply (`1` or `0`, default `1`) |

**Example**  

```js
BetaSeries.getAction('comments', 'doFetchMemberComments')({ memberId: 481 });
```

<a name="module_Comments.doFetchMovieComments"></a>

### .doFetchMovieComments([obj])

Retrieve comments of the movie

**Dispatch**: `FETCH_MOVIE_COMMENTS`

**Returns**: {Promise}

**Category**: actions  

| Param | Type | Description |
| --- | --- | --- |
| [obj] | {Object} | Accept the following: |
| [obj.movieId] | {Number} | Movie ID |
| [obj.nbpp] | {Number} | Number of comments per page |
| [obj.since_id] | {Number} | ID of last comment received (optional) |
| [obj.order] | {String} | Chronological order of return, `desc` or `asc` (default `asc`) |
| [obj.replies] | {Number} | Include comments reply (`1` or `0`, default `1`) |

**Example**  

```js
BetaSeries.getAction('comments', 'doFetchMovieComments')({ movieId: 481 });
```

<a name="module_Comments.doFetchPollComments"></a>

### .doFetchPollComments([obj])

Retrieve comment of the poll

**Dispatch**: `FETCH_POLL_COMMENTS`

**Returns**: {Promise}

**Category**: actions  

| Param | Type | Description |
| --- | --- | --- |
| [obj] | {Object} | Accept the following: |
| [obj.pollId] | {Number} | Poll ID |
| [obj.nbpp] | {Number} | Number of comments per page |
| [obj.since_id] | {Number} | ID of last comment received (optional) |
| [obj.order] | {String} | Chronological order of return, `desc` or `asc` (default `asc`) |
| [obj.replies] | {Number} | Include comments reply (`1` or `0`, default `1`) |

**Example**  

```js
BetaSeries.getAction('comments', 'doFetchPollComments')({ pollId: 42315431 });
```

<a name="module_Comments.doFetchReplies"></a>

### .doFetchReplies([obj])

Retrieve replies from a comment

**Dispatch**: `FETCH_REPLIES`

**Returns**: {Promise}

**Category**: actions  

| Param | Type | Description |
| --- | --- | --- |
| [obj] | {Object} | Accept the following: |
| [obj.commentId] | {Number} | Comment ID |
| [obj.order] | {String} | Chronological order of return, `desc` or `asc` (default `asc`) |

**Example**  

```js
BetaSeries.getAction('comments', 'doFetchReplies')({ commentId: 438 });
```

<a name="module_Comments.doFetchShowComments"></a>

### .doFetchShowComments([obj])

Retrieve comments of the show

**Dispatch**: `FETCH_SHOW_COMMENTS`

**Returns**: {Promise}

**Category**: actions  

| Param | Type | Description |
| --- | --- | --- |
| [obj] | {Object} | Accept the following: |
| [obj.showId] | {Number} | Show ID |
| [obj.nbpp] | {Number} | Number of comments per page |
| [obj.since_id] | {Number} | ID of last comment received (optional) |
| [obj.order] | {String} | Chronological order of return, `desc` or `asc` (default `asc`) |
| [obj.replies] | {Number} | Include comments reply (`1` or `0`, default `1`) |

**Example**  

```js
BetaSeries.getAction('comments', 'doFetchShowComments')({ showId: 481 });
```

<a name="module_Comments.doRemoveComment"></a>

### .doRemoveComment([obj])

Remove comment

**Dispatch**: `REMOVE_COMMENT`

**Returns**: {Promise}

**Category**: actions  

| Param | Type | Description |
| --- | --- | --- |
| [obj] | {Object} | Accept the following: |
| [obj.commentId] | {Number} | Comment ID |

**Example**  

```js
BetaSeries.getAction('comments', 'doRemoveComment')({ commentId: 438 });
```

<a name="module_Comments.doRemoveVote"></a>

### .doRemoveVote([obj])

Remove vote on a comment

**Dispatch**: `REMOVE_COMMENT_VOTE`

**Returns**: {Promise}

**Category**: actions  

| Param | Type | Description |
| --- | --- | --- |
| [obj] | {Object} | Accept the following: |
| [obj.commentId] | {Number} | Comment ID |

**Example**  

```js
BetaSeries.getAction('comments', 'doRemoveVote')({ commentId: 438 });
```

<a name="module_Comments.comments"></a>

### .comments(state, action)

List of comments

**Actions listened**:

 * `FETCH_EPISODE_COMMENTS`
 * `FETCH_SHOW_COMMENTS`
 * `FETCH_EVENT_COMMENTS`
 * `FETCH_POLL_COMMENTS`
 * `FETCH_MEMBER_COMMENTS`
 * `FETCH_MOVIE_COMMENTS`
 * `FETCH_COMMENT`
 * `REMOVE_COMMENT`
 * `FETCH_FRIENDS_TIMELINE`
 * `FETCH_FEED_TIMELINE`
 * `FETCH_TIMELINE_EVENT`
 * `FETCH_REPLIES`
 * `COMMENT_EVENT`
 * `COMMENT_POLL`
 * `COMMENT_EPISODE`
 * `COMMENT_SHOW`
 * `COMMENT_MEMBER`
 * `COMMENT_MOVIE`

**Returns**: {Object}

**Category**: reducers  

| Param | Type |
| --- | --- |
| state | {Object} | 
| action | {Object} | 

**Example**  

```js
// get reducer
BetaSeries.getReducer('comments', 'comments').comments;

// state example
{
  '384144': {      // comment ID
    id: 384144,    // comment element
    ...comments,
  },
  ...,
}
```

<a name="module_Comments.episodes"></a>

### .episodes(state, action)

List the comments of the episode

**Actions listened**:

 * `FETCH_EPISODE_COMMENTS`
 * `COMMENT_EPISODE`

**Returns**: {Object}

**Category**: reducers  

| Param | Type |
| --- | --- |
| state | {Object} | 
| action | {Object} | 

**Example**  

```js
// get reducer
BetaSeries.getReducer('comments', 'episodes').commentsEpisodes;

// state value example
{
  '12': [               // episode ID
    1234, 213, 2343,    // list of comments ID
  ],
  ...,
}
```

<a name="module_Comments.events"></a>

### .events(state, action)

List the comments of the event

**Actions listened**:

 * `FETCH_EVENT_COMMENTS`
 * `COMMENT_EVENT`
 * `FETCH_FRIENDS_TIMELINE`
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
BetaSeries.getReducer('comments', 'events').commentsEvents;

// state value example
{
  '12': [               // event ID
    1234, 213, 2343,    // list of comments ID
  ],
  ...,
}
```

<a name="module_Comments.members"></a>

### .members(state, action)

List the comments of the member

**Actions listened**:

 * `FETCH_MEMBER_COMMENTS`

**Returns**: {Object}

**Category**: reducers  

| Param | Type |
| --- | --- |
| state | {Object} | 
| action | {Object} | 

**Example**  

```js
// get reducer
BetaSeries.getReducer('comments', 'members').commentsMembers;

// state value example
{
  '12': [               // member ID
    1234, 213, 2343,    // list of comments ID
  ],
  ...,
}
```

<a name="module_Comments.movies"></a>

### .movies(state, action)

List the comments of the movie

**Actions listened**:

 * `FETCH_MOVIE_COMMENTS`

**Returns**: {Object}

**Category**: reducers  

| Param | Type |
| --- | --- |
| state | {Object} | 
| action | {Object} | 

**Example**  

```js
// get reducer
BetaSeries.getReducer('comments', 'movies').commentsMovies;

// state value example
{
  '12': [               // movie ID
    1234, 213, 2343,    // list of comments ID
  ],
  ...,
}
```

<a name="module_Comments.polls"></a>

### .polls(state, action)

List the comments of the poll

**Actions listened**:

 * `FETCH_POLL_COMMENTS`
 * `CLEAR_POLL_COMMENTS`
 * `COMMENT_POLL`

**Returns**: {Object}

**Category**: reducers  

| Param | Type |
| --- | --- |
| state | {Object} | 
| action | {Object} | 

**Example**  

```js
// get reducer
BetaSeries.getReducer('comments', 'polls').commentsPolls;

// state value example
{
  '12': [               // poll ID
    1234, 213, 2343,    // list of comments ID
  ],
  ...,
}
```

<a name="module_Comments.shows"></a>

### .shows(state, action)

List the comments of the show

**Actions listened**:

 * `FETCH_SHOW_COMMENTS`

**Returns**: {Object}

**Category**: reducers  

| Param | Type |
| --- | --- |
| state | {Object} | 
| action | {Object} | 

**Example**  

```js
// get reducer
BetaSeries.getReducer('comments', 'shows').commentsShows;

// state value example
{
  '12': [               // show ID
    1234, 213, 2343,    // list of comments ID
  ],
  ...,
}
```

<a name="module_Comments.getComment"></a>

### .getComment

Select comment from state

**Returns**: {Object} - Comment element or `undefined`

**Category**: selectors  

| Param | Type | Description |
| --- | --- | --- |
| [state] | {Object} | Redux state |
| [obj] | {Object} | Accept the following: |
| [obj.commentId] | {Object} | Comment ID |

**Example**  

```js
const mapStateToProps = (state, props) => ({
  show: BetaSeries.getSelector('comments', 'getComment')(state, { commentId: props.commentId });
});
```

<a name="module_Comments.getEpisodeComments"></a>

### .getEpisodeComments

Select episode comments from state

**Returns**: {Array} - List of comments or `undefined`

**Category**: selectors  

| Param | Type | Description |
| --- | --- | --- |
| [state] | {Object} | Redux state |
| [obj] | {Object} | Accept the following: |
| [obj.episodeId] | {Object} | Episode ID |
| [obj.order] | {String} | Chronological order of return, `desc` or `asc` (default `asc`) |

**Example**  

```js
const mapStateToProps = (state, props) => ({
  show: BetaSeries.getSelector('comments', 'getEpisodeComments')(state, {
    episodeId: props.episodeId
  });
});
```

<a name="module_Comments.getEventComments"></a>

### .getEventComments

Select event comments from state

**Returns**: {Array} - List of comments or `undefined`

**Category**: selectors  

| Param | Type | Description |
| --- | --- | --- |
| [state] | {Object} | Redux state |
| [obj] | {Object} | Accept the following: |
| [obj.eventId] | {Object} | Event ID |

**Example**  

```js
const mapStateToProps = (state, props) => ({
  show: BetaSeries.getSelector('comments', 'getEventComments')(state, {
    eventId: props.eventId
  });
});
```

<a name="module_Comments.getMemberComments"></a>

### .getMemberComments

Select member comments from state

**Returns**: {Array} - List of comments or `undefined`

**Category**: selectors  

| Param | Type | Description |
| --- | --- | --- |
| [state] | {Object} | Redux state |
| [obj] | {Object} | Accept the following: |
| [obj.memberId] | {Object} | Member ID |
| [obj.order] | {String} | Chronological order of return, `desc` or `asc` (default `asc`) |

**Example**  

```js
const mapStateToProps = (state, props) => ({
  show: BetaSeries.getSelector('comments', 'getMemberComments')(state, {
    memberId: props.memberId
  });
});
```

<a name="module_Comments.getMovieComments"></a>

### .getMovieComments

Select movie comments from state

**Returns**: {Array} - List of comments or `undefined`

**Category**: selectors  

| Param | Type | Description |
| --- | --- | --- |
| [state] | {Object} | Redux state |
| [obj] | {Object} | Accept the following: |
| [obj.movieId] | {Object} | Movie ID |
| [obj.order] | {String} | Chronological order of return, `desc` or `asc` (default `asc`) |

**Example**  

```js
const mapStateToProps = (state, props) => ({
  show: BetaSeries.getSelector('comments', 'getMovieComments')(state, {
    movieId: props.movieId
  });
});
```

<a name="module_Comments.getPollComments"></a>

### .getPollComments

Select poll comments from state

**Returns**: {Array} - List of comments or `undefined`

**Category**: selectors  

| Param | Type | Description |
| --- | --- | --- |
| [state] | {Object} | Redux state |
| [obj] | {Object} | Accept the following: |
| [obj.pollId] | {Object} | Poll ID |

**Example**  

```js
const mapStateToProps = (state, props) => ({
  show: BetaSeries.getSelector('comments', 'getPollComments')(state, {
    pollId: props.pollId
  });
});
```

<a name="module_Comments.getReplies"></a>

### .getReplies

Select comment replies from state

**Returns**: {Array} - List of comments or `undefined`

**Category**: selectors  

| Param | Type | Description |
| --- | --- | --- |
| [state] | {Object} | Redux state |
| [obj] | {Object} | Accept the following: |
| [obj.commentId] | {Object} | Comment ID |
| [obj.order] | {String} | Chronological order of return, `desc` or `asc` (default `asc`) |

**Example**  

```js
const mapStateToProps = (state, props) => ({
  show: BetaSeries.getSelector('comments', 'getReplies')(state, {
    commentId: props.commentId
  });
});
```

<a name="module_Comments.getShowComments"></a>

### .getShowComments

Select show comments from state

**Returns**: {Array} - List of comments or `undefined`

**Category**: selectors  

| Param | Type | Description |
| --- | --- | --- |
| [state] | {Object} | Redux state |
| [obj] | {Object} | Accept the following: |
| [obj.showId] | {Object} | Show ID |
| [obj.order] | {String} | Chronological order of return, `desc` or `asc` (default `asc`) |

**Example**  

```js
const mapStateToProps = (state, props) => ({
  show: BetaSeries.getSelector('comments', 'getShowComments')(state, {
    showId: props.showId
  });
});
```

