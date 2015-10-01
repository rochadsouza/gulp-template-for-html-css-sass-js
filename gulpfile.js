/*jslint
    node: true */

'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var uglify = require('gulp-uglify');

/**
 * STYLES
 *
 * @param styles is the name of this task that…
 * @param function is a callback function that…
 */
gulp.task('styles', function () {
    return gulp.src('app/styles/main.scss')
        .pipe($.sourcemaps.init())
        .pipe($.sass({
            outputStyle: 'compressed',
            precision: 10,
            includePaths: ['.'],
            onError: console.error.bind(console, '\n\nSass error:\n\n')
        }))
        .pipe($.postcss([
            require('gulp-autoprefixer')({browsers: ['last 1 version']})
        ]))
        .pipe($.sourcemaps.write())
        .pipe(gulp.dest('.tmp/styles'))
        .pipe(reload({stream: true}));
});
