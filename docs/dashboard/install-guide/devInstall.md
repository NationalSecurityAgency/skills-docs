# Development Installation

SkillTree's ``skills-service`` is configured with smart defaults and will work out-of-the-box, with 
the one exception that SkillTree requires that a properly configured PostgreSQL database be available. 
<external-url label="PostgreSQL" url="https://www.postgresql.org/" />'s installation, setup and management is beyond the scope of this section, please visit <external-url label="https://www.postgresql.org" url="https://www.postgresql.org" />.

:::tip
Please note that all of these example run in the [Password Auth Mode](/dashboard/install-guide/installModes.html#password-auth-mode).
Please visit [PKI Auth Mode](/dashboard/install-guide/installModes.html#pki-auth-mode) if you are interested in that mode. However, definitely use the [Password Auth Mode](/dashboard/install-guide/installModes.html#password-auth-mode) if you are not sure which mode is applicable to you.
:::

## Docker Distribution Dev Install Examples     

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
      
Run ``skills-service`` with PostgreSQL:
```bash                
java -jar ~/Downloads/skills-service-X.X.X.jar \
--spring.datasource.url=jdbc:postgresql://<host>:5432/skills \
--spring.datasource.username=<username> \
--spring.datasource.password=<pass>
```

