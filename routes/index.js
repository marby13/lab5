// Get all of our friend data
var data = require('../data.json'); //data base

exports.view= function(req, res){
	console.log(data);
	res.render('index',data);

	
};




