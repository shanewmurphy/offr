const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass');
const concat = require('gulp-concat');

gulp.task('message', function () {
  return console.log('Gulp is running...');
});

gulp.task('default', function () {
  return console.log('Gulp is running...');
});

// Copy All HTML files
gulp.task('copyHtml', function () {
  gulp.src('src/*.html')
      .pipe(gulp.dest('dist'));
});


//compress images
gulp.task('imageMin', () =>
    gulp.src('src/imgs/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/imgs'))
);

// Minify JS
gulp.task('minify', function () {
  gulp.src('src/js/*.js')
      .pipe(uglify())
      .pipe(gulp.dest('dist/js'));
});

//compile Sass
gulp.task('sass', function () {
  return gulp.src('src/sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/css'));
});

//Scripts
gulp.task('scripts', function() {
  return gulp.src('src/js/*.js')
    .pipe(concat('app.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'));
});

gulp.task('default', ['message', 'copyHtml', 'imageMin', 'sass', 'scripts']);


gulp.task('watch', function(){
  gulp.watch('src/js/*.js', ['scripts']);
  gulp.watch('src/images/*', ['imageMin']);
  gulp.watch('src/sass/*.scss', ['sass']);
  gulp.watch('src/*.html', ['copyHtml']);
});