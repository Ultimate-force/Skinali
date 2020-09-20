var gulp = require('gulp');
var tinypng = require('gulp-tinypng-compress');
 
gulp.task('tinypng', function (done) {
 gulp.src('images/**/*.{png,jpg,jpeg}')
        .pipe(tinypng({
            key: 'C4ysjDDl5FwFgJLvPvjKzL08R66vWh9p',
        }))
        .pipe(gulp.dest('img'));
        done();
});