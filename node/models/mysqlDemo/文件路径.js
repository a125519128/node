var fs = require('fs')
var path = require('path')
fs.readFile(path.join(__dirname,"../user.js"),function(err,data){
	if(err){

	}
	console.log(data.toString())
})