function Robot(name, year, owner){
    this.name = name;
    this.year = year;
    this.owner = owner;
}

Robot.prototype.maker = "ObjectsRUs"

Robot.prototype.speak = function(){
    console.log(this.name + " speaking");
}

Robot.prototype.makecoffee = function(){
    console.log(this.name + " making coffee");
}

Robot.prototype.blinkLights = function(){
    console.log(this.name + " is blinking his lights");
}

var robby = new Robot("Robby", "1860", "George");
var rossie = new Robot("Rossie", "1900", "Rupert");

robby.onOffSwitch = true
robby.makecoffee = function(){
    console.log(this.name + " goes to the Starbuks");
}

rossie.cleanHouse = function(){
    console.log(this.name + " is cleaning the owners house");
}

console.log(robby.name + " was made by " + robby.maker + " in " + robby.year + 
" and is owned by " + robby.owner);
console.log(robby.name + " = " + robby.onOffSwitch);
robby.blinkLights();
robby.makecoffee();

console.log(rossie.name + " was made by " + rossie.maker + " in " + rossie.year + 
" and is owned by " + rossie.owner);
rossie.cleanHouse();
rossie.makecoffee();

