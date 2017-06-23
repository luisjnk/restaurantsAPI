var restaurantsLikesRepository  =  require('../repository/RestaurantsLikesRepository.js');
var restaurantsService  =  require('../services/restaurantsService.js');
var requestService  =  require('../services/requestService.js');

var Promise = require("bluebird");


var  getRestaurantsByLatAndLon =  function (req,res) {

    var url =  restaurantsService.createUrlByLatLong(req.params.lat,req.params.long );
        requestService
            .getRequest(url)
            .then(function(data){
               var restaurants = restaurantsService.restaurantsMapping(data.body.response);
             res.json({success: true, message:  restaurants })     
           })
           .catch (function (err) {
                res.status(400).send(err);
       });
    }

var  getRestaurantDetails =  function (req,res) {
    var url =  restaurantsService.createUrlByRestaurantId(req.params.restaurantId);
        requestService
            .getRequest(url)
            .then(function(data){
             res.json({success: true, message:  data.body.response.venue })     
           })
           .catch (function (err) {
                res.status(400).send(err);
       });
    }

var  createRestaurantsLikes =  function (req,res) {
        restaurantsLikesRepository
            .create(req.body)
            .then(function(data){
                console.log('dataaa', data)
             res.json({success: true, message:  data })     
           })
           .catch (function (err) {
               console.log('new err', err)
                res.status(400).send(err);
       });
    }        

var findRestaurantLikes = function (req, res) {
    restaurantsLikesRepository
            .find(req.params.restaurantId)
            .then(function(data){
             res.json({success: true, message:  data })     
           })
           .catch (function (err) {
               console.log('errrr',err)
                res.status(400).send(err);
       });
}    

module.exports = {
    getRestaurantsByLatAndLon : getRestaurantsByLatAndLon,
    getRestaurantDetails : getRestaurantDetails,
    createRestaurantsLikes : createRestaurantsLikes,
    findRestaurantLikes : findRestaurantLikes
}