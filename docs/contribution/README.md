# Contribution Guidelines

SkillTree is an open source project that welcomes community involvement and contributions. 
If you are interested in improving the SkillTree platform there are many ways that you can contribute. 
Some examples include: 
- Submit a bug report
- Suggest a new feature 
- Provide feedback by commenting on feature requests/proposals
- Suggest or submit documentation improvements
- Propose a patch by submitting a pull request
- Answer questions from other users
- Share the software with other users who are interested
- Teach others to use the software

## Bugs and Feature Requests

If you believe that you have found a bug or wish to propose a new feature, 
please first search the existing issues to see if it has already been reported. 
If you are unable to find an existing issue, consider using one of the provided templates 
to create a new issue and provide as many details as you can to assist in reproducing the bug or explaining your proposed feature.

## Submission Guidelines

SkillTree will gladly consider patch submissions via a [Pull Request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/about-pull-requests) to one of its GitHub repositories. 
Please consider the following tips to ensure a smooth submission process:  
- Please make sure that your patch compiles and does not break any of the unit or integration tests!
- Please make sure to take Accessibility considerations into account for any User Interface changes. Use of aria-label and aria-hidden where appropriate, ensure that color contrast meets WCAG 2.1 standards, components should support keyboard navigation, focus should be returned to action buttons, etc. If adding a new view or component to the User Interface, make certain that automated accessibility testing is performed on that component and view (see accessibility_spec.js in the skills-service/e2e-tests project).  
- Please make sure to implement appropriate unit and especially comprehensive integration tests. We will not accept contributions without proper tests!
- Please be understanding, patient, and friendly; developers may need time to review your submissions before they can take action or respond. This does not mean your contribution is not valued. If your contribution has not received a response in a reasonable time, consider commenting with a polite inquiry for an update.
- Please limit your patches to the smallest reasonable change to achieve your intended goal. For example, do not make unnecessary indentation changes; but also don't go out of your way to make the patch so minimal it makes it difficult to read, either. Consider the reviewer's perspective.
- Please isolate multiple patches from each other. If you wish to make several independent patches, do so in separate, smaller pull requests that can be reviewed more easily.
- Please be prepared to answer questions from reviewers. They may have further questions before accepting your patch, and may even propose changes. Please accept this feedback constructively, and not as a rejection of your proposed change.

## Contribution Steps

Here are the high-level contribution steps:
1. Create a GitHub ticket to propose a feature, improvement and/or a bug fix 
   - Annotate in the ticket that you would like to submit a [Pull Request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request-from-a-fork). 
   - Monitor the ticket for comments - work with the core team to make sure that the proposed change fits well into the [SkillTree architecture](/contribution/architecture.html)
1. [Fork](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/about-forks) the repository (generally that would be skills-service)
1. Clone the forked repository
   - For example ``git clone git@github.com:<your handle>/skills-service.git``
1. Create a working branch, the branch name must follow ``ticket#<ticket number>/name`` format
```bash
cd skills-service
git checkout -b ticket#111/tree_should_grow_apples
```
5. Implement the feature and/or fix the bug
   - Please see the [Development Environment](/contribution/devEnv.html) section
   - Continuously commit to your branch (``ticket#<ticket number>/name``)
      - We suggest that all commits start with the ticket number, for example: ``#111: Adding new feature...``
   - Continuously push to your cloned repository (``<your handle>/skills-service.git``)
   - Please make sure you have comprehensive tests in place:
     - Please visit the 'Test Checklist' section under [Development Environment](/contribution/devEnv.html) for the project you are contributing to.
6. When features and tests are implemented submit a [Pull Request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request-from-a-fork)
   - Since the project was forked, branched and pushed there will be the 'Compare & pull request' button under the 'Pull Request' tab on the original GitHub project (ex. skills-service)
   - Make sure all the tests pass
7. Monitor the patch for CI and ticket for comments.
   - Check to make sure that Continuous Integration (CI) / GitHub Actions are passing, if not fix the issues and push them to your branch
   - If changes are requested then simply make those changes on your branch and push them to your forked repo; those changes will be automatically reflected in the already created Pull Request.
      
