[Back to API index](README.md)

# Members

* [Members](#module_Members)
    * _actions_
        * [.doClearMemberNotifications()](#module_Members.doClearMemberNotifications) ⇒ {Promise}
        * [.doDeleteNotification([obj])](#module_Members.doDeleteNotification) ⇒ {Promise}
        * [.doFetchMember([obj])](#module_Members.doFetchMember) ⇒ {Promise}
        * [.doFetchMemberEmail()](#module_Members.doFetchMemberEmail) ⇒ {Promise}
        * [.doFetchMemberNotifications([obj])](#module_Members.doFetchMemberNotifications) ⇒ {Promise}
        * [.doFetchMemberSocioDemo([obj])](#module_Members.doFetchMemberSocioDemo) ⇒ {Promise}
        * [.doFetchMemberStats([obj])](#module_Members.doFetchMemberStats) ⇒ {Promise}
        * [.doFetchMemberYearStats([obj])](#module_Members.doFetchMemberYearStats) ⇒ {Promise}
        * [.doFetchUser([obj])](#module_Members.doFetchUser) ⇒ {Promise}
        * [.doMarkAllNotificationsAsRead([obj])](#module_Members.doMarkAllNotificationsAsRead) ⇒ {Promise}
        * [.doMarkNotificationAsRead([obj])](#module_Members.doMarkNotificationAsRead) ⇒ {Promise}
        * [.doPostMemberSocioDemo([obj])](#module_Members.doPostMemberSocioDemo) ⇒ {Promise}
        * [.doUpdateMemberEmail([obj])](#module_Members.doUpdateMemberEmail) ⇒ {Promise}
        * [.doUpdateMemberPassword([obj])](#module_Members.doUpdateMemberPassword) ⇒ {Promise}
    * _reducers_
        * [.members(state, action)](#module_Members.members) ⇒ {Object}
        * [.notifications(state, action)](#module_Members.notifications) ⇒ {Object}
    * _selectors_
        * [.getMember](#module_Members.getMember) ⇒ {Object}
        * [.getMemberSocioDemo](#module_Members.getMemberSocioDemo) ⇒ {Object}
        * [.getMemberStats](#module_Members.getMemberStats) ⇒ {Object}
        * [.getMemberYearStats](#module_Members.getMemberYearStats) ⇒ {Object}
        * [.getNotifications](#module_Members.getNotifications) ⇒ {Array}
        * [.getUser](#module_Members.getUser) ⇒ {Object}

<a name="module_Members.doClearMemberNotifications"></a>

### .doClearMemberNotifications()

Clear notifications

**Dispatch**: `CLEAR_NOTIFICATIONS_LIST`

**Returns**: {Promise}

**Category**: actions  
**Example**  

```js
BetaSeries.getAction('members', 'doClearMemberNotifications')();
```

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

<a name="module_Members.doFetchMemberSocioDemo"></a>

### .doFetchMemberSocioDemo([obj])

Retrieve authenticated user socio demo infos

**Dispatch**: `FETCH_MEMBER_SOCIO_DEMO`

**Returns**: {Promise}

**Category**: actions  

| Param | Type | Description |
| --- | --- | --- |
| [obj] | {Object} | Accept the following: |

**Example**  

```js
BetaSeries.getAction('members', 'doFetchMemberSocioDemo')();
```

<a name="module_Members.doFetchMemberStats"></a>

### .doFetchMemberStats([obj])

Retrieve user stats

**Dispatch**: `FETCH_MEMBER_STATS`

**Returns**: {Promise}

**Category**: actions  

| Param | Type | Description |
| --- | --- | --- |
| [obj] | {Object} | Accept the following: |
| [obj.userId] | {Bool} | user ID |

**Example**  

```js
BetaSeries.getAction('members', 'doFetchMemberStats')({ userId: 90 });
```

<a name="module_Members.doFetchMemberYearStats"></a>

### .doFetchMemberYearStats([obj])

Retrieve authenticated user year infos

**Dispatch**: `FETCH_MEMBER_YEAR_STATS`

**Returns**: {Promise}

**Category**: actions  

| Param | Type | Description |
| --- | --- | --- |
| [obj] | {Object} | Accept the following: |
| [obj.memberId] | {Bool} | Member ID |
| [obj.year] | {Number} | Year |

**Example**  

```js
BetaSeries.getAction('members', 'doFetchMemberYearStats')();
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

<a name="module_Members.doPostMemberSocioDemo"></a>

### .doPostMemberSocioDemo([obj])

Post member socio demo info

*Dispatch**: `POST_MEMBER_SOCIO_DEMO`

**Returns**: {Promise}

**Category**: actions  

| Param | Type | Description |
| --- | --- | --- |
| [obj] | {Object} | Accept the following: |
| [obj.genre] | {Number} | Genre (1 : homme, 2 : femme, 3 : non-binaire, 4 : transgenre, 5 : intersexe, 0 : confidentiel) |
| [obj.csp] | {Number} | CSP (7 : étudiant, 5 : employé, 3 : cadre, 4 : profession intermédiaire, 9 : inactif, 2 : artisan commerçant, 10 : retraité, 6 : ouvrier, 1 : agriculteur) |
| [obj.birthday] | {String} | Date de naissance (format Y-m-d) |
| [obj.firstname] | {String} | Prénom |
| [obj.lastname] | {String} | Nom de famille |
| [obj.address1] | {String} | Adresse ligne 1 |
| [obj.address2] | {String} | Adresse ligne 2 |
| [obj.zipcode] | {String} | Code postal |
| [obj.city] | {String} | Ville |
| [obj.country] | {String} | Pays |
| [obj.hh_size] | {Number} | Nombre de personnes dans le foyer |
| [obj.hh_children] | {Number} | Nombre d’enfants personnes dans le foyer |
| [obj.hh_ages] | {String} | Age des enfants dans le foyer (peut être 0-5, 6-12, 13-15, 16-18 et si plusieurs alors séparés par une virgule) |

**Example**  

```js
BetaSeries.getAction('members', 'doPostMemberSocioDemo')({
  genre: 2,
  csp: 3,
  birthday: 2000-01-01,
});
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

<a name="module_Members.getMemberSocioDemo"></a>

### .getMemberSocioDemo

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
  show: BetaSeries.getSelector('members', 'getMemberSocioDemo')(state, {
    memberId: props.memberId,
  });
});
```

<a name="module_Members.getMemberStats"></a>

### .getMemberStats

Select member from state

**Returns**: {Object} - Member element or `undefined`

**Category**: selectors  

| Param | Type | Description |
| --- | --- | --- |
| [state] | {Object} | Redux state |
| [obj] | {Object} | Accept the following: |
| [obj.userId] | {Object} | User ID |

**Example**  

```js
const mapStateToProps = (state, props) => ({
  show: BetaSeries.getSelector('members', 'getMemberStats')(state, {
    userId: props.userId,
  });
});
```

<a name="module_Members.getMemberYearStats"></a>

### .getMemberYearStats

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
  show: BetaSeries.getSelector('members', 'getMemberYearStats')(state, {
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

