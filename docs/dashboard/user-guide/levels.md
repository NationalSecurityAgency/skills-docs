# Levels

Levels are users' achievement path - the overall goal of the application usage is to achieve the highest level. 
Levels are tracked for the entire [project](/dashboard/user-guide/projects.html) as well as for each [subject](/dashboard/user-guide/subjects.html) which provides users many ways to progress forward.    

Skills dashboard supports two flexible ways to manage levels: 
  - [Percentage Based](#percentage-based-levels) *(default)*: Each level is defined as a percentage of **overall** points and the actual level's point range is calculated based on the percentage.  
  - [Point based](#point-based-levels): Level's from and to points are configured explicitly.    

::: tip
There can be only one level strategy selected and will apply to the **entire** project including project's levels and subjects' levels.
:::

Please visit ``Project -> Settings`` to configure level strategy. 

#### Best practices   
- Consider starting with [Percentage Based](#percentage-based-levels) strategy as each level's points are generated from a percentage so it's quick to get going. Once the majority of skills are created and the overall points are stable then the switch to [Point based](#point-based-levels) may be considered. 
- Initially play around with both strategies but then select one strategy and stick with it. Both strategies work very well so it's the matter of preference.
- See [Percentage Based vs. Points Based](#percentage-based-vs-points-based) section to determine which option works best for you

## Percentage Based Levels

Each level is defined as a percentage of **overall** points and the actual level's point range is calculated based on the percentage.
By default, projects and subjects are created with **5** levels:
 
| Level | Name | Percentage |  
|:------- |:----------- |:----------- |
| 1 | White Belt | 10% |
| 2 | Blue Belt | 25% | 
| 3 | Purple Belt | 45% | 
| 4 | Brown Belt | 67% | 
| 5 | Black Belt | 92% | 

This allows levels to be fluid as Skills are defined and **overall** points are shifted. 

## Point Based Levels

Using ``Project -> Settings`` levels can be changed to point-based, where each level requires an explicit number of points
to be achieved. From and to points are defined explicitly where ``from`` is exclusive and ``to`` is inclusive. 

::: tip Please Note
 Note that a project must have at least 100 total points defined before this setting can be enabled.
::: 
 
::: warning Empty Project and Subject
In the event that a project is switched to points-based levels, any **empty** subjects (subjects with no skills) will have levels
based on a theoretical points maximum of 1000 e.g., "White Belt" at 100-250 points, "Blue Belt" at 250-450 points, "Purple Belt" at 450-670, etc. These values can 
be easily edited after the configuration change if desired.
:::

## Percentage Based vs. Points Based
 
So which strategy is right for your application? As always the answer is... depends :)!

Percentage based approach is the easiest to manage - the points are always calculated (and re-calculated) based on the defined percentages. 
As skills are added, and therefore the overall amount of points goes up, level's points are re-calculated. 

But what about users that already achieved a particular level based on the previously defined points (as calculated based on the percentages)? 
The system's overall approach is to never take away achievements therefore that achieved level will persist. 
User will simply need to earn those missing points in addition to the next level's points in order to progress to the next level.

::: tip Please note
Our overall methodology is to **never** take away achievements
::: 

If you don't like the idea that point requirements to achieve a particular level will vary with time (as skill are added) then points based management strategy is for you. 
Once you switch to [Point based](#point-based-levels) strategy each level will have an explicit *from* and *to* points defined. 

As new skill are added the extra points will *not* affect existing levels and without further actions will *not* influence what it takes to achieve those levels. 
You really have two options to address this issue:
 1. change *from* and *to* points of each level *OR* 
 1. create additional levels that encapsulate the newly added points.

Approach #1 has the same issues as the percentage based strategy. Approach #2 requires careful planning so that when new points are added new level is created to accommodate those points.    
