var chevy = {
    make: "Chevy",
    model: "Bel Air",
    year: 1957,
    color: "red",
    passengers: 2,
    convertible: false,
    mileage: 1021,
    started: false,
    fuel: 0,

    start: function() {
        if (this.fuel == 0) {
            alert("The car is on empty, fill up before starting!");
        } else {
            this.started = true;
        }
    },

    stop: function() {
        this.started = false
    },

    drive: function() { 
        if (this.started) {
            if (this.fuel > 0) {
                alert(this.make + " " + this.model + "goes Zoom zoom!");
                this.fuel = this.fuel - 1;
            } else {
                alert("Oh oh, out of fuel.");
                this.stop();
            }
        } else {
            alert("You need to start the engine first.");
        }
    },

    addFuel: function(amount) {
        this.fuel = this.fuel + amount;
    }
};

var cadi = {
    make: "Cadillac",
    model: "GM",
    year: 1955,
    color: "tan",
    passengers: 5,
    convertible: false,
    mileage: 12892,
    started: false,

    start: function() {
        this.started = true;
    },

    stop: function() {
        this.started = false
    },

    drive: function() { 
        if (this.started) {
            alert("Zoom zoom!" + this.make);
        } else {
            alert("You need to start the engine first.");
        }
    }
};

var fiat = {
    make: "Fiat",
    model: "500",
    year: "1957",
    color: "Medium Blue",
    passengers: 2,
    convertible: false,
    mileage: 88000,
    started: false,

    start: function() {
        this.started = true;
    },

    stop: function() {
        this.started = false
    },

    drive: function() { 
        if (this.started) {
            alert("Zoom zoom!" + this.make);
        } else {
            alert("You need to start the engine first.");
        }
    }
};

function prequal(car) {
    if (car.mileage > 10000) { 
        return false;
    } else if (car.year > 1960) {
        return false;
    }
    return true;
}

var worthALook = prequal(fiat);

if (worthALook) {
    console.log("You gotte check out this " + fiat.make + " " + fiat.model);
} else {
    console.log("You gotta should really pass on the " + fiat.make + " " + fiat.model);
}

chevy.start();
chevy.drive();
chevy.addFuel(2);
chevy.start();
chevy.drive();
chevy.drive();
chevy.drive();
chevy.stop();

// for (var prop in chevy) {
//     console.log(prop + ": " + chevy[prop]);
// }