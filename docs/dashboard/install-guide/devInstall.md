# Development Installation

SkillTree's ``skills-service`` is configured with smart defaults and will work out-of-the-box. 
The only sticky wicket is that by default SkillTree stores its data in an embedded in-memory H2 database.
That data is ephemeral and will not persist between application restarts. 

You can easily setup one of 3 options: 
1. Make the embedded H2 database persistent to a file
1. Configure an external H2 database (H2 server mode)
1. Configure PostgreSQL (would also be used in production)

The following 2 sections will provide examples using Docker and Jar-based distributions: 

:::tip
Please note that all of these example run in the [Password Auth Mode](/dashboard/install-guide/installModes.html#password-auth-mode).
Please visit [PKI Auth Mode](/dashboard/install-guide/installModes.html#pki-auth-mode) if you are interested in that mode. However, definitely use the [Password Auth Mode](/dashboard/install-guide/installModes.html#password-auth-mode) if you are not sure which mode is applicable to you.
:::

## Docker Distribution Dev Install Examples     

Run ``skills-service`` with embedded H2 database persistent to a file:
```bash
docker run --name skills-service -d -p 8080:8080 \
-e SPRING_PROPS="\
spring.datasource.url=jdbc:h2:file:/h2-db" \
skilltree/skills-service:<version>
```
Please note that in this example the H2 database is persisted to file in ``/h2-db`` within that container only. 
Removing the container will cause data loss.    

Run ``skills-service`` with external H2 database:
```bash
docker run --name skills-service -d -p 8080:8080 \
-e SPRING_PROPS="\
spring.datasource.url=jdbc:h2:tcp://<host>:1521/skills,\
spring.datasource.username=<username>,\
spring.datasource.password=<password>" \
skilltree/skills-service:<version>
```

Run ``skills-service`` with PostgreSQL:
```bash
docker run --name skills-service -d -p 8080:8080 \
-e SPRING_PROPS="\
spring.datasource.url=jdbc:postgresql://<host>:5432/skills,\
spring.datasource.username=<username>,\
spring.datasource.password=<password>" \
skilltree/skills-service:<version>
```

## Jar-Based distribution development installation 
     
Run ``skills-service`` with embedded H2 database persistent to a file:
```bash                
java -jar ~/Downloads/skills-service-X.X.X.jar --spring.datasource.url=jdbc:h2:file:~/h2-db 
```        
Run ``skills-service`` with external H2 database:
```bash                
java -jar ~/Downloads/skills-service-X.X.X.jar \
--spring.datasource.url=jdbc:h2:tcp://<host>:1521/skills \
--spring.datasource.username=<username> \
--spring.datasource.password=<pass>
```                
Run ``skills-service`` with PostgreSQL:
```bash                
java -jar ~/Downloads/skills-service-X.X.X.jar \
--spring.datasource.url=jdbc:postgresql://<host>:5432/skills \
--spring.datasource.username=<username> \
--spring.datasource.password=<pass>
```

