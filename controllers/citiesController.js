var citiesRepository  =  require('../repository/citiesRepository.js');
var citiesService  =  require('../services/citiesService.js');
var requestService  =  require('../services/requestService.js');

var Promise = require("bluebird");

var  getCitiesByParam =  function (req,res) {
        citiesRepository
            .find(req.params.name)
            .then(function(data){
            res.json({success: true, message:  data })     
           })
           .catch (function (err) {
                res.status(400).send(err);
       });

    }

var  getCitiesWeatherByParams =  function (req,res) {

    var url =  citiesService.createUrlByCityId(req.params.cityId);
    console.log(url);

        requestService
            .getRequest(url)
            .then(function(data){
             res.json({success: true, message:  data })     
           })
           .catch (function (err) {
                res.status(400).send(err);
       });

    }    

module.exports = {
    getCitiesByParam : getCitiesByParam,
    getCitiesWeatherByParams : getCitiesWeatherByParams
}