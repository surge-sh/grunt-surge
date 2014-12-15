# grunt-surge

Easily get static builds online with Grunt.

## Getting Started

This plugin requires Grunt `~0.4.1`

If you haven’t used [Grunt](http://gruntjs.com) before, consider taking a look at the stand-alone version of  [Surge](https://github.com/sintaxi/surge).

Otherwise, be sure to check out the [Grunt’s Getting Started](http://gruntjs.com/getting-started) guide. It explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile), as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```bash
npm install --save-dev grunt-surge
```

## Usage

Next, add it to your project’s `gruntfile.js`:

```js
// Gruntfile.js

module.exports = function(grunt) {
  grunt.initConfig({
    surge: {
      options: {
        project: ['./dist/'],
        domain: 'my-subdomain'
      }
    }
  });
  grunt.loadNpmTasks('grunt-surge');
};
```
Additional, really good instructions are going to be here soon, I promise! If you need them now, [bug me via email](mailto:kenneth@chloi.io).

## Contributing

Thanks for considering contributing! There’s information about how to [get started here](CONTRIBUTING.md).

## License

[The MIT License (MIT)](LICENSE.md)

Copyright © 2014 [Chloi Inc.](http://chloi.io)
