let productData = JSON.parse(localStorage.getItem('product'))
let display=document.getElementById('display')
// console.log(productData)
let att= document.getElementById('att')
att.innerText=productData.title
let displayImg= document.createElement('img')
displayImg.src=productData.img1;
let img1= document.createElement('img')
img1.src=productData.img1
img1.addEventListener("mouseover", function(){
    displayImg.src=productData.img1
})
let img2= document.createElement('img')
img2.src=productData.img2
img2.addEventListener("mouseover", function(){
    displayImg.src=productData.img2
})
let img3= document.createElement('img')
img3.src=productData.img3
img3.addEventListener("mouseover", function(){
    displayImg.src=productData.img3
})
// let img4= document.createElement('img')
// img4.src=productData.img4
// img4.addEventListener("mouseover", function(){
//     displayImg.src=productData.img4
// })
let mainDiv=document.createElement('div')
mainDiv.style.display="flex"
let largeDiv= document.createElement('div')
largeDiv.append(displayImg)
largeDiv.setAttribute("id",'largeDiv')
 
let smallDiv= document.createElement('div')
smallDiv.append(img1,img2,img3)
smallDiv.setAttribute("id",'smallDiv')
let imageDiv= document.createElement('div')
imageDiv.append(largeDiv,smallDiv)
imageDiv.style.display="flex"
let title=document.createElement('h5')
title.innerText=productData.title
let price=document.createElement('p')
price.innerText=`Rs ${productData.price}`
let nameDiv=document.createElement('div')
nameDiv.setAttribute("id",'nameDiv')
let cart = document.createElement('button')
cart.innerText="Add To Cart"
nameDiv.append(title,price,cart)
let text= document.createElement("div")
text.setAttribute("id",'text')
let descDiv=document.createElement("div")

let desc= document.createElement("h2")
desc.innerText="Description"
let descText=document.createElement('p')
descText.innerText=productData.desc
descDiv.append(desc)
text.append(descDiv,descText)

mainDiv.append(imageDiv,nameDiv)

display.append(mainDiv,text)
cart.addEventListener("click", function(){
    // console.log(productData)
    localStorage.setItem("cart",JSON.stringify(productData));
    // console.log(JSON.parse(localStorage.getItem('cart')))
    window.location.href="cart.html"
})