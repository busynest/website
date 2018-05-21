Busynest Modular Website

Prerequisites:

# JAVASCRIPT MODULES

  The Module pattern is used to mimic the concept of classes (since JavaScript doesn’t natively support classes) so that we can store both public and private methods and variables inside a single object — similar to how classes are used in other programming languages like Java or Python. That allows us to create a public facing API for the methods that we want to expose to the world, while still encapsulating private variables and methods in a closure scope.

# [NODEJS](https://nodejs.org/en/)

  Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient. Node.js' package ecosystem, npm, is the largest ecosystem of open source libraries in the world.

# [WEBCOMPONENTS 2.0.0](https://github.com/webcomponents/webcomponentsjs/tree/v2)

  [webcomponents.org](https://www.webcomponents.org/)

  Web components are a set of web platform APIs that allow you to create new custom, reusable, encapsulated HTML tags to use in web pages and web apps. Custom components and widgets build on the Web Component standards, will work across modern browsers, and can be used with any JavaScript library or framework that works with HTML.

  Web components are based on existing web standards. Features to support web components are currently being added to the HTML and DOM specs, letting web developers easily extend HTML with new elements with encapsulated styling and custom behavior.

  Web components are based on four main specifications:

  [Custom Elements](https://w3c.github.io/webcomponents/spec/custom/) [V1](https://hayato.io/2016/shadowdomv1/)

  [Shadow DOM](https://w3c.github.io/webcomponents/spec/shadow/)

  [JAVASCRIPT imports](https://w3c.github.io/webcomponents/spec/imports/)
  
  [HTML Template](https://html.spec.whatwg.org/multipage/scripting.html#the-template-element/)

# [SHADY CSS](https://github.com/webcomponents/shadycss)

  ShadyCSS provides a library to simulate ShadowDOM style encapsulation (ScopingShim), a shim for the proposed CSS mixin @apply syntax (ApplyShim), and a library to integrate document-level stylesheets with both of the former libraries (CustomStyleInterface).

  [CSS @apply Rule](https://tabatkins.github.io/specs/css-apply-rule/)

  the @apply rule, which allows an author to store a set of properties in a named variable, then reference them in other style rules.

# [POLYMER 3.0.2](https://www.polymer-project.org/2.0/docs/devguide/feature-overview)

  [Roadmap 1](https://www.polymer-project.org/blog/2018-05-02-roadmap-update)
  [Roadmap 2](https://www.polymer-project.org/blog/2018-05-02-roadmap-faq)

  No [Model Driven Views (MDV)](https://github.com/toolkitchen/mdv)

  The Polymer library provides a set of features for creating custom elements. These features are designed to make it easier and faster to make custom elements that work like standard DOM elements. Similar to standard DOM elements, Polymer elements can be:

  Instantiated using a constructor or document.createElement.

  Configured using attributes or properties.

  Populated with internal DOM inside each instance.

  Responsive to property and attribute changes.

  Styled with internal defaults or externally.

  Responsive to methods that manipulate its internal state.

  [LitElement](https://www.npmjs.com/package/@polymer/lit-element)

  [Polymer Library](https://www.polymer-project.org/2.0/docs/devguide/feature-overview)

  [Liscense](https://github.com/Polymer/polymer/blob/master/LICENSE.txt)

  [About](https://www.polymer-project.org/about)

  [Blog](https://www.polymer-project.org/blog/)

  [Glossary](https://www.polymer-project.org/2.0/docs/glossary)

  [Rendertron](https://render-tron.appspot.com/)

  [Properties](https://www.polymer-project.org/2.0/docs/devguide/properties)

# [POLYMER-CLI@1.7.2](https://github.com/Polymer/tools/tree/master/packages/cli)

    $ npm install -g polymer-cli@next

  Polymer CLI is the official command line tool for Polymer projects and Web Components. It includes a build pipeline, a boilerplate generator for creating elements and apps, a linter, a development server, and a test runner.

  1. Create a class that extends PolymerElement.

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

    $ npm install -g firebase-tools

# [GITHUB](https://git-scm.com/docs)

  GitHub is how people build software.
  We’re supporting a community where more than 27 million* people learn, share, and work together to build software.

  ...create a new repository on the command line
  echo "# projectName" >> README.md

  git init

  git add README.md

  git commit -m "first commit"

  git remote add origin https://github.com/user/project.git

  git push -u origin master
  

  …or push an existing repository from the command line

  git remote add origin https://github.com/user/project.git

  git push -u origin master

  # [Material Design](https://material-components.github.io/material-components-web-components/demos/index.html)

    [Material Design](https://material.io/design/)
  
  [Button](https://material-components-web.appspot.com/button.html)

    $ npm install @material/button --save

  [Floating Action Button](https://material-components-web.appspot.com/fab.html)
  
    $ npm install @material/fab --save
    
  [CheckBox](https://material-components-web.appspot.com/checkbox.html)
  
    $ npm install @material/checkbox --save
    
  [FormField](https://material-components.github.io/material-components-web-components/demos/formfield.html)
  
    $ npm install @material/ --save
    
  [Icon](https://material-components.github.io/material-components-web-components/demos/icon.html])
  
    $ npm install @material/ --save
    
  [Icon Toggle](https://material-components.github.io/material-components-web-components/demos/icon-toggle.html)
  
    $ npm install @material/ --save
    
  [Linear Progress](https://material-components-web.appspot.com/linear-progress.html)
  
    $ npm install @material/linear-progress --save
    
  [Radio Button](https://material-components-web.appspot.com/radio.html)
  
    $ npm install @material/radio --save
    
  [Ripple](https://material-components-web.appspot.com/ripple.html)
  
    $ npm install @material/ripple --save
    
  [Slider](https://material-components-web.appspot.com/slider.html)
  
    $ npm install @material/slider --save
    
  [Snackbar](https://material-components-web.appspot.com/snackbar.html)
  
    $ npm install @material/snackbar --save
    
  [Switch](https://material-components-web.appspot.com/switch.html)
  
    $ npm install @material/switch --save
    
  [TextFild](https://material-components.github.io/material-components-web-components/demos/textfield.html)
  
    $ npm install @material/textfield --save
    
# META TAGS

    <meta charset="UTF-8">

    <title></title>

    <base href="/">

    <meta name="viewport" content="width=device-width, minimum-scale=1, initial-scale=1, user-scalable=yes">

    <meta name="theme-color" content="">

    <link rel="manifest" href="">

    <link rel="canonical" href="">

    <meta name="author" content="">

    <meta http-equiv="X-UA-Compatible" content="">

    <meta http-equiv="If-Modified-Since" content="">

    <meta name="description" content="">

    <meta name="keywords" content="">

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
    <meta name="mobile-web-app-capable"                 content="">
    <meta name="application-name"                       content="">

    <!-- Add to homescreen for Safari on iOS -->
    <meta name="apple-mobile-web-app-capable"           content="">
    <meta name="apple-mobile-web-app-status-bar-style"  content="">
    <meta name="apple-mobile-web-app-title"             content="">

    <!-- Tile icon for Windows 8 (144x144 + tile color) -->
    <meta name="msapplication-TileImage"                content="">
    <meta name="msapplication-TileColor"                content="">
    <meta name="msapplication-tap-highlight"            content="">

    <!--TWITTER -->
    <meta name="twitter:card"                           content="">
    <meta name="twitter:title"                          content="">
    <meta name="twitter:description"                    content="">

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
