The SkillReporter object allows for overriding the default behavior if required via the `configure()` method.

The `configure()` method supports the following parameters:

| Prop          | Explanation  |
| ------------- | -----------  |
| notifyIfSkillNotApplied | if set to true, invoke global success handler(s) even when a reported skill has not been applied. See <a href="#global-event-handling">Global Event Handling</a>. |
| retryInterval | If an error occurs when reporting a skill, the SkillsReporter will attempt to retry reporting the skill at a later time.  This property allows you to set the time in milliseconds for how often a skill that failed to be reported will be retried.  default is ``60000`` (every 60 seconds) |
| maxRetryQueueSize | The maximum number of failed reported skill attempts that will be queued and retried.  default is ``1000`` |
| maxRetryAttempts | The maximum number of retry attempts for a given skillId before the SkillsReporter will no longer retry to report that skillId.  default is ``1400`` |


Below is an example of how to configure the SkillsReporter to only retry up to 100 failed reported skill attempts, and to retry every 5 minutes.
``` js{9-10}
SkillsReporter.configure({
    retryInterval: 300000,
    maxRetryQueueSize: 100,
});
``` 