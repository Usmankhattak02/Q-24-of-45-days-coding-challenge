"use strict";
// question 24. More Conditional Tests:
//   You don’t have to limit the number of tests you create to 10. If you
// want to try more comparisons, write more tests. Have at least one True and one False result
// for each of the following:
// • Tests for equality and inequality with strings
console.log("Testing equality with string");
console.log(`apple` == `apple`); //true
console.log("apple" != "apple"); //false
// • Tests using the lower case function
console.log("Testing using the lowerCase:");
console.log(`Apple`.toLowerCase() == `apple`); //true
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal
// to, and less than or equal to
console.log("testing of numericals");
console.log(5 < 4);
console.log(2 > 1);
console.log(2 >= 3);
console.log(3 == 3);
// • Tests using "and" and "or" operators
console.log("Testing using `and` and `or` operators");
console.log(true && false); //false
console.log(true || false); //true
// • Test whether an item is in a array
console.log("Test whether an item is in a array");
let books = ["English", "Urdu", "Sindhi"];
console.log("is `English` in Books?");
console.log(books.includes("English")); //true
// • Test whether an item is not in a array
console.log("is `Physics` is not in books?");
console.log(!books.includes("Physics")); //true
