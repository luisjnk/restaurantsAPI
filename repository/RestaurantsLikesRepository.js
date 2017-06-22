var RestaurantsLikes = require('../models/restaurantsLikes');
var mongoose = require('mongoose');
 mongoose.Promise = require('bluebird');
var moment = require('moment');


var create = function (likes) {
     return new Promise(function (resolve, reject) {
        var now = moment("DD-MM-YYYY"); 
        var restLikes = new RestaurantsLikes({
                id: likes.id,
                venueId: likes.venueId,
                like: likes.like,
                description: likes.description,
                title: likes.title,
                name: likes.title,
                date: now
        })
        restLikes
                .save(likes)
                .then(function(res) {      
                        console.log(res);
                        resolve(res)
                  })
              .catch(function(err){
                    console.log('err', err)
                    reject(err);
         })  

    });
}

var find = function (restaurantId) {
     return new Promise(function (resolve, reject) {
        restLikes
                .find({venueId : restaurantId})
                .then(function(res) {      
                        console.log(res);
                        resolve(res)
                  })
              .catch(function(err){
                    console.log('err', err)
                    reject(err);
         })  

    });
}


module.exports = {
    create:create,
    find:find
}