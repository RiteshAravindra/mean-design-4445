let data=[
    {
      "img": "https://cdn.shopify.com/s/files/1/0906/2558/products/2_d5e8f5f6-db6f-43d4-a1ac-1da7b22fdc1b.jpg?v=1652943021",
      "title": "The Most Eligiblur Correcting Primer",
      "price": "799",
      "rating": "5",
      "id": 1
    },
    {
      "img": "https://cdn.shopify.com/s/files/1/0906/2558/products/1_270fb7dc-e51b-4c12-8bcf-18919fd35415.jpg?v=1652942969",
      "title": "The Most Eligiblur Correcting Primer - 02 Onward Orange (Orange)",
      "price": "799",
      "rating": "",
      "id": 2
    },
    {
      "img": "https://cdn.shopify.com/s/files/1/0906/2558/products/1_2170e342-a8fc-4fb4-a5ea-5f0c8bedbfdf.jpg?v=1652942866",
      "title": "The Most Eligiblur Correcting Primer - 01 Peach Precedent (Peach)",
      "price": "799",
      "rating": "",
      "id": 3
    },
    {
      "img": "https://cdn.shopify.com/s/files/1/0906/2558/products/1_944437bb-7ed0-423f-bdbf-153ad7fefcde.jpg?v=1652942992",
      "title": "The Most Eligiblur Correcting Primer - 03 Jade Jockey (Green)",
      "price": "799",
      "rating": "",
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
      "img": "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-magic-wand-waterproof-concealer-07-vanilla-latte-fair-golden-undertone-13278398611539.jpg?v=1619114712",
      "title": "Magic Wand Waterproof Concealer",
      "price": "799",
      "rating": "4.8",
      "id": 6
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