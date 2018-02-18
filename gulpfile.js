var gulp = require('gulp');
var concat = require('gulp-concat');
var cssMin = require('gulp-css');
var uglify = require('gulp-uglify');
var htmlmin = require('gulp-htmlmin');
gulp.task('css',function(){

  gulp.src([
    './stylesheets/bootstrap.css',
    './stylesheets/app.css',
    './stylesheets/combined_css.css'
  ])
    .pipe(concat('app.css'))
    .pipe(cssMin())
    .pipe(gulp.dest('./stylesheets'))

});


gulp.task("htmlmin", function(){
  gulp.src("./index.html")
  .pipe(htmlmin({collapseWhitespace:true}))
  .pipe(gulp.dest("minified"));



});
gulp.task('default', [
  'css',
  'htmlmin'
]);
