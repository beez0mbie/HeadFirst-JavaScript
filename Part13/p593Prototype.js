function Dog(name, breed, weight){
    this.name = name;
    this.breed = breed;
    this.weight = weight;
};

Dog.prototype.species = "Canine";

Dog.prototype.bark = function(){
    if (this.weight > 25) {
        console.log(this.name + " says Woof, Woof!");
    } else {
        console.log(this.name + " says Yip, Yip !");
    }
};

Dog.prototype.run = function(){
    console.log("Run!")
}

Dog.prototype.wag = function(){
    console.log("wag!")
}

var fido = new Dog("Fido", "Mixed", 38);
var fluffy = new Dog("Fluffy", "Poodle", 26);
var spot = new Dog("Spot", "Chihuahua", 10);

spot.bark = function(){
    console.log(this.name + " says WOOF,WOOF!")
}

fido.bark()
fido.run()
fido.wag()

fluffy.bark()
fluffy.run()
fluffy.wag()

spot.bark()
spot.run()
spot.wag()