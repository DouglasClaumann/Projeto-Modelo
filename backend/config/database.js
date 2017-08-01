
/**
 * @author Douglas Claumann
 * created on 01.08.2017
 */

const mongoose = require('mongoose')
mongoose.Promise = require('bluebird');
/**
 * abre uma conexão com o banco de dados e exporta
 */
module.exports = mongoose.connect('mongodb://localhost/db_finance', { useMongoClient: true })


/**
 * Mensagens de erros padronizadas
 */
mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatório."
mongoose.Error.messages.Number.min = "O '{VALUE}' informado é menor que o limite mínimo de '{MIN}'."
mongoose.Error.messages.Number.max = "O '{VALUE}' informado é maior que o limite máximo de '{MAX}'."
mongoose.Error.messages.String.enum = "'{VALUE}' não é válido para o atributo '{PATH}'."
