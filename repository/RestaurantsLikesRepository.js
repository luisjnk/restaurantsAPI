var RestaurantsLikes = require('../models/restaurantsLikes');
var mongoose = require('mongoose');
 mongoose.Promise = require('bluebird');
var moment = require('moment');


var create = function (likes) {
     return new Promise(function (resolve, reject) {
        var now = moment(new Date()).format("DD/MM/YYYY")
        var restLikes = new RestaurantsLikes({
                venueId: likes.venueId,
                like: likes.like,
                description: likes.message,
                title: likes.title,
                name: likes.name,
                date: now
        })
        restLikes
                .save()
                .then(function(res) {      
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
        RestaurantsLikes
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