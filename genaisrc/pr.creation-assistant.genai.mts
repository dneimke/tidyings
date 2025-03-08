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

