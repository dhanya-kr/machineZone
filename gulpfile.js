var gulp       = require( 'gulp' );
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var jshint = require('gulp-jshint');
var jscs = require('gulp-jscs');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var clean = require('gulp-clean');
 var runSequence = require('run-sequence');

gulp.task('clean', function () {
    return gulp.src('./build', {read: false})
        .pipe(clean());
});

gulp.task('styles', function () {
    gulp.src('./scss/*.scss')
        .pipe(sass())
        .pipe(minifyCss({compatibility: 'ie8'}))
        .pipe(gulp.dest('./build/css'));
});


gulp.task('minify-css', function() {
  return gulp.src('build/css/*.css')
    .pipe(minifyCss({compatibility: 'ie8'}))
    .pipe(gulp.dest('build/css'));
});


gulp.task('lint', function() {
  return gulp.src('./js/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('jsstyle', function() {
    return gulp.src("js/**/*.js")
      .pipe(jscs())
      .pipe(jscs.reporter());
});

gulp.task('concat-all-js', function() {
  return gulp.src('./js/*.js')
    .pipe(concat('machinezone.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./build/js'));
});


gulp.task('run-karma-unit', function(){
    var karma = require('karma').server

    karma.start({
      configFile: __dirname + '/test/config/karma.conf.js',
      singleRun: true
    });
});


// If server scripts change, restart the server and then livereload.
gulp.task( 'default', function () {
    runSequence('clean', 'styles', 'lint', 'jsstyle', 'concat-all-js');
});

