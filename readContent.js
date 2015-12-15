"use strict";
var fs = require('fs');

exports.getHomeContent = function(dir){
	return fs.readFileSync(dir, 'utf-8');
}