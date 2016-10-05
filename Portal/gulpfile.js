const gulp = require('gulp')
const sass = require('gulp-sass')
const concat = require('gulp-concat')

gulp.task('sass', function () {
  return gulp.src('./scss/**/*.scss')
    .pipe(concat('styles.scss'))
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./build/css'));
});

gulp.task('watch', function() {
    gulp.watch('scss/*.scss', ['sass']);
});

gulp.task('default', ['sass', 'watch']);
