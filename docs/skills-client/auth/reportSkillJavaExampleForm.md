Reporting skill event programmatically is two-fold:
1. Retrieve token for a specific user id
    - utilize ``Client Id`` and ``Client Secret`` found under ``Trusted Client Properties`` on project's ``Access`` page
1. Using the token report the event for a skill id
    - if the token retrieved in step 1 has Admin privileges then the skill can be reported for any user, otherwise only for the user represented by the token

Here is an example of retrieving a token for a given user and reporting one skill for that user:
```java
public class ReportExample {

    public static void main(String[] args) throws Exception {
        // "Client Id" and "Client Secret" found under 
        // "Trusted Client Properties" on project's "Access" page
        ReportExample reportJavaExample = 
                new ReportExample(
                        "<PROJECT_ID>", 
                        "<SECRET>", 
                        "<PROTOCOL>", 
                        "<HOST>");
        String token = reportJavaExample.getToken("<USER_ID>");
        String res = reportJavaExample.reportSkill(token, "<SKILL_ID>");
        System.out.println(res);
    }


    private final String projectId;
    private final String secret;
    private final String protocol;
    private final String host;

    public ReportExample(String projectId, 
                         String secret, 
                         String protocol, 
                         String host) {
        this.projectId = projectId;
        this.secret = secret;
        this.protocol = protocol;
        this.host = host;
    }

    public String getToken(String userID) throws Exception {
        String authUrl = protocol + "://"+ projectId + 
                ":" + secret + "@" + host + "/oauth/token";

        List<NameValuePair> authParameters = new ArrayList<>();
        authParameters.add(
                new BasicNameValuePair("grant_type", "client_credentials"));
        authParameters.add(
                new BasicNameValuePair("proxy_user", userID));
        HttpPost authPost = new HttpPost(authUrl);
        authPost.setEntity(new UrlEncodedFormEntity(authParameters));

        String token = "";
        try (CloseableHttpClient httpClient = HttpClients.createDefault();
             CloseableHttpResponse response = httpClient.execute(authPost)) {
            String tokenInfo = EntityUtils.toString(response.getEntity());
            JSONObject tokenJson = new JSONObject(tokenInfo);
            token = (String) tokenJson.get("access_token");
        }

        return token;
    }

    public String reportSkill(String token, String skillId) 
            throws Exception {
        String reportUrl = protocol + "://"+ 
                host + "/api/projects/" + projectId + "/skills/" + skillId;

        HttpPost post = new HttpPost(reportUrl);
        post.setHeader("Authorization", "Bearer " + token);

        try (CloseableHttpClient httpClient = HttpClients.createDefault();
             CloseableHttpResponse response = httpClient.execute(post)) {
            return EntityUtils.toString(response.getEntity());
        }
    }
}
```

Here is an example of retrieving a token for a user with project admin privileges
and then reporting a skill for a **different** user:

```java
public class ReportForAnotherUserExample {

    public static void main(String[] args) throws Exception {
        // "Client Id" and "Client Secret" found under 
        // "Trusted Client Properties" on project's "Access" page
        ReportForAnotherUserExample reportJavaExample = 
                new ReportForAnotherUserExample(
                        "<PROJECT_ID>", 
                        "<SECRET>", 
                        "<PROTOCOL>", 
                        "<HOST>");
        // must be an admin of <project_id>
        String token = reportJavaExample.getToken("<USER_ID>");
        String res = reportJavaExample.reportSkillForAnother(
                token, 
                "<ANOTHER_USER_id>", 
                "<SKILL_ID>", 
                new Date());
        System.out.println(res);
    }
    
    private final String projectId;
    private final String secret;
    private final String protocol;
    private final String host;

    public ReportForAnotherUserExample(
            String projectId, String secret, 
            String protocol, String host) {
        this.projectId = projectId;
        this.secret = secret;
        this.protocol = protocol;
        this.host = host;
    }

    public String getToken(String userID) throws Exception {
        String authUrl = protocol + "://"+ 
                projectId + ":" + secret + "@" + host + "/oauth/token";

        // First setup token
        List<NameValuePair> authParameters = new ArrayList<>();
        authParameters.add(
                new BasicNameValuePair("grant_type", "client_credentials"));
        authParameters.add(
                new BasicNameValuePair("proxy_user", userID));
        HttpPost authPost = new HttpPost(authUrl);
        authPost.setEntity(new UrlEncodedFormEntity(authParameters));

        String token = "";
        try (CloseableHttpClient httpClient = HttpClients.createDefault();
             CloseableHttpResponse response = httpClient.execute(authPost)) {
            String tokenInfo = EntityUtils.toString(response.getEntity());
            JSONObject tokenJson = new JSONObject(tokenInfo);
            token = (String) tokenJson.get("access_token");
        }

        return token;
    }

    public String reportSkillForAnother(String token, 
                                        String pointsForThisUser, 
                                        String skillId, 
                                        Date performedOn) throws Exception {
        String reportUrl = protocol + "://" + 
                host + "/api/projects/" + projectId + "/skills/" + skillId;

        HttpPost post = new HttpPost(reportUrl);
        post.setHeader("Authorization", "Bearer " + token);

        // Add request parameters
        String jsonString = "{\"userId\":\"" + 
                pointsForThisUser + "\", \"timestamp\":\"" + 
                performedOn.getTime() + "\"}";
        post.setEntity(
                new StringEntity(jsonString, ContentType.APPLICATION_JSON));

        try (CloseableHttpClient httpClient = HttpClients.createDefault();
             CloseableHttpResponse response = httpClient.execute(post)) {
            return EntityUtils.toString(response.getEntity());
        }
    }
}
```

This example is using [Apache HttpClient library](https://hc.apache.org/httpcomponents-client-5.0.x/index.html) so you will need to add it to your classpath. 
For example, in Maven it would look something like this:

```xml
<dependency>
    <groupId>org.apache.httpcomponents</groupId>
    <artifactId>httpclient</artifactId>
    <version>${version}</version>
</dependency>
```
