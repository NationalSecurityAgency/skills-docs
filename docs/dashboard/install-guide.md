# Dashboard Install Guide

## Configuration 

Out of the box dashboard comes packaged with smart defaults that are designed to work well for 
development and prototyping. To start customizing configuration properties create ``application.properties`` file under either: 

- A /config subdirectory of the current directory OR
- The current directory.

``application.properties`` contain application specific properties, for example database configuration: 

```
spring.datasource.url=jdbc:postgresql://localhost:5432/skills
spring.datasource.username=postgres
spring.datasource.password=skillspass
``` 


## Database 

By default skills dashboards stores its data into embedded in-memory H2 database. That data is ephermal and will not persist between restarts. 
While this is a great way to get started quickly is obviously is not appropriate for development, test or production installation. 
Please note that you can easily add a property (discussed below) to make embedded H2 database persist to disk, however we don't recommend using 
H2 database in a production install. 
 
Here an overview of supported options with followed by sections depicting each choice: 

| Database | Supported Version | Use Case | 
| ------------- |:-------------:| ----- |
| [H2](http://www.h2database.com) | 1.4 + | Dev Only |
| [PostgresQL](https://www.postgresql.org/) | 10 + | Production + Dev |
| [MySQL](https://dev.mysql.com/) | 8 +  | Production + Dev |


### H2 Database

Embedded H2 will be used by default where data is ephermal and will not persist between restarts. 
You can make embedded H2 persistent to a file via a configuration property: 

``` 
spring.datasource.url=jdbc:h2:file:~/spring-boot-h2-db
```

You can also use H2 database in server mode, if so you'll need to specify the following properties:

```
spring.datasource.url=jdbc:h2:tcp://localhost:1521/skills
spring.datasource.username=sa
spring.datasource.password=
```

::: danger Friendly Reminder
H2 is purely for prototyping and development and shouldn't be used in production mode
:::

### PostgresQL Database

To configure PostgresQL database set the following properties: 

```
spring.datasource.url=jdbc:postgresql://localhost:5432/skills
spring.datasource.username=postgres
spring.datasource.password=skillspass
```

### MySQL Database

To configure MySQL database set the following properties: 

```
#spring.datasource.url=jdbc:mysql://localhost:3306/skills?serverTimezone=UTC
#spring.datasource.username=skillsUser
#spring.datasource.password=skillsPass
```

