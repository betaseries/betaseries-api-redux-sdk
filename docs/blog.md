[Back to API index](README.md)

# Blog

* [Blog](#module_Blog)
    * _actions_
        * [.doClearCategoryPosts([obj])](#module_Blog.doClearCategoryPosts) ⇒ {Promise}
        * [.doClearTagPosts([obj])](#module_Blog.doClearTagPosts) ⇒ {Promise}
        * [.doFetchBlogAuthors()](#module_Blog.doFetchBlogAuthors) ⇒ {Promise}
        * [.doFetchBlogCategories()](#module_Blog.doFetchBlogCategories) ⇒ {Promise}
        * [.doFetchBlogCategoryPosts([obj])](#module_Blog.doFetchBlogCategoryPosts) ⇒ {Promise}
        * [.doFetchBlogFeaturedPosts([obj])](#module_Blog.doFetchBlogFeaturedPosts) ⇒ {Promise}
        * [.doFetchBlogHotTopics([obj])](#module_Blog.doFetchBlogHotTopics) ⇒ {Promise}
        * [.doFetchBlogPost([obj])](#module_Blog.doFetchBlogPost) ⇒ {Promise}
        * [.doFetchBlogPosts([obj])](#module_Blog.doFetchBlogPosts) ⇒ {Promise}
        * [.doFetchBlogRelatedPosts([obj])](#module_Blog.doFetchBlogRelatedPosts) ⇒ {Promise}
        * [.doFetchBlogTagPosts([obj])](#module_Blog.doFetchBlogTagPosts) ⇒ {Promise}
        * [.doFetchBlogTags([obj])](#module_Blog.doFetchBlogTags) ⇒ {Promise}
        * [.doSendBlogAnalytics([obj])](#module_Blog.doSendBlogAnalytics) ⇒ {Promise}
    * _reducers_
        * [.authors(state, action)](#module_Blog.authors) ⇒ {Object}
        * [.categories(state, action)](#module_Blog.categories) ⇒ {Object}
        * [.categoryPosts(state, action)](#module_Blog.categoryPosts) ⇒ {Object}
        * [.featuredPosts(state, action)](#module_Blog.featuredPosts) ⇒ {Object}
        * [.hotTopics(state, action)](#module_Blog.hotTopics) ⇒ {Object}
        * [.posts(state, action)](#module_Blog.posts) ⇒ {Object}
        * [.relatedPosts(state, action)](#module_Blog.relatedPosts) ⇒ {Object}
        * [.tagPosts(state, action)](#module_Blog.tagPosts) ⇒ {Object}
        * [.tags(state, action)](#module_Blog.tags) ⇒ {Object}
    * _selectors_
        * [.getBlogAuthors](#module_Blog.getBlogAuthors) ⇒ {Array}
        * [.getBlogCategories](#module_Blog.getBlogCategories) ⇒ {Array}
        * [.getBlogCategoryPosts](#module_Blog.getBlogCategoryPosts) ⇒ {Array}
        * [.getBlogFeaturedPosts](#module_Blog.getBlogFeaturedPosts) ⇒ {Array}
        * [.getBlogHotTopics](#module_Blog.getBlogHotTopics) ⇒ {Array}
        * [.getBlogPost](#module_Blog.getBlogPost) ⇒ {Array}
        * [.getBlogPosts](#module_Blog.getBlogPosts) ⇒ {Array}
        * [.getBlogRelatedPosts](#module_Blog.getBlogRelatedPosts) ⇒ {Array}
        * [.getBlogTagPosts](#module_Blog.getBlogTagPosts) ⇒ {Array}
        * [.getBlogTags](#module_Blog.getBlogTags) ⇒ {Array}
        * [.getPlatformsServices](#module_Blog.getPlatformsServices) ⇒ {Array}

<a name="module_Blog.doClearCategoryPosts"></a>

### .doClearCategoryPosts([obj])

Clear category blog posts

**Dispatch**: `CLEAR_BLOG_CATEGORY_POSTS`

**Returns**: {Promise}

**Category**: actions  

| Param | Type | Description |
| --- | --- | --- |
| [obj] | {Object} | Accept the following: |
| [obj.categoryId] | {String} | Category Id wanted |

**Example**  

```js
BetaSeries.getAction('blog', 'doClearCategoryPosts')({ categoryId: 53 });
```

<a name="module_Blog.doClearTagPosts"></a>

### .doClearTagPosts([obj])

Clear tag blog posts

**Dispatch**: `CLEAR_BLOG_TAG_POSTS`

**Returns**: {Promise}

**Category**: actions  

| Param | Type | Description |
| --- | --- | --- |
| [obj] | {Object} | Accept the following: |
| [obj.tagSlug] | {String} | Tag slug wanted |

**Example**  

```js
BetaSeries.getAction('blog', 'doClearTagPosts')({ tagSlug: 'philarmonie-paris' });
```

<a name="module_Blog.doFetchBlogAuthors"></a>

### .doFetchBlogAuthors()

Retrieve wordpress authors

**Dispatch**: `FETCH_WP_AUTHORS`

**Returns**: {Promise}

**Category**: actions  
**Example**  

```js
BetaSeries.getAction('blog', 'doFetchBlogAuthors')();
```

<a name="module_Blog.doFetchBlogCategories"></a>

### .doFetchBlogCategories()

Retrieve wordpress categories

**Dispatch**: `FETCH_WP_CATEGORIES`

**Returns**: {Promise}

**Category**: actions  
**Example**  

```js
BetaSeries.getAction('blog', 'doFetchBlogCategories')();
```

<a name="module_Blog.doFetchBlogCategoryPosts"></a>

### .doFetchBlogCategoryPosts([obj])

Retrieve wordpress posts by category

**Dispatch**: `FETCH_WP_POSTS_WITH_CATEGORY`

**Returns**: {Promise}

**Category**: actions  

| Param | Type | Description |
| --- | --- | --- |
| [obj] | {Object} | Accept the following: |
| [obj.page] | {Number} | Page number |
| [obj.lang] | {String} | Language info |
| [obj.categoryId] | {String} | Category id wanted |
| [obj.excludedIds] | {Array} | Array of excluded posts ids |
| [obj.limit] | {Number} | Results limit per page |

**Example**  

```js
BetaSeries.getAction('blog', 'doFetchBlogCategoryPosts')({ page: 1, lang: 'fr', categoryId: 53 });
```

<a name="module_Blog.doFetchBlogFeaturedPosts"></a>

### .doFetchBlogFeaturedPosts([obj])

Retrieve wordpress featured posts

**Dispatch**: `FETCH_WP_FEATURED_POSTS`

**Returns**: {Promise}

**Category**: actions  

| Param | Type | Description |
| --- | --- | --- |
| [obj] | {Object} | Accept the following: |
| [obj.lang] | {String} | Language info |

**Example**  

```js
BetaSeries.getAction('blog', 'doFetchBlogFeaturedPosts')();
```

<a name="module_Blog.doFetchBlogHotTopics"></a>

### .doFetchBlogHotTopics([obj])

Retrieve wordpress hot topics menu

**Dispatch**: `FETCH_WP_HOT_TOPICS`

**Returns**: {Promise}

**Category**: actions  

| Param | Type | Description |
| --- | --- | --- |
| [obj] | {Object} | Accept the following: |
| [obj.lang] | {String} | Language info |

**Example**  

```js
BetaSeries.getAction('blog', 'doFetchBlogHotTopics')();
```

<a name="module_Blog.doFetchBlogPost"></a>

### .doFetchBlogPost([obj])

Retrieve wordpress specific post

**Dispatch**: `FETCH_WP_POST`

**Returns**: {Promise}

**Category**: actions  

| Param | Type | Description |
| --- | --- | --- |
| [obj] | {Object} | Accept the following: |
| [obj.postId] | {Number} | Post ID |

**Example**  

```js
BetaSeries.getAction('blog', 'doFetchBlogPost')({ postId: 1 });
```

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
BetaSeries.getAction('blog', 'doFetchBlogPosts')({ page: 1 });
```

<a name="module_Blog.doFetchBlogRelatedPosts"></a>

### .doFetchBlogRelatedPosts([obj])

Retrieve wordpress related posts for parent post

**Dispatch**: `FETCH_WP_RELATED_POSTS`

**Returns**: {Promise}

**Category**: actions  

| Param | Type | Description |
| --- | --- | --- |
| [obj] | {Object} | Accept the following: |
| [obj.parentId] | {Number} | Id of the parent post |
| [obj.relatedPosts] | {Number} | Related Posts info to fetch |

**Example**  

```js
BetaSeries.getAction('blog', 'doFetchBlogRelatedPosts')({ parentId: 1, relatedPosts: [{...}] });
```

<a name="module_Blog.doFetchBlogTagPosts"></a>

### .doFetchBlogTagPosts([obj])

Retrieve wordpress posts by tag

**Dispatch**: `FETCH_WP_POSTS_WITH_TAG`

**Returns**: {Promise}

**Category**: actions  

| Param | Type | Description |
| --- | --- | --- |
| [obj] | {Object} | Accept the following: |
| [obj.page] | {Number} | Page number |
| [obj.lang] | {String} | Language info |
| [obj.tagSlug] | {String} | Tag slug wanted |
| [obj.excludedIds] | {Array} | Array of excluded posts ids |

**Example**  

```js
BetaSeries.getAction('blog', 'doFetchBlogTagPosts')({ page: 1, lang: 'fr', tagSlug: 'philarmonie-paris' });
```

<a name="module_Blog.doFetchBlogTags"></a>

### .doFetchBlogTags([obj])

Retrieve wordpress tags

**Dispatch**: `FETCH_WP_TAGS`

**Returns**: {Promise}

**Category**: actions  

| Param | Type | Description |
| --- | --- | --- |
| [obj] | {Object} | Accept the following: |
| [obj.tagIds] | {Array} | Tags ids to fetch |

**Example**  

```js
BetaSeries.getAction('blog', 'doFetchBlogTags')({ tagIds: ['18', '19', '20'] });
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
| [obj.browser] | {String} | Browser (Chrome, Safari, App…) |
| [obj.platform] | {String} | Platform (OS X, iPhone 8, Android X…) |
| [obj.version] | {String} | App or web version |
| [obj.referred] | {String} | Url source from which we come |
| [obj.ip] | {String} | Client IP |
| [obj.current_page_type] | {String} | Page type: post_tag, home, or post |
| [obj.current_page_id] | {String} | Page Id |
| [obj.ua] | {String} | User Agent |
| [obj.timestamp] | {String} | Timestamp |
| [obj.page_uri] | {String} | Page Uri (/10216-autopsie-des-series-la-casa-de-papel) |
| [obj.base] | {String} | Url of article |

**Example**  

```js
BetaSeries.getAction('blog', 'doSendBlogAnalytics')({ timestamp: 0, ua: 'mozilla/…', base: 'https://www.betaseries.com/blog/2019/12/attention-greve-des-series/' });
```

<a name="module_Blog.authors"></a>

### .authors(state, action)

List of wordpress authors

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

// state example
[
  {
    id: 384144,    // wordpress author
    ...author,
  },
  ...,
]
```

<a name="module_Blog.categories"></a>

### .categories(state, action)

List of wordpress categories

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

// state example
[
  {
    id: 53,    // wordpress category
    ...category,
  },
  ...,
]
```

<a name="module_Blog.categoryPosts"></a>

### .categoryPosts(state, action)

List of wordpress category posts

**Actions listened**:

 * `FETCH_WP_POSTS_WITH_CATEGORY`
 * `CLEAR_BLOG_CATEGORY_POSTS`

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

// state example
  {
    '384144': [{ ... }, { ... }],    // wordpress category posts
    ...
  },
  ...,
```

<a name="module_Blog.featuredPosts"></a>

### .featuredPosts(state, action)

List of wordpress featured posts

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

// state example
[
  {
    id: 384144,    // wordpress featured post
    ...post,
  },
  ...,
]
```

<a name="module_Blog.hotTopics"></a>

### .hotTopics(state, action)

List of wordpress hotTopics

**Actions listened**:

 * `FETCH_WP_HOT_TOPICS`

**Returns**: {Object}

**Category**: reducers  

| Param | Type |
| --- | --- |
| state | {Object} | 
| action | {Object} | 

**Example**  

```js
// get reducer
BetaSeries.getReducer('blog', 'hotTopics').blogHotTopics;

// state example
[
  {
    ID: 53,    // hot topic
    ...hot topic,
  },
  ...,
]
```

<a name="module_Blog.posts"></a>

### .posts(state, action)

List of wordpress posts

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

// state example
[
  {
    id: 384144,    // wordpress post
    ...post,
  },
  ...,
]
```

<a name="module_Blog.relatedPosts"></a>

### .relatedPosts(state, action)

List of wordpress related posts

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

// state example
  {
    '384144': [{ ... }, { ... }],    // wordpress related posts
    ...
  },
  ...,
```

<a name="module_Blog.tagPosts"></a>

### .tagPosts(state, action)

List of wordpress tag posts

**Actions listened**:

 * `FETCH_WP_POSTS_WITH_TAG`
 * `CLEAR_BLOG_TAG_POSTS`

**Returns**: {Object}

**Category**: reducers  

| Param | Type |
| --- | --- |
| state | {Object} | 
| action | {Object} | 

**Example**  

```js
// get reducer
BetaSeries.getReducer('blog', 'tagPosts').blogTagPosts;

// state example
  {
    'philarmonie-paris': [{ ... }, { ... }],    // wordpress tag posts
    ...
  },
  ...,
```

<a name="module_Blog.tags"></a>

### .tags(state, action)

List of wordpress tags

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
BetaSeries.getReducer('blog', 'tags').blogTags;

// state example
[
  {
    id: 53,    // wordpress tag
    ...tag,
  },
  ...,
]
```

<a name="module_Blog.getBlogAuthors"></a>

### .getBlogAuthors

Select authors from state

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

<a name="module_Blog.getBlogCategories"></a>

### .getBlogCategories

Select categories from state

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
```

<a name="module_Blog.getBlogCategoryPosts"></a>

### .getBlogCategoryPosts

Select posts from state for category

**Returns**: {Array} - Posts array or `undefined`

**Category**: selectors  

| Param | Type | Description |
| --- | --- | --- |
| [state] | {Object} | Redux state |
| [obj] | {Object} | Accept the following: |
| [obj.categoryId] | {String} | Category id |

**Example**  

```js
const mapStateToProps = (state, props) => ({
  post: BetaSeries.getSelector('blog', 'getBlogCategoryPosts')(state, {
   categoryId: props.categoryId,
});
```

<a name="module_Blog.getBlogFeaturedPosts"></a>

### .getBlogFeaturedPosts

Select featured posts from state

**Returns**: {Array} - Featured posts elements or `undefined`

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

<a name="module_Blog.getBlogHotTopics"></a>

### .getBlogHotTopics

Select hotTopics from state

**Returns**: {Array} - HotTopics elements or `undefined`

**Category**: selectors  

| Param | Type | Description |
| --- | --- | --- |
| [state] | {Object} | Redux state |

**Example**  

```js
const mapStateToProps = (state, props) => ({
  blog: BetaSeries.getSelector('blog', 'getBlogHotTopics')(state);
});
```

<a name="module_Blog.getBlogPost"></a>

### .getBlogPost

Select specific post from state

**Returns**: {Array} - Post element or `undefined`

**Category**: selectors  

| Param | Type | Description |
| --- | --- | --- |
| [state] | {Object} | Redux state |
| [obj] | {Object} | Accept the following: |
| [obj.postId] | {Number} | Post ID |

**Example**  

```js
const mapStateToProps = (state, props) => ({
  post: BetaSeries.getSelector('blog', 'getBlogPost')(state, {
   postId: props.postId,
});
```

<a name="module_Blog.getBlogPosts"></a>

### .getBlogPosts

Select posts from state

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

<a name="module_Blog.getBlogRelatedPosts"></a>

### .getBlogRelatedPosts

Select related posts from state

**Returns**: {Array} - Related posts elements or `undefined`

**Category**: selectors  

| Param | Type | Description |
| --- | --- | --- |
| [state] | {Object} | Redux state |
| [obj] | {Object} | Accept the following: |
| [obj.parentId] | {Number} | Parent Post ID |

**Example**  

```js
const mapStateToProps = (state, props) => ({
  blog: BetaSeries.getSelector('blog', 'getBlogRelatedPosts')(state, {
   parentId: props.parentId,
});
```

<a name="module_Blog.getBlogTagPosts"></a>

### .getBlogTagPosts

Select posts from state for tag

**Returns**: {Array} - Posts array or `undefined`

**Category**: selectors  

| Param | Type | Description |
| --- | --- | --- |
| [state] | {Object} | Redux state |
| [obj] | {Object} | Accept the following: |
| [obj.tagSlug] | {String} | Tag slug |

**Example**  

```js
const mapStateToProps = (state, props) => ({
  post: BetaSeries.getSelector('blog', 'getBlogTagPosts')(state, {
   tagSlug: props.tagSlug,
});
```

<a name="module_Blog.getBlogTags"></a>

### .getBlogTags

Select tags from state

**Returns**: {Array} - Tags elements or `undefined`

**Category**: selectors  

| Param | Type | Description |
| --- | --- | --- |
| [state] | {Object} | Redux state |

**Example**  

```js
const mapStateToProps = (state, props) => ({
  blog: BetaSeries.getSelector('blog', 'getBlogTags')(state);
});
```

<a name="module_Blog.getPlatformsServices"></a>

### .getPlatformsServices

Select platforms services from state

**Returns**: {Array} - services elements or `undefined`

**Category**: selectors  

| Param | Type | Description |
| --- | --- | --- |
| [state] | {Object} | Redux state |

**Example**  

```js
const mapStateToProps = (state) => ({
  services: BetaSeries.getSelector('platforms', 'getPlatformsServices')(state);
});
```

