let data =[
    {
      "img": "https://cdn.shopify.com/s/files/1/0906/2558/products/1_6573beaa-215a-4c48-bff5-3791d8c2f5de.jpg?v=1639585113",
      "title": "Stroke Of Genius Heavy-Duty Kohl - 05 Black Magic (Black With Silver Glitter)",
      "price": "499",
      "rating": "4.8",
      "id": 1
    },
    {
      "img": "https://cdn.shopify.com/s/files/1/0906/2558/products/01_5e8187e3-f7a2-40aa-a759-d4bf69769234.jpg?v=1639496327",
      "title": "Kohl Of Honour Intense Kajal - 01 Black Out (Black)",
      "price": "249",
      "rating": "4.8",
      "id": 2
    },
    {
      "img": "https://cdn.shopify.com/s/files/1/0906/2558/products/01_a52cdfbb-a4a1-4792-b1e1-1ed93fe0dd5e.jpg?v=1639496616",
      "title": "Kohl Of Honour Intense Kajal - 06 Blue Moon (Metallic Baby Blue)",
      "price": "249",
      "rating": "4.7",
      "id": 3
    },
    {
      "img": "https://cdn.shopify.com/s/files/1/0906/2558/products/01_79189b6b-9a44-4b2a-8940-e9a06731982e.jpg?v=1639496562",
      "title": "Kohl Of Honour Intense Kajal - 03 Aqua Lung (Metallic Mint Green)",
      "price": "249",
      "rating": "4.7",
      "id": 4
    },
    {
      "img": "https://cdn.shopify.com/s/files/1/0906/2558/products/01_a14be79f-4a1d-4c29-9d56-f545576926e1.jpg?v=1639496544",
      "title": "Kohl Of Honour Intense Kajal - 02 Brown Bag (Chocolate Brown)",
      "price": "249",
      "rating": "4.9",
      "id": 5
    },
    {
      "img": "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-twist-and-shout-fadeproof-kajal-02-still-got-the-blues-dark-blue-12771572187219_40970186-afbf-4e5a-a346-f61273099a7a.jpg?v=1632208792",
      "title": "Twist And Shout Fadeproof Kajal - 02 Still Got The Blues (Dark Blue)",
      "price": "399",
      "rating": "4.7",
      "id": 6
    },
    {
      "img": "https://cdn.shopify.com/s/files/1/0906/2558/products/01_e11a9b9e-36db-4368-80cc-1e8f4b8f3e72.jpg?v=1639496582",
      "title": "Kohl Of Honour Intense Kajal - 04 True Blue (Navy Blue)",
      "price": "249",
      "rating": "4.9",
      "id": 7
    },
    {
      "img": "https://cdn.shopify.com/s/files/1/0906/2558/products/01_5188ecb2-07a2-4b2c-b56d-696f7185aa0f.jpg?v=1639496600",
      "title": "Kohl Of Honour Intense Kajal - 05 Go Green (Dark Green)",
      "price": "249",
      "rating": "4.9",
      "id": 8
    },
    {
      "img": "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-twist-and-shout-fadeproof-kajal-01-black-velvet-black-12771571433555_7f6a68fc-aa43-4788-a234-e2c1febc622a.jpg?v=1632208581",
      "title": "Twist And Shout Fadeproof Kajal - 01 Black Velvet (Black)",
      "price": "399",
      "rating": "",
      "id": 9
    },
    {
      "img": "https://cdn.shopify.com/s/files/1/0906/2558/products/1_1bc2ee85-764e-4fe9-a38c-a4b2fb38880a.jpg?v=1639582935",
      "title": "Stroke Of Genius Heavy-Duty Kohl - 04 Blue Suede Shoes (Royal Blue)",
      "price": "499",
      "rating": "5",
      "id": 10
    },
    {
      "img": "https://cdn.shopify.com/s/files/1/0906/2558/products/1_29d62649-64ef-4647-8f5f-4c795522d8c4.jpg?v=1639585091",
      "title": "Stroke Of Genius Heavy-Duty Kohl - 07 Peacock (Peacock Green/ Velvet Green)",
      "price": "499",
      "rating": "5",
      "id": 11
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