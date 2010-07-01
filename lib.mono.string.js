//	lib.monoStringAdditions.js
//	Evadne Wu at Iridia, 2010






String.prototype.byteLength = function () {

//	Assume UTF-8

	var totalBytes = 0;	

	for (var i = 0; i < this.length; i ++) {

		totalBytes += Math.ceil(Math.log(this.charCodeAt(i)) / Math.log(Math.pow(2, 8)));
	
	}
	
	return totalBytes;

}




