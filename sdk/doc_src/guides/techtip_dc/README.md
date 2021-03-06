Device Capabilities Cookbook
===

Overview
---
This cookbook explains how to create an instance of the AttApiClient class in your app and use it to access methods in the AT&T API Platform SDK for HTML5, in order to get the required consent from the user and obtain the capabilities of the device.

What do I need to start?
---

1. Include att-api-client.js as a dependency by adding the following code to your HTML:  

        <script type="text/javascript" src="att-api-client.js"></script>

Adjust the _src_ attribute value to match the site path where you store the _att_api_client.js_ file.

###Tip: Get authorization first

The Device Capabilities API requires user consent to obtain device information for a given mobile device. AttApiClient includes a method to request authorization from the user, enabling your application to obtain that information.

When your app asks for authorization, it asks the user to grant permission for access to specific information about their device, or about functions performed on behalf of the device (the authorization scope). For Device Capabilities, the authorization scope is **DC** and may be obtained as shown in the following section.


###Tip: Device Capabilities Authorization only works when you are on the AT&T Network

The required consent for Device Capabilities is available only on the AT&T Network. When requesting consent, you must prompt the user to ensure that they are using the AT&T network and not a Wi-Fi connection.

###Tip: Check to see if the application is already authorized  

To avoid having the user authorize your application on every single call to the Device Capabilities API, use the AttApiClient.OAuth.isUserAuthorized method to determine whether the application is already authorized for the specified scope.  

        AttApiClient.OAuth.isUserAuthorized('DC', onIsAuthorized, onIsNotAuthorized);

        function onIsAuthorized() {
            /* Call to device capabilities goes here */
        } 

        function onIsNotAuthorized(){
            /* Call AttApiClient.OAuth.authorizeUser here*/
        } 


How do I get the Device Capabilities?
---

1. **Authorize the application for DC scope **  
    
    To authorize your application for a given scope, use the AttApiClient.OAuth.authorizeUser method.

        AttApiClient.OAuth.authorizeUser({scope:'DC'}, onIsAuthorized, onIsNotAuthorized);

        function onAuthSuccess(response) {
            // Call to device capabilities goes here
        };

        function onAuthFailure(error) {
            // Handle errors here
        }

The call to _authorizeUser_ may redirect to an authorization if necessary. By default, when authorization is complete, the browser will be redirected back to the current page. For more details about authorization options, refer to the _authorizeUser_ API documentation.

2. **Get the Device Capabilities information **  

    Once the application is authorized, retrieve the device information by calling the AttApiClient.DeviceCapabilities.getDeviceInfo method. 

        AttApiClient.DeviceCapabilities.getDeviceInfo(onSuccess, onFailure);

        //callback for success response
        function onSuccess(response){
            // Handle the response here 
            console.log(response);
        };

        //callback for failed call
        function onFailure(error){
            // Handle the error here
            console.log(error);
        };

