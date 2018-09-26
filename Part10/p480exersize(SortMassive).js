var numbersArray1 = [60, 50, 62, 58, 54, 54];
var numbersArray2 = [60, 50, 62, 58, 54, 54];

function compareNumbersForUpperSort(num1 , num2){
    return num1 - num2;
}

function compareNumbersForLowerSort(num1 , num2){
    return num2 - num1;
}

console.log(numbersArray1.sort(compareNumbersForUpperSort))
console.log(numbersArray2.sort(compareNumbersForLowerSort))