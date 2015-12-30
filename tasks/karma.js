module.exports = function (gulp, cfg, env) {
    gulp.task('run-karma-unit', function(){
        var karma = require('karma').server

        karma.start({
            configFile: __dirname + '/../test/config/karma.conf.js',
            singleRun: true
        });
    });
}