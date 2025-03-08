# Pull Request Guidelines

## What makes a good pull request?

- Clear descriptions and focused changes.
- Screenshots for visual context.
- Passing tests and code quality checks.
- Changes meet the requirements.

## Review Process

- Checklist for reviewers.
- Guidelines for feedback and change requests.

## Titles and Labels

- Use clear and consistent titles with helpful prefixes like "fix," "draft," or "chore."
- Use labels effectively (e.g., "bug," "feature," "documentation").

## Size and Timeliness

- Aim for smaller, manageable pull requests.
- Set expectations for turnaround time.

## Branching

- Use feature branches for tasks expected to take more than a day or two.
- Follow a consistent naming convention for branches.

## Approvers

- Note: This section is a work in progress and will be further refined in the future.
- Ensure the correct approvers are assigned to the pull request.
- For urgent pull requests, consider messaging approvers directly.
- Approvers should focus on code quality, functionality, and adherence to team standards.
- Approvers should provide clear and constructive feedback.

## Draft Pull Requests

- Use draft pull requests for early feedback before finalizing changes.
- Use draft pull requests to share work in progress and get help when blocked.

## Automation

- Consider automating aspects of the pull request process, such as requiring a minimum number of approvals or specific quality checks.
- It's possible to override the CI build for pull requests, but there should be clear expectations around when and how to do so.

## Merging Strategy

- Our preferred merging strategy is squash merge with branch deletion.
- This keeps the commit history clean on develop and main branches.
- This prevents a messy backlog of completed pull request branches.

# Example Pull Request

**Title**: feat: Implement `GetUserProfile` endpoint in API integration layer

**Description**:
This pull request adds a new endpoint, `GetUserProfile`, to the API integration layer. This endpoint allows the frontend to retrieve user profile information from the backend.

**Changes**:
- Created a new function `GetUserProfile(userId)` in `UserController.cs` to handle the API call.
- Added unit tests to verify the function's functionality and error handling.
- Updated the API documentation to include the new endpoint.

**Checklist**:
- [x] Code follows team style guidelines.
- [x] Unit tests have been added and passed.
- [x] Documentation has been updated.
