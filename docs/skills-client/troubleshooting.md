# Common Troubleshooting

## Skills Client Display Fails To Load

If you find that the Client Display fails to load, it is important to check your javascript
console in your browser's development tools and identify any javascript errors. A common issue
that may occur is simply a typo in your configuration options which should clearly be 
displayed either by a 404 (if a bad **serviceUrl** or **authenticatorUrl** is passed) or an invalid
**projectId**.

## I receive 403 Access Denied errors

The most likely cause is a mis-configured **authenticatorUrl**
