# Next.js Portfolio Deployment

This repository is deployed using **GitHub Pages** and **GitHub Actions**, based on [this tutorial](https://www.freecodecamp.org/news/how-to-deploy-next-js-app-to-github-pages/). Below are the steps to replicate the deployment process.

For more detailed guidance, please refer to the tutorial linked above, or follow the summarized steps below:

## Steps for Deployment

### 1. Enable GitHub Actions

Enable GitHub Actions for the repository by following [this guide](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site#publishing-with-a-custom-github-actions-workflow).

### 2. Configure Static Page Generation in Next.js

Update your Next.js configuration to enable static site generation and set the base path to the project name. Modify the `next.config.mjs` file as follows:

// FILE: next.config.mjs
const nextConfig = {
output: "export",
basePath: "/portfolio" // Set this to the name of your project from package.json
};

### 3. Set Up GitHub Action Workflows

Create files .github/workflows/setup-node/action.yml and .github/workflows/publish.yml using the content from Matéu.sh's [tutorial](https://www.freecodecamp.org/news/how-to-deploy-next-js-app-to-github-pages/).

### 4. Commit and Push Changes

After setting up everything, commit and push your changes to GitHub
