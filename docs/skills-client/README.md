# Skills Client


## Authorization

### Authorization Endpoint

Production based installation will require you to implement an authorization endpoint. 
The goal of the endpoint is to authorize a specific user so skills display and skills reporting can be properly secured.    


The authorization endpoint produces a user specific temporary client token by utilizing a project's ```Client ID``` and ```Client Secret``` 
(found in dashboard under ```Project -> Access -> 'Trusted Client Properties'``` ) 

::: warning Reminder
Friendly reminder that you ***must*** keep ```Client ID``` and ```Client Secret``` protected/hidden/private as it serves as the
project's authentication mechanism. That is why these attributes must only be used within your server-side endpoint so they can
stay protected. 
:::





## Integration
### Vue.js

#### User Display

To install User Display:

```
npm install @skills/skills-client-vue --save
```

### React
### Angular Display
### Pure JavaScript Display
## Architecture

