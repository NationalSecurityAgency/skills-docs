# Skills Client


## Authorization

### Authorization Endpoint

Production based installation will require you to implement authorization endpoint. 
The goal of the endpoint is to authorize a specific user so skills display and skills reporting can be properly secured.    


Authorization endpoint produces user specific temporary client token by utilizing project's ```Client ID``` and ```Client Secret``` 
(found in dashboard under ```Project -> Access -> 'Trusted Client Properties'``` ) 

::: warning Reminder
Friendly that you ***must*** keep ```Client ID``` and ```Client Secret``` protected/hidden/private as it serves as that
projects authentication mechanism. That is why these attributes must only be used within your server-side endpoint so they can
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

