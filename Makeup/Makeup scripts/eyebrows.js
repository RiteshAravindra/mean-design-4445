let data =[
    {
      "img": "https://cdn.shopify.com/s/files/1/0906/2558/products/1_df1e9403-ae9d-430c-8226-622d21c4743d.jpg?v=1640676422",
      "title": "Arch Arrival Brow Definer",
      "price": "499",
      "rating": "4.8",
      "id": 1
    },
    {
      "img": "https://cdn.shopify.com/s/files/1/0906/2558/products/1_9909d205-c5f9-476d-9903-c4beffbfebb7.jpg?v=1637068160",
      "title": "Arch Arrival Brow Pen",
      "price": "499",
      "rating": "4.6",
      "id": 2
    },
    {
      "img": "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-arch-arrival-brow-powder-14753953644627.jpg?v=1619120283",
      "title": "Arch Arrival Brow Powder",
      "price": "499",
      "rating": "4.7",
      "id": 3
    },
    {
      "img": "https://cdn.shopify.com/s/files/1/0906/2558/products/1_6a5fa1af-0d0e-4e9e-85d1-579495fb5030.jpg?v=1648482145",
      "title": "Arch Arrival Micro Brow Pencil",
      "price": "499",
      "rating": "",
      "id": 4
    },
    {
      "img": "https://cdn.shopify.com/s/files/1/0906/2558/products/1_cbe39f4e-85f9-4d59-a27f-1933f693fd32.jpg?v=1648482119",
      "title": "Arch Arrival Micro Brow Pencil - 02 Taupe Tom",
      "price": "499",
      "rating": "",
      "id": 5
    },
    {
      "img": "https://cdn.shopify.com/s/files/1/0906/2558/products/1_7194c993-55ca-40dd-ad41-ce1f40037293.jpg?v=1648222945",
      "title": "499",
      "price": "5",
      "rating": "",
      "id": 6
    },
    {
      "img": "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-arch-arrival-3-in-1-brow-shaper-02-taupe-tom-grey-brown-28122561052755_667218d2-eb64-4933-87f0-31e23808898f.jpg?v=1645526316",
      "title": "Arch Arrival 3-in-1 Brow Shaper",
      "price": "599",
      "rating": "4.7",
      "id": 7
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