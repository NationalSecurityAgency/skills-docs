``Options`` object optionally controls various behaviors of skills display with the following properties:

| Prop               | Type    | Default        | Explanation                                                                                                                                                                                                                                                                                                                                                                                   |
|--------------------|---------|:---------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| disableAutoScroll  | boolean | false          | As a convenience, by default, the Skills Client Display will auto scroll to the top whenever the user navigates to a new page (route) within the display. Disable auto scroll to top on route change.                                                                                                                                                                                         | 
| autoScrollStrategy | string  | 'top-of-frame' | On route change, either scroll to the top of the entire document, or the top of skills-display ('top-of-page','top-of-frame', or 'top-offset' - 'top offset' must be used in conjunction with the 'scrollTopOffset' option)                                                                                                                                                                   |
| scrollTopOffset    | number  | 0              | Used in conjunction with the autoScrollStrategy 'top-offset', scrollTopOffset will be subtracted from the display's element offset as the scroll to target (relevant when fixed/statically positioned elements preceed the Skills Display container).                                                                                                                                         
| isSummaryOnly      | boolean | false          | When enabled, display renders overall summary only. This mode is not interactive, it provides a user's progress preview that can be displayed on a landing page.                                                                                                                                                                                                                              |   
| internalBackButton | boolean | false          | When enabled, a back button is displayed to the left of the page title, allowing users to navigate back in the browser history within the Skills Client Display. Generally, it is not required to enable this button, as Skills Display updates the URL and utilizes browser history for navigating back.                                                                                     |
| updateHistory      | boolean | true           | When `updateHistory` is disabled, the native browser history will not be updated when navigating within the Skills Client Display. It is generally recommended to leave this property enabled unless navigating within the Skills Client Display interferes with the hosting application. If disabled, it is recommended to also enable `internalBackButton` to allow users to navigate back. |


Here is an example of an options object: 
``` json
{ 
    disableAutoScroll: false,
    autoScrollStrategy: 'top-of-page',
}
```
