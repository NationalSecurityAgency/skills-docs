# Contribution Guidelines

SkillTree is an open-source project that welcomes community involvement and contributions.
If you are interested in improving the SkillTree platform, there are many ways you can contribute.
Some examples include:
- Submitting a bug report
- Suggesting a new feature
- Providing feedback by commenting on feature requests or proposals
- Suggesting or submitting documentation improvements
- Proposing a patch by submitting a pull request
- Answering questions from other users
- Sharing the software with other interested users
- Teaching others how to use the software

## Bugs and Feature Requests

If you believe you have found a bug or wish to propose a new feature,
please first search the existing issues to see if it has already been reported.
If you cannot find an existing issue, please use one of the provided templates
to create a new issue. Provide as many details as possible to help us reproduce the bug or understand your proposed feature.

## Submission Guidelines

SkillTree gladly considers patch submissions via a [Pull Request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/about-pull-requests) to one of its GitHub repositories.
Please consider the following tips to ensure a smooth submission process:
- **Ensure your patch compiles:** Make sure it does not break any unit or integration tests.
- **Provide comprehensive tests:** Contributions require thorough test coverage. Prioritize black-box integration tests (service and Cypress); use unit tests only when integration testing is not possible.
- **Prioritize accessibility:** Take accessibility considerations into account for any user interface changes. Use `aria-label` and `aria-hidden` where appropriate, ensure color contrast meets WCAG 2.1 standards, make sure components support keyboard navigation, and ensure focus is returned to action buttons. If you add a new view or component to the UI, ensure automated accessibility testing is performed on it (see `accessibility_spec.js` in the `skills-service/e2e-tests` project).
- **Be patient and friendly:** Reviewers may need time to evaluate your submissions before taking action or responding. This does not mean your contribution is not valued. If your submission has not received a response within a reasonable timeframe, feel free to comment with a polite inquiry for an update.
- **Keep patches focused:** Limit your patches to the smallest reasonable change required to achieve your goal. For example, avoid unnecessary indentation changes, but do not make the patch so minimal that it becomes difficult to read. Consider the reviewer's perspective.
- **Isolate independent changes:** If you wish to make several independent patches, do so across separate, smaller pull requests that can be reviewed more easily.
- **Be prepared for feedback:** Reviewers may have questions or propose changes before accepting your patch. Please accept this feedback constructively, rather than as a rejection of your proposed change.

## Contribution Steps

Here are the high-level contribution steps:
1. Create a GitHub ticket to propose a feature, improvement, or bug fix.
   - Note in the ticket that you would like to submit a [Pull Request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request-from-a-fork).
   - Monitor the ticket for comments and work with the core team to ensure the proposed change fits well into the [SkillTree architecture](/contribution/architecture.html).
1. [Fork](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/about-forks) the repository (generally `skills-service`).
1. Clone your forked repository.
   - For example: ``git clone git@github.com:<your handle>/skills-service.git``
1. Create a working branch. The branch name must follow the ``ticket#<ticket number>/name`` format:
```bash
cd skills-service
git checkout -b ticket#111/tree_should_grow_apples
```
5. Implement the feature or fix the bug.
   - Please see the [Development Environment](/contribution/devEnv.html) section.
   - Continuously commit your changes to your branch (``ticket#<ticket number>/name``).
      - We suggest that all commit messages start with the ticket number, for example: ``#111: Adding new feature...``
   - Continuously push to your cloned repository (``<your handle>/skills-service.git``).
   - Ensure you have comprehensive tests in place
6. Once the features and tests are implemented, submit a [Pull Request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request-from-a-fork).
   - Because the project was forked, branched, and pushed, a 'Compare & pull request' button will appear under the 'Pull Requests' tab on the original GitHub repository.
   - Confirm that all local tests pass successfully.
7. Monitor your pull request for CI updates and comments.
   - Check to ensure that Continuous Integration (CI) / GitHub Actions workflows are passing. If any fail, fix the issues locally and push them to your branch.
   - If changes are requested, simply apply those changes to your branch and push them to your fork; the existing Pull Request will update automatically.
