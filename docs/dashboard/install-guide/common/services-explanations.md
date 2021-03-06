**1: Clustered deployment of ``skills-service``** for high-availability and higher throughput
   - Route requests through a load balancer

**2: Database** - We currently only support [PostgreSQL](https://www.postgresql.org/) for a production-grade install
   - Visit the [Database](/skills-docs/dashboard/install-guide/database.html) section to configure skills-service
   - Make sure to install [PostgreSQL](https://www.postgresql.org/) in high-availability mode
   - [PostgreSQL](https://www.postgresql.org/)'s installation, setup and management is beyond the scope of this section, please visit [https://www.postgresql.org](https://www.postgresql.org/).

**3: WebSocket Stomp Brokers**
   - Some options include [Amazon MQ](https://aws.amazon.com/amazon-mq) or [RabbitMQ](https://www.rabbitmq.com/stomp.html)
   - Make sure to configure high-availability setup
   - [RabbitMQ](https://www.rabbitmq.com/stomp.html)'s installation:
      - Docker based: [RabbitMQ on DockerHub](https://hub.docker.com/_/rabbitmq)
      - Native install: [RabbitMQ.com](https://www.rabbitmq.com/stomp.html)
