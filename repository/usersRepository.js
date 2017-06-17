/**
 * Created by junqu on 24/08/2015.
 */
var Users = require('../models/users')
var q = require('q');

var create = function(usuario){

    var deferred =  q.defer();
    var user = new Users({
        Login: usuario.Login,
        Password: usuario.Password,
        Email: usuario.Email,
        IdPersonalType: usuario.IdPersonalType
    })

    user.save(function (erro,result) {
        if (erro) {
            deferred.reject('Ocorre um erro ao tentar criar usuario');
        }
        else
        {
            deferred.resolve(result)
        }
    })
    return deferred.promise;
};

var find = function (login,password) {
    var deferred =  q.defer();
    var query = {
                Login : login,
                Password: password
            };


    Users.find(query,function (erro, result) {
        if(erro  || result.length == 0) {
            deferred.reject('Usuario ou Senha incorretos');
        }
        else{
            deferred.resolve(result)
        }
    })
    return deferred.promise;
}

var findAllUsers = function(){
    var deferred =  q.defer();

    Users.find(function (erro, result) {
        if(erro)deferred.reject(erro)
        else
            deferred.resolve(result)
       })
    return deferred.promise;

}
module.exports = {
   create:create,
    find:find,
    findAllUsers:findAllUsers
}