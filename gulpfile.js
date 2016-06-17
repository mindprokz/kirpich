'use strict'

var gulp = require('gulp'),
	minifyCss = require('gulp-minify-css'),
	autoprefixer = require('gulp-autoprefixer'),
	uglify = require('gulp-uglify'),
	sass = require('gulp-sass'),
	livereload = require('gulp-livereload'),
	rename = require('gulp-rename');

// task for change html
gulp.task('html',function(){
	gulp.src('index.html');
});

// task for css
gulp.task('css', function () {
	gulp.src('css/style.sass')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(autoprefixer('last 10 version'))
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest('css/'));
});

// task for JS 
gulp.task('js', function() {
  return gulp.src('js/common.js')
    .pipe(uglify())
    .pipe(rename('common.min.js'))
    .pipe(gulp.dest('js/'));
});

// taks for watch change files
gulp.task('watch', function(){
	gulp.watch('css/style.css', ['css']);
	gulp.watch('index.html', ['html']);
	gulp.watch('js/*.js', ['js']);
});

// default task
gulp.task('default', ['html','css','js','watch']);