[Back to API index](README.md)

# BetaSeries

* [BetaSeries](#module_BetaSeries)
    * [.logger](#module_BetaSeries.logger)
    * [.api](#module_BetaSeries.api)
    * [.init([obj])](#module_BetaSeries.init)
    * [.setUser([obj])](#module_BetaSeries.setUser)
    * [.setUserConnection([obj])](#module_BetaSeries.setUserConnection)
    * [.getUserConnection()](#module_BetaSeries.getUserConnection) ⇒ {String}
    * [.getAction(module, action)](#module_BetaSeries.getAction) ⇒ {Func}
    * [.getConstants(module)](#module_BetaSeries.getConstants) ⇒ {Object}
    * [.getReducer(module, reducer)](#module_BetaSeries.getReducer) ⇒ {Object}
    * [.getSelector(module, selector)](#module_BetaSeries.getSelector) ⇒ {Func}

<a name="module_BetaSeries.logger"></a>

### .logger
**Category**: static  

| Param | Type | Description |
| --- | --- | --- |
| [obj] | {Object} | Accept the following: |
| [obj.method] | {String} | Method name |
| [obj.url] | {String} | Base url |
| [obj.querystring] | {Object} | QueryString object |
| [obj.headers] | {Object} | Headers object |

<a name="module_BetaSeries.api"></a>

### .api

API provider

**Category**: static  
<a name="module_BetaSeries.init"></a>

### .init([obj])
**Category**: static  

| Param | Type | Description |
| --- | --- | --- |
| [obj] | {Object} | Accept the following: |
| [obj.apiHost] | {String} | URI of BetaSeries API |
| [obj.apiKey] | {String} | API Key of BetaSeries API |
| [obj.apiVersion] | {String} | API Version of BetaSeries API |
| [obj.apiExtraHeaders] | {String} | API Extra Headers |

<a name="module_BetaSeries.setUser"></a>

### .setUser([obj])
**Category**: static  

| Param | Type | Description |
| --- | --- | --- |
| [obj] | {Object} | Accept the following: |
| [obj.token] | {String} | Authenticated token |
| [obj.userId] | {String} | User ID |

<a name="module_BetaSeries.setUserConnection"></a>

### .setUserConnection([obj])
**Category**: static  

| Param | Type | Description |
| --- | --- | --- |
| [obj] | {Object} | Accept the following: |
| [obj.netinfo] | {String} | NetInfo type |

<a name="module_BetaSeries.getUserConnection"></a>

### .getUserConnection()
**Returns**: {String}

**Category**: static  
<a name="module_BetaSeries.getAction"></a>

### .getAction(module, action)
**Returns**: {Func}

**Category**: static  

| Param | Type | Description |
| --- | --- | --- |
| module | {String} | Module name |
| action | {String} | Action name |

<a name="module_BetaSeries.getConstants"></a>

### .getConstants(module)
**Returns**: {Object}

**Category**: static  

| Param | Type | Description |
| --- | --- | --- |
| module | {String} | Module name |

<a name="module_BetaSeries.getReducer"></a>

### .getReducer(module, reducer)
**Returns**: {Object}

**Category**: static  

| Param | Type | Description |
| --- | --- | --- |
| module | {String} | Module name |
| reducer | {String} | Reducer name |

<a name="module_BetaSeries.getSelector"></a>

### .getSelector(module, selector)
**Returns**: {Func}

**Category**: static  

| Param | Type | Description |
| --- | --- | --- |
| module | {String} | Module name |
| selector | {String} | Selector name |

