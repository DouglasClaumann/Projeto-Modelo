/**
 * @author Douglas Claumann
 * created on 01.08.2017
 */

const server = require('./config/server')
require('./config/database')
require('./config/routes')(server)
