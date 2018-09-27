var products = [{ name: "Grapefruit",   calories: 170,  color: "red",       sold: 8200 },
                { name: "Orange",       calories: 160,  color: "orange",    sold: 12101 },
                { name: "Cola",         calories: 210,  color: "caramel",   sold: 25412 },
                { name: "Diet Cola",    calories: 0,    color: "caramel",   sold: 43922 },
                { name: "Lemon",        calories: 200,  color: "clear",     sold: 14983 },
                { name: "Raspberry",    calories: 180,  color: "pink",      sold: 9427 },
                { name: "Root Beer",    calories: 200,  color: "caramel",   sold: 9909 },
                { name: "Root Beer",    calories: 201,  color: "caramel",   sold: 9909 },
                { name: "Water",        calories: 0,    color: "clear",     sold: 62123 }
];

function compareNameUp(colaA, colaB){
    if (colaA.name > colaB.name) {
        return 1;
    } else if (colaA.name === colaB.name) {
        return 0;
    } else {
        return -1;
    }
};

function compareCaloriesUp(colaA, colaB){
    return colaA.calories - colaB.calories;
};

function compareColorUp(colaA, colaB){
    if (colaA.color > colaB.color) {
        return 1;
    } else if (colaA.color === colaB.color) {
        return 0;
    } else {
        return -1;
    }
};

function compareSoldUp(colaA, colaB){
    return colaA.sold - colaB.sold;
};

function printProducts(products){
    for (let i = 0; i < products.length; i++) {
        console.log("Name: " + products[i].name + ";\tCalories: " + products[i].calories + 
        ";\tColor: " + products[i].color + ";\tSold: " + products[i].sold);
    };
};


console.log("\nCompare by Name:\n");
printProducts(products.sort(compareNameUp))

console.log("\nCompare by Calories:\n");
printProducts(products.sort(compareCaloriesUp))

console.log("\nCompare by Color:\n");
printProducts(products.sort(compareColorUp))

console.log("\nCompare by Sold:\n");
printProducts(products.sort(compareSoldUp))


