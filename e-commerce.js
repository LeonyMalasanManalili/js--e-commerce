// Counter

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

// Media

let Big = document.getElementById("bigbox")

//SOLUZIONE N1 incomleta di remove

/*

Big.classList.add("big1")

Bigone.addEventListener("click",()=>
{
    Big.classList.add("big1")
})

let Bigsecond = document.getElementById("box2")

Bigsecond.addEventListener("click",()=>{
    Big.classList.add("big2")
})

let Bigthird = document.getElementById("box3")

Bigthird.addEventListener("click",()=>{
    Big.classList.add("big3")
})
    
let Bigfourth = document.getElementById("box4")

Bigfourth.addEventListener("click",()=>{
    Big.classList.add("big4")
}) */

//SOLUZIONE 2

let images = [`./assets/img/image-product-1.jpg`,`./assets/img/image-product-2.jpg`,`./assets/img/image-product-3.jpg`,`./assets/img/image-product-4.jpg`]

Big.innerHTML=`<img src="./assets/img/image-product-${1}.jpg" style="width:100%;border-radius: 15px;">`

const box1 = document.getElementById("box1").addEventListener("click",()=>{
    Big.innerHTML=`<img src="./assets/img/image-product-${1}.jpg" style="width:100%;border-radius: 15px;">`
})

const box2 = document.getElementById("box2").addEventListener("click",()=>{
    Big.innerHTML=`<img src="./assets/img/image-product-${2}.jpg" style="width:100%;border-radius: 15px;">`
})

const box3 = document.getElementById("box3").addEventListener("click",()=>{
    Big.innerHTML=`<img src="./assets/img/image-product-${3}.jpg" style="width:100%;border-radius: 15px;">`
})

const box4 = document.getElementById("box4").addEventListener("click",()=>{
    Big.innerHTML=`<img src="./assets/img/image-product-${4}.jpg" style="width:100%;border-radius: 15px;">`
})








