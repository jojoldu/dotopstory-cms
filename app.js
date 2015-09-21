var express = require('express'),
	http = require('http'),
	path = require('path');

var app = express();

app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

app.all('*', function(req, res){
	res.render('index', {msg: 'Welcome to the Practical Node.js'});
});

http
	.createServer(app)
	.listen(
		app.get('port'),
		function(){
			console.log('Express.js server listening on port '+app.get('port'));
		}
	);
