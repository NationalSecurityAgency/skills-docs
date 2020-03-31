# Authorization

Authorization depends on the [Installation Mode](/dashboard/install-guide/installModes.html#password-auth-mode), please make sure to select 
the tab below based on your specific installation mode. 
- In [Password Auth Mode](/dashboard/install-guide/installModes.html#passwordauth-mode): Production based installation will require you to implement an authorization endpoint. The goal of the endpoint is to authorize a specific user so that the skills display and skills reporting can be properly secured.
- In [PKI Mode](/dashboard/install-guide/installModes.html#pki-auth-mode): User's id is derived implicitly from the certificate, an **authorization point is not required**  

<form-and-pki 
    pki-path="/skills-client/auth/authPKI.html"
    form-path="/skills-client/auth/authForm.html"/>

