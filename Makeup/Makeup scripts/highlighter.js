let data=[
    {
      "img": "https://cdn.shopify.com/s/files/1/0906/2558/products/1_b3e57458-68f3-41c8-a1f7-5205dc494e26.jpg?v=1639584535",
      "title": "Contour De Force Face Palette - 03 Fierce Feat",
      "price": "799",
      "rating": "4.8",
      "id": 1
    },
    {
      "img": "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-contour-de-force-mini-highlighter-01-champagne-champion-champagne-gold-28122570915923.jpg?v=1619102721",
      "title": "Contour De Force Mini Highlighter",
      "price": "399",
      "rating": "4.8",
      "id": 2
    },
    {
      "img": "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-glow-and-behold-jelly-highlighter-01-gold-goal-warm-champagne-gold-28128205668435.jpg?v=1620725372",
      "title": "Glow And Behold Jelly Highlighter",
      "price": "499",
      "rating": "4.8",
      "id": 3
    },
    {
      "img": "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-contour-de-force-mini-bronzer-03-caramel-captain-chestnut-brown-28128204980307.jpg?v=1619152562",
      "title": "Contour De Force Mini Bronzer - 03 Caramel Captain (Chestnut Brown)",
      "price": "399",
      "rating": "4.5",
      "id": 4
    },
    {
      "img": "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-face-fwd-corrector-stick-01-peach-precedent-peach-13825390542931.jpg?v=1619116625",
      "title": "Face Fwd >> Corrector Stick",
      "price": "799",
      "rating": "4.6",
      "id": 5
    },
    {
      "img": "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-contour-de-force-highlighter-palette-01-glow-genius-12788198572115.jpg?v=1619106971",
      "title": "Contour De Force Highlighter Palette - 01 Glow Genius",
      "price": "799",
      "rating": "4.7",
      "id": 6
    },
    {
      "img": "https://cdn.shopify.com/s/files/1/0906/2558/products/1_7863c610-04ae-4e21-a5bb-55577898284a.jpg?v=1637336891",
      "title": "Own The Light Liquid Highlighter",
      "price": "649",
      "rating": "4.8",
      "id": 7
    },
    {
      "img": "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-face-fwd-contour-stick-01-fawn-first-milk-choclate-brown-13825382023251.jpg?v=1619116620",
      "title": "Face Fwd >> Contour Stick",
      "price": "799",
      "rating": "4.9",
      "id": 8
    },
    {
      "img": "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-face-fwd-highlighter-stick-01-champagne-champion-champagne-gold-13825399652435.jpg?v=1619116634",
      "title": "Face Fwd >> Highlighter Stick",
      "price": "799",
      "rating": "4.7",
      "id": 9
    },
    {
      "img": "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-wonder-woman-mixed-palette-01-cosmos-conqueror-27982507081811.jpg?v=1619155557",
      "title": "Wonder Woman Mixed Palette",
      "price": "999",
      "rating": "4.7",
      "id": 10
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