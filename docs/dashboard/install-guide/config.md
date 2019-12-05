# Configuration 

Out of the box the dashboard comes packaged with smart defaults that are designed to work well for 
development and prototyping. To start customizing configuration properties create an ``application.properties`` file under either: 

- A /config subdirectory of the current directory OR
- The current directory.

``application.properties`` contains application specific configuration, for example database configuration: 

```properties
spring.datasource.url=jdbc:postgresql://localhost:5432/skills
spring.datasource.username=postgres
spring.datasource.password=skillspass
``` 
