var gulp = require('gulp');
var jest = require('gulp-jest');
var handleErrors = require('../util/handleErrors');
var config = require('../config').jest;

/* * *
 * Front-end Testing...
 * * */
gulp.task('jest', function () {
  return gulp.src(config.src)
             .pipe(jest( config.settings ))
             .on('error', handleErrors);
});
