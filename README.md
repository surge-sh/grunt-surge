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
      options: {
        project: 'dist/',
        domain: 'my-project-name.surge.sh'
      }
    }
  });

  grunt.loadNpmTasks('grunt-surge');
};
```

Now you can register a Grunt task to deploy the project to the specified domain:

```
grunt.registerTask('deploy', ['surge']);
```

## Contributing

Thanks for considering contributing! There’s information about how to [get started here](CONTRIBUTING.md).

## License

[The MIT License (MIT)](LICENSE.md)

Copyright © 2014–2015 [Chloi Inc.](http://chloi.io)
