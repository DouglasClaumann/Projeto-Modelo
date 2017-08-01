/**
 * @author Douglas Claumann
 * created on 28.07.2017
 */

//dependências
const gulp = require('gulp')
const watch = require('gulp-watch')
const webserver = require('gulp-webserver')

/**
 * task responsavel por recarregar o browser quando algum arquivo for alterado
 * e abrir o browser automáticamente na porta 3000
 */
gulp.task('server', ['watch'], function(){
  gulp.src('public').pipe(webserver({
    livereload: true,
    port: 3000,
    open: true
  }))
})

/**
 * task responsavel por monitorar as modificações de todos arquivos dentro da
 * pasta app
 */
gulp.task('watch', function(){
  watch('app/**/*.html', function(){
    gulp.start('app.html')
  })
  watch('app/**/*.js', function(){
    gulp.start('app.js')
  })
  watch('app/**/*.css', function(){
    gulp.start('app.css')
  })
  watch('assets/**/*.assets', function(){
    gulp.start('app.assets')
  })
})
