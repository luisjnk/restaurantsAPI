/**
 * Created by junqu on 16/08/2015.
 */
var path = require('path');
var fs = require('fs');
var server = require('./routes/config');
var config = require('./config/config.js');

require('./config/database.js')(config.databaseDev);
//var config = require('./server/config/config');
//var app = express();
var app = server.routesConfig();

app.set('port', process.env.PORT || 9000);

var server = app.listen(app.get('port'), function(){
    console.log('Server');
});

