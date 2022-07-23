
let data=[
    {
      "img": "https://cdn.shopify.com/s/files/1/0906/2558/products/1_61109b87-1ae6-4cb4-8550-5b57d688a4eb.jpg?v=1651852771",
      "title": "Bling Leader Illuminating Sunscreen SPF35 PA+++",
      "price": "599",
      "rating": "4.8",
      "id": 1
    },
    {
      "img": "https://cdn.shopify.com/s/files/1/0906/2558/products/1_547e9188-e44c-4cf7-a32e-fc0f410e8062.jpg?v=1651852720",
      "title": "Bling Leader Illuminating Sunscreen SPF35 PA+++ - 01 Gold Diggin 50g",
      "price": "599",
      "rating": "5",
      "id": 2
    },
    {
      "img": "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-citrus-got-real-spf30-sunscreen-28038344736851.jpg?v=1619155723",
      "title": "Citrus Got Real SPF30 Sunscreen",
      "price": "399",
      "rating": "4.7",
      "id": 3
    },
    {
      "img": "https://cdn.shopify.com/s/files/1/0906/2558/products/1_e5df3bb8-4439-4980-ada2-aa90b126ada3.jpg?v=1651852746",
      "title": "Bling Leader Illuminating Sunscreen SPF35 PA+++ - 02 Pink Trippin 50g",
      "price": "599",
      "rating": "3.0",
      "id": 4
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
 