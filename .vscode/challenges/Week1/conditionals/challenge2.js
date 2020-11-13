let myObj = {
    myString: "What's new pussycat?",
    myNumber: 27,
    myBoo: true,
    myCats: {first: "Holly", second: "Binx"}
}

console.log(myObj.myString);
console.log(myObj.myCats.second);

let varType = (typeof myObj.myCats);
console.log(varType);

if (varType == String || Object || Boolean || Number) {
    console.log(varType);
} else {
    console.log("What are you?");
}