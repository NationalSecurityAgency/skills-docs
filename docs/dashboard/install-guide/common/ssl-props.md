Configure ``https``:
```properties
server.port=8443
server.ssl.enabled=true
server.ssl.key-store-type=PKCS12
server.ssl.key-store=/path/to/keystore.p12
server.ssl.key-store-password=

# Force TLSv1.2 until https://bugs.openjdk.java.net/browse/JDK-8241248 is fixed
server.ssl.enabled-protocols=TLSv1.2
```   
