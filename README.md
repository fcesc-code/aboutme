# Curriculum

## Purpose

The aim of this PEC1 is to create a small site for personal curriculum using [UOC boilerplate](https://github.com/uoc-advanced-html-css/uoc-boilerplate/) as a basis. This exercise is part of a University
[Web apps and sites development Master](https://estudis.uoc.edu/ca/masters-universitaris/desenvolupament-llocs-aplicacions-web/presentacio)
by [Universitat Oberta de Catalunya](http://uoc.edu). \
Subject: HTML and CSS tools II. October 2021.

## Curriculum project

### Repo

A Git repository can be found at https://github.com/fcesc-code/aboutme.git
Deploy status: _will be added_

### Public web

The app can be accessed via following links:

- [Netlify prod environment](https://netlify.com/)
- [Firebase prod environment](https://google.com/)
- [Firebase dev environment](https://google.com/)
- [Local dev environment](http://localhost:8123/) only local dev environment

### Tech stack

- [Parcel](https://parceljs.org) bundler
- [Babel](https://babeljs.io/) to transpile javascript to ES5 in production builds
- [Jest](https://jestjs.io/)
- [sass](https://sass-lang.com/)
- [Github](https://github.com/)
- [GitHub Actions](https://github.com/features/actions) for automated testing in continuous delivery
- [GitHub native Dependabot](https://dependabot.com/) for security alerts
- [GitHub codeQL](https://github.com/github/codeql) for code scanning alerts
- [Netlify](https://www.netlify.com/)
- [Firebase](https://firebase.google.com/)
- [sonarqube](https://www.sonarqube.org/)
- [Lighthouse](https://chrome.google.com/webstore/detail/lighthouse/blipmdconlkpinefehnmjammfjpmpbjk?hl=es)
- [VSCode](https://code.visualstudio.com/)
- [ESLint](https://eslint.org/) for linting of html and javascript files
- [Stylelint](https://stylelint.io/) for linting sass files
- [Prettier](https://prettier.io/) as code formatter
- [PostCSS](https://www.npmjs.com/package/postcss)
- [Magick](https://imagemagick.org/index.php) to resize and format images from shell / bash
- [WSL](https://docs.microsoft.com/en-us/windows/wsl/about) Windows Subsystem for Linux (ubuntu 20)
- [HTML](https://html.spec.whatwg.org/)
- [YAML](https://yaml.org/) for GitHub actions

### Quality gate

- [HTML Validator](https://jigsaw.w3.org/css-validator/): 0 errors | 0 warnings \
- [WAVE](https://wave.webaim.org/) accessibility validator: 0 errors | 0 alert \
- [Jest](https://jestjs.io/): 15 tests passed \
  | statements | branches | lines | functions |
  | ---------- | -------- | ----- | --------- |
  | x.x% | x.x% | x.x% | x.x% |
- [Sonarqube](https://www.sonarqube.org/): 0 bugs | 0 code smells | 0 vulnerabilities | 0 security hotspots | 0% code duplication \
- [css validator](https://jigsaw.w3.org/css-validator/) used with the build css: 0 errors | 7 warnings (from autoprefixer code!)
- Github [Dependabot security alerts](https://github.blog/2020-06-01-keep-all-your-packages-up-to-date-with-dependabot/): 0 warnings
- Eslint 0 warnings 0 errors
- Stylelint 0 warnings 0 errors

### Content

- [Pexels](https://www.pexels.com/)

### Project

- [Trello](https://trello.com/)

### Requirements

[Node.js](http://nodejs.org/) >= 14.15.x

### Code

- [SOLID Principles](https://en.wikipedia.org/wiki/SOLID)
- [Reactive programming](https://en.wikipedia.org/wiki/Reactive_programming)
- Common [Software Design patterns](https://en.wikipedia.org/wiki/Software_design_pattern)

### Continuous delivery

Automated testing in every pull request or merge to the main branch.
Automated code scanning to measure code quality, pull requests cannot be merged if quality is not met.
Automated security alerts for the repository.

## Releases

| Version | Date            | Status       | Content         |
| ------- | --------------- | ------------ | --------------- |
| 0.0.1   | 03 October 2021 | Not released | Initial version |

### Version 0.0.1

1. ✔️ Initial version

## Getting started

Clone this repository with `git clone`, or download a .zip file using the top right green button.

Using the Terminal, navigate to the project folder and run `npm install`.

## Features

- Uses [Parcel v2](https://v2.parceljs.org) module bundler.
- NPM scripts for fast development and production build (see Commands below).

### Stylesheets

- [Sass/SCSS](https://sass-lang.com) to CSS compilation.
- [PostCSS](https://postcss.org/) features:
  - Transpile modern CSS with [`postcss-preset-env`](https://preset-env.cssdb.org/features).
  - Automatically add CSS prefix to unsupported properties with [`autoprefixer`](https://autoprefixer.github.io/).
  - Automatically minify and optimize CSS code on production build with `@parcel/optimizer-cssnano`.

### Scripts

- Allow for modern JavaScript (ES201x/ES8/ES7/ES6…) which is automatically transpiled to ES5 and minifed in production builds, with [Babel](https://babeljs.io/).

### Images

- Image transformation with [`@parcel/transformer-image`](https://v2.parceljs.org/recipes/image/) (based on [`sharp`](https://sharp.pixelplumbing.com/)). Do not use on this version since it may cause crashes on Netlify deployments.

### Development

- Development server launch and live reloading on file changes.
- Friendly error reporting.

## How to use this code

Content lives inside the `src/` folder. If you do not want to change the configuration or are unsure about what you are doing, do not edit files outside the `src/` folder.

Always run the following commands during the development stage and for production builds. Please note that it is expected that all projects built with this boilerplate are compiled using `npm run build` before they are published.

### Commands

| Command         | Description                                                                                                                                                                                                                                                                                                                                                         |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `npm run dev`   | Runs a local web server for development and opens the browser to display it. Automatically compiles styles and scripts whenever a file in `src/` is changed, and live reloads the browser. This is what _must be run_ on the development stage.                                                                                                                     |
| `npm run build` | Compiles and minifies and optimizes the files in the assets folder. The generated compiled and optimized files are located in the `dist/` folder. This is what _must be run_ before publishing the project. This is also the build command to be run by external deployment services such as Netlify. The publishable files are then located in the `dist/` folder. |
| `npm run clean` | Deletes the current `/dist` folder and cache folders.                                                                                                                                                                                                                                                                                                               |
| `npm run test`  | Displays a success message if everything is working as expected.                                                                                                                                                                                                                                                                                                    |

## Contributions

### Philosophy

This software is currently developed :construction: with educational purposes and is open source. The code is published in this public repository.

### Issues :fire:

Do you want to suggest :bulb: a new feature? Open an [issue](https://github.com/fcesc-code/aboutme/issues).
Please, keep it short, descriptive and concise :smiley:

### Security

Check out the how to report a vulnerability in our supported versions in the [SECURITY](https://github.com/fcesc-code/aboutme/blob/main/SECURITY.md) :open_book:.

## Styleguide

Check out the [STYLEGUIDE](https://github.com/fcesc-code/aboutme/blob/main/STYLEGUIDE.md) :open_book:.

## Credits

Assistant professor Jordi Tarrida.
Wherever appropriate, credit is given to author as a comment in specific file.

## Author

Francesc Brugarolas, [Github repo](https://github.com/fcesc-code/)\
\
