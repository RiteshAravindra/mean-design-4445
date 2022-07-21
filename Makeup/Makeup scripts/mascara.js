let data =[
    {
      "img": "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-uptown-curl-lengthening-mascara-01-black-beauty-black-28122637828179.jpg?v=1619106532",
      "title": "Uptown Curl Lengthening Mascara - 01 Black Beauty (Black)",
      "price": "488",
      "rating": "4.7",
      "id": 1
    },
    {
      "img": "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-lash-of-the-titans-volumizing-mascara-01-black-with-a-bang-28128205865043.jpg?v=1619151715",
      "title": "Lash Of The Titans Volumizing Mascara - 01 Black with a Bang",
      "price": "599",
      "rating": "4.8",
      "id": 2
    },
    {
      "img": "https://cdn.shopify.com/s/files/1/0906/2558/products/Double-Date-Extreme-Volume-Mascara-Powered-by-Images-1025x1400-1.jpg?v=1636386431",
      "title": "Double Date Extreme Volume Mascara Duo - 01 Blackjack",
      "price": "799",
      "rating": "4.8",
      "id": 3
    }
    ,
    {
      "img": " https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-lash-mob-limitless-mascara-01-black-with-a-bang-black-12775589871699.jpg?v=1619100706",
      "title": "Lash Mob Limitless Mascara - 01 Black With A Bang (Black)",
      "price": "799",
      "rating": "4.8",
      "id": 4
    }]

   
  function display (data){
    let container= document.getElementById("container")
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
 
         div.append(img,title,price,rating)
 
         container.append(div)
 
     })
   }
 
   display(data)