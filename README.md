# Next.js Portfolio with TypeScript

Welcome to my personal minimalist web portfolio built with **Next.js** and **TypeScript**. This project is deployed using **GitHub Pages** and **GitHub Actions** for seamless integration and automated deployment. Feel free to explore, reproduce the code, or reach out if you have any questions!

## 🚀 Features

- **Next.js** for modern React development
- **TypeScript** for static type-checking and enhanced code reliability
- **Responsive design** optimized for all devices
- **GitHub Pages** for hosting the static site
- **GitHub Actions** for continuous integration and deployment

## 📦 Steps for Deployment

### 1. Enable GitHub Actions

Enable GitHub Actions for the repository by following [this guide](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site#publishing-with-a-custom-github-actions-workflow).

### 2. Configure Static Page Generation in Next.js

Update your Next.js configuration to enable static site generation and set the base path to the project name. Modify the `next.config.mjs` file as follows:

```javascript
// FILE: next.config.mjs
const nextConfig = {
  //another config
  output: "export",
  basePath: "/portfolio", // Set this to the name of your project from package.json
};
```

### 3. Set Up GitHub Action Workflows

Create a .yml file in the .github/workflows/ folder with the name nextjs.yml and copy the content of the file from the same path in this repository.

### 4. Commit and Push Changes

After setting up everything, commit and push your changes to GitHub:

git add .
git commit -m "Set up GitHub Pages deployment"
git push origin main

Once pushed, GitHub Actions will automatically build and deploy your portfolio to GitHub Pages.

## 🤝 Contributing

Feel free to fork this repository, submit issues, or create pull requests if you have any suggestions or improvements!

