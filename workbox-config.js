module.exports = {
  "globDirectory": "deploy/",
  "globPatterns": [
    "**/*.{txt,js,svg,jpg,ico,png,html,json,xml,md}",
    "index.html",
    "images/*.jpg",
    "images/*.svg",
    "node_modules/**/*.js"
  ],
  "swSrc": "sw.js",
  "swDest": "deploy/sw.js",
  "globIgnores": [
    "../workbox-config.js"
  ]
};