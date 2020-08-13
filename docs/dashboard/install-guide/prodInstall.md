# Production Installation

## Password Auth Mode Install

Production grade installation requires a cluster of ``skills-service`` daemons which must reside on multiple machines/instances with a load balancer in between.
There is a number of products that needs to be installed in high-availability mode in order to support clustered SkillTree setup.  


![Dashboard with Integrated Application Image](./diagrams/ProdInstall-Pass.jpg) 

1. Clustered deployment of ``skill-service`` for high-availability and higher throughput
    - Route requests through a load balancer
1. Install DB - We currently only support [PostgreSQL](https://www.postgresql.org/) for a production grade install
    - Visit [Database](/skills-docs/dashboard/install-guide/database.html) section to configure skill-service
    - Make sure to install [PostgreSQL](https://www.postgresql.org/) in high-availability mode
    - [PostgreSQL](https://www.postgresql.org/)'s installation, setup and management is outside of the scope of this section, please visit [https://www.postgresql.org](https://www.postgresql.org/).
1. WebSocket Stomp Brokers
    - Some options include [Amazon MQ](https://aws.amazon.com/amazon-mq) or [RabbitMQ](https://www.rabbitmq.com/stomp.html)
    - Make sure to configure high-availability setup
    - [RabbitMQ](https://www.rabbitmq.com/stomp.html)'s installation:
       - Docker based: [RabbitMQ on DockerHub](https://hub.docker.com/_/rabbitmq)
       - Native install: [RabbitMQ.com](https://www.rabbitmq.com/stomp.html)
1. Redis: Required for clustered skill-service deployment to persist HttpSession  
    - [Redis](https://redis.io/)'s installation, setup and management is outside of the scope of this section, please visit [https://redis.io/](https://redis.io/)        
 
## skill-service configuration

Here is a minimum required list of configuration in order to run production grade skill-service instance(s):

DB configs:
```properties
spring.datasource.url=jdbc:postgresql://<server>:5432/skills
spring.datasource.username=
spring.datasource.password=
```
Please visit [Database](/skills-docs/dashboard/install-guide/database.html) section for further inforamtion
            
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
             
Configure ``https``:
```properties
server.port=8443
server.ssl.enabled=true
server.ssl.key-store-type=PKCS12
server.ssl.key-store=/path/to/keystore.p12
server.ssl.key-store-password=
server.ssl.enabled-protocols=TLSv1.2
```   

Java VM option to increase ``skill-service`` size of heap, in case of jar based install
```bash
java -Xmx2g -Xms2g -jar skills-service-<version>.jar
```
or docker:
```bash
docker run --name skills-service -d -p 8080:8080 -e EXTRA_JAVA_OPTS="-Xmx2g -Xms2g" skilltree/skills-service
```
