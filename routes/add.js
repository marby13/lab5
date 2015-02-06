var data = require('../data.json'); //data base


exports.addFriend = function(req, res) { 

	res.render('add');
	var name = req.query.name;
	
	var description = req.query.description;

	var newfriend = {
		"name": name,
		"description": description,
		"imageURL": "http://lorempixel.com/400/400/people"		

	};

	console.log(newfriend);
	data["friends"].push(newfriend);
}