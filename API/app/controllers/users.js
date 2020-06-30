const mongoose = require('mongoose');
const User = require('../models/users');
const ObjectId = mongoose.Types.ObjectId;

module.exports = {
    adicionar: function (req, res) {
      var user = new User(req.body);
      const error = user.validateSync();
       if (error) {
           console.log('Mongoose Validation identificou problemas.');
           res.status(400).json(error);
           return;
       }

       user.save(function(error, newUser) {
            if (error) {
                res.status(500).json(error); 
                return;
            }
            res.status(201).json(newUser);
        });
   },
   
   listarTudo: function (req, res) {
     User.find(function (error, users) {
            if (error) {
                res.send('Erro ao tentar recuperar os usuários disponíveis.', error);
            } else {
                res.json(users);
            }
        });
    }
}