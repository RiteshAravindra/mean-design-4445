let data =[
    {
      "img": "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-tipsy-lips-moisturizing-balm-01-mojito-15057279877203.jpg?v=1619122412",
      "title": "Tipsy Lips Moisturizing Balm",
      "price": "199",
      "rating": "4.8",
      "id": 1
    },
    {
      "img": "https://cdn.shopify.com/s/files/1/0906/2558/products/1_c30a9b16-ef13-44c3-af41-04b227c62419.jpg?v=1642434141",
      "title": "Lip Zip Matte Topper",
      "price": "599",
      "rating": "4.8",
      "id": 2
    },
    {
      "img": "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-seal-the-show-lip-primer-14162590433363.jpg?v=1619106825",
      "title": "Seal The Show Lip Primer",
      "price": "199",
      "rating": "4.8",
      "id": 3
    }
    ,
    {
      "img": "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-lip-service-tint-remover-28122580910163.jpg?v=1619155575",
      "title": "LIP SERVICE TINT REMOVER",
      "price": "399",
      "rating": "4.0",
      "id": 4
    }
    ,
    {
      "img": "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-lip-service-sugar-scrub-28015074508883.jpg?v=1619155562",
      "title": "LIP SERVICE SUGAR SCRUB",
      "price": "399",
      "rating": "4.6",
      "id": 5
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