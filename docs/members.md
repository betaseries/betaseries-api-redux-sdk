[Back to API index](README.md)

# Members

* [Members](#module_Members)
    * _actions_
        * [.doDeleteNotification([obj])](#module_Members.doDeleteNotification) ⇒ {Promise}
        * [.doFetchMember([obj])](#module_Members.doFetchMember) ⇒ {Promise}
        * [.doFetchMemberEmail()](#module_Members.doFetchMemberEmail) ⇒ {Promise}
        * [.doFetchMemberNotifications([obj])](#module_Members.doFetchMemberNotifications) ⇒ {Promise}
        * [.doFetchUser([obj])](#module_Members.doFetchUser) ⇒ {Promise}
        * [.doMarkAllNotificationsAsRead([obj])](#module_Members.doMarkAllNotificationsAsRead) ⇒ {Promise}
        * [.doMarkNotificationAsRead([obj])](#module_Members.doMarkNotificationAsRead) ⇒ {Promise}
        * [.doUpdateMemberEmail([obj])](#module_Members.doUpdateMemberEmail) ⇒ {Promise}
        * [.doUpdateMemberPassword([obj])](#module_Members.doUpdateMemberPassword) ⇒ {Promise}
    * _reducers_
        * [.members(state, action)](#module_Members.members) ⇒ {Object}
        * [.notifications(state, action)](#module_Members.notifications) ⇒ {Object}
    * _selectors_
        * [.getMember](#module_Members.getMember) ⇒ {Object}
        * [.getNotifications](#module_Members.getNotifications) ⇒ {Array}
        * [.getUser](#module_Members.getUser) ⇒ {Object}

<a name="module_Members.doDeleteNotification"></a>

### .doDeleteNotification([obj])

Delete notification of member

**Dispatch**: `DELETE_NOTIFICATION`

**Returns**: {Promise}

**Category**: actions  

| Param | Type | Description |
| --- | --- | --- |
| [obj] | {Object} | Accept the following: |
| [obj.notificationID] | {Number} | Notification ID |

**Example**  

```js
BetaSeries.getAction('members', 'doDeleteNotification')({
  notificationId: 438,
});
```

<a name="module_Members.doFetchMember"></a>

### .doFetchMember([obj])

Retrieve authenticated user infos

**Dispatch**: `FETCH_MEMBER`

**Returns**: {Promise}

**Category**: actions  

| Param | Type | Description |
| --- | --- | --- |
| [obj] | {Object} | Accept the following: |
| [obj.memberId] | {Bool} | Member ID |
| [obj.summary] | {Bool} | Display only the information |
| [obj.only] | {String} | Display only `movies` or `shows` |

**Example**  

```js
BetaSeries.getAction('members', 'doFetchMember')();
```

<a name="module_Members.doFetchMemberEmail"></a>

### .doFetchMemberEmail()

Retrieve member email

**Dispatch**: `FETCH_MEMBER_EMAIL`

**Returns**: {Promise}

**Category**: actions  
**Example**  

```js
BetaSeries.getAction('members', 'doFetchMemberEmail')();
```

<a name="module_Members.doFetchMemberNotifications"></a>

### .doFetchMemberNotifications([obj])

Retrieve user notifications

**Dispatch**: `FETCH_NOTIFICATIONS_LIST`

**Returns**: {Promise}

**Category**: actions  

| Param | Type | Description |
| --- | --- | --- |
| [obj] | {Object} | Accept the following: |
| [obj.number] | {Number} | Number of notifications wanted (default to 10) |
| [obj.sort] | {String} | Sort order (default desc) |
| [obj.all] | {Bool} | Display all notifications, not only unseen (default false) |
| [obj.auto_mark] | {Bool} | Automatically mark notifications as read (default false) |

**Example**  

```js
BetaSeries.getAction('members', 'doFetchMemberNotifications')({ number: 50, … });
```

<a name="module_Members.doFetchUser"></a>

### .doFetchUser([obj])

Retrieve authenticated user infos

**Dispatch**: `FETCH_USER`

**Returns**: {Promise}

**Category**: actions  

| Param | Type | Description |
| --- | --- | --- |
| [obj] | {Object} | Accept the following: |
| [obj.summary] | {Bool} | Display only the information (default `true`) |
| [obj.only] | {String} | Display only `movies` or `shows` |

**Example**  

```js
BetaSeries.getAction('members', 'doFetchUser')();
```

<a name="module_Members.doMarkAllNotificationsAsRead"></a>

### .doMarkAllNotificationsAsRead([obj])

Mark all user notifications as read

**Dispatch**: `MARK_ALL_NOTIFICATIONS_AS_READ`

**Returns**: {Promise}

**Category**: actions  

| Param | Type | Description |
| --- | --- | --- |
| [obj] | {Object} | Accept the following: |
| [obj.auto_mark] | {Bool} | Automatically mark notifications as read (default false) |

**Example**  

```js
BetaSeries.getAction('members', 'doMarkAllNotificationsAsRead')();
```

<a name="module_Members.doMarkNotificationAsRead"></a>

### .doMarkNotificationAsRead([obj])

Mark single user notification as read

**Dispatch**: `MARK_NOTIFICATION_AS_READ`

**Returns**: {Promise}

**Category**: actions  

| Param | Type | Description |
| --- | --- | --- |
| [obj] | {Object} | Accept the following: |
| [obj.notificationId] | {Number} | Id of the notification |

**Example**  

```js
BetaSeries.getAction('members', 'doMarkNotificationAsRead')();
```

<a name="module_Members.doUpdateMemberEmail"></a>

### .doUpdateMemberEmail([obj])

Update member email

**Dispatch**: `UPDATE_MEMBER_EMAIL`

**Returns**: {Promise}

**Category**: actions  

| Param | Type | Description |
| --- | --- | --- |
| [obj] | {Object} | Accept the following: |
| [obj.email] | {String} | New email |

**Example**  

```js
BetaSeries.getAction('members', 'doUpdateMemberEmail')({
  email: toto@toto.toto,
});
```

<a name="module_Members.doUpdateMemberPassword"></a>

### .doUpdateMemberPassword([obj])

Update member password

**Dispatch**: `UPDATE_MEMBER_PASSWORD`

**Returns**: {Promise}

**Category**: actions  

| Param | Type | Description |
| --- | --- | --- |
| [obj] | {Object} | Accept the following: |
| [obj.current_password] | {String} | Current password |
| [obj.new_password] | {String} | New password |
| [obj.confirmed_password] | {String} | Confirmed new password |

**Example**  

```js
BetaSeries.getAction('members', 'doUpdateMemberPassword')({
  current_password: aaaa,
  new_password: bbbb,
  confirmed_password: bbbb,
});
```

<a name="module_Members.members"></a>

### .members(state, action)

List of members

**Actions listened**:

 * `FETCH_MEMBER`

**Returns**: {Object}

**Category**: reducers  

| Param | Type |
| --- | --- |
| state | {Object} | 
| action | {Object} | 

**Example**  

```js
// get reducer
BetaSeries.getReducer('members', 'members').members;

// state value example
{
  '12': {      // member ID
    id: 12,    // member element
    ...member,
  },
  ...,
}
```

<a name="module_Members.notifications"></a>

### .notifications(state, action)

List of notifications by memberId

**Actions listened**:

 * `FETCH_NOTIFICATIONS_LIST`

**Returns**: {Object}

**Category**: reducers  

| Param | Type |
| --- | --- |
| state | {Object} | 
| action | {Object} | 

**Example**  

```js
// get reducer
BetaSeries.getReducer('members', 'notifications').membersNotifications;

// state value example
{
  '12': [              // member ID
    {
     id: 18965,        // notification element
     ...notification,
    },
    ...,
  ],
  ...,
}
```

<a name="module_Members.getMember"></a>

### .getMember

Select member from state

**Returns**: {Object} - Member element or `undefined`

**Category**: selectors  

| Param | Type | Description |
| --- | --- | --- |
| [state] | {Object} | Redux state |
| [obj] | {Object} | Accept the following: |
| [obj.memberId] | {Object} | Member ID |

**Example**  

```js
const mapStateToProps = (state, props) => ({
  show: BetaSeries.getSelector('members', 'getMember')(state, {
    memberId: props.memberId,
  });
});
```

<a name="module_Members.getNotifications"></a>

### .getNotifications

Select notifications for a member from state

**Returns**: {Array} - Notifications array element or `undefined`

**Category**: selectors  

| Param | Type | Description |
| --- | --- | --- |
| [state] | {Object} | Redux state |
| [obj] | {Object} | Accept the following: |
| [obj.memberId] | {Object} | Member ID |

**Example**  

```js
const mapStateToProps = (state, props) => ({
  show: BetaSeries.getSelector('members', 'getNotifications')(state, { memberId: props.memberId });
});
```

<a name="module_Members.getUser"></a>

### .getUser

Select authenticated user from state

**Returns**: {Object} - Member element or `undefined`

**Category**: selectors  

| Param | Type | Description |
| --- | --- | --- |
| [state] | {Object} | Redux state |

**Example**  

```js
const mapStateToProps = (state, props) => ({
  show: BetaSeries.getSelector('members', 'getUser')(state);
});
```

