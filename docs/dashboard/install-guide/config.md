# Configuration 

Out of the box the dashboard comes packaged with smart defaults that are designed to work well for 
development and prototyping. To start customizing configuration properties, create an ``application.properties`` file under either: 

- A /config subdirectory of the current directory OR
- The current directory.

``application.properties`` contains application specific configuration, for example database configuration: 

```properties
spring.datasource.url=jdbc:postgresql://localhost:5432/skills
spring.datasource.username=postgres
spring.datasource.password=skillspass
``` 

Redis Connection Settings

# Enable Redis HttpStore
```properties
spring.session.store-type=redis
spring.redis.host=localhost
spring.redis.password=
spring.redis.port=6379 
```
Further customization: 
```properties
# can specify duration suffix but if omitted then it defaults to seconds
server.servlet.session.timeout= 
# Flush mode.
spring.session.redis.flush-mode=on_save 
# Stores session namespace to use for the keys
spring.session.redis.namespace=spring:session 
```
Here is the complete list of available [Spring Boot Properties](https://docs.spring.io/spring-boot/docs/current/reference/htmlsingle/#data-properties) 
