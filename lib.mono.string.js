//	lib.mono.string.js
//	Evadne Wu at Iridia, 2010






	mono.stringAdditions = true;





//	!Introspection

	String.prototype.getByteLength = function () {
	
	//	Assume UTF-8
	
		var totalBytes = 0;	
	
		for (var i = 0; i < this.length; i ++) {
	
			totalBytes += Math.ceil(Math.log(this.charCodeAt(i)) / Math.log(Math.pow(2, 8)));
		
		}
		
		return totalBytes;
	
	}





//	Copying

	String.prototype.clone = function () {
			
		return this.slice(0);
			
	}





//	Replacing

	String.prototype.replaceAt = function (startingIndex, characters) {

		return String(this.substr(0, startingIndex) + characters + this.substr(startingIndex + characters.length));

	}





//	Formatting

	String.prototype.pad = function (destinationLength, paddingString) {
	
		if (!destinationLength) return this;
		if (this.length >= destinationLength) return this;

		paddingString = paddingString || "0";
	
		var finalString = this.clone();
	
		for (var i = 0; i <= (destinationLength - this.length - 1); i++)
		finalString = (paddingString + finalString);
		
		return finalString;
		
	}
	
	
	String.prototype.capitalize = function () {
	
		var finalString = this.clone();
	
		return finalString.replace(/^[a-z]/, finalString.charAt(0).toUpperCase())
	
	}




