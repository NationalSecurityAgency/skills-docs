Here is a minimum required list of configurations in order to run production-grade skills-service instance(s).
Please visit the [Configuration](/dashboard/install-guide/config.html) section to learn how to configure skills-service.  
Each skills-service instance should be configured with the following: 

DB configs:
```properties
spring.datasource.url=jdbc:postgresql://<server>:5432/skills
spring.datasource.username=
spring.datasource.password=
```
            
WebSocket Stomp:
```properties
skills.websocket.enableStompBrokerRelay=true
skills.websocket.relayHost=
skills.websocket.relayPort=
```

Store HttpSession in JDBC:
```properties
spring.session.store-type=jdbc
spring.session.jdbc.initialize-schema=always
```

Keystore for JWT:
```properties
security.oauth2.jwt.useKeystore=true
```
