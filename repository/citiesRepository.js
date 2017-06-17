/**
 * Created by junqu on 24/08/2015.
 */
var City = require('../models/cities');
var mongoose = require('mongoose');
 mongoose.Promise = require('bluebird');


var find = function (city) {
     return new Promise(function (resolve, reject) {
        var regexValue='\.*'+ city +'\.';

        var query = City
                        .find({name : new RegExp(regexValue, 'i')});
        
        query                
              .then(function(cities) {      
                    resolve(cities)
                  })
              .catch(function(err){
                    reject(err);
         })  

    });
}


module.exports = {
    find:find
}