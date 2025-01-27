[Back to API index](README.md)

# Quiz

* [Quiz](#module_Quiz)
    * _actions_
        * [.doAnswerQuiz([obj])](#module_Quiz.doAnswerQuiz) ⇒ {Promise}
        * [.doFetchQuiz([obj])](#module_Quiz.doFetchQuiz) ⇒ {Promise}
        * [.doFetchQuizHistory([obj])](#module_Quiz.doFetchQuizHistory) ⇒ {Promise}
        * [.doFetchQuizList([obj])](#module_Quiz.doFetchQuizList) ⇒ {Promise}
    * _reducers_
        * [.quiz(state, action)](#module_Quiz.quiz) ⇒ {Object}
    * _selectors_
        * [.getQuiz](#module_Quiz.getQuiz) ⇒ {Array}
        * [.getQuizHistory](#module_Quiz.getQuizHistory) ⇒ {Array}
        * [.getQuizList](#module_Quiz.getQuizList) ⇒ {Array}

<a name="module_Quiz.doAnswerQuiz"></a>

### .doAnswerQuiz([obj])

Add answers on quiz

**Dispatch**: `ANSWER_QUIZ`

**Returns**: {Promise}

**Category**: actions  

| Param | Type | Description |
| --- | --- | --- |
| [obj] | {Object} | Accept the following: |
| [obj.quizId] | {Number} | Quiz ID |
| [obj.answers] | {Array} | Answers array with question, answer and time in each object |

**Example**  

```js
BetaSeries.getAction('quiz', 'doAnswerQuiz')({
  quizId: 120,
  answers :[{question: 1, answer: 1, time: 1230}, {question: 2, answer: 2, time: 1230}, {question: 3, answer: 3, time: 1230}, {question: 4, answer: 1, time: 1230}, {question: 5, answer: 3, time: 1230}, {question: 6, answer: 2, time: 1230}, {question: 7, answer: 2, time: 1230}]
});
```

<a name="module_Quiz.doFetchQuiz"></a>

### .doFetchQuiz([obj])

Retrieve specific quiz

**Dispatch**: `FETCH_QUIZ`

**Returns**: {Promise}

**Category**: actions  

| Param | Type | Description |
| --- | --- | --- |
| [obj] | {Object} | Accept the following: |
| [obj.quizId] | {Number} | Quiz ID |

**Example**  

```js
BetaSeries.getAction('quiz', 'doFetchQuiz')({
  quizId: 120,
});
```

<a name="module_Quiz.doFetchQuizHistory"></a>

### .doFetchQuizHistory([obj])

Retrieve all quiz history

**Dispatch**: `FETCH_QUIZ_HISTORY`

**Returns**: {Promise}

**Category**: actions  

| Param | Type | Description |
| --- | --- | --- |
| [obj] | {Object} | Accept the following: |
| [obj.nbpp] | {Number} | Limit number of quiz (default `10`) |
| [obj.page] | {Number} | Page number (default `1`) |

**Example**  

```js
BetaSeries.getAction('quiz', 'doFetchQuizHistory')({
  nbpp: 32,
});
```

<a name="module_Quiz.doFetchQuizList"></a>

### .doFetchQuizList([obj])

Retrieve all quiz

**Dispatch**: `FETCH_QUIZ_LIST`

**Returns**: {Promise}

**Category**: actions  

| Param | Type | Description |
| --- | --- | --- |
| [obj] | {Object} | Accept the following: |
| [obj.nbpp] | {Number} | Limit number of quiz (default `10`) |
| [obj.page] | {Number} | Page number (default `1`) |

**Example**  

```js
BetaSeries.getAction('quiz', 'doFetchQuizList')({
  nbpp: 32,
});
```

<a name="module_Quiz.quiz"></a>

### .quiz(state, action)

List of quiz

**Actions listened**:

 * `FETCH_QUIZ_LIST`
 * `FETCH_QUIZ_HISTORY`
 * `FETCH_QUIZ`
 * `ANSWER_QUIZ`

**Returns**: {Object}

**Category**: reducers  

| Param | Type |
| --- | --- |
| state | {Object} | 
| action | {Object} | 

**Example**  

```js
// get reducer
BetaSeries.getReducer('quiz', 'quiz').quiz;

// state value example
{
  '12': {      // quiz ID
    id: 12,    // quiz element
    ...quiz,
  },
  ...,
}
```

<a name="module_Quiz.getQuiz"></a>

### .getQuiz

Select quiz by ID from state

**Returns**: {Array} - Quiz element or `undefined`

**Category**: selectors  

| Param | Type | Description |
| --- | --- | --- |
| [state] | {Object} | Redux state |
| [obj] | {Object} | Accept the following: |
| [obj.quizId] | {Number} | Quiz ID |

**Example**  

```js
const mapStateToProps = (state, props) => ({
  quiz: BetaSeries.getSelector('quiz', 'getQuiz')(state, {
    quizId: props.quizId,
  });
});
```

<a name="module_Quiz.getQuizHistory"></a>

### .getQuizHistory

Select quiz history from state

**Returns**: {Array} - Quiz element or `undefined`

**Category**: selectors  

| Param | Type | Description |
| --- | --- | --- |
| [state] | {Object} | Redux state |

**Example**  

```js
const mapStateToProps = (state, props) => ({
  quizHistory: BetaSeries.getSelector('quiz', 'getQuizHistory')(state);
});
```

<a name="module_Quiz.getQuizList"></a>

### .getQuizList

Select quiz list from state

**Returns**: {Array} - Quiz element or `undefined`

**Category**: selectors  

| Param | Type | Description |
| --- | --- | --- |
| [state] | {Object} | Redux state |

**Example**  

```js
const mapStateToProps = (state, props) => ({
  quizList: BetaSeries.getSelector('quiz', 'getQuizList')(state);
});
```

