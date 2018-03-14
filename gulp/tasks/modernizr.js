var gulp = require('gulp'),
    modernizr = require('gulp-modernizr');
/* 
gulp-modernizr package will check css & js files for features
we need to test & include adjusted modernizr js file
*/
gulp.task('modernizr', function() {
  return gulp.src(['./src/css/**/*.css', './src/js/**/*.js'])
        .pipe(modernizr({
          "options": [
            "setClasses"
          ]
        }))
        .pipe(gulp.dest('./src/js/vendor'));
});