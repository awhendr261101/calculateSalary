
let work = document.querySelector(".work")
let hidden = document.querySelector(".inContainer")
console.log(work);

work.addEventListener("click", ()=>{
    if(work.value == "Yes"){
        hidden.style.display = "block"
    }else{
        hidden.style.display = "none"
    }
})





