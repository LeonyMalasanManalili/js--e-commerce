let numero = 0
const counter = document.getElementById("counter")

let plus = document.getElementById("plus").addEventListener("click",()=>{
    numero++
    counter.innerHTML=`${numero}`
})

let minus = document.getElementById("minus").addEventListener("click",()=>{
    if(numero != 0){
        numero--
        counter.innerHTML=`${numero}`
    }
})





