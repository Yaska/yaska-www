var gulp = require('gulp');
var gutil = require('gulp-util');
var notify = require('gulp-notify');
var livereload = require('gulp-livereload');
var lr = require('tiny-lr');
var server = lr();

var sass = require('gulp-sass');
var neat = require('node-neat').includePaths;

gulp.task('bourbon', function() {
  gulp.src('./app/assets/css/scss/**/*.scss')
    .pipe(sass({
      includePaths: ['styles'].concat(neat),
      //errLogToConsole: true,
      onError: function(err) {
        return notify().write(err);
      }
    }))
    .pipe(gulp.dest('./public/css/'))
    .pipe(livereload(server));
});

gulp.task('backoffice', function() {
  gulp.src('./app/assets/css/scss/backoffice.scss')
    .pipe(sass({
      //includePaths: ['styles'].concat(neat)
      //errLogToConsole: true
    }))
    //.on('error', function(e) {
      //console.log(e.err.stack);
    //})
    .pipe(gulp.dest('./public/css/'))
    .pipe(livereload(server));
});

gulp.task('html', function() {
  return gulp.src("./app/views/**/*.php")
    //.pipe(gulp.dest('dist/'))
    .pipe(livereload(server));
});

gulp.task('watch', ['bourbon'], function () {
  server.listen(35729, function(err) {
    if (err) {
      console.log(err);
    }
    gulp.watch('./app/assets/css/scss/**/*.scss', ['bourbon']);
    gulp.watch('./app/views/**/*.php', ['html']);
  });
});

gulp.task('default', ['watch']);