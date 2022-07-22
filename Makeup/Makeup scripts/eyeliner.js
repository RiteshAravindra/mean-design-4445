let data=[
    {
      "img": "https://cdn.shopify.com/s/files/1/0906/2558/products/1_30afa1e4-ceba-4cf0-bf6f-d6e6af88d7af.jpg?v=1634053475",
      "title": "Eye Love Jelly Eyeshadow",
      "price": "299",
      "rating": "4.9",
      "id": 1
    },
    {
      "img": "https://cdn.shopify.com/s/files/1/0906/2558/products/1_6_450a8655-59a5-41d8-9fca-5dd95d128534.jpg?v=1658396174",
      "title": "Eye Warned You So! Double Matte Eyeliner",
      "price": "699",
      "rating": "4.8",
      "id": 2
    },
    {
      "img": "https://cdn.shopify.com/s/files/1/0906/2558/products/1_6_450a8655-59a5-41d8-9fca-5dd95d128534.jpg?v=1658396174",
      "title": "Eye Warned You So! Double Matte Eyeliner - 01 Black Swan (Black)",
      "price": "699",
      "rating": "4.6",
      "id": 3
    },
    {
      "img": "https://cdn.shopify.com/s/files/1/0906/2558/products/01_5e8187e3-f7a2-40aa-a759-d4bf69769234.jpg?v=1639496327",
      "title": "Kohl Of Honour Intense Kajal - 01 Black Out (Black)",
      "price": "249",
      "rating": "4.8",
      "id": 4
    },
    {
      "img": "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-uptown-curl-lengthening-mascara-01-black-beauty-black-28122637828179.jpg?v=1619106532",
      "title": "Uptown Curl Lengthening Mascara - 01 Black Beauty (Black)",
      "price": "499",
      "rating": "4.8",
      "id": 5
    },
    {
      "img": "https://cdn.shopify.com/s/files/1/0906/2558/products/01_59809bd6-49ef-4c6b-b262-47002bedc963.jpg?v=1639755559",
      "title": "Blend The Rules Eyeshadow Palette",
      "price": "1199",
      "rating": "4.8",
      "id": 6
    },
    {
      "img": "https://cdn.shopify.com/s/files/1/0906/2558/products/1_1bde8549-cb5e-40e8-8779-83e8c0aae451.jpg?v=1638445456",
      "title": "Two Good To Be True Dual Eyeshadow",
      "price": "499",
      "rating": "5",
      "id": 7
    },
    {
      "img": "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-wingman-waterproof-microliner-01-i-ll-be-black-black-28163915841619.jpg?v=1619117351",
      "title": "Wingman Waterproof Microliner - 01 I'll Be Black (Black)",
      "price": "499",
      "rating": "4.7",
      "id": 8
    },
    {
      "img": "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-twist-and-shout-fadeproof-kajal-02-still-got-the-blues-dark-blue-12771572187219_40970186-afbf-4e5a-a346-f61273099a7a.jpg?v=1632208792",
      "title": "Twist And Shout Fadeproof Kajal - 02 Still Got The Blues (Dark Blue)",
      "price": "399",
      "rating": "4.7",
      "id": 9
    }]

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