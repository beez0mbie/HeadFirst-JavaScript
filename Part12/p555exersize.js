function Car(make, model, year, color, passengers, convertible, mileage){
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    this.passengers = passengers;
    this.convertible = convertible;
    this.mileage = mileage;
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
var shevy = new Car("Shevy", "number 1", 1989, "red", 2, false, 100);
shevy.drive();
shevy.start();
shevy.drive();
shevy.stop();
shevy.drive();