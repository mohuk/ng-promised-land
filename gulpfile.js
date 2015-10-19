var gulp 	= require('gulp'),
	connect = require('gulp-connect');

var __root = './';
var __src = './src/*.*'


gulp.task('connect', function() {
  connect.server({
    root: './',
    livereload: true,
    port: 8000
  });
});

gulp.task('all', function () {
  gulp.src(__src)
    .pipe(connect.reload());
});

gulp.task('watch', function () {
  gulp.watch([__src], ['all']);
});

gulp.task('default', ['connect', 'watch']);
