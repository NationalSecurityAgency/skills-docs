```properties
# To retrieve user info by DN
skills.authorization.userInfoUri=https://<host>:<port>/userInfo?dn={dn}
# Used by dashboard dropdowns to suggest existing users
skills.authorization.userQueryUri=https://<host>:<port>/userQuery?query={query}
# skills-service checks the health of User Info Service
skills.authorization.userInfoHealthCheckUri=https://<host>:<port>/actuator/health
``` 
