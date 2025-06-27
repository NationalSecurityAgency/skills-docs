The theme object supports the customization of the color palette of the Skills Display to match your application. 
For example, you can easily style Skills Display to look something like this: 

![User Skills Image](../../screenshots/progress-and-ranking/client-display-themed-proj.png)

The theme object supports the following properties:

| Prop                                   | Explanation                                                                                                                                                                                                                              |
|----------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| backgroundColor                        | page background color                                                                                                                                                                                                                    |
| disableBreadcrumb                      | when set to ``true``, the breadcrumb bar in the title section will not be displayed.  default is ``false``                                                                                                                               |
| breadcrumb.linkColor                   | breadcrumbs's parent/ancestor link color                                                                                                                                                                                                 |
| breadcrumb.linkHoverColor              | breadcrumbs's parent/ancestor link hover color                                                                                                                                                                                           |
| breadcrumb.currentPageColor            | breadcrumbs's current page color                                                                                                                                                                                                         |
| breadcrumb.align                       | breadcrumbs's alignment for the title card; valid values are ``start``, ``center``, ``end`` (uses css [justify-content](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content))                                               |
| disableSearchButton                    | when set to ``true``, the search button in the title section will not be displayed.  default is ``false``                                                                                                                                |
| searchButton.padding                   | optionally customize the search button's padding                                                                                                                                                                                         |
| searchButton.fontSize                  | optionally customize the search button's icon size                                                                                                                                                                                       |
| searchButton.lineHeight                | optionally customize the search button's height                                                                                                                                                                                          |
| disableSkillTreeBrand                  | when set to ``true``, the SkillTree brand logo in the title section will not be displayed.  default is ``false``                                                                                                                         |
| skillTreeBrandColor                    | text color for the SkillTree brand logo; if not supplied the default is ``pageTitle.textColor``                                                                                                                                          |  
| maxWidth                               | maximum width of the component, can use any units supported by [max-width CSS property](https://developer.mozilla.org/en-US/docs/Web/CSS/max-width) such as ``%``, ``em`` and ``px`` (ex. ``100%``); default is ``1140px``               |
| landingPageTitle                       | title of the landing page, default is ``User Skills``                                                                                                                                                                                    |
| pageTitle.fontSize                     | font size for the title, can use any units supported by [font-size CSS property](https://developer.mozilla.org/en-US/docs/Web/CSS/font-size) such as ``%``, ``em`` and ``px`` (ex. ``1.2em``)                                            |
| pageTitle.textColor                    | text color for the title                                                                                                                                                                                                                 |
| pageTitle.borderColor                  | border color for the title card                                                                                                                                                                                                          |
| pageTitle.borderStyle                  | border style for the title card, for example: ``borderStyle: 'none none solid none'``                                                                                                                                                    |
| pageTitle.backgroundColor              | background color for the title card                                                                                                                                                                                                      |
| pageTitle.textAlign                    | title alignment, supported values are ``left``, ``right`` and ``center``                                                                                                                                                                 |
| pageTitle.padding                      | padding for the title card, for example: ``padding: '1.6rem 1rem 1.1rem 1rem'``                                                                                                                                                          |  
| pageTitle.margin                       | margin for the title card, for example: ``margin: '-10px -15px 1.6rem -15px'``                                                                                                                                                           |    
| circleProgressInteriorTextColor        | 'x out of yyyy' text color inside circle progress widgets                                                                                                                                                                                |
| progressIndicators.beforeTodayColor    | progress bar color for points earned before today                                                                                                                                                                                        | 
| progressIndicators.earnedTodayColor    | progress bar color for points earned today                                                                                                                                                                                               | 
| progressIndicators.completeColor       | progress bar color for 100% completion                                                                                                                                                                                                   | 
| progressIndicators.incompleteColor     | progress bar color for points not yet earned                                                                                                                                                                                             | 
| textSecondaryColor                     | secondary text, for example 'Need Help?' and dependent skill text                                                                                                                                                                        | 
| textPrimaryColor                       | chart titles, progress titles, tile titles, descriptions, rank tile text                                                                                                                                                                 | 
| stars.unearnedColor                    | color of unearned level stars                                                                                                                                                                                                            | 
| stars.earnedColor                      | color of earned level stars                                                                                                                                                                                                              | 
| charts.axisLabelColor                  | color of scales/axis text on charts                                                                                                                                                                                                      |
| charts.labelBackgroundColor            | chart label background color; applies to charts like ``Point History`` and ``Level Breakdown``; please note that labels visibility depends on the presence of points and achievements                                                    | 
| charts.labelBorderColor                | chart label border color; applies to charts like ``Point History`` and ``Level Breakdown``; please note that labels visibility depends on the presence of points and achievements                                                        |
| charts.labelForegroundColor            | chart label text/foreground color; applies to charts like ``Point History`` and ``Level Breakdown``; please note that labels visibility depends on the presence of points and achievements                                               |
| charts.pointHistory.lineColor          | ``Point History`` chart line color                                                                                                                                                                                                       |
| charts.pointHistory.gradientStartColor | ``Point History`` chart start gradient color (on the top)                                                                                                                                                                                |
| charts.pointHistory.gradientStopColor  | ``Point History`` chart start stop/end color (on the bottom)                                                                                                                                                                             |
| tiles.backgroundColor                  | tile background color, such as subject tiles                                                                                                                                                                                             |
| tiles.borderColor                      | tile border color                                                                                                                                                                                                                        | 
| tiles.watermarkIconColor               | My Rank, Rank overview, My Badges watermark icon color                                                                                                                                                                                   |
| infoCards.backgroundColor              | info card background color; info cards only appear within tiles for example on the skill overview page                                                                                                                                   |
| infoCards.foregroundColor              | info card foreground/text color; info cards only appear within tiles for example on the skill overview page                                                                                                                              |
| infoCards.borderColor                  | info card border color; info cards only appear within tiles for example on the skill overview page                                                                                                                                       |
| infoCards.iconColors                   | info card icon colors; must provide a list of colors (up to 4), for example ``iconColors: ['blue', 'green']``                                                                                                                            |
| buttons.backgroundColor                | button background color                                                                                                                                                                                                                  | 
| buttons.foregroundColor                | botton foreground/text color                                                                                                                                                                                                             |
| buttons.disabledColor                  | button disabled color including text and border                                                                                                                                                                                          |
| buttons.borderColor                    | button border color                                                                                                                                                                                                                      |
| badges.backgroundColor                 | badge background color; badges include ``Self Reportable`` tag and counts on the skill and badge filters                                                                                                                                 |
| badges.foregroundColor                 | badge foreground/text color; badges include ``Self Reportable`` tag and counts on the skill and badge filters                                                                                                                            |
| ~~graphLegendBorderColor~~             | removed in skills-service:2.6 release; please use prerequisites.* properties instead                                                                                                                                                     |
| prerequisites.skillColor               | Color of the skill icon for the graph's skill nodes, the legend and the table. Found on the prerequisite graph of the Skill page when the [Learning Path](/dashboard/user-guide/learning-path.html) is configured                        |
| prerequisites.badgeColor               | Color of the badge icon for the graph's badge nodes, the legend and the table. Found on the prerequisite graph of the Skill page when the [Learning Path](/dashboard/user-guide/learning-path.html) is configured                        |
| prerequisites.thisSkillColor           | Color of the skill icon for the graph's `This Skill` node. Found on the prerequisite graph of the Skill page when the [Learning Path](/dashboard/user-guide/learning-path.html) is configured                                            |
| prerequisites.achievedColor            | Color of the icon when a prerequisite is achieved for the graph's nodes, the legend and the table. Found on the prerequisite graph of the Skill page when the [Learning Path](/dashboard/user-guide/learning-path.html) is configured    |
| prerequisites.navButtonsColor          | Color for graph's navigation buttons (ex. zoom) rendered on the bottom of the graph.  Found on the prerequisite graph of the Skill page when the [Learning Path](/dashboard/user-guide/learning-path.html) is configured                 |
| subjectTileIconColor                   | color of subject tile icons                                                                                                                                                                                                              |
| trophyIconColor                        | color of the My Level trophy                                                                                                                                                                                                             |
| backButton.padding                     | optionally customize back button's padding (only applicable if the ``internalBackButton`` is enabled via the ``options`` object)                                                                                                         |
| backButton.fontSize                    | optionally customize back button's icon size (only applicable if the ``internalBackButton`` is enabled via the ``options`` object)                                                                                                       |
| backButton.lineHeight                  | optionally customize back button's height (only applicable if the ``internalBackButton`` is enabled via the ``options`` object)                                                                                                          | 

Example of a 'Dark Blue' theme object

``` javascript
    {
      maxWidth: '100%',
      backgroundColor: '#626d7d',
      landingPageTitle: 'Themed User Skills',
      pageTitle: {
        textColor: 'white',
        fontSize: '1.5rem',
      },
      textSecondaryColor: 'white',
      textPrimaryColor: 'white',
      stars: {
        unearnedColor: '#787886',
        earnedColor: 'gold',
      },
      progressIndicators: {
        beforeTodayColor: '#3e4d44',
        earnedTodayColor: '#667da4',
        completeColor: '#59ad52',
        incompleteColor: '#cdcdcd',
      },
      charts: {
        axisLabelColor: 'white',
      },
      tiles: {
        backgroundColor:'#152E4d',
        watermarkIconColor: '#a6c5f7',
      },
      buttons: {
        backgroundColor: '#152E4d',
        foregroundColor: '#59ad52',
      },
      prerequisites: {
        achievedColor: '#6df28b',
        skillColor: '#ffe297',
        badgeColor: '#ceb6f4',
        thisSkillColor: '#7fbbfa',
        navButtonsColor: '#cce7f3',
      },
    }
``` 
