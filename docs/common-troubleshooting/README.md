# Common Troubleshooting

## Skills Client Display Fails To Load

If you find that the Client Display fails to load it is important to check your javascript
console in your browsers development tools to look for any javascript errors. A common issue
that may occur is simply a mistyping in your configuration options which should clearly be 
displayed either by a 404 (if a bad **serviceUrl** or **authenticatorUrl** is passed) or an invalid
**projectId**.

## I am recieved 403 Access Denied errors

The most likely protential cause for this would be a missconfigured **authenticatorUrl**
