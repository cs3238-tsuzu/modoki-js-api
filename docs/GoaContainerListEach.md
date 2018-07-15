# ModokiApiDocumentation.GoaContainerListEach

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**command** | **String** | Command to run when starting the container | 
**created** | **Date** | The time the container was created | 
**id** | **Number** | ID | 
**image** | **String** | The name of the image to use when creating the container | 
**imageID** | **String** | The container&#39;s image ID | 
**name** | **String** | Assign the specified name to the container. Must match /?[a-zA-Z0-9_-]+. | 
**status** | **String** |  | 
**volumes** | **[String]** | Paths to mount volumes in | 


<a name="StatusEnum"></a>
## Enum: StatusEnum


* `Creating` (value: `"Creating"`)

* `Created` (value: `"Created"`)

* `Running` (value: `"Running"`)

* `Stopped` (value: `"Stopped"`)

* `Error` (value: `"Error"`)




