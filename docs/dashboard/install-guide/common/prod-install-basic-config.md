Here is a minimum required list of configurations in order to run production-grade skills-service instance(s).
Please visit the [Configuration](/dashboard/install-guide/config.html) section to learn how to configure skills-service.  
Each skills-service instance should be configured with the following: 

DB configs:
```properties
spring.datasource.url=jdbc:postgresql://<server>:5432/skills
spring.datasource.username=
spring.datasource.password=
```
Please visit the [Database](/skills-docs/dashboard/install-guide/database.html) section for further information
            
WebSocket Stomp:
```properties
skills.websocket.enableStompBrokerRelay=true
skills.websocket.relayHost=
skills.websocket.relayPort=
```

Store HttpSession in Redis:
```properties
spring.session.store-type=redis
spring.redis.host=
spring.redis.password=
spring.redis.port=6379
```
