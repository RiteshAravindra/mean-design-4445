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