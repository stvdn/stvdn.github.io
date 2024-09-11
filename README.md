This repository was deployed using GitHub Pages and Github Actions, base on this tutorial https://www.freecodecamp.org/news/how-to-deploy-next-js-app-to-github-pages/.
Check the link for a better descrpition, or you can use the following steps:

1. Enable GitHub Actions https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site#publishing-with-a-custom-github-actions-workflow

2. Enable static pagie generation in Next.Js, changing the output mode to export in the configuration file of NextJs

// FILE: next.config.mjs

const nextConfig = {
output: "export"
};
