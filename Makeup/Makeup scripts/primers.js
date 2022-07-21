let data =[
    {
      "img": "https://cdn.shopify.com/s/files/1/0906/2558/products/1_6f55bcac-3e42-4253-88ee-cec0fa43c62a.jpg?v=1645608270",
      "title": "Matte Attack Transferproof Lipstick",
      "price": "699",
      "rating": "4.7",
      "id": 1
    },
    {
      "img": "https://cdn.shopify.com/s/files/1/0906/2558/products/1_51afaa84-af89-42b5-bdb8-a51b01257bc0.jpg?v=1639582607",
      "title": "Contour De Force Face Palette",
      "price": "799",
      "rating": "4.9",
      "id": 2
    },
    {
      "img": "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-all-set-to-go-banana-powder-13289662218323.jpg?v=1619115199",
      "title": "All Set To Go Banana Powder",
      "price": "599",
      "rating": "4.8",
      "id": 3
    },
    {
      "img": "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-contour-de-force-mini-blush-01-peach-peak-soft-peach-pink-11020203884627.jpg?v=1619102626",
      "title": "Contour De Force Mini Blush",
      "price": "349",
      "rating": "4.8",
      "id": 4
    },
    {
      "img": "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-contour-de-force-mini-bronzer-01-taupe-topper-cool-toned-brown-gray-undertone-11020228624467.jpg?v=1619102678",
      "title": "Goddess Of Flawless SPF30+ BB Cream",
      "price": "699",
      "rating": "4.7",
      "id": 5
    },
    {
      "img": "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-eye-warned-you-so-double-matte-eyeliner-01-black-swan-black-13954562654291.jpg?v=1619116881",
      "title": "Eye Warned You So! Double Matte Eyeliner",
      "price": "699",
      "rating": "4.8",
      "id": 6
    },
    {
      "img": "https://cdn.shopify.com/s/files/1/0906/2558/products/01_5e8187e3-f7a2-40aa-a759-d4bf69769234.jpg?v=1639496327",
      "title": "Kohl Of Honour Intense Kajal - 01 Black Out (Black)",
      "price": "248",
      "rating": "4.9",
      "id": 7
    },
    {
      "img": "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-uptown-curl-lengthening-mascara-01-black-beauty-black-28122637828179.jpg?v=1619106532",
      "title": "Uptown Curl Lengthening Mascara - 01 Black Beauty (Black)",
      "price": "499",
      "rating": "4.8",
      "id": 8
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