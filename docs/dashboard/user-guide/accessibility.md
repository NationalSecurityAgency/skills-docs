# Accessibility

At SkillTree, we're dedicated to creating an accessible learning environment that empowers everyone to succeed. This guide highlights our accessibility features and best practices to ensure you can navigate and engage with our platform effortlessly. 

This guide is broken down into two section where the first section outlines accessibility features of the SkillTree
Dashboard and the second provides instructions about creating a SkillTree gamified accessible training in the platform.

## Dashboard Accessibility

This section outlines the accessibility features and best practices for the SkillTree Dashboard.

::: tip 
Please Note that this accessibility guide is for users interested in creating gamified training experiences in SkillTree Platform. 
If you are interested in earning credits in existing trainings, please check out our [Taking a Training Accessibility Guide](/training-participation/accessibility.html#accessibility) for more details.
:::

### Navigation

#### Basic Navigation
<Content path="/training-participation/common/accessibility-basic-nav.md"/>

#### Landmark Navigation

The heading structure is organized hierarchically to facilitate easy navigation using screen reader landmark navigation.

For example, on a project page, the heading levels are organized as follows:
- The project title serves as the main heading (Level 1)
- Subjects (Level 2 heading that groups all subjects)
    - Each subject is a Level 3 heading

This heading hierarchy enables efficient navigation through screen readers. For example, using JAWS Screen Reader:
1. List all headings with `INSERT+F6`
2. Navigate directly to the first subject by pressing `3` for the first Level 3 heading
3. Press `3` again to move to the next subject heading
4. Once you reach your desired subject, press `Enter` to drill down into the subject

#### Skip to Main Content

<Content path="/training-participation/common/accessibility-skip-to-content.md"/>

### Screen Reader Support

<Content path="/training-participation/common/screen-reader-support.md"/>

### Visual Adjustments

<Content path="/training-participation/common/accessibility-visual-adjustments.md"/>

### Video, Multimedia and Images
 
- Descriptive alt text is added to meaningful images
- Video captions are provided where applicable
- Video and audio transcripts are provided where applicable

### Rich Text Editor

The SkillTree description editor is a full-featured Rich Text Editor. The editor is used in the dashboard to provide
descriptions for Projects, Subjects, Skills, Badges, and also for sending emails to users and project administrators.

It supports both tab-based navigation and keyboard shortcuts for text editing:
<Content path="/dashboard/user-guide/common/rte-features-table.md"/>

## How Make Accessible Trainings

### Video and Audio Content
When creating training content, ensure accessibility for all users by:
- Providing transcripts for video files
- Including captions for audio content
- Refer to the [Audio/Video](/dashboard/user-guide/skills.html#audio-video) section for detailed upload instructions

### Image Accessibility
For meaningful images in descriptions:
1. Use the upload image feature
   - Click the `Insert Image` button
   - Or use the keyboard shortcut `CTRL+ALT+i`
2. Add descriptive alt text in the `Description` input box of the insert image popup

### Text Formatting
When pasting content into the description editor:
- Use `CTRL+SHIFT+v` or right-click and select `Paste as Plain Text`
- Avoid default paste operations from sources like Microsoft Word
- Default paste operations can:
  - Carry inaccessible styles and formatting
  - Alter background colors
  - Create inaccessible and unattractive displays in dark mode

These practices ensure your content is accessible to all users, regardless of their needs or preferences.  


<Content path="/training-participation/common/accessibility-feedback.md"/>
