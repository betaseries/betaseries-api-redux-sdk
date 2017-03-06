[Back to API index](README.md)

# BetaSeries

* [BetaSeries](#module_BetaSeries)
    * [.api](#module_BetaSeries.api)
    * [.init(obj)](#module_BetaSeries.init)
    * [.setToken(token)](#module_BetaSeries.setToken)
    * [.getAction(module, action)](#module_BetaSeries.getAction) ⇒ {Func}
    * [.getConstants(module)](#module_BetaSeries.getConstants) ⇒ {Object}
    * [.getReducer(module, reducer)](#module_BetaSeries.getReducer) ⇒ {Func}

<a name="module_BetaSeries.api"></a>

### .api

API provider

**Category**: static  
<a name="module_BetaSeries.init"></a>

### .init(obj)
**Category**: static  

| Param | Type | Description |
| --- | --- | --- |
| obj | {Object} |  |
| obj.apiHost | {String} | URI of BetaSeries API |
| obj.apiKey | {String} | API Key of BetaSeries API |

<a name="module_BetaSeries.setToken"></a>

### .setToken(token)
**Category**: static  

| Param | Type | Description |
| --- | --- | --- |
| token | {String} | Authenticated token |

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
**Returns**: {Func}

**Category**: static  

| Param | Type | Description |
| --- | --- | --- |
| module | {String} | Module name |
| reducer | {String} | Reducer name |

