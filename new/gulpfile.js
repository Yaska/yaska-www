var gulp = require('gulp');
var gutil = require('gulp-util');
var notify = require('gulp-notify');
var livereload = require('gulp-livereload');
var lr = require('tiny-lr');
var server = lr();

var sass = require('gulp-sass');
var neat = require('node-neat').includePaths;

gulp.task('bourbon', function() {
  gulp.src('./css/scss/*.scss')
    .pipe(sass({
      includePaths: ['styles'].concat(neat)
      //errLogToConsole: true
    }))
    .on('error', notify.onError('==ERROR=='))
    .pipe(gulp.dest('./stylesheets'))
    .pipe(livereload(server));
});

gulp.task('html', function() {
  return gulp.src("./*.html")
    //.pipe(gulp.dest('dist/'))
    .pipe(livereload(server));
});

gulp.task('watch', ['bourbon'], function () {
  server.listen(35729, function(err) {
    if (err) {
      console.log(err);
    }
    gulp.watch('./css/scss/*.scss', ['bourbon']);
    gulp.watch('./index.html', ['html']);
  });
});

gulp.task('default', ['watch']);