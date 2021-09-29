Busynest Modular Website

Prerequisites:

# [GITHUB](https://git-scm.com/docs)

Where the world builds software
Millions of developers and companies build, ship, and maintain their software on GitHub—the largest and most advanced development platform in the world.

...create a new repository on the command line
echo "# projectName" >> README.md
  * git init
  * git remote add origin https://github.com/user/project.git
  * git add .
  * git commit -m "first commit"
  * git push -u origin master

# [NODEJS](https://nodejs.org/en/)

Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient. Node.js' package ecosystem, npm, is the largest ecosystem of open source libraries in the world.


# [Node Package Manager](https://docs.npmjs.com/)

We're npm, Inc., the company behind Node package manager, the npm Registry, and npm CLI. We offer those to the community for free, but our day job is building and selling useful tools for developers like you.

npm is the world's largest software registry. Open source developers from every continent use npm to share and borrow packages, and many organizations use npm to manage private development as well.

npm consists of three distinct components:

1. the website
2. the Command Line Interface (CLI)
3. the registry

Use the website to discover packages, set up profiles, and manage other aspects of your npm experience. For example, you can set up organizations to manage access to public or private packages.

The CLI runs from a terminal, and is how most developers interact with npm.

The registry is a large public database of JavaScript software and the meta-information surrounding it.

# JAVASCRIPT MODULES

The Module pattern is used to mimic the concept of classes (since JavaScript doesn’t natively support classes) so that we can store both public and private methods and variables inside a single object — similar to how classes are used in other programming languages like Java or Python. That allows us to create a public facing API for the methods that we want to expose to the world, while still encapsulating private variables and methods in a closure scope.

# [WEBCOMPONENTS](https://www.npmjs.com/package/@webcomponents/webcomponentsjs)

[webcomponents.org](https://www.webcomponents.org/)

Web components are a set of web platform APIs that allow you to create new custom, reusable, encapsulated HTML tags to use in web pages and web apps. Custom components and widgets build on the Web Component standards, will work across modern browsers, and can be used with any JavaScript library or framework that works with HTML.

Web components are based on existing web standards. Features to support web components are currently being added to the HTML and DOM specs, letting web developers easily extend HTML with new elements with encapsulated styling and custom behavior.

Web components are based on four main specifications:

https://w3c.github.io/
https://github.com/w3c/webcomponents-cg

[Custom Elements](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements)

[Shadow DOM](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM)

[JAVASCRIPT Modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)

# [SHADY CSS](https://github.com/webcomponents/shadycss)

ShadyCSS provides a library to simulate ShadowDOM style encapsulation (ScopingShim), a shim for the proposed CSS mixin @apply syntax (ApplyShim), and a library to integrate document-level stylesheets with both of the former libraries (CustomStyleInterface).

[CSS @apply Rule](https://tabatkins.github.io/specs/css-apply-rule/)

the @apply rule, which allows an author to store a set of properties in a named variable, then reference them in other style rules.

# [Lit](https://www.lit.dev)

The Polymer library provides a set of features for creating custom elements. These features are designed to make it easier and faster to make custom elements that work like standard DOM elements. Similar to standard DOM elements, Polymer elements can be:

Instantiated using a constructor or document.createElement.

Configured using attributes or properties.

Populated with internal DOM inside each instance.

Responsive to property and attribute changes.

Styled with internal defaults or externally.

Responsive to methods that manipulate its internal state.

# [ES DEV SERVER]()
Dev Server for web applications, ideal for buildless es module workflows. Optionally supports simple code transformations.

 * Efficient browser caching for fast reloads
 * Transform code on older browsers for compatibility
 * Resolve bare module imports for use in the browser (--node-resolve)
 * Auto-reload on file changes with the (--watch)
 * History API fallback for SPA routing (--app-index index.html)
 * Plugin and middleware API for extensions
 * Powered by esbuild and rollup plugins

# [REDUX]()
Redux is a predictable state container for JavaScript apps.

It helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test. On top of that, it provides a great developer experience, such as live code editing combined with a time traveling debugger.

Following in the steps of Flux, CQRS, and Event Sourcing, Redux attempts to make state mutations predictable by imposing certain restrictions on how and when updates can happen. These restrictions are reflected in the three principles of Redux.

1. Single source of truth
2. State is read-only
3. Changes are made with pure functions

  * State
  * Action
  * Reducer
  * Dispatching Function
  * Action Creator
  * Async Action
  * Middleware
  * Store
  * Store creator
  * Store enhancer

# [REDUX-THUNK](https://preview.npmjs.com/package/redux-thunk/v/2.2.0)

  `npm i redux-thunk@2.2.0`

  With a plain basic Redux store, you can only do simple synchronous updates by dispatching an action. Middleware extends the store's abilities, and lets you write async logic that interacts with the store.

  Thunks are the recommended middleware for basic Redux side effects logic, including complex synchronous logic that needs access to the store, and simple async logic like AJAX requests.

# [POLYMER-CLI](https://github.com/Polymer/tools/tree/master/packages/cli)

`$ npm install -g polymer-cli`

Polymer CLI is the official command line tool for Polymer projects and Web Components. It includes a build pipeline, a boilerplate generator for creating elements and apps, a linter, a development server, and a test runner.

1. Create a class that extends litElement.

2. Implement a static properties getter that describes the element's public property/attribute API (these automatically become observed attributes).

3. Then implement a template getter that returns an HTMLTemplateElement describing the element's rendering, including encapsulated styling and any property bindings.

"entrypoint" (Defaults to index.html): The main entrypoint to your app.

"shell" (Optional): The app shell.

"fragments" (Optional): A list of other entrypoints into your application.

"root" (Defaults to current working directory): The web root of your application, can be a subfolder of your project directory.

"sources" (Defaults to src/**/*): The source files in your application.


"builds":

  [

    {
      "name":                 "esm-bundled",
      "browserCapabilities":  [ "es2015", "modules" ],
      "js":                   { "minify": true },
      "css":                  { "minify": true },
      "html":                 { "minify": true },
      "bundle":               { "inlineScripts": false },
      "addServiceWorker":     true
    },

    {
      "name":                 "es6-bundled",
      "browserCapabilities":  [ "es2015" ],
      "js":                   { "minify": true, "transformModulesToAmd": true },
      "css":                  { "minify": true },
      "html":                 { "minify": true },
      "bundle":               { "inlineScripts": false },
      "addServiceWorker":     true
    },
    
    {
      "name":                 "es5-bundled",
      "js":                   { "minify": true, "compile": true, "transformModulesToAmd": true },
      "css":                  { "minify": true },
      "html":                 { "minify": true },
      "bundle":               { "inlineScripts": false },
      "addServiceWorker":     true
    }
    
  ]

# [FIREBASE-TOOLS](https://www.npmjs.com/package/firebase-tools)

`$ npm install -g firebase-tools`

* Firebase Authentication Functions

.onAuthStateChanged( (user:any) => { console.log( user ); } );
.onIdTokenChanged( (user:any) => { console.log( user ); } );
.updateCurrentUser( user )

.useDeviceLanguage();
.signInAnonymously();
.signOut();

.createUserWithEmailAndPassword( email, password )

.signInWithEmailAndPassword( email, password )
.signInWithEmailLink( email, emailLink )

.sendPasswordResetEmail( email, actionCodeSettings )
.confirmPasswordReset( code, newPassword )
.verifyPasswordResetCode( code )

.signInWithPhoneNumber( phoneNumber, applicationVerifier )

.applyActionCode( code )
.checkActionCode( code )

.fetchSignInMethodsForEmail( email )

.sendSignInLinkToEmail( email, actionCodeSettings )
.isSignInWithEmailLink( emailLink )

.setPersistence( persistence )

.signInWithCredential( credential )
.signInAndRetrieveDataWithCredential( credential )
.signInWithCustomToken( token )
  
# [META TAGS](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta)

`<meta charset="UTF-8">`
`<title></title>`
`<base href="/">`

`<meta name="viewport" content="width=device-width, minimum-scale=1, initial-scale=1>` `user-scalable=yes">`
`<meta name="theme-color" content="">`
`<link rel="manifest" href="">`
`<link rel="canonical" href="">`
`<meta name="author" content="">`
`<meta http-equiv="X-UA-Compatible" content="">`
`<meta http-equiv="If-Modified-Since" content="">`
`<meta name="description" content="">`
`<meta name="keywords" content="">`

"referrer"
Referrer-Policy: no-referrer
Referrer-Policy: no-referrer-when-downgrade
Referrer-Policy: origin
Referrer-Policy: origin-when-cross-origin
Referrer-Policy: same-origin
Referrer-Policy: strict-origin
Referrer-Policy: strict-origin-when-cross-origin
Referrer-Policy: unsafe-url

<!-- Add to homescreen for Chrome on Android -->
`<meta name="mobile-web-app-capable"                 content="">`
`<meta name="application-name"                       content="">`

<!-- Add to homescreen for Safari on iOS -->
`<meta name="apple-mobile-web-app-capable"           content="">`
`<meta name="apple-mobile-web-app-status-bar-style"  content="">`
`<meta name="apple-mobile-web-app-title"             content="">`

<!-- Tile icon for Windows 8 (144x144 + tile color) -->
`<meta name="msapplication-TileImage"                content="">`
`<meta name="msapplication-TileColor"                content="">`
`<meta name="msapplication-tap-highlight"            content="">`

<!--TWITTER -->
`<meta name="twitter:card"                           content="">`
`<meta name="twitter:title"                          content="">`
`<meta name="twitter:description"                    content="">`

import
export

_firstRendered()
_didRender()
_layoutChanged()
_offlineChanged()
clearTimeout()
_locationChanged()
_updateDrawerState()

connectedCallback()
disconnectedCallback()

[switch()](https://www.w3schools.com/js/js_switch.asp)

brake

# Dependencies

npm i minify-template-literal-loader
npm install -g lighthouse
npm install workbox-cli --global
npm install workbox-google-analytics --global
npm install firebase
npm install firebase-admin --save
npm install @reduxjs/toolkit
npm install eslint --save-dev
npm i -g firebase-tools

npm i webpack
npm i workbox-webpack-plugin
npm install -D webpack-cli

npm i --save-dev rollup
@web/rollup-plugin-html
@web/rollup-plugin-copy
@rollup/plugin-node-resolve
rollup-plugin-terser
rollup-plugin-minify-html-literals
rollup-plugin-summary
@web/rollup-plugin-polyfills-loader
@rollup/plugin-babel
npm i babel-preset-env
npm i babel


# [WEBPACK](https://webpack.js.org/)

At its core, webpack is a static module bundler for modern JavaScript applications. When webpack processes your application, it internally builds a dependency graph from one or more entry points and then combines every module your project needs into one or more bundles, which are static assets to serve your content from.

# [ROLLUP](https://rollupjs.org/guide/en/)

Rollup is a module bundler for JavaScript which compiles small pieces of code into something larger and more complex, such as a library or application. It uses the new standardized format for code modules included in the ES6 revision of JavaScript, instead of previous idiosyncratic solutions such as CommonJS and AMD. ES modules let you freely and seamlessly combine the most useful individual functions from your favorite libraries. This will eventually be possible natively everywhere, but Rollup lets you do it today.

# [ES BUILD](https://esbuild.github.io/getting-started/)

https://rollupjs.org/guide/en/

https://www.npmjs.com/package/rollup-plugin-visualizer

It's written in Go and compiles to native code.

.\node_modules\.bin\esbuild --version

    "build": "polymer build --auto-base-path && workbox generateSW workbox-config.js",
    "watch-server": "web-dev-server --node-resolve --watch --open",
    "report": "lighthouse http://localhost:8000/",
    "analyze": "wca analyze \"src/**/*.ts\" --outFile custom-elements.json",
    "analyzer": "custom-elements-manifest analyze",
    "web-analyze": "npx web-component-analyzer src",
    "output-1": "web-component-analyzer     analyze application-shell.js --outFile custom-elements.json",
    "output-2": "custom-elements-manifest   analyze --litelement --exclude \"docs/**/*\" \"test-helpers/**/*\"",
    "dev-server": "web-dev-server --node-resolve --open",
    "watch-build": "tsc --watch",
    "build-watch": "web-dev-server --node-resolve --watch --open && tsc --watch",
    "lint": "npm run lint:lit-analyzer && npm run lint:eslint",
    "lint2": "eslint \"**/*.{js,ts}\"",
    "lint:eslint": "eslint 'src/**/*.ts'",
    "lint:lit-analyzer": "lit-analyzer",
    "workbox-wizard": "workbox wizard",
    "workbox-new": "workbox generateSW sw/workbox-config.js",
    "workbox-inject": "workbox injectManifest path/to/config.js",
    "long": "rollup deploy/application-shell.js --format es --name 'ApplicationShell' --file application-shell.js",
    "building": "rimraf dist && rollup -c rollup.config.js"
  },