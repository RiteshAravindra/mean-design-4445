let data=[
    {
      "img": "https://cdn.shopify.com/s/files/1/0906/2558/products/1_51afaa84-af89-42b5-bdb8-a51b01257bc0.jpg?v=1639582607",
      "title": "Contour De Force Face Palette",
      "price": "799",
      "rating": "499",
      "id": 1
    },
    {
      "img": "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-contour-de-force-mini-blush-01-peach-peak-soft-peach-pink-11020203884627.jpg?v=1619102626",
      "title": "Contour De Force Mini Blush",
      "price": "349",
      "rating": "4.8",
      "id": 2
    },
    {
      "img": "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-face-fwd-blush-stick-01-coral-climax-bright-coral-13825375273043.jpg?v=1619116614",
      "title": "Face Fwd >> Blush Stick",
      "price": "799",
      "rating": "4.9",
      "id": 3
    },
    {
      "img": "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-wonder-woman-mixed-palette-01-cosmos-conqueror-27982507081811.jpg?v=1619155557",
      "title": "Wonder Woman Mixed Palette",
      "price": "999",
      "rating": "4.7",
      "id": 4
    }
  ]

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
