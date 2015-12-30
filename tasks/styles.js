module.exports = function (gulp, cfg, env) {
    var minifyCss = require('gulp-minify-css');
    var sass = require('gulp-sass');
    gulp.task('styles', function () {
    gulp.src('./scss/*.scss')
        .pipe(sass())
        .pipe(minifyCss({compatibility: 'ie8'}))
        .pipe(gulp.dest('./build/css'));
    });
}