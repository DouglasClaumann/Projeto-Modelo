/**
 * @author Douglas Claumann
 * created on 01.08.2017
 */
const restful = require('node-restful')
const mongoose = restful.mongoose

/**
 * permissoes do usuário
 */
const permissionSchema = new mongoose.Schema({
  name: {type: String, required: [true, 'Infome o nome da permissão!']},
  value: {type: Number, min: 0, required: [true, 'informe o grau de permissão!']}
})

/**
 * Dados dos usuários
 */
const userSchema = new mongoose.Schema({
  name: {type: String, required: [true, 'Informe o seu nome completo!']},
  username: {type: String, required: [true, 'Informe seu nome de usuário!']},
  email: {type: String, required: [true, 'Informe seu email']},
  permissions: [permissionSchema],
  status: {type: String, required: true, uppercase: true,
    enum: ['ATIVO','INATIVO'], default: 'ATIVO'},
  created_at: {type: Date, required: true, default: Date.now}

})



module.exports = restful.model('User', userSchema)
