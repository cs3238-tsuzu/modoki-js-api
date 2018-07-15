# ModokiApiDocumentation.ContainerApi

All URIs are relative to *http://localhost:4434/api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**containerCreate**](ContainerApi.md#containerCreate) | **GET** /container/create | create container
[**containerDownload**](ContainerApi.md#containerDownload) | **GET** /container/{id}/download | download container
[**containerDownload1**](ContainerApi.md#containerDownload1) | **HEAD** /container/download | download container
[**containerExec**](ContainerApi.md#containerExec) | **GET** /container/{id}/exec | exec container
[**containerGetConfig**](ContainerApi.md#containerGetConfig) | **GET** /container/{id}/config | getConfig container
[**containerInspect**](ContainerApi.md#containerInspect) | **GET** /container/{id}/inspect | inspect container
[**containerList**](ContainerApi.md#containerList) | **GET** /container/list | list container
[**containerLogs**](ContainerApi.md#containerLogs) | **GET** /container/{id}/logs | logs container
[**containerRemove**](ContainerApi.md#containerRemove) | **GET** /container/{id}/remove | remove container
[**containerSetConfig**](ContainerApi.md#containerSetConfig) | **POST** /container/{id}/config | setConfig container
[**containerStart**](ContainerApi.md#containerStart) | **GET** /container/{id}/start | start container
[**containerStop**](ContainerApi.md#containerStop) | **GET** /container/{id}/stop | stop container
[**containerUpload**](ContainerApi.md#containerUpload) | **POST** /container/{id}/upload | upload container


<a name="containerCreate"></a>
# **containerCreate**
> GoaContainerCreateResults containerCreate(image, name, opts)

create container

create a new container

### Example
```javascript
var ModokiApiDocumentation = require('modoki_api_documentation');
var defaultClient = ModokiApiDocumentation.ApiClient.instance;
// Configure API key authorization: jwt
var jwt = defaultClient.authentications['jwt'];
jwt.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//jwt.apiKeyPrefix = 'Token';

var apiInstance = new ModokiApiDocumentation.ContainerApi();
var image = "image_example"; // String | Name of image
var name = "name_example"; // String | Name of container and subdomain
var opts = {
  'command': ["inner_example"], // [String] | Command to run specified as a string or an array of strings.
  'entrypoint': ["inner_example"], // [String] | The entry point for the container as a string or an array of strings
  'env': ["inner_example"], // [String] | Environment variables
  'sslRedirect': true, // Boolean | Whether HTTP is redirected to HTTPS
  'volumes': ["inner_example"], // [String] | Path to volumes in a container
  'workingDir': "workingDir_example" // String | Current directory (PWD) in the command will be launched
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.containerCreate(image, name, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **image** | **String**| Name of image | 
 **name** | **String**| Name of container and subdomain | 
 **command** | [**[String]**](String.md)| Command to run specified as a string or an array of strings. | [optional] 
 **entrypoint** | [**[String]**](String.md)| The entry point for the container as a string or an array of strings | [optional] 
 **env** | [**[String]**](String.md)| Environment variables | [optional] 
 **sslRedirect** | **Boolean**| Whether HTTP is redirected to HTTPS | [optional] [default to true]
 **volumes** | [**[String]**](String.md)| Path to volumes in a container | [optional] 
 **workingDir** | **String**| Current directory (PWD) in the command will be launched | [optional] 

### Return type

[**GoaContainerCreateResults**](GoaContainerCreateResults.md)

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.goa.error, vnd.application/goa.container.create.results+json

<a name="containerDownload"></a>
# **containerDownload**
> containerDownload(id, internalPath)

download container

Copy files from the container

### Example
```javascript
var ModokiApiDocumentation = require('modoki_api_documentation');
var defaultClient = ModokiApiDocumentation.ApiClient.instance;
// Configure API key authorization: jwt
var jwt = defaultClient.authentications['jwt'];
jwt.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//jwt.apiKeyPrefix = 'Token';

var apiInstance = new ModokiApiDocumentation.ContainerApi();
var id = "id_example"; // String | ID or name
var internalPath = "internalPath_example"; // String | Path in the container to save files
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.containerDownload(id, internalPath, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID or name | 
 **internalPath** | **String**| Path in the container to save files | 

### Return type

null (empty response body)

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/octet-stream, application/vnd.goa.error

<a name="containerDownload1"></a>
# **containerDownload1**
> containerDownload1(internalPath, opts)

download container

Copy files from the container

### Example
```javascript
var ModokiApiDocumentation = require('modoki_api_documentation');
var defaultClient = ModokiApiDocumentation.ApiClient.instance;
// Configure API key authorization: jwt
var jwt = defaultClient.authentications['jwt'];
jwt.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//jwt.apiKeyPrefix = 'Token';

var apiInstance = new ModokiApiDocumentation.ContainerApi();
var internalPath = "internalPath_example"; // String | Path in the container to save files
var opts = {
  'id': "id_example" // String | ID or name
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.containerDownload1(internalPath, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **internalPath** | **String**| Path in the container to save files | 
 **id** | **String**| ID or name | [optional] 

### Return type

null (empty response body)

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/octet-stream, application/vnd.goa.error

<a name="containerExec"></a>
# **containerExec**
> containerExec(id, opts)

exec container

Exec a command with attaching to a container using WebSocket(Mainly for xterm.js, using a protocol for terminado)

### Example
```javascript
var ModokiApiDocumentation = require('modoki_api_documentation');
var defaultClient = ModokiApiDocumentation.ApiClient.instance;
// Configure API key authorization: jwt
var jwt = defaultClient.authentications['jwt'];
jwt.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//jwt.apiKeyPrefix = 'Token';

var apiInstance = new ModokiApiDocumentation.ContainerApi();
var id = "id_example"; // String | id or name
var opts = {
  'command': ["inner_example"], // [String] | The path to the executable file
  'tty': true // Boolean | Tty
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.containerExec(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| id or name | 
 **command** | [**[String]**](String.md)| The path to the executable file | [optional] 
 **tty** | **Boolean**| Tty | [optional] 

### Return type

null (empty response body)

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.goa.error

<a name="containerGetConfig"></a>
# **containerGetConfig**
> GoaContainerConfig containerGetConfig(id)

getConfig container

Get the config of a container

### Example
```javascript
var ModokiApiDocumentation = require('modoki_api_documentation');
var defaultClient = ModokiApiDocumentation.ApiClient.instance;
// Configure API key authorization: jwt
var jwt = defaultClient.authentications['jwt'];
jwt.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//jwt.apiKeyPrefix = 'Token';

var apiInstance = new ModokiApiDocumentation.ContainerApi();
var id = "id_example"; // String | id or name
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.containerGetConfig(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| id or name | 

### Return type

[**GoaContainerConfig**](GoaContainerConfig.md)

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.goa.error, vpn.application/goa.container.config

<a name="containerInspect"></a>
# **containerInspect**
> GoaContainerInspect containerInspect(id)

inspect container

Return details of a container

### Example
```javascript
var ModokiApiDocumentation = require('modoki_api_documentation');
var defaultClient = ModokiApiDocumentation.ApiClient.instance;
// Configure API key authorization: jwt
var jwt = defaultClient.authentications['jwt'];
jwt.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//jwt.apiKeyPrefix = 'Token';

var apiInstance = new ModokiApiDocumentation.ContainerApi();
var id = "id_example"; // String | ID or name
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.containerInspect(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID or name | 

### Return type

[**GoaContainerInspect**](GoaContainerInspect.md)

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.goa.error, vpn.application/goa.container.inspect

<a name="containerList"></a>
# **containerList**
> GoaContainerListEachCollection containerList()

list container

Return a list of containers

### Example
```javascript
var ModokiApiDocumentation = require('modoki_api_documentation');
var defaultClient = ModokiApiDocumentation.ApiClient.instance;
// Configure API key authorization: jwt
var jwt = defaultClient.authentications['jwt'];
jwt.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//jwt.apiKeyPrefix = 'Token';

var apiInstance = new ModokiApiDocumentation.ContainerApi();
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.containerList(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**GoaContainerListEachCollection**](GoaContainerListEachCollection.md)

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.goa.error, vpn.application/goa.container.list.each; type=collection

<a name="containerLogs"></a>
# **containerLogs**
> containerLogs(id, opts)

logs container

Get stdout and stderr logs from a container.

### Example
```javascript
var ModokiApiDocumentation = require('modoki_api_documentation');
var defaultClient = ModokiApiDocumentation.ApiClient.instance;
// Configure API key authorization: jwt
var jwt = defaultClient.authentications['jwt'];
jwt.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//jwt.apiKeyPrefix = 'Token';

var apiInstance = new ModokiApiDocumentation.ContainerApi();
var id = "id_example"; // String | id or name
var opts = {
  'follow': false, // Boolean | 
  'since': "since_example", // String | 
  'stderr': false, // Boolean | 
  'stdout': false, // Boolean | 
  'tail': "'all'", // String | 
  'timestamps': false, // Boolean | 
  'until': "until_example" // String | 
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.containerLogs(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| id or name | 
 **follow** | **Boolean**|  | [optional] [default to false]
 **since** | **String**|  | [optional] 
 **stderr** | **Boolean**|  | [optional] [default to false]
 **stdout** | **Boolean**|  | [optional] [default to false]
 **tail** | **String**|  | [optional] [default to &#39;all&#39;]
 **timestamps** | **Boolean**|  | [optional] [default to false]
 **until** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.goa.error

<a name="containerRemove"></a>
# **containerRemove**
> containerRemove(force, id)

remove container

remove a container

### Example
```javascript
var ModokiApiDocumentation = require('modoki_api_documentation');
var defaultClient = ModokiApiDocumentation.ApiClient.instance;
// Configure API key authorization: jwt
var jwt = defaultClient.authentications['jwt'];
jwt.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//jwt.apiKeyPrefix = 'Token';

var apiInstance = new ModokiApiDocumentation.ContainerApi();
var force = false; // Boolean | If the container is running, kill it before removing it.
var id = "id_example"; // String | id or name
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.containerRemove(force, id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **force** | **Boolean**| If the container is running, kill it before removing it. | [default to false]
 **id** | **String**| id or name | 

### Return type

null (empty response body)

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.goa.error

<a name="containerSetConfig"></a>
# **containerSetConfig**
> containerSetConfig(id, containerConfig)

setConfig container

Change the config of a container

### Example
```javascript
var ModokiApiDocumentation = require('modoki_api_documentation');
var defaultClient = ModokiApiDocumentation.ApiClient.instance;
// Configure API key authorization: jwt
var jwt = defaultClient.authentications['jwt'];
jwt.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//jwt.apiKeyPrefix = 'Token';

var apiInstance = new ModokiApiDocumentation.ContainerApi();
var id = "id_example"; // String | id or name
var containerConfig = new ModokiApiDocumentation.ContainerConfig(); // ContainerConfig | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.containerSetConfig(id, containerConfig, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| id or name | 
 **containerConfig** | [**ContainerConfig**](ContainerConfig.md)|  | 

### Return type

null (empty response body)

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: application/json, application/xml, application/gob, application/x-gob
 - **Accept**: application/vnd.goa.error

<a name="containerStart"></a>
# **containerStart**
> containerStart(id)

start container

start a container

### Example
```javascript
var ModokiApiDocumentation = require('modoki_api_documentation');
var defaultClient = ModokiApiDocumentation.ApiClient.instance;
// Configure API key authorization: jwt
var jwt = defaultClient.authentications['jwt'];
jwt.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//jwt.apiKeyPrefix = 'Token';

var apiInstance = new ModokiApiDocumentation.ContainerApi();
var id = "id_example"; // String | id or name
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.containerStart(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| id or name | 

### Return type

null (empty response body)

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.goa.error

<a name="containerStop"></a>
# **containerStop**
> containerStop(id)

stop container

stop a container

### Example
```javascript
var ModokiApiDocumentation = require('modoki_api_documentation');
var defaultClient = ModokiApiDocumentation.ApiClient.instance;
// Configure API key authorization: jwt
var jwt = defaultClient.authentications['jwt'];
jwt.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//jwt.apiKeyPrefix = 'Token';

var apiInstance = new ModokiApiDocumentation.ContainerApi();
var id = "id_example"; // String | id or name
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.containerStop(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| id or name | 

### Return type

null (empty response body)

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.goa.error

<a name="containerUpload"></a>
# **containerUpload**
> containerUpload(id, copyUIDGID, data, path, opts)

upload container

Copy files to the container

### Example
```javascript
var ModokiApiDocumentation = require('modoki_api_documentation');
var defaultClient = ModokiApiDocumentation.ApiClient.instance;
// Configure API key authorization: jwt
var jwt = defaultClient.authentications['jwt'];
jwt.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//jwt.apiKeyPrefix = 'Token';

var apiInstance = new ModokiApiDocumentation.ContainerApi();
var id = "id_example"; // String | ID or name
var copyUIDGID = false; // Boolean | Copy all uid/gid information
var data = "/path/to/file"; // File | File tar archive
var path = "path_example"; // String | Path in the container to save files
var opts = {
  'allowOverwrite': false // Boolean | Allow for a existing directory to be replaced by a file
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.containerUpload(id, copyUIDGID, data, path, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID or name | 
 **copyUIDGID** | **Boolean**| Copy all uid/gid information | [default to false]
 **data** | **File**| File tar archive | 
 **path** | **String**| Path in the container to save files | 
 **allowOverwrite** | **Boolean**| Allow for a existing directory to be replaced by a file | [optional] [default to false]

### Return type

null (empty response body)

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/vnd.goa.error

