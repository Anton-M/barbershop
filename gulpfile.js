'use strict'

var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var less        = require('gulp-less');

// Static Server + watching less/html files
gulp.task('serve', ['less'], function() {

    browserSync.init({
        server: "./app"
    });

    gulp.watch("app/less/*.less", ['less']);
    gulp.watch("app/*.html").on('change', browserSync.reload);
});

// Compile less into CSS & auto-inject into browsers
gulp.task('less', function() {
    return gulp.src("app/less/main.less")
        .pipe(less())
        .pipe(gulp.dest("app/css"))
        .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);
