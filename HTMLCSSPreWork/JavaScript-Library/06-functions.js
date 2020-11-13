//1        //2
function hello() {
    //3
    console.log("Hello World!");
}
hello();

function pacersWon(){
    console.log("Pacers won!");
}
pacersWon();

function numberEntered(num){
    console.log("The number you entered was: ", num);
}
numberEntered(666);


function addAnyTwoNumbers(x, y){
    console.log(x + y);
}

addAnyTwoNumbers(4, 5);
addAnyTwoNumbers(6, 11);
addAnyTwoNumbers(7, 8);


function subtractTwoNumbers(firstNum, secondNum){
    console.log(firstNum - secondNum);
}
subtractTwoNumbers(5, 1);

function calculatePriceIndiana(quantity, price){
    let totalPrice = 1.07 * quantity * price;
    return totalPrice; // Or return 1.07 * quantity * price;
}
console.log("$"+calculatePriceIndiana(17, 5));