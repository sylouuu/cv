/*jslint browser: true, devel: true, plusplus: true, unparam: true, vars: true, white: true*/
/*global require*/

(function() {

    'use strict';

    // Gulp
    // ------------------------------------------------------------------------------------------------------
    // ------------------------------------------------------------------------------------------------------
    var gulp = require('gulp');

    // Importing Gulp dependencies
    // ------------------------------------------------------------------------------------------------------
    var less    = require('gulp-less'),
        cssnano = require('gulp-cssnano');

    // Source paths
    // ------------------------------------------------------------------------------------------------------
    var assets  = 'assets/';

    // Tasks configuration
    // ------------------------------------------------------------------------------------------------------
    var tasks = {
        'less_main': {
            source: assets +'less/main.less',
            dest:   assets +'css/'
        }
    };

    // LESS/CSS
    // ------------------------------------------------------------------------------------------------------
    gulp.task('less_main', function() {

        return gulp
            .src(tasks.less_main.source)
            .pipe(less())
            .pipe(cssnano())
            .pipe(gulp.dest(tasks.less_main.dest));

    });

    // Watching files
    // ------------------------------------------------------------------------------------------------------
    gulp.task('watch', function() {

        // LESS main
        // --------------------------------------------------------------------------------------------------
        gulp.watch(tasks.less_main.source, ['less_main']);

    });

    // Default tasks (called when running `gulp` from cli)
    // ------------------------------------------------------------------------------------------------------
    gulp.task('default', [
        'less_main',
        'watch'
    ]);

}());
