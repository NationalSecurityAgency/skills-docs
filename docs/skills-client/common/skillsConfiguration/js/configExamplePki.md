 ``` js
<head>
...
    <script type="module">

    import { SkillsConfiguration } from './assets/js/@skills/skills-client-js/dist/skills-client-js.esm.min.js'

    SkillsClient.SkillsConfiguration.configure({
        serviceUrl: 'http://localhost:8080',
        projectId: 'movies',
        authenticator: 'pki',
    });
...    
</head>
```