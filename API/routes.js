const servicesCon = require('./app/controllers/services');
const usersCon = require('./app/controllers/users');

module.exports = function(esteticaRouter){

    esteticaRouter.route('/servicos')
    
    .post(servicesCon.adicionar)

    .get(servicesCon.listarTudo);

    esteticaRouter.route('/servicos/:servico_id')

    .put(servicesCon.alterar)
    .get(servicesCon.listarUm)
    .delete(servicesCon.excluir)

    esteticaRouter.route('/usuarios')

    .get(usersCon.listarTudo)

    .post(usersCon.adicionar)

    return esteticaRouter;
}