Busynest PolymerJS Website

  [Slack](https://busynest.slack.com/)

  [es6](http://es6-features.org/#Constants)
  [JS Introduction](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Introduction)
  [JS modules](http://exploringjs.com/es6/ch_modules.html)
  [JS classes](http://exploringjs.com/es6/ch_classes.html)
  [JS import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)
  [JS getter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get)
  [JS setter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/set)
  [Color Calculator](https://www.sessions.edu/color-calculator/)
  [Structured Data Test](https://search.google.com/structured-data/testing-tool)
  [Page Speed](https://developers.google.com/speed/pagespeed/insights/)
  [Primer](https://www.yourprimer.com/)

Web Components:

  [Webcomponents](https://www.webcomponents.org/)
  [Gitter](https://gitter.im/webcomponents/community)
  [Contribute](https://codelabs.developers.google.com/codelabs/web-components-how-to-contribute/#0)

Polymer:

  [polymer-cli@1.7.0-pre.15](https://github.com/Polymer/tools/tree/master/packages/cli)

  [Polymer Library](https://www.polymer-project.org/2.0/docs/devguide/feature-overview)
  [Liscense](https://github.com/Polymer/polymer/blob/master/LICENSE.txt)
  [About](https://www.polymer-project.org/about)
  [Blog](https://www.polymer-project.org/blog/)
  [Glossary](https://www.polymer-project.org/2.0/docs/glossary)
  [Rendertron](https://render-tron.appspot.com/)

  [Properties](https://www.polymer-project.org/2.0/docs/devguide/properties)
  [Observers](https://www.polymer-project.org/2.0/docs/devguide/observers)

  npm install -g polymer-cli@next

  polymer serve

  polymer test

  polymer analyze

  polymer build

  Configure: polymer.json:

    entrypoint (Defaults to index.html): The main entrypoint to your app.
    shell (Optional): The app shell.
    fragments (Optional): A list of other entrypoints into your application.
    root (Defaults to current working directory): The web root of your application, can be a subfolder of your project directory.
    sources (Defaults to src/**/*): The source files in your application.

 "builds": [
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

NodeJS:



GitHub:

  [Git](https://git-scm.com/docs)

...create a new repository on the command line
echo "# chessDefense" >> README.md
git init
git add README.md
git commit -m "first commit"
git remote add origin https://github.com/busynest/project.git
git push -u origin master

…or push an existing repository from the command line
git remote add origin https://github.com/busynest/project.git
git push -u origin master

Optional:

  Webpack:
  From Sources: npm run build

Firebase:






    "@babel/core": "^7.0.0-beta.44",
    "@babel/preset-env": "^7.0.0-beta.44",