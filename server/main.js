var express = require('express');
var app = express(); 
var chalk = require('chalk'); 
var bodyParser = require('body-parser'); 
var path = require('path'); 

//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
var npmPath = path.join(__dirname, '../node_modules');
var publicPath = path.join(__dirname, '../public');
var browserPath = path.join(__dirname, '../browser');
app.use(express.static(npmPath));
app.use(express.static(publicPath));
app.use(express.static(browserPath));

//routes
app.get('/',function(req,res,next){
	res.sendFile(path.join(__dirname,'index.html'));
}); 
app.get('/vendors',function(req,res,next){
	res.sendFile(path.join(__dirname,'vendors.json')); 
}); 
app.listen(3000,function(){
	console.log(chalk.blue("Listening on port 3000")); 
});