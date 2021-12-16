# title

This is a tool for code inspection, testing, and message submission.

Support the following files

- .jsx,.js,.ts,.tsx,.mjs,.cjs
- .css,.stylus,.styl,.scss,.sass
- .md
- .html



## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Maintainers](#maintainers)
- [Thanks](#thanks)
- [Contributing](#contributing)
- [License](#license)



## Installation

```sh
# local
npm install --save-dev @julong/checker
# global
npm install -g @julong/checker
```



## Usage

### step1. setting git hook

```sh
npm install husky
npx husky add .husky/commit-msg 'npx jcheck commitlint'
npx husky add .husky/pre-commit 'npx jcheck default'
```



### step2. jcheck.config.js(Can be omitted)

```js
// jcheck.config.js
module.exports = {
  tsc: true,
  test: true,
  eslint: true,
  stylelint: true,
  markdownlint: true,
  htmlhint: true,
};
```



## CLI Command

```sh
$ npx jcheck default
```

- default
- all
- fix
- tsc
- test
- testCoverage
- testOnlyChange
- eslint
- eslintFix
- stylelint
- stylelintFix
- htmlhint
- markdownlint
- markdownlintFix
- commitlint



## Maintainers

JuLong - [jl917](https://github.com/jl917)



## Contributing

Anyone is welcome to participate in the maintenance and development of this project, and can also submit Issues and PR's



## License

[MIT](https://github.com/jl917/jchecker/blob/master/LICENSE)
