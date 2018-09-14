var passengers =
    [{ name: "Jane Doloop", paid: true },
    { name: "Dr. Evel", paid: true },
    { name: "Sue Property", paid: false },
    { name: "John Funcall", paid: true },
    { name: "Maxim Klimovich", paid: false},
    { name: "Alexander Tarasov", paid: false}];

function chekNoflyList(passenger) {
    if ("Doctor Evil" === passenger) {
        return true
    }
    return false
}

function checkNoPaid(passenger) {
    if (passenger === false){
        return true
    }
    return true
}