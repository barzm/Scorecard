var express = require('express');
var app = express(); 
var chalk = require('chalk'); 
var path = require('path'); 

var npmPath = path.join(__dirname, '../node_modules');
var publicPath = path.join(__dirname, '../public');
var browserPath = path.join(__dirname, '../browser');
app.use(express.static(npmPath));
app.use(express.static(publicPath));
app.use(express.static(browserPath));

//routes
app.get('/',function(req,res){
	res.sendFile(path.join(__dirname,'index.html'));
}); 
app.get('/vendors',function(req,res){
	res.sendFile(path.join(__dirname,'vendors.json')); 
}); 
app.use(function (req, res) {
    res.status(404).end("Oops.. It looks like this resource doesn't exist.");
});

var PORT = process.env.PORT || 1337; 
app.listen(PORT,function(){
	console.log(chalk.blue("Listening on port ",PORT)); 
});