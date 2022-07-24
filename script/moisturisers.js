
let data=[
    {
      "img": "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-bling-leader-illuminating-moisturizer-13644982681683.jpg?v=1619115847",
      "title": "Bling Leader Illuminating Moisturizer",
      "price": "449",
      "rating": "4.7",
      "id": 1
    },
    {
      "img": "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-citrus-got-real-daily-moisturizer-28038347292755.jpg?v=1619155748",
      "title": "Citrus Got Real Daily Moisturizer",
      "price": "449",
      "rating": "4.9",
      "id": 2
    },
    {
      "img": "https://cdn.shopify.com/s/files/1/0906/2558/products/Hyderattingkit.jpg?v=1626968294",
      "title": "Aquaholic Hydrating Stick",
      "price": "899",
      "rating": "4.8",
      "id": 3
    },
    {
      "img": "https://cdn.shopify.com/s/files/1/0906/2558/products/moisturiser.jpg?v=1626968292",
      "title": "Aquaholic Priming Moisturizers",
      "price": "499",
      "rating": "4.8",
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