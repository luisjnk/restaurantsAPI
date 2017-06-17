var Promise = require("bluebird");
var config = require("../config/weatherapiconfig");

var createUrlByCityId = function (cityId) {
    return config.url + cityId + config.res + config.key + '&cnt=16';
}

module.exports = {
    createUrlByCityId : createUrlByCityId
}