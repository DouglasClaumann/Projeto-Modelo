const User = require ('./user')

/**
 * Metodos permitidos para esta rota
 */
User.methods(['get','post','put','delete'])

/**
 * Retorna as informações
 */
User.updateOptions({new: true, runValidators: true})

User.route('count', function(req, res,next){
  User.count(function(error,value){
    if(error) {
      res.status(500).json({errors: [error]})
    } else {
      res.json({value})
    }
  })
})


module.exports = User
