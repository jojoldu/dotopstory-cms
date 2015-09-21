var express = require('express'),
	http = require('http'),
	path = require('path');

var expressHbs = require('express-handlebars');

var app = express();

app.engine('hbs', expressHbs({extname:'hbs', defaultLayout:'index.hbs'}));

app.set('port', process.env.PORT || 3000);
app.set('view engine', 'hbs');

app.all('*', function(req, res){
	res.render('/layouts/index', {msg: 'Welcome to the Practical Node.js'});
});

http
	.createServer(app)
	.listen(
		app.get('port'),
		function(){
			console.log('Express.js server listening on port '+app.get('port'));
		}
	);
