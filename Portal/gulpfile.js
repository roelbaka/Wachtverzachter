const gulp = require('gulp')
const sass = require('gulp-sass')
const concat = require('gulp-concat')
const babel = require('gulp-babel')

gulp.task('sass', function () {
  return gulp.src('./scss/**/*.scss')
    .pipe(concat('styles.scss'))
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./build/css'))
});

gulp.task('js', () => {
  return gulp.src('./js/**/*.js')
      .pipe(babel({
          presets: ['es2015']
      }))
      .pipe(concat('bundle.js'))
      .pipe(gulp.dest('./build/js'))
});

gulp.task('watch', function() {
    gulp.watch('scss/**/*.scss', ['sass'])
    gulp.watch('js/**/*.js', ['js'])
});

gulp.task('default', ['sass', 'js', 'watch'])
