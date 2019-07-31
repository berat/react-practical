const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const prefix = require('gulp-autoprefixer');
const sass = require('gulp-sass');


gulp.task('sass',()=>{
  gulp.src('src/*.sass')
  .pipe(sass())
  .pipe(cleanCSS())
  .pipe(prefix())
  .pipe(gulp.dest('src/'))
});
  

gulp.task('default', gulp.series('sass', () => {
    gulp.watch('src/*.sass',['sass']);
}));