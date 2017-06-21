var Promise = require("bluebird");
var config = require("../config/foursquarepiconfig");
var restaurants = require("../models/restaurants");

var createUrlByLatLong = function (lat,long) {
    return config.url + 'search?ll=' + lat + ',' + long + config.res + config.token + '&v=20170617&query=foods&limit=50';
}

var createUrlByRestaurantId = function (restaurantId) {
    return config.url + restaurantId + '?' + config.res + config.token + '&v=20170617';
}
var restaurantsMapping = function(response) {
   var restaurantList = [];
   
    response.venues.forEach(function(venue){
        var restaurant = {
            'Id': venue.id,
            'Name': venue.name,
            'Address': venue.location.address,
            'City': venue.location.city,
            'Country': venue.location.country,
            'State': venue.location.state,
            'Url': venue.url
        }
        restaurantList.push(restaurant);
    })

    return restaurantList;
}

module.exports = {
    createUrlByLatLong : createUrlByLatLong,
    restaurantsMapping : restaurantsMapping,
    createUrlByRestaurantId : createUrlByRestaurantId
}
