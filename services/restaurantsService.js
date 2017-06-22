var Promise = require("bluebird");
var config = require("../config/foursquarepiconfig");
var restaurants = require("../models/restaurants");

var createUrlByLatLong = function (lat,long) {
    return config.url + 'search?ll=' + lat + ',' + long + config.res + config.token + '&v=20170617&categoryId=4d4b7105d754a06374d81259&radius=1300&limit=100';
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
            'Url': venue.url,
            'Contact' : venue.contact.formattedPhone
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
