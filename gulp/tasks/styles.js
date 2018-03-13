var gulp = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    sass = require('gulp-sass'),
    wait = require('gulp-wait');

gulp.task('styles', function() {
  return gulp.src('./src/scss/**/*.scss')
    //delay hack to prevent sass from loging errors
    .pipe(wait(500))
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(gulp.dest('./src/css'));
});