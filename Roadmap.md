# Overview

## Problem statement

Over the years, I have developed strong opinions on building production ready websites that follow my 3F Principles: Make it Functional, make it Fast and make it Fascinating.  These, I believe, should be embodies in an opinionated starter project that will drastically reduce the development time of new projects by making the as template based and configurable as possible.

## Proposed work

To build a Starter Project in [GatsbyJS](https://www.gatsbyjs.com) with the following features:

- Clean File Organization
    - src
        - Pages
            - Layout
            - SEO
            - Banner
                - PageContents
        - Components
        - Markdown
        - Hooks
        - Static
        - Utils
        - Queries
        - Languages
    - tests
        - Crypress Integration Tests
- Reusable [Styled Components](https://www.gatsbyjs.com/docs/how-to/styling/styled-components/)
    - Layout Components [need to make changes to reflect latest tailwind API]
    - View Components
- Style Themes
    - Use [Tailwind theming](https://www.youtube.com/watch?v=0l0Gx8gWPHk&list=PL5f_mz_zU5eXWYDXHUDOLBE0scnuJofO0&index=8) to make colors, sizes, etc as themeable as possible
        - Colors
        - Sizes
- Internationalization
    - Use [React Internationalization library](https://react.i18next.com) to store or string literals (string literals can be changed very easily)
- Accessibility [TODO later]
- Dynamic Menu (Desktop and Mobile)
    - Part of Components
        - Call to Action with DropDown option
        - TopMenu
        - Main Menu
        - DropDown Menu
        - Mega Menu
        - Mini Menu
- Common [Snippets for VS Code](https://code.visualstudio.com/docs/editor/userdefinedsnippets)
    - Generate A Page
    - Generate a Static Query
    - Generate a Dynamic Query (export)
    - Generate GatsbyPlugin Image Data for the Queries
- Integration Tests for critical interactions
- SVG Support
    - <SVG icon={Icons.home}  />
- Integration with [MixPanel Analytics](https://www.npmjs.com/package/gatsby-plugin-mixpanel)
- Integration with [TypeScript](https://www.gatsbyjs.com/docs/how-to/custom-configuration/typescript/)
    - Should include [TypeScript Generato](https://www.gatsbyjs.com/plugins/gatsby-plugin-graphql-codegen/)
- Integration with [TailwindCSS](https://medium.com/swlh/use-tailwindcss-with-gatsby-with-emotion-or-styled-components-7504135b9941)
    - Latest version of Tailwind
    - Use [JIT](https://tailwindcss.com/docs/just-in-time-mode) Feature
- Integration with [Strapi CMS](https://strapi.io/integrations/gatsby-cms)
    - Include a server folder
        - Strapi CMS project
        - Docker Compose
- Integration with [Netlify Forms](https://docs.netlify.com/forms/setup/)
- Signup to Newsletter
- [Sitemap](https://www.gatsbyjs.com/plugins/gatsby-plugin-sitemap/)
- [FAQ](https://gatsby-theme-faqs.netlify.app)
- SEO Optimization
    - Enhance SEO Component in MyBucks website to the latest standards

# Success criteria

The criteria that must be met in order to consider this project a success. 

- We have a working starter template
    - Menu (Call to Action ⇒ Theme Switcher)
    - Home (Landing Page)
    - Contacts (Netlify Forms)
    - Stats Page (Graphs)
        - MixPanel Page Visits + Custom Events
    - Counter Page (JS Interactivity + Custom Events Sent to Mixed Analyzed)
    - Blog List (Static Query from CMS)
        - Blog Details (Dynamic Query)
- Readme that details how anyone can configure and run it
- Tests are 100% passing
- Integration with CMS is seamless