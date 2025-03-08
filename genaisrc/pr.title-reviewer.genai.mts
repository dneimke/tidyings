script({
    title: "PR Title Reviewer",
    description: "A tool that evaluates pull request titles against predefined code standards.",
    model: "github:gpt-4o"
})

const csvs = await workspace.findFiles("reports/**/*.csv")
def("REPORTS", csvs)

const instructions = await workspace.readText("docs/pr-guidelines.md")
def("CODE_STANDARDS", instructions.content)

$`## Task
Evaluate titles in the REPORTS against the CODE_STANDARDS and give a brief analysis of the results

Report errors or warnings using annotations.

Ignore files outside the src directory.
`
