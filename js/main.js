console.log("Hello JS")


// Data type : String

var myName = "Mohamed Ahmed"


console.log(myName)
console.log(myName)
console.log(myName)
console.log(myName)
console.log(myName)

// Array

var students = ["Omar", "Ahmed", "Ali", "Sayed"]

console.log(students)
console.log(students[1])
console.log(students.length)
console.log(students[students.length - 1])
console.log(students[4])


// Object { key : value }

var person = {
    firstName: "Mohamed",
    lastName: "Ahmed",
    title: "Developer"
}

console.log(person)
console.log(person.firstName)

// Number 
var grade = 100;
console.log(grade)


/****************************************************************/
var grades = [1, 2, 3, 4, 5, 6, 7, 8, 9]

console.log(grades)

//////////////////////////////////////////////////////////

var trainees = ["Omar", "Ahmed", "Ali", "Sayed", "Khaled"]

trainees.map((trainee, index) => console.log(index + " - " + trainee))


// function 

function sayOk() {
    console.log("OK")
}


// sayOk()


var sayNo = function () {
    console.log("No")
}

sayNo()

// Function with parameters

function add(x, y) {
    console.log(x + y)
}

add(5, 8)
add(50, 8)

// events 

var my_input = document.getElementById("myInput");

my_input.onchange = function(ev) {
    console.log(ev.target.value)
}


// If Remaining