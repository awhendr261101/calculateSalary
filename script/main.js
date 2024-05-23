let fname = document.querySelector(".fname")
let lname = document.querySelector(".lname")
let dob = document.querySelector(".dob")
let textFields = document.querySelectorAll("[textField]")
let submit = document.querySelector(".submit")
let error = document.querySelectorAll(".error")

// Vars for the smaller form 
let calculate = document.querySelector(".calculate")
let hourlyR = document.querySelector(".hourlyRate")
let hours = document.querySelector(".hours")
let calfields = document.querySelector("[calfield]")



submit.addEventListener("click", () =>{
    textFields.forEach(validator)
})

function validator (value, index) {
    if(value.value == ""){
        error[index].innerText = "Please enter this field!!"
    } else if(notValidText(value.value)){
        error[index].innerText = "My brodda why would you add numbers in this, wetin be diss, wetin be diss!!"
    }else{
        error[index].innerText = ""
    }
}

calculate.addEventListener("click", () => {

})




function notValidText(value){
    let numbers = "0123456789"
        for (const key in numbers) {
            if(value.includes(numbers[key])){
                return true
            }
        }
}















// let names = ["John", "Sarah", "Michael", "Emily", "David"];

// names.forEach((name, index) => {
//   console.log(`${index }. ${name}`);
// });