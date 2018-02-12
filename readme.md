# Nails Preview Application

This Vuejs application allows users to preview various combinations of nail designs.

This project is built using [Bulp](https://chrisdemars.github.io/bulp/), a wrapper for gulp with all the basic stuff you need for a basic project.



Within this package is a `src` directory and a `dist` directory for non-compiled and production ready code. The file structure is already set up and includes Boostrap as a starting point, if you are in to that sort of thing. Just add code to your `*.scss` files, `*.html` files, and `*.js` files, run `gulp` in the terminal, and watch MAGIC unfold before your eyes!

## Installation

Clone or download the repo to your local machine.<br>
* `git clone https://github.com/chrisdemars/bulp-starter-package.git PROJECTNAME`

Open the directory with the project.
* `cd PROJECTNAME`

Run npm install.<br>
* `npm install`

Open the project in your favorite editor.<br>
* `atom .`

Open the terminal and run `gulp` so that it starts running before you start making any changes.

* Every time you start working on your project, make sure to run `gulp` so all the files can be watched for changes and the tasks can run against those files.

### Note

In the gulpfile.js, browser sync is calling chrome canary. If you don't have or use chrome canary or chrome at all, you can change it to just google chrome or whatever browser you wish.<br>
```
    browserSync.init({
        server: './',
        browser: "google chrome canary"
    });
```

## VueJs

Make sure that you either include a local copy of vueJS or link to the CDN in the head like this: `<script src="https://cdn.jsdelivr.net/npm/vue"></script>`

Read the vueJS documentation [here](https://vuejs.org/)
