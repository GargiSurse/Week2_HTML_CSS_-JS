//to print on terminal
console.log("Hello World!");

//nested if else ladder
let marks=80;

if(marks>=90){
     console.log("Grade : A");
 }else if(marks>=80){
     console.log("Grade :B");
 }else if(marks>=70){
     console.log("Grade :C")
 }else{
     console.log(" Grade :Fail");
 }

//switch case
switch(marks){
    case 90:
        console.log("Grade A");
        break;
    case 80:
        console.log("Grade:B");
        break;
    case 70:
        console.log("Grade C");
        break;
    default: 
        console.log("Grade : Fail!");
        break;
}

//for loop
for(let i = 1 ; i<10 ; i++){
    console.log(i);
}

//while loop
while(marks>0){
    console.log(marks);
    marks--;
}

//ternary statement
let result = marks>=90 ? "A+":
             marks>=80 ?"A":
             marks>=70 ?"B+":
             marks>=60 ?"B":
             "F";
console.log(result);

Funtions
function using parameter
function printMarks(marks ){
   if (marks>=90){
     console.log("Grade : A");
 }else if(marks>=80){
     console.log("Grade :B");
 }else if(marks>=70){
     console.log("Grade :C")
 }else{
     console.log(" Grade :Fail");
 }
}
printMarks(100);

//arrow functions
function printM(marks ){
   if (marks>=90){
     console.log("Grade : A");
 }else if(marks>=80){
     console.log("Grade :B");
 }else if(marks>=70){
     console.log("Grade :C")
 }else{
     console.log(" Grade :Fail");
 }
}
printM(100);

//using this keyword in arrow functions
const person ={ 
    name : "Gargu",
    age:20,
    greet:() => console.log(`Hello , ${this.name}, ${this.age}`) 
};
person.greet();
//errors are generated as the it is not defined ina function it is not in scope 

//classes , constructor  , methods and inheritance
class Parent {
    constructor(name){
        this.name="Gargu";
    }
    greet(name){
        console.log('Hello,$(this.name)!');
    }
}
class Child extends Parent{
    constructor(name){
        super(name);
    }
    greet(name){
        console.log(`Hello, ${this.name}`);
    }
}
let child = new Child("Garuu");
child.greet();

//objects in java script
const people = {
    name:"Garu",
    city:"Mumbai",
    age:18
}

console.log(Object.keys(people)) ;
console.log(Object.values(people));
console.log(Object.entries(people));

//for print particular key value
console.log(people["city"]);

//to add new segment
people.gender="Female";

//to update the existiing value
people.city="Karachi";
console.log(people);

//to delete
delete people.city;
console.log(people)

//array using loop using key 
// for(let key in people){
//     if(key==age){
//         console.log(key,people[]);
//     }
    
// }