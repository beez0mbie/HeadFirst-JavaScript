function CarPrototype() {
    this.make = "Bumblebee";
    this.year = 2018;
    this.started = false;
    this.start = function(){
        return this.started = true;
    };
    this.stop = function(){
        return this.started = false;
    };
    this.drive = function(){
        if (this.started == false){
            console.log('Need to start the engine!')
        } else {
            console.log(this.make + ' goes Zoom zoom!')
        }
    };
}