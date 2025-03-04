script({
    title: "PR Title Evaluator",
    description: "A tool that evaluates pull request titles against predefined code standards.",
    model: "github:gpt-4o"
})

const csvs = await workspace.findFiles("**/*.csv")
def("REPORTS", csvs)

const instructions = await workspace.readText(".github/pr-title-guidelines.md")
def("CODE_STANDARDS", instructions.content)

$`## Task
Evaluate titles in the REPORTS against the CODE_STANDARDS and give a brief analysis of the results.
`
