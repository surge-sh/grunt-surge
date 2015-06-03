/*
* grunt-surge
* https://github.com/chloi/grunt-surge
*
* Copyright © 2014–2015 Chloi Inc.
* Available under the MIT license.
*/

'use strict';

module.exports = function(grunt) {

  var path  = require('path');
  var pkg   = require('../package.json');
  var surge = path.resolve(path.dirname(require.resolve('surge')), '../../.bin/surge');

  grunt.registerMultiTask('surge', pkg.description, function() {

    var done = this.async();

    if (process.platform === 'win32') {
      surge += '.cmd';
    }

    // Merge the default options with task specific ones
    var options = this.options({
      project: '',
      domain: '',
      email: '',
      endpoint: ''
      // ,
      // password: null,
      // verbose: grunt.option('verbose') || false,
    });

    grunt.util.spawn({
      cmd: surge,
      args: [
        options.project,
        options.domain
        // ,
        // '--verbose ' + options.verbose
      ],
      opts: {
        stdio: 'inherit'
      }
    }, function (err, result, code) {
        if(err) {
          grunt.fail.fatal(err.message);
        }
        done();
    });
  });
};
