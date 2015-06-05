/* Notes:
   - gulp/tasks/browserify.js handles js recompiling with watchify
   - gulp/tasks/browserSync.js watches and reloads compiled files
*/

var gulp     = require('gulp');
var config   = require('../config');
var browserSync = require('browser-sync');

gulp.task('watch', ['watchify','browserSync'], function() {
  gulp.watch(config.jest.watch_src, ['jest']);

  gulp.watch(['./**/*.html', './public/build/*.js']).on('change', browserSync.reload);
  // Watchify will watch and recompile our JS, so no need to gulp.watch it
});
