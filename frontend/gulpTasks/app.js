/**
 * @author Douglas Claumann
 * created on 28.07.2017
 */

//dependências
const gulp = require('gulp')
const htmlmin = require('gulp-htmlmin')
const uglify = require('gulp-uglify')
const concat = require('gulp-concat')
const uglifycss = require('gulp-uglifycss')


gulp.task('app', ['app.html', 'app.css', 'app.js', 'app.assets'])

/**
 * Task responsável por carregar todos os arquivos HTML dentro da pasta app, comprimir,
 * e disponibilizar na pasta public
 */
gulp.task('app.html', function(){
  gulp.src('app/**/*.html')
    .pipe(htmlmin({collapseWhitescape: true}))
    .pipe(gulp.dest('public'))
})

/**
 * Task responsável por carregar todos os arquivos JS dentro da pasta app, comprimir código, concatenar
 * e disponibilizar na pasta public/assets/js/app.min.js
 */
gulp.task('app.js', function(){
  gulp.src('app/**/*.js')
    .pipe(uglify())
    .pipe(concat('app.min.js'))
    .pipe(gulp.dest('public/assets/js'))
})

/**
 * Task responsável por carregar todos os arquivos CSS dentro da pasta app, comprimir código e cometários, concatenar
 * e disponibilizar na pasta public/assets/css/app.min.css
 */
gulp.task('app.css', function(){
  gulp.src('app/**/*.css')
    .pipe(uglifycss({ "uglyComments" : true }))
    .pipe(concat('app.min.css'))
    .pipe(gulp.dest('public/assets/css'))
})

/**
 * Task responsável por carregar todos os arquivos estáticos ex: imagens.
 * e copiar para a pasta public/assets
 */
gulp.task('app.assets', function(){
  gulp.src('assets/**/*.*')
    .pipe(gulp.dest('public/assets'))
})
