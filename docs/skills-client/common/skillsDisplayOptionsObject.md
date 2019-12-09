``Options`` object optionally controls various behaviors of skills display with the following properties:

| Prop          | Type          | Default      | Explanation  |
| ------------- | ------------- |:-------------| -----------  |
| disableAutoScroll     | boolean | false          | As a convenience, by default, the Skills Client Display will auto scroll to the top whenever the user navigates to a new page (route) within the display. Disable auto scroll to top on route change. | 
| autoScrollStrategy    | string  | 'top-of-frame' | On route change, either scroll to the top of the entire document, or the top of skills-display ('top-of-page' or 'top-of-frame') |
| isSummaryOnly         | boolean | false          | When enabled, display renders overall summary only. This mode is not interactive, it provides a user's progress preview that can be displayed on a landing page. |   


Here is an example of an options object: 
``` json
{ 
    disableAutoScroll: false,
    autoScrollStrategy: 'top-of-page',
}
```
