const mongoose = require("mongoose");
const Squema = mongoose.Schema;

const usuarioSchema = new  Squema({
    nome: {
        type: String,
        required: [true, '`{PATH}` é obrigatório.'],
        minlength: [3, '`{PATH}` muito curto.'],
        maxlength: [60, 'Excedeu o limite do campo `{PATH}` que é de `{MAXLENGTH}`.']
     },
     email: {
        type: String,
        maxlength: [200, 'Excedeu o limite do campo `{PATH}` que é de `{MAXLENGTH}`.']
     },
     senha: {
        type: String
      
     },
});

module.exports = mongoose.model('Usuarios', usuarioSchema, 'usuarios');