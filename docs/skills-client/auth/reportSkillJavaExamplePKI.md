When running in PKI Auth Installation, the user id will be implicitly retrieved from the client certificate.

Here is a simple example of reporting a skill event:

```java
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.util.EntityUtils;

public class ReportPKIExample {

    public static void main(String[] args) throws Exception {
        ReportPKIExample reportJavaExample = new ReportPKIExample();
        String res = reportJavaExample.reportSkill("<host>", "<project id>", "<skill id>");
        System.out.println(res);
    }

    public String reportSkill(String host, String projectId, String skillId) throws Exception {
        String reportUrl = "https://"+ host + "/api/projects/" + projectId + "/skills/" + skillId;

        HttpPost post = new HttpPost(reportUrl);
        try (CloseableHttpClient httpClient = HttpClients.createSystem();
             CloseableHttpResponse response = httpClient.execute(post)) {
            return EntityUtils.toString(response.getEntity());
        }
    }
}
```

This example **requires** the following JVM parameters:

```properties
-Djavax.net.ssl.keyStore=/certs/keyStore.p12
-Djavax.net.ssl.keyStorePassword=password
-Djavax.net.ssl.keyStoreType=PKCS12
-Djavax.net.ssl.trustStore=/certs/truststore.jks
-Djavax.net.ssl.trustStorePassword=password
-Djavax.net.ssl.trustStoreType=JKS
```

This example is using [Apache HttpClient library](https://hc.apache.org/httpcomponents-client-5.0.x/index.html) sou you will need to add it to your classpath. 
For example, in Maven it would look something like this:

```xml
<dependency>
    <groupId>org.apache.httpcomponents</groupId>
    <artifactId>httpclient</artifactId>
    <version>${version}</version>
</dependency>
```

