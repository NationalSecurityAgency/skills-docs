# Programmatic Endpoints

Client side libraries take care of reporting skills and visualizing display results, however there are times when you may want to call programmatic endpoints directly. 

Some examples include:
- You may not be able to use one of the supported frameworks to reports skills
- You may need to report skill events from server side components

::: warning Please Note
If you are looking for endpoints to retrieve progress and ranking data, that is not supported 
by the SkillTree platform. In liu of those endpoints and in order to support rapid integration 
SkillTree has taken an innovative approach of supplying fully navigable **Ranking and Visualization** views.
Please take a look at the [Integration Guide Overview](/skills-client/#overview) to learn more.
:::

Public Endpoints (only 1 so far):
- [``[Service URL]``/api/projects/``[Project Id]``/skills/``[Skill Id]``](#report-skill-event-endpoint)
  - *HTTP Methods:* POST, PUT
  - *Purpose:* Report Skill Events
  - *Detailed Description:* [Click Here](#report-skill-event-endpoint)

This endpoint requires authentication and a user id in order to perform its functions. 
Please select your installation type below for specific instructions:

<form-and-pki 
    pki-path="/skills-client/auth/endpointsAuthPKI.md"
    form-path="/skills-client/auth/endpointsFormPKI.md"/>

## Report Skill Event Endpoint

If the existing libraries do not suffice or you need to report skill events from your server components (e.g., batch, async, streaming, etc..),
then you can [POST](https://en.wikipedia.org/wiki/POST_(HTTP) / [PUT](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol#Request_methods) to the endpoint directly in order to report a single skill event:

``[Service URL]``/api/projects/``[Project Id]``/skills/``[Skill Id]``

where
- **Service URL**: Fully qualified URL of the skills service/dashboard, <conditional visibilityFlag="skillTreeServiceUrl"> ( <service-url /> )</conditional><conditional visibilityFlag="skillTreeServiceUrl" :visibility-value="false">if you are running it locally then something like ``http://localhost:8082``</conditional> 
- **Project Id**: Project id for the reported skill
- **Skill Id**: For the reported skill

For example, to report a skill with id ``SkillA`` for a project with id ``ProjectA``, for a locally hosted service, POST to the following URL: 

```
http://localhost:8080/api/projects/ProjectA/skills/SkillA
```

The Report Skill Endpoint also accepts **optional** JSON payload parameters. 

<form-and-pki
pki-path="/skills-client/auth/endpointParamsPKI.md"
form-path="/skills-client/auth/endpointParamsForm.md"/>

::: warning Keep In Mind
Only a project admin is allowed to supply ``userId`` and ``timestamp``.   
:::

### Endpoint Result Object 

Skill events are applied immediately and atomically based on the currently configured ruleset (via dashboard). 
The endpoint returns an object that depicts how this event affected the user's progress. 

Event result object provides:
- status - whether skill was applied or rejected
- if skill was rejected, reason for that rejection
- achievements completed by this event including 
  - completion of a skill
  - leveling-up for a project or a subject
  - achievement of a badge or a gem

Here is an example of an event that (1) was successfully applied, (2) completed/achieved that skill, and (3) achieved level 2 for subject named *Cool Subject* 

```json
{
   "success":true,
   "projectId":"sampleProject",
   "skillId":"ImportantSkill",
   "name":"Important Skill",
   "pointsEarned": 15,
   "skillApplied":true,
   "explanation":"Skill event was applied",
   "completed":[{
      "type":"Subject",
      "level":2,
      "id":"CoolSubjectId",
      "name":"Cool Subject"
    }, {
      "type":"Skill",
      "level":null,
      "id":"ImportantSkill",
      "name":"This is a very important skill"
    }]
}
```

Here is a reference table for result fields and their meaning:

| Field | Type | Explanation | 
| :------- | :----------- | :----------- | 
| success | *boolean* | ``true`` if there were no issues reporting the skill, ``false`` if there was a server side failure - this could happen if the service is down or you stumbled on a bug |
| projectId | *string* | the projectId that the report skill belongs to |
| skillId | *string* | the skillId of the report skill |
| name | *string* | the display name of the report skill |
| pointsEarned | *number* | number of points earned by this request |
| skillApplied | *boolean* | ``true`` if this event contributed points to the skill; ``false`` if the event didn't contribute points - ``explanation`` field will tell you why (see examples below) |
| explanation | *string* | human readable explanation about how this skill event was handled; this field will explain why an event wasn't able to contribute points (see examples below) |
| completed | *list* | metadata of a completed item if this event caused user to level-up, complete a skill or earn a badge/gem (just to mention a few) | 
| completed.type | *string* | type of the completed item, will be one of these well-known values: ``Overall``, ``Subject``, ``Skill``, ``Badge``. ``Overall`` indicates that the user leveled-up for the entire project, ``Subject`` indicates that the user leveled-up for a specific subject, ``Skill`` indicates that this skill is fully accomplished, ``Badge`` indicates that a badge/gem was earned. |
| completed.level | *int* | indicates which level the user achieved via this skill event; only applicable to ``Overall`` and ``Subject`` types |
| completed.id | *string* | id of the completed item, in the case of ``Skill`` type this will be skill id, in the case of ``Subject`` type it will be subject id and so on... |
| completed.name | *string* | human friendly name of the event and can be used to display to the end user | 
 
Here is an example where the skill event did not contribute any points because it's already fully accomplished: 
```json
{
   "success":true,
   "projectId":"sampleProject",
   "skillId":"ImportantSkill",
   "name":"Important Skill",
   "pointsEarned": 0,
   "skillApplied":false,
   "explanation":"This skill reached its maximum points",
   "completed":[]
}
``` 

Here is an example where the skill event did not contribute any points because it has unfulfilled dependencies: 
```json
{
   "success":true,
   "projectId":"sampleProject",
   "skillId":"ImportantSkill",
   "name":"Important Skill",
   "pointsEarned": 0,
   "skillApplied":false,
   "explanation":"Not all dependent skills have been achieved. Missing achievements for 1 out of 1. Waiting on completion of [FirstProject:skill1Skill].",
   "completed":[]
}
```

Below is an example where the skill contributed points but did not complete anything: 
```json
{
   "success":true,
   "projectId":"sampleProject",
   "skillId":"ImportantSkill",
   "name":"Important Skill",
   "pointsEarned": 15,
   "skillApplied":true,
   "explanation":"Skill event was applied",
   "completed":[]
}
```
Above skill has `Occurrences to Completion > 1` and additional skill events must be reported to fulfill the required occurrences. 
Once all of the required occurrences are reported then the skill completion will appear in the *completed* field. 

::: tip
You can use this result object to implement a messaging center - to report messages of encouragement to your users as they complete skills, level-up and earn badges. 
:::

## Java Examples

<form-and-pki
pki-path="/skills-client/auth/reportSkillJavaExamplePKI.md"
form-path="/skills-client/auth/reportSkillJavaExampleForm.md"/>


