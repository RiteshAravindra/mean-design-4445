let data =[
    {
      "img": "https://cdn.shopify.com/s/files/1/0906/2558/products/1_30afa1e4-ceba-4cf0-bf6f-d6e6af88d7af.jpg?v=1634053475",
      "title": "Eye Love Jelly Eyeshadow",
      "price": "299",
      "rating": "4.7",
      "id": 1
    },
    {
      "img": "https://cdn.shopify.com/s/files/1/0906/2558/products/01_59809bd6-49ef-4c6b-b262-47002bedc963.jpg?v=1639755559",
      "title": "Blend The Rules Eyeshadow Palette",
      "price": "1199",
      "rating": "4.8",
      "id": 2
    },
    {
      "img": "https://cdn.shopify.com/s/files/1/0906/2558/products/1_2d186f9b-9024-4e23-a0d2-a55b7671e89c.jpg?v=1657123108",
      "title": "Contour De Force Eyes And Face Palette",
      "price": "1099",
      "rating": "4.8",
      "id": 3
    },
    {
      "img": "https://cdn.shopify.com/s/files/1/0906/2558/products/1_1bde8549-cb5e-40e8-8779-83e8c0aae451.jpg?v=1638445456",
      "title": "Two Good To Be True Dual Eyeshadow",
      "price": "1099",
      "rating": "4.8",
      "id": 4
    }
    ,
    {
      "img": "https://cdn.shopify.com/s/files/1/0906/2558/products/1_7cdc1fa6-fc3f-4cae-93c7-f940ff2da937.jpg?v=1657209586",
      "title": "Contour De Force Eyes And Face Palette 01 - Warm Win",
      "price": "1099",
      "rating": "4.8",
      "id": 5
    }
    ,
    {
      "img": "https://cdn.shopify.com/s/files/1/0906/2558/products/1_13a304df-efca-4b67-aa0f-f97acd6869a3.jpg?v=1657209602",
      "title": "Contour De Force Eyes And Face Palette 02 - Pink Pro",
      "price": "1099",
      "rating": "4.8",
      "id": 6
    }
    ,
    {
      "img": "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-wonder-woman-mixed-palette-01-cosmos-conqueror-27982507081811.jpg?v=1619155557",
      "title": "Wonder Woman Mixed Palette",
      "price": "1099",
      "rating": "4.8",
      "id": 7
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
          // location.href="/Makeup/addtocart.html";
      }else{
          alert("Item Already Added");
          // location.href="/Makeup/addtocart.html";
      }
       
    })

       container.append(div)

   })
 }

 display(data)

document.querySelector(".sort").addEventListener("change",handlefilter)
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


let total=document.getElementById("count")

total.innerHTML= `${count}`+" items"
total.style.color="grey"