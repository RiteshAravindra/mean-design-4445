let data =[
    {
      "img": "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-wonder-woman-24-hr-lip-lacquer-27982619738195.jpg?v=1619154969",
      "title": "Wonder Woman 24 HR Lip Lacquer",
      "price": "699",
      "rating": "4.7",
      "id": 1
    },
    {
      "img": "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cossmetics-wonder-woman-creamy-matte-lipstick-04-wild-wonder-lightest-coral-peach-28128214483027.jpg?v=1619155118",
      "title": "Wonder Woman Creamy Matte Lipsticks",
      "price": "599",
      "rating": "4.8",
      "id": 2
    },
    {
      "img": "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-wonder-woman-everlasting-matte-lipstick-01-warrior-orange-red-27982193950803.jpg?v=1619155214",
      "title": "Wonder Woman Everlasting Matte Lipstick",
      "price": "199",
      "rating": "4.8",
      "id": 3
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