# Authorization

## Authorization Endpoint

::: tip Note
Please note that the Authorization Endpoint is not needed if you are running the dashboard in PKI mode. 
:::

Production based installation will require you to implement an authorization endpoint. 
The goal of the endpoint is to authorize a specific user so that the skills display and skills reporting can be properly secured.    

The authorization endpoint produces a user specific temporary client token by utilizing a project's ```Client ID``` and ```Client Secret``` 
(found in the dashboard under ```Project -> Access -> 'Trusted Client Properties'``` ) 

::: warning Reminder
Friendly reminder that you ***must*** keep ```Client ID``` and ```Client Secret``` protected/hidden/private as it serves as the
project's authentication mechanism. That is why these attributes must only be used within your server-side endpoint so they can
stay protected. 
:::

To retrieve a temporary client token skill, the dashboard provides a ``/oauth/token`` endpoint and expects the following parameters:
1. Auth Param: ``Client Id`` (from skills dashboard)
1. Auth Param: ``Client Secret`` (from skills dashboard)
1. Data Variable Asking for client credentials:  ``grant_type=client_credentials`` (can be hardcoded)
1. Data Variable specifies which user to retrieve credentials for: ``proxy_user=<user name>`` (specific to user that client display is being loaded for)

This is an implementation of the OAuth2 protocol to retrieve a temporary client token. To learn more about OAuth2 here are a couple of resources: 
- [https://auth0.com/docs/protocols/oauth2](https://auth0.com/docs/protocols/oauth2)
- [https://oauth.net/2/](https://oauth.net/2/)
- [https://www.digitalocean.com/community/tutorials/an-introduction-to-oauth-2](https://www.digitalocean.com/community/tutorials/an-introduction-to-oauth-2) 

Below are a number of examples of how you could implement an authentication endpoint that will be utilized by the client display. 

### Spring Boot Example

Here is a working example of a REST endpoint within a Spring Boot application: 

```java
    @CrossOrigin()
    @GetMapping("/users/{user}/token")
    public String getUserAuthToken1(@PathVariable String user) {
        // this is skill's service endpoint that will provide you client token
        String serviceTokenUrl = this.dashboardUrl + "/oauth/token";
        // 1. auth param: client id
        String clientId = this.clientId;
        // 2. auth param: client secret
        String clientSecret = this.secret;
        
        MultiValueMap<String, Object> body = new LinkedMultiValueMap<>();
        // 3. Data Variable Asking for client credentials
        body.add("grant_type", "client_credentials");
        // 4. Data Variable specifies which user to retrieve credentials for
        body.add("proxy_user", user);

        RestTemplate oAuthRestTemplate = new RestTemplate();
        oAuthRestTemplate.setInterceptors(Arrays.asList(new BasicAuthenticationInterceptor(clientId, clientSecret)));
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_FORM_URLENCODED);

        ResponseEntity<String> responseEntity = oAuthRestTemplate.postForEntity(serviceTokenUrl, new HttpEntity<>(body, headers), String.class);
        return responseEntity.getBody();
    }
```

### CURL Example
Here is an example using CURL (please substitute your values of ``client-id``, ``client-secret``, ``dashboard-url`` and ``user-to-proxy-for``):

```bash
curl client-id:client-secret@dashboard-url/oauth/token -d "grant_type=client_credentials&proxy-user=user-to-proxy-for"
```
