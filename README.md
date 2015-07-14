# grunt-surge

Easily deploy to a CDN with Grunt.

## Getting Started

This plugin requires Grunt `~0.4.1`

If you haven’t used [Grunt](http://gruntjs.com) before, consider taking a look at the stand-alone version of  [Surge](https://github.com/sintaxi/surge).

Otherwise, be sure to check out the [Grunt’s Getting Started](http://gruntjs.com/getting-started) guide. It explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile), as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```bash
npm install --save-dev grunt-surge
```

## Usage

Next, add it to your project’s `Gruntfile.js`:

```js
// Gruntfile.js

module.exports = function(grunt) {
  grunt.initConfig({
    surge: {
      'my-project-name': {
        options: {
          project: 'dist/',
          domain: 'my-project-name.surge.sh'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-surge');
};
```

Now you can register a Grunt task to deploy the project to the specified domain:

```js
grunt.registerTask('deploy', ['surge']);
```

## Examples

- [@sillygwailo’s Gruntfile](https://gist.github.com/sillygwailo/2216983a15d0c163a01f) will publish to Surge with a notification
- [@kennethormandy’s Gruntfile for Style and Class](https://github.com/kennethormandy/styleandclass.ca/blob/ko-deploy/Gruntfile.js) will compile a Jekyll site and then publish to Surge
- [@davethegr8’s starter pack Gruntfile](https://github.com/davethegr8/grunt-surge-starter/blob/master/Gruntfile.js) uses Harp to serve projects locally and automatically precompile Markdown, Sass, CoffeeScript, and more
- Your Gruntfile here? Just [open an issue](https://github.com/chloi/grunt-surge/issues).

## Contributing

Thanks for considering contributing! There’s information about how to [get started here](CONTRIBUTING.md).

## License

[The MIT License (MIT)](LICENSE.md)

Copyright © 2014–2015 [Chloi Inc.](http://chloi.io)
