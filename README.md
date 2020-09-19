<!-- <img src="https://img.shields.io/npm/v/quasar-ui-client-controls.svg?label=quasar-ui-client-controls">
<img src="https://img.shields.io/npm/v/quasar-app-extension-client-controls.svg?label=quasar-app-extension-client-controls">
 -->
# Structure
* [/ui](ui) - standalone npm package
* [/app-extension](app-extension) - Quasar app extension

# Compile
* .../{root}> cd ui
* .../{root}/ui> yarn
* .../{root}/ui> yarn build

# Run
* .../{root}/ui> cd dev
* .../{root}/ui/dev> quasar dev 

# NPM-SignIn
* .../{proj}/{root}> npm login --registry=https://npm.pkg.github.com --scope=@my-org
* (n): fullname
* (p): gh_token
* (e): 001

# Publish
* .../{root}/ui/dev> cd ../
* .../{root}/ui> yarn publish

# Install
* .../{proj}/{root}> npm login --registry=https://npm.pkg.github.com --scope=@my-org
* .../{proj}/{root}> yarn add @my-org/quasar-ui-client-controls@latest

# Donate
If you appreciate the work that went into this project, please consider [donating to Quasar](https://donate.quasar.dev).

# License
MIT (c)