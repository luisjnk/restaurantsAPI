var RestaurantsLikes = require('../models/restaurantsLikes');
var mongoose = require('mongoose');
 mongoose.Promise = require('bluebird');


var create = function (likes) {
     return new Promise(function (resolve, reject) {
        var restLikes = new RestaurantsLikes({
                id: likes.id,
                venueId: likes.venueId,
                like: likes.like,
                dislike: likes.dislike,
                description: likes.description,
                title: likes.title,
                name: likes.title,
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