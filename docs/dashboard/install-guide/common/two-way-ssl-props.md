Configure ``https`` and 2-way SSL:
```properties
server.port=8443
server.ssl.enabled=true
server.ssl.client-auth=want
	
# Force TLSv1.2 until https://bugs.openjdk.java.net/browse/JDK-8241248 is fixed
server.ssl.enabled-protocols=TLSv1.2

# keystore
server.ssl.key-store=/certs/keystore.p12
server.ssl.key-store-password=
server.ssl.keyStoreType=PKCS12

# truststore
server.ssl.trust-store=/certs/truststore.p12
server.ssl.trust-store-password=
server.ssl.trustStoreType=PKCS12
```
