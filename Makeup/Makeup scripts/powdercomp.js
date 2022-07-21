let data = [
    {
      "img": "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-all-set-to-go-banana-powder-13289662218323.jpg?v=1619115199",
      "title": "All Set To Go Banana Powder",
      "price": "599",
      "rating": "4.8",
      "id": 1
    },
    {
      "img": "https://cdn.shopify.com/s/files/1/0906/2558/products/3_7.jpg?v=1626795160",
      "title": "All Set To Go Translucent Powder",
      "price": "599",
      "rating": "4.8",
      "id": 2
    },
    {
      "img": "https://cdn.shopify.com/s/files/1/0906/2558/products/10_399a571c-c091-4d1c-bc17-111b7da9cd4e.jpg?v=1648741253",
      "title": "Set The Tone Tinted Powder",
      "price": "699",
      "rating": "4.7",
      "id": 3
    },
    {
      "img": "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-dream-cover-spf15-mattifying-compact-10-latte-12775602356307.jpg?v=1619106501",
      "title": "Dream Cover SPF15 Mattifying Compact",
      "price": "499",
      "rating": "4.7",
      "id": 4
    },
    {
      "img": "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-powder-play-translucent-compact-28122598932563.jpg?v=1619116304",
      "title": "Powder Play Translucent Compact",
      "price": "599",
      "rating": "4.7",
      "id": 5
    },
    {
      "img": "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-powder-play-banana-compact-28122599424083.jpg?v=1619116314",
      "title": "Powder Play Banana Compact",
      "price": "599",
      "rating": "4.7",
      "id": 6
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