var gulp = require('gulp'),
    webpack = require('webpack');

gulp.task('scripts', function(callback) {
    // point webpack to config file
    webpack(require('../../webpack.config'), function(error, stats) {
        // if there's an error, log it to the console
        if (error) {
            console.log(error.toString());
        }
        // log stats to the console
        console.log(stats.toString({ colors: true }));
        callback();
    });
});