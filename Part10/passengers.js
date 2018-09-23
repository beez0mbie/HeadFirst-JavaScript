var passengers =
    [{ name: "Jane Doloop", paid: true },
    { name: "Dr. Evel", paid: true },
    { name: "Sue Property", paid: false },
    { name: "John Funcall", paid: true },
    { name: "Maxim Klimovich", paid: false },
    { name: "Alexander Tarasov", paid: false }];

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