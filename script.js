//pseudocode
//Cases
//Writing a function to repeat a string at a stated number of time.
//first we create a variable to hold the string
//we create a variable to hold the number of times string should be repeated
//we create a function, pass two parameters to track the string and number of times it should be repeated
//we  get the passed string parameter and reassign it to the created string variable
//now using for loop to get the number of time to be repeated passed and repeat the string exactly same number of times


let string = "";
let numberOfString = 0;
function repeatedString(passedString, numberOfTimesRepeated){
 
 for(let i=numberOfString; i <numberOfTimesRepeated; i++){
     string += " " + passedString;
 }
 return string;
}
console.log(repeatedString("sugar", 12));
console.log(typeof string);
