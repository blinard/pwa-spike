var gulp = require('gulp');
var webserver = require('gulp-webserver');
var typescript = require('gulp-typescript');
var sourcemaps = require('gulp-sourcemaps');

var tsProj = typescript.createProject('./tsconfig.json');
 
gulp.task('webserver', function() {
    gulp.src('src')
        .pipe(webserver({
            livereload: true,
            directoryListing: true,
            open: true
        }));
});

gulp.task('build', function(cb) {
    return tsProj.src()
        .pipe(sourcemaps.init())
        .pipe(tsProj())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest("./src"));
});

gulp.task('watch', function() {
    gulp.watch('./src/**/*.ts', ['build'])
});

gulp.task('default', ['build', 'webserver']);