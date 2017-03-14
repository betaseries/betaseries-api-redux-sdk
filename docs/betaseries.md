[Back to API index](README.md)

# BetaSeries

* [BetaSeries](#module_BetaSeries)
    * [.api](#module_BetaSeries.api)
    * [.init([obj])](#module_BetaSeries.init)
    * [.setUser([obj])](#module_BetaSeries.setUser)
    * [.getAction(module, action)](#module_BetaSeries.getAction) ⇒ {Func}
    * [.getConstants(module)](#module_BetaSeries.getConstants) ⇒ {Object}
    * [.getReducer(module, reducer)](#module_BetaSeries.getReducer) ⇒ {Object}
    * [.getSelector(module, selector)](#module_BetaSeries.getSelector) ⇒ {Func}

<a name="module_BetaSeries.api"></a>

### .api

API provider

**Category**: static  
<a name="module_BetaSeries.init"></a>

### .init([obj])
**Category**: static  

| Param | Type | Description |
| --- | --- | --- |
| [obj] | {Object} | Accept the folling: |
| [obj.apiHost] | {String} | URI of BetaSeries API |
| [obj.apiKey] | {String} | API Key of BetaSeries API |

<a name="module_BetaSeries.setUser"></a>

### .setUser([obj])
**Category**: static  

| Param | Type | Description |
| --- | --- | --- |
| [obj] | {Object} | Accept the folling: |
| [obj.token] | {String} | Authenticated token |
| [obj.userId] | {String} | User ID |

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

