[Back to API index](README.md)

# Persons

* [Persons](#module_Persons)
    * _actions_
        * [.doFetchPerson([obj])](#module_Persons.doFetchPerson) ⇒ {Promise}
        * [.doFetchPersonArticles([obj])](#module_Persons.doFetchPersonArticles) ⇒ {Promise}
    * _reducers_
        * [.articles(state, action)](#module_Persons.articles) ⇒ {Object}
        * [.persons(state, action)](#module_Persons.persons) ⇒ {Object}
    * _selectors_
        * [.getPerson](#module_Persons.getPerson) ⇒ {Object}
        * [.getPersonArticles](#module_Persons.getPersonArticles) ⇒ {Array}

<a name="module_Persons.doFetchPerson"></a>

### .doFetchPerson([obj])

Retrieve person data

**Dispatch**: `FETCH_PERSON`

**Returns**: {Promise}

**Category**: actions  

| Param | Type | Description |
| --- | --- | --- |
| [obj] | {Object} | Accept the following: |
| [obj.personId] | {Number} | Person ID |

**Example**  

```js
BetaSeries.getAction('persons', 'doFetchPerson')({ personId: 1275 });
```

<a name="module_Persons.doFetchPersonArticles"></a>

### .doFetchPersonArticles([obj])

Retrieve articles of the person

**Dispatch**: `FETCH_PERSON_ARTICLES`

**Returns**: {Promise}

**Category**: actions  

| Param | Type | Description |
| --- | --- | --- |
| [obj] | {Object} | Accept the following: |
| [obj.personId] | {Number} | Person ID |

**Example**  

```js
BetaSeries.getAction('persons', 'doFetchPersonArticles')({ personId: 1275 });
```

<a name="module_Persons.articles"></a>

### .articles(state, action)

List of the person articles

**Actions listened**:

 * `FETCH_PERSON_ARTICLES`

**Returns**: {Object}

**Category**: reducers  

| Param | Type |
| --- | --- |
| state | {Object} | 
| action | {Object} | 

**Example**  

```js
// get reducer
BetaSeries.getReducer('persons', 'articles').personsArticles;

// state example
{
  '1275': [              // person ID
    {
      id: 123543,        // article ID
      ...article         // article element
    },
    ...
  ]
}
```

<a name="module_Persons.persons"></a>

### .persons(state, action)

List of persons

**Actions listened**:

 * `FETCH_PERSON`

**Returns**: {Object}

**Category**: reducers  

| Param | Type |
| --- | --- |
| state | {Object} | 
| action | {Object} | 

**Example**  

```js
// get reducer
BetaSeries.getReducer('persons', 'persons').persons;

// state example
{
  '1275': {      // person ID
    id: 1275,    // person element
    ...person,
  },
  ...,
}
```

<a name="module_Persons.getPerson"></a>

### .getPerson

Select person from state

**Returns**: {Object} - Person element or `undefined`

**Category**: selectors  

| Param | Type | Description |
| --- | --- | --- |
| [state] | {Object} | Redux state |
| [obj] | {Object} | Accept the following: |
| [obj.personId] | {Object} | Person ID |

**Example**  

```js
const mapStateToProps = (state, props) => ({
  person: BetaSeries.getSelector('persons', 'getPerson')(state, { personId: props.personId });
});
```

<a name="module_Persons.getPersonArticles"></a>

### .getPersonArticles

Select articles from state

**Returns**: {Array} - List of articles element or `undefined`

**Category**: selectors  

| Param | Type | Description |
| --- | --- | --- |
| [state] | {Object} | Redux state |
| [obj] | {Object} | Accept the following: |
| [obj.personId] | {Object} | Person ID |

**Example**  

```js
const mapStateToProps = (state, props) => ({
  articles: BetaSeries.getSelector('persons', 'getPersonArticles')(state, { personId: props.personId });
});
```

