# Programmatic Endpoints

Client side libraries take care of reporting skills and visualizing display results, however there are times when you may want to call programmatic endpoints directly. 

Some examples include:
- You may not be able to use one of the supported frameworks to reports skills
- You may need to report skill events from server side components
- You are using plain old Javascript support and you want to preview a user's level

Public Endpoints:
- [``[Service URL]``/api/projects/``[Project Id]``/skills/``[Skill Id]``](#report-skill-events-endpoint)
  - *HTTP Methods:* POST, PUT
  - *Purpose:* Report Skill Events
  - *Detailed Description:* [Click Here](#report-skill-events-endpoint)
- [``[Service URL]``/api/projects/``[Project Id]``/level](#retrieve-current-level-endpoint)
  - *HTTP Method:* GET
  - *Purpose:* Retrieve user's current overall level
  - *Detailed Description:* [Click Here](#retrieve-current-level-endpoint)

Both of these endpoints require authentication and a user id in order to perform their functions. 
When running in [PKI Mode Installation](/dashboard/install-guide.html#pki-mode), user id will be implicitly retrieved from the certificate. 

In [FORM Mode Installation](/dashboard/install-guide.html#form-mode), the OAuth2 protocol is utilized, you will need to:
1. retrieve user specific temporary client token
   - using project's ```Client ID``` and ```Client Secret``` (found in the dashboard under ```Project -> Access -> 'Trusted Client Properties'``` ).
   - this action accomplishes authentication.
   - ``user-to-proxy-for`` is provided in the request (this is the ``user id``).
   - result token encapsulates the ``user id`` so the service will know what user to perform this action for 
1. call the endpoint and set the user token on the request.

Here is a CURL based example: (please substitute your values of ``client-id``, ``client-secret``, ``dashboard-url`` and ``user-to-proxy-for``):
   
```bash
curl client-id:client-secret@dashboard-url/oauth/token -d "grant_type=client_credentials&proxy-user=user-to-proxy-for"
```

and then (please substitute your values of ``access_token_from_first_call``, ``dashboard-url``):
```bash
curl -H "Authorization: access_token_from_first_call" http://dashboard-url/api/projects/FirstProject/level
```

## Report Skill Events Endpoint

If the existing libraries do not suffice or you need to report skill events from your server components (e.g., batch, async, streaming, etc..),
then you can [POST](https://en.wikipedia.org/wiki/POST_(HTTP) / [PUT](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol#Request_methods) to the endpoint directly in order to report a single skill event:

``[Service URL]``/api/projects/``[Project Id]``/skills/``[Skill Id]``

where
- **Service URL**: Fully qualified URL of the skills service/dashboard, if you are running it locally then something like ``http://localhost:8082`` 
- **Project Id**: Project id for the reported skill
- **Skill Id**: For the reported skill

For example, to report a skill with id ``SkillA`` for a project with id ``ProjectA``, for a locally hosted service, POST to the following URL: 

```
http://localhost:8082/api/projects/ProjectA/skills/SkillA
```

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
   "skillApplied":false,
   "explanation":"This skill reached its maximum points",
   "completed":[]
}
``` 

Here is an example where the skill event did not contribute any points because it has unfulfilled dependencies: 
```json
{
   "success":true,
   "skillApplied":false,
   "explanation":"Not all dependent skills have been achieved. Missing achievements for 1 out of 1. Waiting on completion of [FirstProject:skill1Skill].",
   "completed":[]
}
```
Here is an example where the skill contributed points but did not complete anything:
```json
{
   "success":true,
   "skillApplied":true,
   "explanation":"Skill event was applied",
   "completed":[]
}
```

::: tip
You can use this result object to implement a messaging center - to report messages of encouragement to your users as they complete skills, level-up and earn badges. 
:::

## Retrieve Current Level Endpoint

An endpoint that supports retrieving the user's overall level. You may want to use this endpoint to show the user's level in the header of your application. 
Keep in mind that it will be the user's current level and you will need to check the result of the [Report Skills Events Endpoint](#report-skill-events-endpoint) in order to discover when that user leveled-up. 

::: warning
If you are using one of the supported frameworks (Vue.js, React, Angular) there is no reason to ever call this endpoint directly. 
You should be utilizing the provided reactive component that will retrieve the user's current level and automatically update the level if/when that user levels-up.  
::: 

To get the user's current level you can perform a GET request on:
``[Service URL]``/api/projects/``[Project Id]``/level

where
- **Service URL**: Fully qualified URL of the skills service/dashboard, if you are running it locally then something like ``http://localhost:8082`` 
- **Project Id**: Project id for the reported skill
