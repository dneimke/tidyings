# GenAIScript Configuration

This folder contains scripts and configurations for using GenAIScript to generate and manage AI-driven content.

## Prerequisites

Before you can use GenAIScript, you need to follow the instructions for installing and configuring your environment. These can be found at the [GenAIScript documentation](https://microsoft.github.io/genaiscript/getting-started/).

## Setting Up Your API Token

To access GenAIScript models, you need to configure an API token. Follow these steps to set up your API token:

1. **Obtain Your API Token:**
   - Visit the [GenAIScript API documentation](https://microsoft.github.io/genaiscript/getting-started/configuration/#github-models) to learn how to obtain your API token.

2. **Store Your API Token Securely:**
   - Create a `.env` file in the root of your project (if it doesn't already exist).
   - Add your API token to the `.env` file as follows:

     ```plaintext
     GITHUB_TOKEN=your_api_token_here
     ```

## Example Scripts

This folder contains example scripts to help you get started with GenAIScript:

- `poem.genai.mts`: Generates a poem using GenAIScript.

To run the same scripts in your project, use the following commands:

```bash
npx genaiscript run poem
```

Feel free to explore and modify these scripts to suit your needs.

## Additional Resources

For more information on configuring and using GenAIScript, refer to the [official documentation](https://microsoft.github.io/genaiscript/getting-started/).