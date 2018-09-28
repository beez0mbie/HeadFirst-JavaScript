var passengers =
    [{ name: "Jane Doloop", paid: true, ticket: "coach" },
    { name: "Dr. Evel", paid: true, ticket: "firstclass" },
    { name: "Sue Property", paid: false, ticket: "firstclass" },
    { name: "John Funcall", paid: true, ticket: "coach" },
    { name: "Maxim Klimovich", paid: false, ticket: "bestCoach" },
    { name: "Alexander Tarasov", paid: false, ticket: "coach" }
];

function chekNoflyList(passenger) {
    return ("Dr. Evel" === passenger.name)
}

function checkNoPaid(passenger) {
    return (!passenger.paid)
}

function processPassengers(passengers, testFunction) {
    for (let i = 0; i < passengers.length; i++) {
        if (testFunction(passengers[i])) {
            return false
        }
    }
    return true
}

function printPassenger(passenger) {
    console.log("Name: " + passenger.name + "\nPaid: " + passenger.paid)
}

var allCanFly = processPassengers(passengers, chekNoflyList)

if (!allCanFly) {
    console.log("The plane can't take off: we have passengers on the no-fly-list.")
}

var allPaid = processPassengers(passengers, checkNoPaid)

if (!allPaid) {
    console.log("The plane can't take off: not everyone has paid")
}

var printListOfPassengers = processPassengers(passengers, printPassenger)

function serveCustomer(passenger){
    var getDrinkOrderFunction = createDrinkOrder(passenger)
    var getEatOrderFunction = createEatOrder(passenger)
    getDrinkOrderFunction()
    getEatOrderFunction()
}

function createDrinkOrder(passenger){
    var orderFunction;

    if (passenger.ticket === "firstclass"){
        orderFunction = function(){
            alert(passenger.name + " Would you like a cocktail or wine?");
        }
    } else if (passenger.ticket ==="bestCoach") {
        orderFunction = function(){
            alert(passenger.name + " Would you like water, cola or wine?");
        }
    } else {
        orderFunction = function(){
            alert(passenger.name + " Your choice is cola or water.");
        }
    }
    return orderFunction;
}

function createEatOrder(passenger){
    var orderFunction;

    if (passenger.ticket === "firstclass"){
        orderFunction = function(){
            alert(passenger.name + " Would you like a chicken or pasta?");
        }
    } else if (passenger.ticket ==="bestCoach") {
        orderFunction = function(){
            alert(passenger.name + " Would you like a snack box or cheese plate?");
        }
    } else {
        orderFunction = function(){
            alert(passenger.name + " Your choice is pretzels or peanuts.");
        }
    }
    return orderFunction;
}


var servePassengers =  processPassengers(passengers, serveCustomer)