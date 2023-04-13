/*

console.log("hello world");


//let name = 'Mosh';
//let age = 30;
//let isApproved = false;
//let firstname = undefined;
//let selectedcolor = null;




//object

//let person = 

//{

//    name : "taaseen" , 
//    age : 18
// }



//properties
    //dot notation

//person.name = "john"

    //bracket notation
//person['name'] = 'mary'

//console.log(person.name)


//arrays

//let selectedcolors = ['red', 'blue'];
//console.log(selectedcolors[0])


//functions
//performing a task
function greet(name, lastname) {
    console.log("hello " + name + " " + lastname);

}

greet('john', 'smith');
greet('mary');

//calculating a value
function square(number) {
    return number * number;

}

//call functions
console.log(square(2));



let firstName = "Taaseen"
let lastName = "khan"
let fullName  = firstName + " " + lastName
*/


let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

console.log(saveEl)


let count = 0


function increment() {
    count += 1
    countEl.textContent = count
}


function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    count = 0
    countEl.textContent = 0
}


