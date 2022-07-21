let data =[
    {
        "img": "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-gloss-boss-24hr-eyeliner-01-back-in-black-black-12771395436627_a805d7b4-0863-4ae0-9f15-a2292ae9aa93.jpg?v=1632210594",
        "title": "The Most Eligiblur Correcting Primer",
        "price": "799",
        "rating": "5",
        "id": 1
      },
      {
        "img": "https://cdn.shopify.com/s/files/1/0906/2558/products/1_1da9dee5-9c2e-4135-994c-9b7d2ca23e6b.jpg?v=1641915296",
        "title": "Stroke Of Genius Heavy-Duty Kohl",
        "price": "499",
        "rating": "4.8",
        "id": 2
      },
      {
        "img": "https://cdn.shopify.com/s/files/1/0906/2558/products/2_d5e8f5f6-db6f-43d4-a1ac-1da7b22fdc1b.jpg?v=1652943021",
        "title": "Arch Arrival Micro Brow Pencil",
        "price": "499",
        "rating": "",
        "id": 3
      },
      {
        "img": "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-seal-the-show-lip-primer-14162590433363.jpg?v=1619106825",
        "title": "The Most Eligiblur Correcting Primer - 03 Jade Jockey (Green)",
        "price": "799",
        "rating": "",
        "id": 4
      },
      {
        "img": "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-time-to-shine-lip-gloss-13905851580499.jpg?v=1619116676",
        "title": "It's A-pout Time! Vivid Lipstick",
        "price": ".359",
        "rating": "4.7481",
        "id": 5
      },
      {
        "img": "https://cdn.shopify.com/s/files/1/0906/2558/products/1_aab4d2fb-22ff-4c06-b906-608c50c2cce5.jpg?v=1639582378",
        "title": "Face Fwd >> Primer Stick",
        "price": "799",
        "rating": "4.8",
        "id": 6
      },
      {
        "img": "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-twist-and-shout-fadeproof-kajal-01-black-velvet-black-14255312109651.jpg?v=1619100296",
        "title": "Limited Edition Nothing Else Matter Longwear Lipstick",
        "price": "499",
        "rating": "4.9",
        "id": 7
      },
      {
        "img": "https://cdn.shopify.com/s/files/1/0906/2558/products/1_6a5fa1af-0d0e-4e9e-85d1-579495fb5030.jpg?v=1648482145",
        "title": "Face Fwd >> Blush Stick",
        "price": "799",
        "rating": "4.9",
        "id": 8
      },
      {
        "img": "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-mettle-liquid-lipstick-01-lyra-cool-toned-plum-13200549380179.jpg?v=1619110238",
        "title": "Drop The Base Serum Foundation",
        "price": "899",
        "rating": "4.8",
        "id": 9
      },
      {
        "img": "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-it-s-a-pout-time-vivid-lipstick-01-the-big-bang-berry-wine-13204815937619.jpg?v=1619100487",
        "title": "Mettle Matte Lipstick",
        "price": "549",
        "rating": "4.7",
        "id": 10
      },
      {
        "img": "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-face-fwd-corrector-stick-01-peach-precedent-peach-13825390542931.jpg?v=1619116625",
        "title": "Powder Play Translucent Compact",
        "price": "599",
        "rating": "4.7",
        "id": 11
      },
      {
        "img": "https://cdn.shopify.com/s/files/1/0906/2558/products/1_7194c993-55ca-40dd-ad41-ce1f40037293.jpg?v=1648222945",
        "title": "Face Fwd >> Contour Stick",
        "price": "799",
        "rating": "4.9",
        "id": 12
      },
      {
        "img": "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-it-s-a-pout-time-vivid-lipstick-01-the-big-bang-berry-wine-13204815937619.jpg?v=1619100487",
        "title": "Magic Wand Waterproof Concealer",
        "price": "799",
        "rating": "4.8",
        "id": 13
      },
      {
        "img": "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-face-fwd-primer-stick-13825409417299.jpg?v=1619116598",
        "title": "Eye Dared You So! Metallic Eyeliner",
        "price": "699",
        "rating": "4.8",
        "id": 14
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