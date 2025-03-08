// ref: https://microsoft.github.io/genaiscript/guides/pull-request-reviewer/

script({
    title: "PR Creation Assistant",
    description: "Generates pull request (PR) titles and descriptions by analyzing code diffs, applying team PR guidelines, and leveraging an LLM to provide intelligent suggestions. This script aims to streamline the PR creation process and improve review efficiency.",
    temperature: 0.5,
    system: [
        "system",
        "system.safety_harmful_content",
        "system.safety_protected_material",
    ],
    model: "github:gpt-4o"
})

// compute diff
const { stdout: diff } = await host.exec("git", [
    "diff",
    "main",
    "--",
    ":!**/genaiscript.d.ts", // git exclude format
    ":!**/jsconfig.json",
    ":!genaisrc/*",
    ":!.github/*",
    ":!.vscode/*",
    ":!*yarn.lock",
])


def("GIT_DIFF", diff, {
    language: "diff",
    maxTokens: 20000,
})

const instructions = await workspace.readText("docs/pr-guidelines.md")
def("PR_STANDARDS", instructions.content)

$`
You are an expert senior software engineer. Your task is to review a <GIT_DIFF> from the current branch against the target branch (main) and generate a TITLE and DESCRIPTION for a pull request. Use the documented PR standards provided in the [Code Review Instructions](./pr-title-guidelines.md) file.

### Instructions:
1. **Review the git diff**: Analyze the changes made in the current branch compared to the main branch.
2. **Generate a TITLE**: Create a concise and descriptive title for the pull request that summarizes the changes.
3. **Generate a DESCRIPTION**: Write a detailed description that includes:
   - A summary of the changes made.
   - The reason for the changes.
   - Any relevant context or background information.
   - Instructions for testing the changes, if applicable.
   - Any potential impact on existing functionality.

### Example:
**TITLE**: Refactor nested conditions in user authentication module

**DESCRIPTION**:
- Refactored nested if statements in the user authentication module to reduce nesting and improve readability.
- Inverted initial conditions to handle error cases early and return immediately.
- Added guard clauses to handle invalid inputs at the beginning of functions.
- These changes improve code maintainability and align with the "Tidy First?" principles.

Please ensure the TITLE and DESCRIPTION adhere to the documented <PR_STANDARDS>.
`