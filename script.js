//pseudocode
//Cases
//Writing a function to repeat a string at a stated number of time.
//first we create a variable to hold the string
//we create a variable to hold the number of times string should be repeated
//we create a function, pass two parameters to track the string and number of times it should be repeated
//we  get the passed string parameter and reassign it to the created string variable
//now using for loop to get the number of time to be repeated passed and repeat the string exactly same number of times


// let string = "";
// let numberOfString = 0;
// function repeatedString(passedString, numberOfTimesRepeated){
 
//  for(let i=numberOfString; i <numberOfTimesRepeated; i++){
//      string += " " + passedString;
//  }
//  return string;
// }
// console.log(repeatedString("sugar", 12));
// console.log(typeof string);
let repeatedString =document.querySelector("#string-holder");
let passedString =document.querySelector("#string");
let passedNumberOfTimes = document.querySelector("#string-2");
let btnRepeat = document.querySelector("#string-catch");

let str = "";
let initNoOfTimeStrRept =0;
function repeatStr(strPassed, noStrRepeated){
 if (noStrRepeated>0) {
  for(i=initNoOfTimeStrRept;i < noStrRepeated; i++){
      str += " " + strPassed;
  }
}else if(noStrRepeated<0){
  str = strPassed;
}else{
  str ="";
}
return str;
}

btnRepeat.addEventListener("click", function(){
  repeatedString.textContent= repeatStr(passedString.value, parseInt(passedNumberOfTimes.value) );
 
 reset();
 changeBtnText();
}
)
function reset(){
  passedString.value ="";
  passedNumberOfTimes.value ="";
  }

  function changeBtnText(){
    const text ="Repeat string";
    if(btnRepeat.textContent.toLowerCase().includes(text.toLowerCase())){
      btnRepeat.textContent ="Reset";
    }else{
      btnRepeat.textContent = text;
    }
      
  }
  