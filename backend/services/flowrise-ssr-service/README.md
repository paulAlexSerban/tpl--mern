# FlowRise

Figma: https://www.figma.com/community/file/1267185915510395950

## RND Prismic CMS

### @prismicio/client

-   core package for creating web apps with Prismic and JavaScript
-   responsible for fetching data from the Prismic API as well as providing helper functions and types to work with Prismic data

#### Usage

@prismicio/client provides tools for six main uses:

-   Setting up an API client in your project
-   Constructing queries with query methods
-   Filtering queries with query filters
-   Get information about your repository with repository methods
-   Manipulating your data with helpers
-   Typing your data with types

```js
import * as prismic from '@prismicio/client';
const repoName = 'your-repo-name';
const client = prismic.createClient(repoName);
```

#### Resources

-   (prismic.io/docs - @prismicio/client)[https://prismic.io/docs/technical-reference/prismicio-client]

### Slice Machine

-   a tool that allows you to build and edit slices in your project
-   think of Slice Machine as a craftsman workshop where you can create and shape your data models all while reaping benefits like Git versioning, component previews and auto-generated mocks.
-   within it you have 2 main types of data models: 1. Types (Page and Custom Types) and 2. Slices
    -   1. Types
        -   Page Types serve as templates to create documents - these documents typically correspond to pages on your website, if not we use Custom Types
        -   Custom Types can represent a multitude of elements such as navigation menus, side-wide settings, blog posts, authors, etc.
    -   2. Slices
        -   reusable components that can be used in multiple documents
        -   made up of a set of fields that can be filled in by content writers
        -   page sections that can be added, removed, and reordered in the Prismic editor

### Prismic Slice Machine Troubleshooting

#### Error: "It seems like you don’t have access to this repository"

-   Solution: Make sure you are logged in to the correct Prismic account and have access to the repository you are trying to access
-   RUN: `yarn prismic login` to login to the correct account
    -   NOTE: if you miss the prismic cli, install it with `yarn add prismic-cli`
