'use strict';
/* global require */

var dir = 'public',
  paths = {
    dest: dir,
    css: dir + '/stylesheets/screen.css',
    html: dir + '/index.html',
    js: dir + '/javascripts/github.js'
};

var fs = require('fs'),
    gulp = require('gulp'),
    replace = require('gulp-replace');

gulp.task('replace-css', function() {
  return gulp.src(paths.html)
    .pipe(replace(/<link(.*)screen.css(.*)>/, function(){
      var _file = fs.readFileSync(paths.css, 'utf-8');
      return '<style>\n' + _file + '\n</style>';
    }))
    .pipe(gulp.dest(paths.dest));
});

gulp.task('replace-js', function() {
  return gulp.src(paths.html)
    .pipe(replace(/<script(.*)github.js(.*)(>.*>)/, function(){
      var _file = fs.readFileSync(paths.js, 'utf-8');
      return '<script>\n' + _file + '\n</script>';
    }))
    .pipe(gulp.dest(paths.dest));
});

gulp.task('replace', ['replace-css'], function() {
  gulp.start('replace-js');
});

gulp.task('default', ['replace'], function() {  
});