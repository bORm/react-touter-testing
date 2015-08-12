'use strict';

var gulp = require('gulp'),
    babelify = require('babelify'),
    browserify = require('browserify'),
    browserSync = require('browser-sync'),
    source = require('vinyl-source-stream');

var vendors = [
  'react',
  'react-router'
];

gulp.task('vendors', function () {
    var stream = browserify({
            debug: false,
            require: vendors
        });

    stream.bundle()
          .pipe(source('vendors.js'))
          .pipe(gulp.dest('dist'));

    return stream;
});

gulp.task('app', function () {
    var stream = browserify({
            entries: ['./app.js'],
            transform: [babelify],
            debug: false,
            extensions: ['.js'],
            fullPaths: false
        });

    vendors.forEach(function(vendor) {
        stream.external(vendor);
    });

    return stream.bundle()
                 .pipe(source('app.js'))
                 .pipe(gulp.dest('dist'));
});

gulp.task('watch', function () {
  gulp.watch(['./app.js'], ['app']);
});

gulp.task('browsersync',['vendors','app'], function () {
    browserSync({
  		server: {
  			baseDir: './'
  		},
  		notify: false,
  		browser: ["google chrome"]
	});
});

gulp.task('default',['browsersync', 'watch'], function() {});
