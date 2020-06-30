const mongoose = require("mongoose");
const Squema = mongoose.Schema;

const serviceSchema = new  Squema({
    nome: {
        type: String,
        required: [true, '`{PATH}` é obrigatório.'],
        minlength: [3, '`{PATH}` muito curto.'],
        maxlength: [60, 'Excedeu o limite do campo `{PATH}` que é de `{MAXLENGTH}`.']
     },
     descricao: {
        type: String,
        maxlength: [200, 'Excedeu o limite do campo `{PATH}` que é de `{MAXLENGTH}`.']
     },
     preco: {
        type: Number,
        min: [0, '`{PATH}` deve ser maior ou igual a `{MIN}`.']
     },
});

module.exports = mongoose.model('Service', serviceSchema, 'servicos');