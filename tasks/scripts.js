module.exports = function (gulp, cfg, env) {
    var concat = require('gulp-concat');
    var jscs = require('gulp-jscs');
    var jshint = require('gulp-jshint');
    var uglify = require('gulp-uglify');
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

}