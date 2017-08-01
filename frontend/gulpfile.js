/**
 * @author Douglas Claumann
 * created on 28.07.2017
 */

const gulp = require('gulp')
const util = require('gulp-util')

require('./gulpTasks/app')
require('./gulpTasks/deps')
require('./gulpTasks/server')

/**
 * Task responsável por executar o serviço em modo de dev ou production
 * para utilização dos watches
 */
gulp.task('default', function(){
  if(util.env.production){
    gulp.start('deps', 'app')
  }else{
    gulp.start('deps', 'app', 'server')
  }
})
