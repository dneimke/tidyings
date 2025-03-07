script({
    title: "PR Creation Assistant",
    description: "Generates pull request (PR) titles and descriptions by analyzing code diffs, applying team PR guidelines, and leveraging an LLM to provide intelligent suggestions. This script aims to streamline the PR creation process and improve review efficiency.",
    temperature: 0.5,
    system: [
        "system",
        "system.safety_harmful_content",
        "system.safety_protected_material",
    ],
    model: "github:gpt-4o",
    responseType: "markdown",
})

const defaultBranch = 'main'
const changes = await git.diff({
    base: defaultBranch,
})

def("GIT_DIFF", changes, {
    maxTokens: 30000,
    detectPromptInjection: "available",
})

const instructions = await workspace.readText("docs/pr-guidelines.md")
def("PR_STANDARDS", instructions.content)

$`
You are an expert senior software engineer. Your task is to review a <GIT_DIFF> from the current branch against the target branch (main) and generate a TITLE and DESCRIPTION for a pull request. Use the <PR_STANDARDS>.

### Instructions:
1. **Review the <GIT_DIFF>**: Analyze the changes made in the current branch compared to the main branch.
2. **Generate a TITLE**: Create a concise and descriptive title for the pull request that summarizes the core changes.
3. **Generate a DESCRIPTION**: Write a detailed description that includes:
   - A summary of the core reason for the changes, focusing on changes to '*.genai.dts' scripts in the './genaisrc' folder.
   - Any changes to files outside the './genaisrc' folder should be grouped separately.
   - The reason for the changes.
   - Any relevant context or background information.
   - Instructions for testing the changes, if applicable.
   - Any potential impact on existing functionality.
   - Separate any chores or minor tasks from the core reason for the changes.
`