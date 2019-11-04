[Back to API index](README.md)

# Blog

* [Blog](#module_Blog)
    * _actions_
        * [.doFetchBlogPosts([obj])](#module_Blog.doFetchBlogPosts) ⇒ {Promise}
        * [.doFetchBlogAuthors([obj])](#module_Blog.doFetchBlogAuthors) ⇒ {Promise}
        * [.doFetchBlogRelatedPosts([obj])](#module_Blog.doFetchBlogRelatedPosts) ⇒ {Promise}
        * [.doFetchBlogPost([obj])](#module_Blog.doFetchBlogPost) ⇒ {Promise}
        * [.doFetchBlogFeaturedPosts([obj])](#module_Blog.doFetchBlogFeaturedPosts) ⇒ {Promise}
    * _reducers_
        * [.posts(state, action)](#module_Blog.posts) ⇒ {Object}
        * [.authors(state, action)](#module_Blog.authors) ⇒ {Object}
        * [.relatedPosts(state, action)](#module_Blog.relatedPosts) ⇒ {Object}
        * [.featuredPosts(state, action)](#module_Blog.featuredPosts) ⇒ {Object}
    * _selectors_
        * [.getBlogPosts](#module_Blog.getBlogPosts) ⇒ {Array}
        * [.getBlogAuthors](#module_Blog.getBlogAuthors) ⇒ {Array}
        * [.getBlogRelatedPosts](#module_Blog.getBlogRelatedPosts) ⇒ {Array}
        * [.getBlogPost](#module_Blog.getBlogPost) ⇒ {Array}
        * [.getBlogFeaturedPosts](#module_Blog.getBlogFeaturedPosts) ⇒ {Array}

<a name="module_Blog.doFetchBlogPosts"></a>

### .doFetchBlogPosts([obj])

Retrieve wordpress posts

**Dispatch**: `FETCH_WP_POSTS`

**Returns**: {Promise}

**Category**: actions  

| Param | Type | Description |
| --- | --- | --- |
| [obj] | {Object} | Accept the following: |
| [obj.page] | {Number} | Page number |

**Example**  

```js
BetaSeries.getAction('blog', 'doFetchBlogPosts')({
  page: 1,
});
```

<a name="module_Blog.doFetchBlogAuthors"></a>

### .doFetchBlogAuthors([obj])

Retrieve wordpress authors

**Dispatch**: `FETCH_WP_AUTHORS`

**Returns**: {Promise}

**Category**: actions  

**Example**  

```js
BetaSeries.getAction('blog', 'doFetchBlogAuthors')();
```

<a name="module_Blog.doFetchBlogRelatedPosts"></a>

### .doFetchBlogRelatedPosts([obj])

Retrieve related posts for specific post

**Dispatch**: `FETCH_WP_RELATED_POSTS`

**Returns**: {Promise}

**Category**: actions  

| Param | Type | Description |
| --- | --- | --- |
| [obj] | {Object} | Accept the following: |
| [obj.parentId] | {Number} | Parent post ID |
| [obj.relatedPosts] | {Array} | Parent related posts basic info |

**Example**  

```js
BetaSeries.getAction('blog', 'doFetchBlogRelatedPosts')({
  parentId: 120,
  relatedPosts: [{ id: 1, ...}, { ... }],
});
```

<a name="module_Blog.doFetchBlogPost"></a>

### .doFetchBlogPost([obj])

Retrieve specific post

**Dispatch**: `FETCH_WP_POST`

**Returns**: {Promise}

**Category**: actions  

| Param | Type | Description |
| --- | --- | --- |
| [obj] | {Object} | Accept the following: |
| [obj.post] | {Number} | Post ID |

**Example**  

```js
BetaSeries.getAction('blog', 'doFetchBlogPost')({
  postId: 120,
});
```

<a name="module_Blog.doFetchBlogFeaturedPosts"></a>

### .doFetchBlogFeaturedPosts([obj])

Retrieve featured wordpress posts

**Dispatch**: `FETCH_WP_FEATURED_POSTS`

**Returns**: {Promise}

**Category**: actions  

**Example**  

```js
BetaSeries.getAction('blog', 'doFetchBlogFeaturedPosts')();
```

<a name="module_Blog.posts"></a>

### .posts(state, action)

List of blog posts

**Actions listened**:

 * `FETCH_WP_POSTS`

**Returns**: {Object}

**Category**: reducers  

| Param | Type |
| --- | --- |
| state | {Object} |
| action | {Object} |

**Example**  

```js
// get reducer
BetaSeries.getReducer('blog', 'posts').blogPosts;

// state value example
[
 {
   id: 384144,    // wordpress post
   ...post,
 },
 ...,
]
```

<a name="module_Blog.authors"></a>

### .authors(state, action)

List of blog authors

**Actions listened**:

 * `FETCH_WP_AUTHORS`

**Returns**: {Object}

**Category**: reducers  

| Param | Type |
| --- | --- |
| state | {Object} |
| action | {Object} |

**Example**  

```js
// get reducer
BetaSeries.getReducer('blog', 'authors').blogAuthors;

// state value example
[
 {
   id: 384144,    // wordpress author
   ...author,
 },
 ...,
]
```

<a name="module_Blog.relatedPosts"></a>

### .relatedPosts(state, action)

List of blog related posts for specific parent post

**Actions listened**:

 * `FETCH_WP_RELATED_POSTS`

**Returns**: {Object}

**Category**: reducers  

| Param | Type |
| --- | --- |
| state | {Object} |
| action | {Object} |

**Example**  

```js
// get reducer
BetaSeries.getReducer('blog', 'relatedPosts').blogRelatedPosts;

// state value example
 {
   '384144': [{ id: 1, ... }, { ... }],    // wordpress related posts of parent post 384144
   ...
 },
 ...,
]
```

<a name="module_Blog.featuredPosts"></a>

### .posts(state, action)

List of blog featured posts

**Actions listened**:

 * `FETCH_WP_FEATURED_POSTS`

**Returns**: {Object}

**Category**: reducers  

| Param | Type |
| --- | --- |
| state | {Object} |
| action | {Object} |

**Example**  

```js
// get reducer
BetaSeries.getReducer('blog', 'featuredPosts').blogFeaturedPosts;

// state value example
[
 {
   id: 384144,    // wordpress featured post
   ...post,
 },
 ...,
]
```

<a name="module_Blog.getBlogPosts"></a>

### .getBlogPosts

Select wordpress posts from state

**Returns**: {Array} - Posts elements or `undefined`

**Category**: selectors  

| Param | Type | Description |
| --- | --- | --- |
| [state] | {Object} | Redux state |

**Example**  

```js
const mapStateToProps = (state, props) => ({
  blog: BetaSeries.getSelector('blog', 'getBlogPosts')(state);
});
```

<a name="module_Blog.getBlogAuthors"></a>

### .getBlogAuthors

Select wordpress authors from state

**Returns**: {Array} - Authors elements or `undefined`

**Category**: selectors  

| Param | Type | Description |
| --- | --- | --- |
| [state] | {Object} | Redux state |

**Example**  

```js
const mapStateToProps = (state, props) => ({
  blog: BetaSeries.getSelector('blog', 'getBlogAuthors')(state);
});
```

<a name="module_Blog.getBlogRelatedPosts"></a>

### .getBlogRelatedPosts

Select related posts by parent post ID from state

**Returns**: {Array} - Related posts elements or `undefined`

**Category**: selectors  

| Param | Type | Description |
| --- | --- | --- |
| [state] | {Object} | Redux state |
| [obj] | {Object} | Accept the following: |
| [obj.parentId] | {Number} | Parent ID |

**Example**  

```js
const mapStateToProps = (state, props) => ({
  blog: BetaSeries.getSelector('blog', 'getBlogRelatedPosts')(state, {
    parentId: props.parentId,
  });
});
```

<a name="module_Blog.getBlogPost"></a>

### .getBlogPost

Select specific post with postId from state

**Returns**: {Object} - Specific post element or `undefined`

**Category**: selectors  

| Param | Type | Description |
| --- | --- | --- |
| [state] | {Object} | Redux state |
| [obj] | {Object} | Accept the following: |
| [obj.postId] | {Number} | Post ID |

**Example**  

```js
const mapStateToProps = (state, props) => ({
  blog: BetaSeries.getSelector('blog', 'getBlogPost')(state, {
    postId: props.postId,
  });
});
```

<a name="module_Blog.getBlogFeaturedPosts"></a>

### .getBlogFeaturedPosts

Select wordpress featured posts from state

**Returns**: {Array} - Posts elements or `undefined`

**Category**: selectors  

| Param | Type | Description |
| --- | --- | --- |
| [state] | {Object} | Redux state |

**Example**  

```js
const mapStateToProps = (state, props) => ({
  blog: BetaSeries.getSelector('blog', 'getBlogFeaturedPosts')(state);
});
```
