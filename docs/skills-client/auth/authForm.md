## Authentication Endpoint

Production based installation will require you to implement an authentication endpoint. 
The goal of the endpoint is to authorize a specific user so that the skills display and skills reporting can be properly secured.    

**Why the need for this endpoint?**  
Rather than using API to build displays SkillTree platform provides fully navigable **Ranking and Visualization views** 
that are directly embeddable into a web-based application. These **Ranking and Visualization views** need a way
to authorize a user so only data for that user is loaded and shared in those UI components. To address this issue
SkillTree utilizes [OAuth2](https://auth0.com/docs/protocols/oauth2) protocol to retrieve a temporary client token 
which is then used to identify that user. This backend *Authentication Endpoint* completes [OAuth2](https://auth0.com/docs/protocols/oauth2) integration for your project. 


::: tip Please Note
**Without** implementing this endpoint authentication parameters would be exposed  
in the browser and anyone could then make requests on the behalf of any user. 
:::

To properly secure authentication parameters the following flow is utilized:

![Auth Endpoint Flow](../diagrams/AuthEndpointFlow.jpg)

1. SkillTree [Client Library](/skills-client/) is loaded in a browser
1. SkillTree [Client Library](/skills-client/) requests a user token from *Your App Backend Server*.
1. *Your App Backend Server* uses the project's ```Client ID``` and ```Client Secret``` to obtain the user's token (on behalf of this user) from the SkillTree backend server, which is sent back to the SkillTree client library (running in the browser).
   - Your project's ```Client ID``` and ```Client Secret``` are **not** exposed to the browser. To ensure the safety of these credentials, they must only to be securely available to your back-end application server
   - ```Client ID``` and ```Client Secret``` come from the SkillTree dashboard under ``Project -> Access -> 'Trusted Client Properties'``
1. Your JS code then uses SkillTree [Client Library](/skills-client/) to load Ranking and Visualizations ([Skills Display](/skills-client/#skills-display-integration) Component) and to [report skill events](/skills-client/#report-events-integration) to the SkillTree backend server. 
   - To identify user securely and accurately SkillTree [Client Library](/skills-client/) sends the token obtained in steps 2-3 as an HTTP Header with each request.

::: tip
Please note that SkillTree platform simply requires you to implement this authentication endpoint and then configure it when JS client library is initialized. 
The rest is taken care by the library (ex. display of the fully navigable visualizations and skill event reporting JS methods).

We provide an example of the authentication endpoint implementation below. A full working example can also be found by following the [Quick Start](https://code.nsa.gov/skills-docs/dashboard/install-guide/quickStart.html) section. 
:::

## Implementing Authentication Endpoint
The authentication endpoint produces a user specific temporary client token by utilizing a project's ```Client ID``` and ```Client Secret``` 
(found in the dashboard under ```Project -> Access -> 'Trusted Client Properties'``` ) 

::: warning Reminder
Friendly reminder that you ***must*** keep ```Client ID``` and ```Client Secret``` protected/hidden/private as it serves as the
project's authorization mechanism. That is why these attributes must only be used within your server-side endpoint so they can
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
curl client-id:client-secret@dashboard-url/oauth/token -d "grant_type=client_credentials&proxy_user=user-to-proxy-for"
```

