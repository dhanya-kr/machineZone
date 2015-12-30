var gulp       = require( 'gulp' );
_ = require('lodash');
var requireDir = require('require-dir');
var runSequence = require('run-sequence');

//Load all tasks
var tasks = requireDir("tasks/")

//Get environment, for environment-specific activities
env = process.env.NODE_ENV || "development"

//Loop through all tasks and create them
_.each(tasks, function (task) {
  task(gulp, {}, env)
})

// If server scripts change, restart the server and then livereload.
gulp.task( 'default', function () {
    runSequence('clean', 'styles', 'lint', 'jsstyle', 'concat-all-js');
});

gulp.task( 'build', function () {
    runSequence('clean', 'styles', 'lint', 'jsstyle', 'concat-all-js', 'run-karma-unit');
});