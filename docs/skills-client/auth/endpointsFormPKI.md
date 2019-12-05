In [Pass Auth Installation](/dashboard/install-guide/installModes.html#pass-auth-mode), the OAuth2 protocol is utilized, you will need to:
1. retrieve user specific temporary client token
   - using project's ```Client ID``` and ```Client Secret``` (found in the dashboard under ```Project -> Access -> 'Trusted Client Properties'``` ).
   - this action accomplishes authorization.
   - ``user-to-proxy-for`` is provided in the request (this is the ``user id``).
   - result token encapsulates the ``user id`` so the service will know what user to perform this action for 
1. call the endpoint and set the user token on the request.

Here is a CURL based example: (please substitute your values of ``client-id``, ``client-secret``, ``dashboard-url`` and ``user-to-proxy-for``):
   
```bash
curl client-id:client-secret@dashboard-url/oauth/token -d "grant_type=client_credentials&proxy_user=user-to-proxy-for"
```

and then (please substitute your values of ``access_token_from_first_call``, ``dashboard-url``):
```bash
curl -H "Authorization: Bearer access_token_from_first_call" http://dashboard-url/api/projects/FirstProject/level
```
