[Back to API index](README.md)

# Blog

* [Blog](#module_Blog)
    * _actions_
        * [.doFetchBlogPosts([obj])](#module_Blog.doFetchBlogPosts) ⇒ {Promise}
        * [.doFetchBlogAuthors([obj])](#module_Blog.doFetchBlogAuthors) ⇒ {Promise}
        * [.doFetchBlogRelatedPosts([obj])](#module_Blog.doFetchBlogRelatedPosts) ⇒ {Promise}
        * [.doFetchBlogPost([obj])](#module_Blog.doFetchBlogPost) ⇒ {Promise}
        * [.doFetchBlogFeaturedPosts([obj])](#module_Blog.doFetchBlogFeaturedPosts) ⇒ {Promise}
        * [.doClearBlogPosts()](#module_Blog.doClearBlogPosts) ⇒ {Promise}
        * [.doFetchBlogCategoryPosts([obj])](#module_Blog.doFetchBlogCategoryPosts) ⇒ {Promise}
        * [.doFetchBlogCategories([obj])](#module_Blog.doFetchBlogCategories) ⇒ {Promise}
        * [.doSendBlogAnalytics([obj])](#module_Blog.doSendBlogAnalytics) ⇒ {Promise}
    * _reducers_
        * [.posts(state, action)](#module_Blog.posts) ⇒ {Object}
        * [.authors(state, action)](#module_Blog.authors) ⇒ {Object}
        * [.relatedPosts(state, action)](#module_Blog.relatedPosts) ⇒ {Object}
        * [.featuredPosts(state, action)](#module_Blog.featuredPosts) ⇒ {Object}
        * [.categoryPosts(state, action)](#module_Blog.categoryPosts) ⇒ {Object}
        * [.categories(state, action)](#module_Blog.categories) ⇒ {Object}
    * _selectors_
        * [.getBlogPosts](#module_Blog.getBlogPosts) ⇒ {Array}
        * [.getBlogAuthors](#module_Blog.getBlogAuthors) ⇒ {Array}
        * [.getBlogRelatedPosts](#module_Blog.getBlogRelatedPosts) ⇒ {Array}
        * [.getBlogPost](#module_Blog.getBlogPost) ⇒ {Array}
        * [.getBlogFeaturedPosts](#module_Blog.getBlogFeaturedPosts) ⇒ {Array}
        * [.getBlogCategoryPosts](#module_Blog.getBlogCategoryPosts) ⇒ {Array}
        * [.getBlogCategories](#module_Blog.getBlogCategories) ⇒ {Array}

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
| [obj.lang] | {String} | Language info |

**Example**  

```js
BetaSeries.getAction('blog', 'doFetchBlogPosts')({
  page: 1,
  lang: 'fr',
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

| Param | Type | Description |
| --- | --- | --- |
| [obj] | {Object} | Accept the following: |
| [obj.lang] | {String} | Language info |

**Example**  

```js
BetaSeries.getAction('blog', 'doFetchBlogFeaturedPosts')({
  lang: 'fr',
});
```

### .doClearBlogPosts()

Clear all blog posts

**Dispatch**: `CLEAR_BLOG_POSTS`

**Returns**: {Promise}

**Category**: actions  

**Example**  

```js
BetaSeries.getAction('blog', 'doClearBlogPosts')();
```

<a name="module_Blog.doFetchBlogCategoryPosts"></a>

### .doFetchBlogCategoryPosts([obj])

Retrieve category posts

**Dispatch**: `FETCH_WP_POSTS_WITH_CATEGORY`

**Returns**: {Promise}

**Category**: actions  

| Param | Type | Description |
| --- | --- | --- |
| [obj] | {Object} | Accept the following: |
| [obj.page] | {Number} | Page number |
| [obj.lang] | {String} | Language info |
| [obj.categoryId] | {Number} | Category ID |

**Example**  

```js
BetaSeries.getAction('blog', 'doFetchBlogCategoryPosts')({
  page: 1,
  lang: 'fr',
  categoryId: 53,
});
```

<a name="module_Blog.doFetchBlogCategories"></a>

### .doFetchBlogCategories([obj])

Retrieve wordpress categories

**Dispatch**: `FETCH_WP_CATEGORIES`

**Returns**: {Promise}

**Category**: actions  

**Example**  

```js
BetaSeries.getAction('blog', 'doFetchBlogCategories')();
```

<a name="module_Blog.doSendBlogAnalytics"></a>

### .doSendBlogAnalytics([obj])

Send blog analytics

**Dispatch**: `SEND_WP_ANALYTICS`

**Returns**: {Promise}

**Category**: actions  

| Param | Type | Description |
| --- | --- | --- |
| [obj] | {Object} | Accept the following: |
| [obj.timestamp] | {String} | Unix timestamp |
| [obj.ua] | {String} | User agent |
| [obj.url] | {String} | Url of article |
| [obj.referred] | {String} | (Optional) url source from which we come |

**Example**  

```js
BetaSeries.getAction('blog', 'doSendBlogAnalytics')({ timestamp: 1575645320, ua: 'Mozilla/5.0%20(Macintosh;%20Intel%20Mac%20OS%20X%2010_15_1)%20AppleWebKit/537.36%20(KHTML,%20like%20Gecko)%20Chrome/78.0.3904.108%20Safari/537.36', url: 'https://www.betaseries.com/blog/2019/12/attention-greve-des-series/', referred: 'https://www.betaseries.com/blog/' });
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

<a name="module_Blog.categoryPosts"></a>

### .categoryPosts(state, action)

List of blog category posts

**Actions listened**:

 * `FETCH_WP_POSTS_WITH_CATEGORY`

**Returns**: {Object}

**Category**: reducers  

| Param | Type |
| --- | --- |
| state | {Object} |
| action | {Object} |

**Example**  

```js
// get reducer
BetaSeries.getReducer('blog', 'categoryPosts').blogCategoryPosts;

// state value example
 {
   '53': [{ id: 1, ... }, { ... }],    // wordpress posts for category 53
   ...
 },
 ...,
]
```

<a name="module_Blog.categories"></a>

### .categories(state, action)

List of blog categories

**Actions listened**:

 * `FETCH_WP_CATEGORIES`

**Returns**: {Object}

**Category**: reducers  

| Param | Type |
| --- | --- |
| state | {Object} |
| action | {Object} |

**Example**  

```js
// get reducer
BetaSeries.getReducer('blog', 'categories').blogCategories;

// state value example
[
 {
   id: 53,    // wordpress category
   ...category,
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

<a name="module_Blog.getBlogCategoryPosts"></a>

### .getBlogCategoryPosts

Select category posts with category ID from state

**Returns**: {Array} - Category posts elements or `undefined`

**Category**: selectors  

| Param | Type | Description |
| --- | --- | --- |
| [state] | {Object} | Redux state |
| [obj] | {Object} | Accept the following: |
| [obj.categoryId] | {Number} | Category ID |

**Example**  

```js
const mapStateToProps = (state, props) => ({
  blog: BetaSeries.getSelector('blog', 'getBlogCategoryPosts')(state, {
    categoryId: props.categoryId,
  });
});
```

<a name="module_Blog.getBlogCategories"></a>

### .getBlogCategories

Select wordpress categories from state

**Returns**: {Array} - Categories elements or `undefined`

**Category**: selectors  

| Param | Type | Description |
| --- | --- | --- |
| [state] | {Object} | Redux state |

**Example**  

```js
const mapStateToProps = (state, props) => ({
  blog: BetaSeries.getSelector('blog', 'getBlogCategories')(state);
});
