# Contentful:

## Introduction:

If you've never used Contentful, I'd highly recommend you read through their [Getting Started](https://www.contentful.com/developers/docs/javascript/tutorials/using-js-cda-sdk/) guide. It's a great introduction to the platform and will help you understand how to use it.

## Installing Contentful:

- [ ] Install contentful using `npm install contentful`.
- [ ] Install "TS Content Types Generator" from Contentful Apps.
- [ ] Copy & Paste the generated code into `/types/contentful.d.ts`.
- [ ] Add `images: { domains: ['images.ctfassets.net'] }` to `next.config.js`.

## Initializing Contentful:

- [ ] Add the `CONTENTFUL_SPACE_ID`, `CONTENTFUL_ACCESS_TOKEN`, `CONTENTFUL_MANAGEMENT_TOKEN`, and `CONTENTFUL_ENVIRONMENT` variables to `.env.local`.
- [ ] Initialize the contentful client...
- [ ] If the page is dynamic, use `getStaticPaths` to fetch all the paths.
- [ ] Use `getStaticProps` to fetch the data for the page.
