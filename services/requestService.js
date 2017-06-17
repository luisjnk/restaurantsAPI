var Promise = require("bluebird");
var unirest = require('unirest');

var getRequest = function (url) {

    return new Promise(function (resolve, reject) {
        unirest.get(url)
                .headers({'Accept': 'application/json', 'Content-Type': 'application/json'})
                .end(function (result) {
    
                  resolve(result);
            });
    });
}


module.exports = {
    getRequest: getRequest
}