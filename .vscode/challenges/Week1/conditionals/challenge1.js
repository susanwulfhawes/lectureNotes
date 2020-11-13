// ***** Relatonal OPerators

//Greater Than: >
//Less Than: <
//Less That or Equal : <=
//Greater than of equal: >=

//Logical Operators

// and: &&
// or: ||

//Logical operators
// equal: ==
//not equal !=

//Strict
// equal: ===
// not equal !==

/*let age = 5;

if (age>=21) {
    console.log('Can purchase alcohol');
} else {
    console.log('cannot purchase');
}*/

let myName = 'Susan Hawes';
let myFriendsName = 'Staci Koehler';

console.log('My Name is' , myName.length, 'characters long.');
console.log("My friend's name is" , myFriendsName.length, "characters long.");

let longerName;
let shorterName;
let diff = (myName.length - myFriendsName.length);
diff = Math.abs(diff);


if (diff == 0) {
    console.log('The names are the same length');
    {return};
} else if (myName.length > myFriendsName.length) {
    longerName = myName;
    shorterName = myFriendsName;
} else {
    longerName = myFriendsName;
    shorterName = myName;
} 

console.log(longerName, 'is', diff, 'characters longer than', shorterName);