let data =  [
    {
      "img": "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-charcoal-patrol-bubble-mask-12775750500435.jpg?v=1644399394",
      "title": "Charcoal Patrol Bubble Mask",
      "price": "149",
      "rating": "4.9",
      "id": 1
    },
   
    {
      "img": "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-cheat-sheet-anti-aging-mask-12775753744467.jpg?v=1619113715",
      "title": "Cheat Sheet Anti-Aging Mask",
      "price": "99",
      "rating": "4.8",
      "id": 2
    },
  
    {
      "img": "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-cheat-sheet-clarifying-mask-12775754203219.jpg?v=1619113702",
      "title": "Cheat Sheet Clarifying Mask",
      "price": "99",
      "rating": "4.9",
      "id": 3
    },

    {
      "img": "https://cdn.shopify.com/s/files/1/0906/2558/products/Instant-Pore-Cleansing-Mask-1_1.jpg?v=1626423690",
      "title": "Aquaholic Instant Pore Cleansing Mask",
      "price": "499",
      "rating": "4.8",
      "id": 4
    },
    {
      "img": "https://cdn.shopify.com/s/files/1/0906/2558/products/1_3cb613fc-43c8-4763-b3e6-5ccf4761c0d5.jpg?v=1641570994",
      "title": "Power Clay Mask Stick",
      "price": "699",
      "rating": "4.8",
      "id": 5
    },
  
    {
      "img": "https://cdn.shopify.com/s/files/1/0906/2558/products/CCPorePurifyingMaskWBG-3.jpg?v=1628610298",
      "title": "Coffee Culture Pore Purifying Mask",
      "price": "499",
      "rating": "4.8",
      "id":6
    },
    {
      "img": "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-charcoal-patrol-face-mask-12775752564819.jpg?v=1619113688",
      "title": "Charcoal Patrol Face Mask",
      "price": "99",
      "rating": "4.9",
      "id": 7
    },
    {
      "img": "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-sugar-cheat-sheet-brightening-mask-12775754039379.jpg?v=1619113729",
      "title": "SUGAR Cheat Sheet Brightening Mask",
      "price": "149",
      "rating": "4.9",
      "id": 8
    }
    
  ]


  
function display (data){
    let container= document.getElementById("container")
    container.innerHTML=""
     data.forEach(function(element){
 
         let div =document.createElement("div")
         div.setAttribute("class","box")
 
         let img=document.createElement("img")
         img.src=element.img
 
         let title=document.createElement("h3")
         title.innerHTML=element.title
 
         let price=document.createElement("p")
         price.innerHTML=`<p>Rs. ${element.price}</p> `
         let rating=document.createElement("p")
         rating.innerHTML=`<img style="width:18px; margin-top:6px;"src="https://in.sugarcosmetics.com/star_filled.png" ${ element.rating}alt="">${ element.rating}  `
 
         let divrat=document.createElement("div")
         divrat.setAttribute("class","rat")
         divrat.append(rating)
 
         
         
         let sym=document.createElement("img")
         sym.src="https://in.sugarcosmetics.com/favoriteBorderBlack.svg"
         sym.style.width="25px"
         
         let btn=document.createElement("button")
         btn.setAttribute("id","btn")
         btn.innerHTML="ADD TO CART"
 
         let div1=document.createElement("div")
         div1.setAttribute("class","div1")
         div1.append(sym,btn)
 
         
 
         div.append(img,title,price,divrat,div1)
             
       div.addEventListener("click",function(){
         if(addtocart(element.title)==true){
            datauser.push(element)
            localStorage.setItem("Orderlist" , JSON.stringify(datauser));
            alert("Item Added Successfully");
            location.href="/Makeup/addtocart.html";
        }else{
            alert("Item Already Added");
            location.href="/Makeup/addtocart.html";
        }
         
      })
 
         container.append(div)
 
     })
   }
 
   display(data)
 

   



   function handlefilter(){
    let selected= document.querySelector(".sort").value
  if(selected== "All") {
     display(data)
     
  }
  else if(selected=="HP"){
     data.sort(function(a,b){
       return b.price-a.price
     
     })
     display(data)
    
  }
  else if(selected=="LP") {
     data.sort(function(a,b){
        return a.price-b.price
         
         })
         display(data)
         
  }
     
  }


  let datauser=JSON.parse(localStorage.getItem("Orderlist")) || []
function addtocart(naam){
for(let i=0;i<datauser.length;i++){
   if(datauser[i].name===naam){
      return false
   }
}return true
   
}

let count=data.length
let space= " "

let total=document.getElementById("count")

total.innerHTML= `${count}`+" items"
total.style.color="grey"