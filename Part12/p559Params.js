function Car(params){
    this.make = params.make;
    this.model = params.model;
    this.year = params.year;
    this.color = params.color;
    this.passengers = params.passengers;
    this.convertible = params.convertible;
    this.mileage = params.mileage;
    this.started = false;

    this.start = function(){
        this.started = true;
    };
    
    this.stop = function(){
        this.started = false;
    };

    this.drive = function(){
        if (this.started) {
            console.log(this.make + ' ' + this.model + ' goes zoom zoom!');
        } else {
            console.log('Start the engine first.');
        }
    };
}
var shevyParams = {
    make: "Shevy",
    model: "number 1",
    year: 1989,
    color: "red",
    passengers: 2,
    convertible: false,
    mileage: 100
};

var shevy = new Car(shevyParams);
shevy.drive();
shevy.start();
shevy.drive();
shevy.stop();
shevy.drive();