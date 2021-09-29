
 import html from '@web/rollup-plugin-html';
 import polyfillsLoader from '@web/rollup-plugin-polyfills-loader';
 import {copy} from '@web/rollup-plugin-copy';
 import resolve from '@rollup/plugin-node-resolve';
 import {getBabelOutputPlugin} from '@rollup/plugin-babel';
 import {terser} from 'rollup-plugin-terser';
 import minifyHTML from 'rollup-plugin-minify-html-literals';
 import summary from 'rollup-plugin-summary';

/*
 export default {
   input: 'deploy/application-shell.js',
   output: {
     file: 'application-shell.bundled.js',
     format: 'esm',
   },
   onwarn(warning) {
     if (warning.code !== 'THIS_IS_UNDEFINED') {
       console.error(`(!) ${warning.message}`);
     }
   },
   plugins: [
     replace({'Reflect.decorate': 'undefined'}),
     resolve(),
     terser({
       ecma: 2017,
       module: true,
       warnings: true,
       mangle: {
         properties: {
           regex: /^__/,
         },
       },
     }),
     summary(),
   ],
 };
*/






 export default {
  plugins: [
    // Entry point for application build; can specify a glob to build multiple
    // HTML files for non-SPA app
    html({
      input: 'index.html',
    }),
    // Resolve bare module specifiers to relative paths
    resolve(),
    // Minify HTML template literals
    minifyHTML(),
    // Minify JS
    terser({
      ecma: 2020,
      module: true,
      warnings: true,
    }),
    // Print bundle summary
    summary(),
    // Optional: copy any static assets to build directory
    copy({
      patterns: ['images/**/*', 'manifest.json', 'polymer.json', 'sitemap.xml', 'sw.js', 'robots.txt', 'ads.txt', 'firebase-messaging-sw.js', 'TERMS.md' ],
    }),
  ],
  output: {
    dir: 'public/dist',
    format: 'es', // immediately-invoked function expression — suitable for <script> tags
    sourcemap: true
  },
  preserveEntrySignatures: 'strict',
};




/*
// Configure an instance of @web/rollup-plugin-html
const htmlPlugin = html({
  rootDir: './',
  flattenOutput: false,
});

export default {
  // Entry point for application build; can specify a glob to build multiple
  // HTML files for non-SPA app
  input: 'index.html',
  plugins: [
    htmlPlugin,
    // Resolve bare module specifiers to relative paths
    resolve(),
    // Minify HTML template literals
    minifyHTML(),
    // Minify JS
    terser({
      module: true,
      warnings: true,
    }),
    // Inject polyfills into HTML (core-js, regnerator-runtime, webcoponents,
    // lit/polyfill-support) and dynamically loads modern vs. legacy builds
    polyfillsLoader({
      modernOutput: {
        name: 'modern',
      },
      // Feature detection for loading legacy bundles
      legacyOutput: {
        name: 'legacy',
        test: '!!Array.prototype.flat',
        type: 'systemjs',
      },
      // List of polyfills to inject (each has individual feature detection)
      polyfills: {
        hash: true,
        coreJs: true,
        regeneratorRuntime: true,
        fetch: true,
        webcomponents: true,
        // Custom configuration for loading Lit's polyfill-support module,
        // required for interfacing with the webcomponents polyfills
        custom: [
          {
            name: 'lit-polyfill-support',
            path: 'node_modules/lit/polyfill-support.js',
            test: "!('attachShadow' in Element.prototype)",
            module: false,
          },
        ],
      },
    }),
    // Print bundle summary
    summary(),
    // Optional: copy any static assets to build directory
    copy({
      patterns: ['images//', 'manifest.json', 'polymer.json', 'sitemap.xml', 'sw.js', 'robots.txt', 'ads.txt', 'firebase-messaging-sw.js', 'TERMS.md' ],
    }),
  ],
  // Specifies two JS output configurations, modern and legacy, which the HTML plugin will
  // automatically choose between; the legacy build is compiled to ES5
  // and SystemJS modules
  output: [
    {
      // Modern JS bundles (no JS compilation, ES module output)
      format: 'esm',
      chunkFileNames: '[name]-[hash].js',
      entryFileNames: '[name]-[hash].js',
      dir: 'build',
      plugins: [htmlPlugin.api.addOutput('modern')],
    },
    {
      // Legacy JS bundles (ES5 compilation and SystemJS module output)
      format: 'esm',
      chunkFileNames: 'legacy-[name]-[hash].js',
      entryFileNames: 'legacy-[name]-[hash].js',
      dir: 'build',
      plugins: [
        htmlPlugin.api.addOutput('legacy'),
        // Uses babel to compile JS to ES5 and modules to SystemJS
        getBabelOutputPlugin({
          compact: true,
          presets: [
            [
              '@babel/preset-env',
              {
                targets: {
                  ie: '11',
                },
                modules: 'systemjs',
              },
            ],
          ],
        }),
      ],
    },
  ],
  preserveEntrySignatures: false,
};*/