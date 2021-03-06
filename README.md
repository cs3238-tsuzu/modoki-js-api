# modoki_api

ModokiApi - JavaScript client for modoki_api
No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
This SDK is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: 1.0.0
- Package version: 1.0.0
- Build package: org.openapitools.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install modoki_api --save
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing 
into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

Finally, switch to the directory you want to use your modoki_api from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

You should now be able to `require('modoki_api')` in javascript files from the directory you ran the last 
command above from.

#### git
#
If the library is hosted at a git repository, e.g.
https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
    npm install GIT_USER_ID/GIT_REPO_ID --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file, that's to say your javascript file where you actually 
use this library):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var ModokiApi = require('modoki_api');

var defaultClient = ModokiApi.ApiClient.instance;

// Configure API key authorization: jwt
var jwt = defaultClient.authentications['jwt'];
jwt.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//jwt.apiKeyPrefix['Authorization'] = "Token"

var api = new ModokiApi.ContainerApi()
var image = "image_example"; // {String} Name of image
var name = "name_example"; // {String} Name of container and subdomain
var opts = {
  'command': ["inner_example"], // {[String]} Command to run specified as a string or an array of strings.
  'entrypoint': ["inner_example"], // {[String]} The entry point for the container as a string or an array of strings
  'env': ["inner_example"], // {[String]} Environment variables
  'sslRedirect': true, // {Boolean} Whether HTTP is redirected to HTTPS
  'volumes': ["inner_example"], // {[String]} Path to volumes in a container
  'workingDir': "workingDir_example" // {String} Current directory (PWD) in the command will be launched
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.containerCreate(image, name, opts, callback);

```

## Documentation for API Endpoints

All URIs are relative to *http://localhost:4434/api/v2*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*ModokiApi.ContainerApi* | [**containerCreate**](docs/ContainerApi.md#containerCreate) | **GET** /container/create | create container
*ModokiApi.ContainerApi* | [**containerDownload**](docs/ContainerApi.md#containerDownload) | **GET** /container/{id}/download | download container
*ModokiApi.ContainerApi* | [**containerDownload1**](docs/ContainerApi.md#containerDownload1) | **HEAD** /container/download | download container
*ModokiApi.ContainerApi* | [**containerExec**](docs/ContainerApi.md#containerExec) | **GET** /container/{id}/exec | exec container
*ModokiApi.ContainerApi* | [**containerGetConfig**](docs/ContainerApi.md#containerGetConfig) | **GET** /container/{id}/config | getConfig container
*ModokiApi.ContainerApi* | [**containerInspect**](docs/ContainerApi.md#containerInspect) | **GET** /container/{id}/inspect | inspect container
*ModokiApi.ContainerApi* | [**containerList**](docs/ContainerApi.md#containerList) | **GET** /container/list | list container
*ModokiApi.ContainerApi* | [**containerLogs**](docs/ContainerApi.md#containerLogs) | **GET** /container/{id}/logs | logs container
*ModokiApi.ContainerApi* | [**containerRemove**](docs/ContainerApi.md#containerRemove) | **GET** /container/{id}/remove | remove container
*ModokiApi.ContainerApi* | [**containerSetConfig**](docs/ContainerApi.md#containerSetConfig) | **POST** /container/{id}/config | setConfig container
*ModokiApi.ContainerApi* | [**containerStart**](docs/ContainerApi.md#containerStart) | **GET** /container/{id}/start | start container
*ModokiApi.ContainerApi* | [**containerStop**](docs/ContainerApi.md#containerStop) | **GET** /container/{id}/stop | stop container
*ModokiApi.ContainerApi* | [**containerUpload**](docs/ContainerApi.md#containerUpload) | **POST** /container/{id}/upload | upload container
*ModokiApi.UserApi* | [**userAddAuthorizedKeys**](docs/UserApi.md#userAddAuthorizedKeys) | **PUT** /user/config/authorizedKeys | addAuthorizedKeys user
*ModokiApi.UserApi* | [**userGetConfig**](docs/UserApi.md#userGetConfig) | **GET** /user/config | getConfig user
*ModokiApi.UserApi* | [**userGetDefaultShell**](docs/UserApi.md#userGetDefaultShell) | **GET** /user/config/defaultShell | getDefaultShell user
*ModokiApi.UserApi* | [**userListAuthorizedKeys**](docs/UserApi.md#userListAuthorizedKeys) | **GET** /user/config/authorizedKeys | listAuthorizedKeys user
*ModokiApi.UserApi* | [**userRemoveAuthorizedKeys**](docs/UserApi.md#userRemoveAuthorizedKeys) | **DELETE** /user/config/authorizedKeys | removeAuthorizedKeys user
*ModokiApi.UserApi* | [**userSetAuthorizedKeys**](docs/UserApi.md#userSetAuthorizedKeys) | **POST** /user/config/authorizedKeys | setAuthorizedKeys user
*ModokiApi.UserApi* | [**userSetDefaultShell**](docs/UserApi.md#userSetDefaultShell) | **POST** /user/config/defaultShell | setDefaultShell user


## Documentation for Models

 - [ModokiApi.ContainerConfig](docs/ContainerConfig.md)
 - [ModokiApi.Error](docs/Error.md)
 - [ModokiApi.GoaContainerConfig](docs/GoaContainerConfig.md)
 - [ModokiApi.GoaContainerCreateResults](docs/GoaContainerCreateResults.md)
 - [ModokiApi.GoaContainerInspect](docs/GoaContainerInspect.md)
 - [ModokiApi.GoaContainerInspectRawState](docs/GoaContainerInspectRawState.md)
 - [ModokiApi.GoaContainerListEach](docs/GoaContainerListEach.md)
 - [ModokiApi.GoaContainerListEachCollection](docs/GoaContainerListEachCollection.md)
 - [ModokiApi.GoaUserAuthorizedkey](docs/GoaUserAuthorizedkey.md)
 - [ModokiApi.GoaUserAuthorizedkeyCollection](docs/GoaUserAuthorizedkeyCollection.md)
 - [ModokiApi.GoaUserConfig](docs/GoaUserConfig.md)
 - [ModokiApi.GoaUserDefaultshell](docs/GoaUserDefaultshell.md)
 - [ModokiApi.SetAuthorizedKeysUserPayload](docs/SetAuthorizedKeysUserPayload.md)
 - [ModokiApi.UserAuthorizedKey](docs/UserAuthorizedKey.md)


## Documentation for Authorization


### jwt

- **Type**: API key
- **API key parameter name**: Authorization
- **Location**: HTTP header

