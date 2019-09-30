Theme object allows to customize color palette of Skills Display to match your application. 

Theme object supports the following properties:

| Prop          | Explanation  |
| ------------- | -----------  |
| backgroundColor | | 
| pageTitleTextColor | | 
| textSecondaryColor | | 
| textPrimaryColor | | 
| stars.unearnedColor | | 
| stars.earnedColor | | 
| progressIndicators.beforeTodayColor | | 
| progressIndicators.earnedTodayColor | | 
| progressIndicators.completeColor | | 
| progressIndicators. incompleteColor | | 
| charts.axisLabelColor | | 
| tiles.backgroundColor | | 
| tiles.watermarkIconColor | | 
| graphLegendBorderColor | | 

Example of a 'Dark Blue' theme object

``` json
    {
      backgroundColor: '#626d7d',
      pageTitleTextColor: 'white',
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
      graphLegendBorderColor: '1px solid grey',
    }
``` 
