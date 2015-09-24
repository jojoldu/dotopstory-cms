var express = require('express'),
	http = require('http'),
	path = require('path');

var expressHbs = require('express-handlebars');

var app = express();

app.engine('handlebars', expressHbs({defaultLayout:'main'}));

app.set('port', process.env.PORT || 3000);
app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname, '')));

app.get('/', function(req, res){
	res.render('index');
});

app.get('/hero', function(req, res){
	res.render('hero');
});

http
	.createServer(app)
	.listen(
		app.get('port'),
		function(){
			console.log('Express.js server listening on port '+app.get('port'));
		}
	);
