var gulp = require('gulp'),
    watch = require('gulp-watch'),
    browserSync = require('browser-sync').create();

gulp.task('watch', function() {
  // Init for static website
  browserSync.init({
    server: {
      baseDir: './src'
    }
  });
  /* Init for local webserver
  browserSync.init({
        proxy: "yourlocal.dev"
    });
  */

  // Watch for HTML files & reaload page on change
  watch('./src/**/*.html', function() {
    browserSync.reload();
  });
  // Watch for scss files, run styles task which compiles scss to css & inject css styles on change
  watch('./src/scss/**/*.scss', function() {
    gulp.start('cssInject');
  });
  // Watch for changes in js files & run scripts task (webpack)
  watch('./src/js/**/*.js', function() {
    gulp.start('scriptsReload');
  });
});

gulp.task('cssInject', ['styles'], function() {
  return gulp.src('./src/css/*.css')
    .pipe(browserSync.stream());
});

gulp.task('scriptsReload', ['scripts'], function() {
  browserSync.reload();
});