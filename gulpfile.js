var gulp = require('gulp');
var concat = require('gulp-concat');
var cssMin = require('gulp-css');
var uglify = require('gulp-uglify');
gulp.task('default', function(){
  console.log("gulp is running");
})
gulp.task('css',function(){

  gulp.src([
    'stylesheets/combined_css.css',
    'stylesheets/app.css'
  ])
    .pipe(concat('app.css'))
    .pipe(cssMin())
    .pipe(gulp.dest('stylesheets'))

});
