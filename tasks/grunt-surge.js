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

  grunt.registerMultiTask('surge', 'Publishes files with Surge', function() {

    var done = this.async();

    // Merge the default options with task specific ones
    var options = this.options({
      dist: './dist',
      domain: null,
      // email: null,
      endpoint: null,
      // password: null,
      verbose: false,
    });

    // if(!options.email) {
    //   grunt.warn('Email is required.');
    //   done();
    //   return;
    // }
    //
    // if(!options.password) {
    //   grunt.warn('Password is required.');
    //   done();
    //   return;
    // }

    var project = path.resolve(options.dist);
    var domain = options.domain;

    surge.skin(project, domain, function (err) {
      if(err) {
        grunt.fail.fatal(err.message);
      }
      grunt.log.writeln('Deploy initiated…');
      done();
    });

  });

};
