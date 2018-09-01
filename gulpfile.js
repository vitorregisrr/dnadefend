var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat');

gulp.task('minJS', function () {
    gulp.src('src/js/game/**/*.js')
        .pipe(concat('main.js'))
        .pipe(gulp.dest('dist/js'));
});
