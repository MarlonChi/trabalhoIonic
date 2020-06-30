const mongoose = require('mongoose');
const Service = require('../models/services');
const ObjectId = mongoose.Types.ObjectId;

module.exports = {
    adicionar: function (req, res) {
      var service = new Service(req.body);
      const error = service.validateSync();
       if (error) {
           console.log('Mongoose Validation identificou problemas.');
           res.status(400).json(error);
           return;
       }

       service.save(function(error, newService) {
            if (error) {
                res.status(500).json(error); 
                return;
            }
            res.status(201).json(newService);
        });
   },
   
   listarTudo: function (req, res) {
        Service.find(function (error, services) {
            if (error) {
                res.send('Erro ao tentar recuperar os Produtos disponíveis.', error);
            } else {
                res.json(services);
            }
        });
    },
    alterar: function(req, res){
        Service.findById(req.params.servico_id, function(error, servico){
            if(error){
                res.send('Erro ao recuperar Serviço pelo ID informado', error);
            }else if(servico){
                servico.nome = req.body.nome;
                servico.descricao = req.body.descricao;
                servico.preco = req.body.preco;

                servico.save(function(error){
                    if(error){
                        res.send('Erro ao tentar atualizar o serviço ', error);
                    }
                    res.json({ message: 'Serviço alterado com sucesso!'});
                });
            }else{
                res.json({
                    message: 'ID do serviço não encontrado.',
                    id: req.params.servico_id
                })
            }
        });
    },
    listarUm: function (req, res) {
        Service.findById(req.params.servico_id, function (error, servico) {
            if (error) {
                res.send('Erro ao recuperar Serviço pelo ID informado', error);
            } else if (servico){
                res.json(servico);
            } else {
            res.json({  
                message:'ID do serviço não encontrado.',
                id: req.params.servico_id
            });
            }
        });
    },
    excluir: function(req, res) {
        Service.deleteOne({ _id: req.params.servico_id },
            function (error, resultado) {
                if(error) {
                    res.send('Erro ao tentar excluir um Serviço...: ' + error);
                }

                if (resultado.n === 0) {
                    res.json( {
            message: 'O serviço informado não existe.'
            });
                } else {
                    // resposta OK
                    res.json({message: 'Serviço excluído com sucesso.'});
                }
            });
    }
}