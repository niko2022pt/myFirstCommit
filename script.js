//console.log("TEST");

let number =10;
let name = "Jone";
console. log(number, name );

console.log(number % 3);

const num = 1

//if (num > 10) {
   // console.log("im log from the if");
    
    

//}else if ( num< 2) {
   // console.log( "yes");
//}
//else {
   // console.log(" not");
//}
if (num < 2 && num == 1) {
    console.log("num is smaller");
    if ( num != 3) {
        console.log("if in if");
    }
}
if( 7 > 10 || 3 > 2) {
    console.log ("true")
}
let height = 170

if(height >=  200) {
    console.log ("not");
}else if ( height < 150) {
    console.log("sorry")
}console.log("have fun")

console.log(1 == "1");
console.log(1=== "1");

function gred (){
console.log("Welkome to JS");
}
gred();

function sayHi(name) {
    console.log("Hi " + name);

}
sayHi("Adi");

function say( firstName, lastName){
    console.log("Hi " + firstName + " " + lastName);

}
say("Jone", "Weak");

function sum (numOne, numTwo){
    console.log(numOne + numTwo);

}
sum(3 , 5);

function some(){
    return 10;
}
let result = some();
console.log (result);

function grete (number) {
    if (number > 10) {
        return true;
    } else {
        return false;
    }
}
console.log (grete(11));

function then(number){
    if(number > 10) {
        return true;
    }
    return false;
}
console.log(then(11));

function ten(number){
    return number > 10 ? true : false;
}
console.log(ten(8));

//function BMI(weight, height){
  //  return weight / (height * height);
//}

//console.log(BMI(80, 1.6));

function calculateBMI(weight, height) {
    return weight / (height * height);
}

function bodyMassIndex() {
    const bmi = calculateBMI(70, 1.7);
    if (bmi < 18.5) {
        console.log("under");
    } else if(bmi < 24.9) {
        console.log("normal");
    }
}
bodyMassIndex();