var gulp = require('gulp');
var concat = require('gulp-concat');
var cssMin = require('gulp-css');
var uglify = require('gulp-uglify');
var htmlmin = require('gulp-htmlmin');
gulp.task('css',function(){

  gulp.src([
    './stylesheets/aos.css',
    './stylesheets/bootstrap.css',
    './stylesheets/combined_css.css',
    './stylesheets/app.css'
  ])
    .pipe(concat('app.css'))
    .pipe(cssMin())
    .pipe(gulp.dest('./stylesheets'))

});

gulp.task('scripts', function(){
  gulp.src([
    './scripts/aos.js',
    './scripts/jquery.js',
    './scripts/bootstrap.js'
  ])
  .pipe(concat('libs.js'))
  .pipe(uglify())
  .pipe(gulp.dest('./scripts'));
});

gulp.task("htmlmin", function(){
  gulp.src("./minified/index.html")
  .pipe(htmlmin({collapseWhitespace:true}))
  .pipe(gulp.dest("./"));
});


gulp.task('default', ['css','htmlmin','scripts']);
