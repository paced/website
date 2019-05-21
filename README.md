# paced.me

> The personal profile of Tian Hao (Thomas) Wang.

## Build Setup

``` bash
# Run for development environment at localhost:3000
$ npm run dev

# Build for production and launch a server.
$ npm run build
$ npm start
```

For detailed explanation on how things work, checkout the [Nuxt.js docs](https://nuxtjs.org).

## Editing Content

I don't want the overhead of fetching content from some external API for a simple profile site. It would be much easier for me to update the actual `git` repository, specifically the JavaScript in the `pages/index.vue` file. For now, as far as the site represents a very simple profile, this will remain true.

This is likely to change if my site becomes like the way it was before: with complex profile and projects tabs.

## Staging and Versioning

This Nuxt.js project is very stable because it is only a profile website. Therefore versioning and environments do not matter as much, including willful tagging of release versions. The CI/CD script at `.gitlab-ci.yml` will build, run code quality, and use Google App Engine to deploy on each commit to the `master` branch.

## Replicating CI/CD

You can use the `.gitlab-ci.yml` file I have written with only a few more additional steps. I personally use Google App Engine (as part of Google Cloud Platform) to deploy this application based on how simple it is. In order to use this repository, you must:

1. Set up a project with Google App Engine active (Node Flexible Environment) in-browser or otherwise.
2. Set up a new Service Account with the Editor role and extract a JSON key.
3. Set the JSON key as DEPLOY_KEY_FILE in GitLab.
4. Set the project ID as PROJECT_ID in GitLab.
5. Optionally, set up a custom domain in Google App Engine.

That's it, hopefully. Please raise an issue if this seems wrong.

## Security and SEO

I always try to have security in mind as much as possible. For this reason, I've compartmentalised as much as I can while still allowing the source code to be public. I personally do not believe in security through _just_ obscurity and I want to share my code such that it may be scrutinised for improvement or even studied by others.

As many best practices as possible were implemented as per online resources for SEO, performance, and security. I have a reason for most of my decisions. Please don't hesitate to ask why I've done things the way I have if you have any questions or suggestions.
