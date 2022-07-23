let data=[
    {
      "img": "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-charcoal-patrol-bubble-mask-pack-of-6-12784621125715.jpg?v=1619114540",
      "title": "Charcoal Patrol Bubble Mask (Pack of 6)",
      "price": "699",
      "rating": "4.9",
      "id": 1
    },
    {
      "img": "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-acne-combo-pack-of-6-14056089157715.jpg?v=1619113757",
      "title": "Acne Combo (Pack of 6)",
      "price": "559",
      "rating": "5",
      "id": 2
    },
   
    {
      "img": "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-cheat-sheet-anti-aging-mask-pack-of-6-12784629776467.jpg?v=1619114575",
      "title": "Cheat Sheet Anti-Aging Mask (Pack of 6)",
      "price": "449",
      "rating": "4.9",
      "id": 3
    },

    {
      "img": "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-cheat-sheet-clarifying-mask-pack-of-6-12784634527827.jpg?v=1619114589",
      "title": "Cheat Sheet Clarifying Mask (Pack of 6)",
      "price": "449",
      "rating": "4.7",
      "id": 4
    },
    {
      "img": "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-total-mask-erade-pack-of-3-14056092074067.jpg?v=1644930751",
      "title": "Total Mask-erade (Pack of 3)",
      "price": "299",
      "rating": "4.8",
      "id": 5
    },

    {
      "img": "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-what-a-treat-pack-of-3-14056089714771.jpg?v=1619113879",
      "title": "What A Treat! (Pack of 3)",
      "price": "299",
      "rating": "4.9",
      "id": 6
    },
    {
      "img": "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-get-unmasked-pack-of-3-14056092467283.jpg?v=1619113899",
      "title": "Get Unmasked (Pack of 3)",
      "price": "299",
      "rating": "4.8",
      "id": 7
    },
  
    {
      "img": "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-the-clear-glow-pack-of-12-14056095613011.jpg?v=1644585135",
      "title": "The Clear Glow (Pack of 12)",
      "price": "1149",
      "rating": "4.5",
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
            window.location.href="Addtocart.html";
        }else{
            alert("Item Already Added");
            window.location.href="Addtocart.html";
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
 