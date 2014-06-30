'use strict';
/* global require */

var dir = 'public',
  paths = {
    dest: dir,
    css: dir + '/stylesheets/screen.css',
    html: dir + '/index.html'
};

var gulp = require('gulp'),
    minifyHTML = require('gulp-minify-html'),
    inlineCss = require('gulp-inline-css');

gulp.task('minify-html', function() {
  var opts = {
    comments: false,
    spare: false
  };

  gulp.src(paths.html)
    .pipe(minifyHTML(opts))
    .pipe(gulp.dest(paths.dest))
});

gulp.task('inline-css', function() {
  return gulp.src(paths.html)
    .pipe(inlineCss({
      applyStyleTags: true,
      applyLinkTags: true,
      removeStyleTags: true,
      removeLinkTags: true
    }))
    .pipe(gulp.dest(paths.dest));
});

// minifyHTML makes svg elements invalid
gulp.task('default', [/*'minify-html'*/], function() {
  
});