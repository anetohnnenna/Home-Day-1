'use strict'

function Car(name,model,type) {
	this.name = name || "General";
	this.model = model || "GM";
	this.type = type || "Car";

	if (this.name  === 'Porshe' || this.name === "Koenigsegg") {
	  	this.numOfDoors = 2;
	  	this.numOfWheels = 4;
	  	this.isSaloon = true;
	 	this.drive = function(num) {
			if (num === 5) {
				this.speed = '250 km/h';
			}
		}
	}
	else {
		if (this.type === 'trailer') {
			this.numOfWheels = 8;
			this.isSaloon = false;
			this.speed = '0 km/h';
			this.drive = function(num) {
				if (num === 7) {
					this.speed = '77 km/h';
				}
			}
		}
		else {
			this.numOfWheels = 4;
			this.numOfDoors = 4;	
		}
	}
}

module.exports=Car;