var express = require('express');
var bodyParser = require('body-parser');
var restaurants = require('../controllers/restaurantsController.js');
var path = require('path');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

module.exports = {
    routesConfig: function () {
        app.use('/', function(req, res, next) {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "X-Requested-With,Content-Type");
            res.header("Content-Type", "application/json");
            next();
        });

        app.get('/api/restaurants/:lat/:long', restaurants.getRestaurantsByLatAndLon);
        app.get('/api/restaurants/:restaurantId', restaurants.getRestaurantDetails);
         app.get('/api/getLikes/:restaurantId', restaurants.findRestaurantLikes);
        app.post('/api/restaurants/like', restaurants.createRestaurantsLikes);
        return app;
    }
}