# Database 

By default the skills dashboard stores its data into an embedded in-memory H2 database. That data is ephemeral and will not persist between application restarts. 
While this is a great way to get started quickly it is obviously not appropriate for a test or production installation. 
Please note that you can easily add a property (discussed below) to make the embedded H2 database persist to disk, however we don't recommend using 
a H2 database in a production install. 
 
Here is an overview of supported options followed by sections describing each choice: 

| Database                                                              | Supported Version | Use Case | 
|-----------------------------------------------------------------------|:-------------:| ----- |
| <external-url label="H2" url="http://www.h2database.com" />           | 1.4 + | Dev Only |
| <external-url label="PostgresQL" url="https://www.postgresql.org/" /> | 10 + | Production + Dev |


## H2 Database

Embedded H2 will be used by default - data will be ephemeral and will not persist between application restarts. 
You can make the embedded H2 database persistent to a file via a configuration property: 

``` properties
spring.datasource.url=jdbc:h2:file:~/spring-boot-h2-db
```

You can also use the H2 database in server mode via the following properties:

```properties
spring.datasource.url=jdbc:h2:tcp://localhost:1521/skills
spring.datasource.username=sa
spring.datasource.password=
```

and ensure that an instance of the H2 database is running at the configured location.

::: danger Friendly Reminder
H2 is purely for prototyping and development and shouldn't be used in production mode
:::

## PostgreSQL Database

To configure PostgreSQL as the database, set the following properties: 
```properties
spring.datasource.url=jdbc:postgresql://localhost:5432/skills
spring.datasource.username=postgres
spring.datasource.password=skillspass
```
