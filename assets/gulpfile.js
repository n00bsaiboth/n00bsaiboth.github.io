const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const cleanCSS = require('gulp-clean-css');
const iconfont = require('gulp-iconfont');
const iconfontCSS = require('gulp-iconfont-css');
const fontName = 'bootstrap-icon-font';

gulp.task('sass', ()  => {
    return gulp.src("./scss/*.scss")
        .pipe(sass())
        .pipe(concat('custom.min.css'))
        .pipe(cleanCSS())
        .pipe(gulp.dest("./css/"))
});

gulp.task('start', gulp.series('sass', function() {
	gulp.watch("./assets/scss/*.scss", gulp.series('sass'));
}));

gulp.task('default', gulp.series('start'));