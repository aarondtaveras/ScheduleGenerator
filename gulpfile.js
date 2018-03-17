var gulp = require("gulp");
var browserify = require("browserify");
var source = require('vinyl-source-stream');
var watchify = require("watchify");
var tsify = require("tsify");
var gutil = require("gulp-util");
var paths = {
    pages: ['src/views/*.html'],
    modules: ['node_modules/fullcalendar/dist/fullcalendar.css']
};

var watchedBrowserify = watchify(browserify({
    basedir: '.',
    debug: true,
    entries: ['src/schedule-generator.ts'],
    cache: {},
    packageCache: {}
}).plugin(tsify));

gulp.task('copy-html', function () {
    return gulp.src(paths.pages)
        .pipe(gulp.dest('dist'));
});

gulp.task('copy-module-dependencies', function(){
    return gulp.src(paths.modules)
               .pipe(gulp.dest('dist/css'));
});

function bundle() {
    return watchedBrowserify
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest("dist"));
}

gulp.task("default", ["copy-html", 'copy-module-dependencies'], bundle);
watchedBrowserify.on("update", bundle);
watchedBrowserify.on("log", gutil.log);