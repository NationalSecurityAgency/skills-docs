
| Parameter     | Explanation   | 
| ------------- | -------------|
| userId        | *(optional)* Report skill event on behalf of another user **(must be an admin of the project)**. | 
| timestamp     | *(optional)* Report skill event in the past **(must be an admin of the project)**.  | 
| notifyIfSkillNotApplied     | *(optional)* If set to ```true```, notify all client global event handlers even if the reported skill is not applied.  Defaults to ```false```.  |

Here is an example JSON payload for reporting a skill event for another user in the past:

```json
{
  "userId":"valueForUserId",
  "timestamp":1581349194294,
  "notifyIfSkillNotApplied": false
}
```

::: warning Keep In Mind
Only a project admin is allowed to supply ``userId`` and ``timestamp``.   
:::