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
                description: likes.description
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


module.exports = {
    create:create
}