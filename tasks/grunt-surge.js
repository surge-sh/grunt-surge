/*
 * grunt-surge
 * https://github.com/chloi/grunt-surge
 *
 * Copyright © 2014 Chloi Inc.
 * Available under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  var surge = require('surge');
  var path  = require('path');

  grunt.registerMultiTask('surge', 'Deploy static Grunt builds with Surge.', function() {

    var done = this.async();

    // Merge the default options with task specific ones
    var options = this.options({
      dist: '',
      domain: '',
      email: '',
      endpoint: '',
      // password: null,
      verbose: grunt.option('verbose') || false,
    });

    var project = options.dist;
    var domain = options.domain;
    var verbose = options.verbose;

    grunt.util.spawn({
      cmd: 'surge',
      args: [
        '--project=' + project,
        '--domain=' + domain,
        '--verbose=' + verbose
      ],
      opts: {
        stdio: 'inherit'
      }
    }, function (err, result, code) {
      if(err) {
        grunt.fail.fatal(err.message);
      }
      // grunt.log.writeln('Deployed and live at ' + domain + '.');
      done();
    });

  });

};
