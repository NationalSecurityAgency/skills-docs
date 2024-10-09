In many cases, it is useful to define a **global** success and/or error handler function rather than defining event listeners on
each element where you include the [reporting utility](#skillsreporter-js-utility).  
For example:
- display messages congratulating users on skills completion as well as level and badge achievements 
- handle all reporting errors by sending them to a logging service  

Alongside standard, promise based, success and error handling, the SkillsReporter native javascript utility allows
you to configure global success and error handlers utilizing the ***addSuccessHandler*** and ***addErrorHandler*** methods.

``` js{9-10}
const myGlobalSuccessHandler = (result) => {
    toastr.success('skill successfully recorded!');
};

const myGlobalErrorHandler = (result) => {
    toastr.error('There was an error recording your skill');
};

SkillsConfiguration.afterConfigure().then(() => {
    SkillsReporter.addSuccessHandler(myGlobalSuccessHandler);
    SkillsReporter.addErrorHandler(myGlobalErrorHandler);
});
```

To avoid race conditions, please ensure that the configuration is loaded by adding global handlers within the
`SkillsConfiguration.afterConfigure()` callback.

Note: By default, a global success handler will only by invoked for results where a skill has been applied (``skillApplied=true``).
To change the default behavior and enable notifications even when a reported skill has not been applied, set the ``notifyIfSkillNotApplied``
configuration option on the SkillReporter utility:

``` js{9-10}
SkillsReporter.configure({
    notifyIfSkillNotApplied: true,
});
``` 

For a full description of the success response object (named ``result`` in the above example) please see [Endpoint Result Object](/skills-client/endpoints.html#endpoint-result-object).
