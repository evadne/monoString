//	lib.mono.string.js
//	Evadne Wu at Iridia, 2010






	mono.stringAdditions = true;





//	!Introspection

	String.prototype.__defineGetter__("getByteLength", function () {
	
	//	Assume UTF-8
	
		var totalBytes = 0;	
	
		for (var i = 0; i < this.length; i ++) {
	
			totalBytes += Math.ceil(Math.log(this.charCodeAt(i)) / Math.log(Math.pow(2, 8)));
		
		}
		
		return totalBytes;
	
	});





	}
	





