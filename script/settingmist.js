
let data=[
    {
      "img": "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-grand-finale-dewy-setting-mist-14890489184339.jpg?v=1619121429",
      "title": "Grand Finale Dewy Setting Mist",
      "price": "699",
      "rating": "4.7",
      "id": 1
    },
    {
      "img": "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-grand-finale-matte-setting-mist-14890481090643.jpg?v=1619121408",
      "title": "Grand Finale Matte Setting Mist",
      "price": "699",
      "rating": "4.7",
      "id": 2
    },
    
    {
      "img": "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-grand-finale-spf30-setting-mist-15637215576147.jpg?v=1619151508",
      "title": "Grand Finale SPF30 Setting Mist",
      "price": "699",
      "rating": "4.7",
      "id": 3
    },
    {
      "img": "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-grand-finale-highlighting-setting-mist-14890487218259.jpg?v=1619121418",
      "title": "Grand Finale Highlighting Setting Mist",
      "price": "699",
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