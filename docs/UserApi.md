# ModokiApiDocumentation.UserApi

All URIs are relative to *http://localhost:4434/api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**userAddAuthorizedKeys**](UserApi.md#userAddAuthorizedKeys) | **PUT** /user/config/authorizedKeys | addAuthorizedKeys user
[**userGetConfig**](UserApi.md#userGetConfig) | **GET** /user/config | getConfig user
[**userGetDefaultShell**](UserApi.md#userGetDefaultShell) | **GET** /user/config/defaultShell | getDefaultShell user
[**userListAuthorizedKeys**](UserApi.md#userListAuthorizedKeys) | **GET** /user/config/authorizedKeys | listAuthorizedKeys user
[**userRemoveAuthorizedKeys**](UserApi.md#userRemoveAuthorizedKeys) | **DELETE** /user/config/authorizedKeys | removeAuthorizedKeys user
[**userSetAuthorizedKeys**](UserApi.md#userSetAuthorizedKeys) | **POST** /user/config/authorizedKeys | setAuthorizedKeys user
[**userSetDefaultShell**](UserApi.md#userSetDefaultShell) | **POST** /user/config/defaultShell | setDefaultShell user


<a name="userAddAuthorizedKeys"></a>
# **userAddAuthorizedKeys**
> userAddAuthorizedKeys(userAuthorizedKey)

addAuthorizedKeys user

### Example
```javascript
var ModokiApiDocumentation = require('modoki_api_documentation');
var defaultClient = ModokiApiDocumentation.ApiClient.instance;
// Configure API key authorization: jwt
var jwt = defaultClient.authentications['jwt'];
jwt.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//jwt.apiKeyPrefix = 'Token';

var apiInstance = new ModokiApiDocumentation.UserApi();
var userAuthorizedKey = new ModokiApiDocumentation.UserAuthorizedKey(); // UserAuthorizedKey | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.userAddAuthorizedKeys(userAuthorizedKey, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userAuthorizedKey** | [**UserAuthorizedKey**](UserAuthorizedKey.md)|  | 

### Return type

null (empty response body)

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: application/json, application/xml, application/gob, application/x-gob
 - **Accept**: application/vnd.goa.error

<a name="userGetConfig"></a>
# **userGetConfig**
> GoaUserConfig userGetConfig()

getConfig user

### Example
```javascript
var ModokiApiDocumentation = require('modoki_api_documentation');
var defaultClient = ModokiApiDocumentation.ApiClient.instance;
// Configure API key authorization: jwt
var jwt = defaultClient.authentications['jwt'];
jwt.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//jwt.apiKeyPrefix = 'Token';

var apiInstance = new ModokiApiDocumentation.UserApi();
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.userGetConfig(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**GoaUserConfig**](GoaUserConfig.md)

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.goa.error, vpn.application/goa.user.config

<a name="userGetDefaultShell"></a>
# **userGetDefaultShell**
> GoaUserDefaultshell userGetDefaultShell()

getDefaultShell user

### Example
```javascript
var ModokiApiDocumentation = require('modoki_api_documentation');
var defaultClient = ModokiApiDocumentation.ApiClient.instance;
// Configure API key authorization: jwt
var jwt = defaultClient.authentications['jwt'];
jwt.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//jwt.apiKeyPrefix = 'Token';

var apiInstance = new ModokiApiDocumentation.UserApi();
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.userGetDefaultShell(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**GoaUserDefaultshell**](GoaUserDefaultshell.md)

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.goa.error, vpn.application/goa.user.defaultshell

<a name="userListAuthorizedKeys"></a>
# **userListAuthorizedKeys**
> GoaUserAuthorizedkeyCollection userListAuthorizedKeys()

listAuthorizedKeys user

### Example
```javascript
var ModokiApiDocumentation = require('modoki_api_documentation');
var defaultClient = ModokiApiDocumentation.ApiClient.instance;
// Configure API key authorization: jwt
var jwt = defaultClient.authentications['jwt'];
jwt.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//jwt.apiKeyPrefix = 'Token';

var apiInstance = new ModokiApiDocumentation.UserApi();
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.userListAuthorizedKeys(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**GoaUserAuthorizedkeyCollection**](GoaUserAuthorizedkeyCollection.md)

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.goa.error, vpn.application/goa.user.authorizedkey; type=collection

<a name="userRemoveAuthorizedKeys"></a>
# **userRemoveAuthorizedKeys**
> userRemoveAuthorizedKeys(label)

removeAuthorizedKeys user

### Example
```javascript
var ModokiApiDocumentation = require('modoki_api_documentation');
var defaultClient = ModokiApiDocumentation.ApiClient.instance;
// Configure API key authorization: jwt
var jwt = defaultClient.authentications['jwt'];
jwt.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//jwt.apiKeyPrefix = 'Token';

var apiInstance = new ModokiApiDocumentation.UserApi();
var label = "label_example"; // String | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.userRemoveAuthorizedKeys(label, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **label** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.goa.error

<a name="userSetAuthorizedKeys"></a>
# **userSetAuthorizedKeys**
> userSetAuthorizedKeys(userAuthorizedKey)

setAuthorizedKeys user

### Example
```javascript
var ModokiApiDocumentation = require('modoki_api_documentation');
var defaultClient = ModokiApiDocumentation.ApiClient.instance;
// Configure API key authorization: jwt
var jwt = defaultClient.authentications['jwt'];
jwt.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//jwt.apiKeyPrefix = 'Token';

var apiInstance = new ModokiApiDocumentation.UserApi();
var userAuthorizedKey = [new ModokiApiDocumentation.UserAuthorizedKey()]; // [UserAuthorizedKey] | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.userSetAuthorizedKeys(userAuthorizedKey, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userAuthorizedKey** | [**[UserAuthorizedKey]**](Array.md)|  | 

### Return type

null (empty response body)

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: application/json, application/xml, application/gob, application/x-gob
 - **Accept**: application/vnd.goa.error

<a name="userSetDefaultShell"></a>
# **userSetDefaultShell**
> userSetDefaultShell(defaultShell)

setDefaultShell user

### Example
```javascript
var ModokiApiDocumentation = require('modoki_api_documentation');
var defaultClient = ModokiApiDocumentation.ApiClient.instance;
// Configure API key authorization: jwt
var jwt = defaultClient.authentications['jwt'];
jwt.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//jwt.apiKeyPrefix = 'Token';

var apiInstance = new ModokiApiDocumentation.UserApi();
var defaultShell = "defaultShell_example"; // String | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.userSetDefaultShell(defaultShell, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **defaultShell** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.goa.error

