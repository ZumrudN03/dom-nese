// const icon=document.querySelector(".icon")
// const btn=document.querySelector(".btn")
// const navmenu=document.querySelector(".navmenu")

// btn.addEventListener("click",function(){
//     navmenu.classList.remove("none")
// })
// icon.addEventListener("click",function () {
//     navmenu.classList.add("none")
// })

const btn=document.querySelector(".btn")
const btn2=document.querySelector(".btn2")
const btn3=document.querySelector(".btn3")
const btn4=document.querySelector(".btn4")
const card1=document.querySelector(".car1")
const card2=document.querySelector(".car2")
const card3=document.querySelector(".car3")
const card4=document.querySelector(".car4")



btn.addEventListener("click",function(){
    card1.style.filter="blur(0px)"
})
btn2.addEventListener("click",function(){
    card2.style.filter="blur(0px)"
})

btn3.addEventListener("click",function(){
    card3.style.filter="blur(0px)"
})

btn4.addEventListener("click",function(){
    card4.style.filter="blur(0px)"
})

