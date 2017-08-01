/**
 * @author Douglas Claumann
 * created on 28.07.2017
 */

 //dependências 
const gulp = require('gulp')
const uglify = require('gulp-uglify')
const concat = require('gulp-concat')
const uglifycss = require('gulp-uglifycss')

gulp.task('deps', ['deps.js', 'deps.css', 'deps.fonts'])

/**
 * Task responsável por carregar todas as dependências JS, comprimir, concatenar
 * e disponibilizar na pasta public/assets/js/deps.min.js
 */
gulp.task('deps.js', function(){
  gulp.src([
    'node_modules/angular/angular.min.js',
    'node_modules/angular-ui-router/release/angular-ui-router.min.js',
    'node_modules/angular-animate/angular-animate.min.js',
    'node_modules/jquery/dist/jquery.min.js',
    'node_modules/bootstrap/dist/js/bootstrap.min.js'
  ])
  .pipe(uglify())
  .pipe(concat('deps.min.js'))
  .pipe(gulp.dest('public/assets/js'))
})

/**
 * Task responsável por carregar todas as dependências CSS, comprimir código e cometários, concatenar
 * e disponibilizar na pasta public/assets/css/deps.min.css
 */
gulp.task('deps.css', function(){
  gulp.src([
    'node_modules/font-awesome/css/font-awesome.min.css',
    'node_modules/bootstrap/dist/css/bootstrap.min.css'
  ])
  .pipe(uglifycss({ "uglyComments" : true }))
  .pipe(concat('deps.min.css'))
  .pipe(gulp.dest('public/assets/css'))
})

/**
 * Task responsável por carregar todas as dependências FONTS e copiar para a pasta public/assets/fonts
 */
gulp.task('deps.fonts', function() {
  gulp.src([
    'node_modules/font-awesome/fonts/*.*'
  ])
  .pipe(gulp.dest('public/assets/fonts'))
})
