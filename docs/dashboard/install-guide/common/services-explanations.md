**1: Clustered deployment of ``skills-service``** for high-availability and higher throughput
   - Route requests through a load balancer

**2: Database** - We currently only support <external-url label="PostgreSQL" url="https://www.postgresql.org/" /> for a production-grade install
   - Visit the [Database](/skills-docs/dashboard/install-guide/database.html) section to configure skills-service
   - Make sure to install <external-url label="PostgreSQL" url="https://www.postgresql.org/" /> in high-availability mode
   - <external-url label="PostgreSQL" url="https://www.postgresql.org/" />'s installation, setup and management is beyond the scope of this section, please visit [https://www.postgresql.org](https://www.postgresql.org/).

**3: WebSocket Stomp Brokers**
   - Some options include <external-url label="Amazon MQ" url="https://aws.amazon.com/amazon-mq" /> or <external-url label="RabbitMQ" url="https://www.rabbitmq.com/stomp.html" />
   - Make sure to configure high-availability setup
   - <external-url label="RabbitMQ" url="https://www.rabbitmq.com/stomp.html" />'s installation:
      - Docker based: <external-url label="RabbitMQ on DockerHub" url="https://hub.docker.com/_/rabbitmq" />
      - Native install: <external-url label="RabbitMQ.com" url="https://www.rabbitmq.com/stomp.html" />
