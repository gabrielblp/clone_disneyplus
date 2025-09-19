const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');

function styles() {
  return gulp.src('./src/styles/main.scss')               // compila só main.scss
    .pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError)) // mostra erro
    .pipe(gulp.dest('./dist/css'));
}

function images() {
  return gulp.src('./src/images/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/images'));
}

exports.default = gulp.parallel(styles, images);

exports.watch = function () {
  gulp.watch('./src/styles/**/*.scss', styles);
};
