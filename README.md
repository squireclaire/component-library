# Component Library

## Overview

A design system is a set of standards to help us reuse components and patterns, speeding up development time and helping us to scale projects easily.

### Problem statement

specificity, overriding styles. customisation

### Why does this help us?

* Efficiency - Allows you to reuse components and patterns, which means faster development
* Scalability - Reusability improves scalability because it frees up time and reuses existing code
* Consistency - Reusability means design principles are applied consistently, which helps build brand and product trust
* Customised - We can choose our standards and tailor to our requirements
* Performance - With pre-built design systems, you often pull in a lot of features/ styles that you don't want and then have to add more layers to mould it how you want. Because this is customised, we can reduce the amount of unused code which will boost performance
* Reduce specificity - Because this is customised and how we plan to build it, we don't need to try to override dtyles, reducing unexpected bugs/ developer frustration and allowing faster development.
* Quality - We can take ownership of the code quality and accessibility

## Technical Details

### Quick start scripts

| Syntax | Description |
| --- | ----------- |
| `yarn start` | Runs the app in the development mode |
| `yarn test`  | Runs unit tests in watch mode |
| `yarn compile` | Builds the app for production to the `dist` folder |
| `yarn storybook` | Runs storybook |

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### BEM naming convention

[BEM](http://getbem.com/) stands for Block-Element-Modifier. A *Block* is a standalone module of code that provides context. A block may be made up of a single or multiple *Elements*. The *Modifier* describes its' current state.
It's a naming convention designed to avoid conflicting classes and reduce the need of overriding styles.
BEM creates reusability and reduces CSS code, it creates a solid structure that remains simple and easy to understand, and keeps blocks modular and independentso there will be less chance of problems with cascading and specificity.

### Structure & Standards

[ITCSS](https://itcss.io/) (Inverted Triangle CSS) is a way of structuring your

Encapsulated components, lift out without breaking

[SEMVER](https://semver.org/) Major - breaking, Minor - feature, Patch - bugfix/ config

[Eslint](https://eslint.org/)

[Commitlint](https://github.com/conventional-changelog/commitlint/tree/master/@commitlint/config-conventional#type-enum)

### Documentation

Storybook

### Made unpublished changes?

1. Install yalc
`yarn global add yalc`

2. Navigate to your locally cloned copy of  `component-library` and run 
`yalc publish`

3. Navigate to your local copy of an app and run
`yalc add component-library`

4. In your app, you can now import & use any component you need
```
import { Button } from "component-library";
...
<Button onClick={() => alert("That's all folks!")} label="Click me!" iconName="ThumbsUp" />
```