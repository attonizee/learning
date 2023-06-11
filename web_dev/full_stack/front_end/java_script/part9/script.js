var firstName = prompt("Enter your FIrst Name: ")
var lastName = prompt("Enter your Last Name: ")
var age = prompt("What is your age?: ")
var height = prompt("What is your height?: ")
var petName = prompt("What is your pet name?: ")

if (firstName[0] === lastName[0] && age > 20 && age < 30 && height >= 170 && petName[petName.length-1] === "y") {
    console.log("Hello my friend and welcome")
}else {console.log("Sorry, nothing to see here")}