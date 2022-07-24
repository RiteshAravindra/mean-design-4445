console.log("hi");
brushdata=[
{
image:"https://cdn.shopify.com/s/files/1/0906/2558/products/BlendTrendFaceBrush-006Highlighter.jpg?v=1627660002",
title:"Blend Trend Face Brush - 006 Highlighter",
price:"399",
rating:"4.7(23)",
cat:"brushes",
subcat:"facebrush",
},
{
image:"https://cdn.shopify.com/s/files/1/0906/2558/products/BlendTrendFaceBrush-003Contour.jpg?v=1627659996",
title:"Blend Trend Face Brush - 003 Contour",
price:"399",
rating:"4.5(13)",
cat:"brushes",
subcat:"facebrush",
},
{
image:"https://cdn.shopify.com/s/files/1/0906/2558/products/Blend-Trend-WBG-images-5-min.jpg?v=1627573639",
title:"Blend Trend Dual Eyeshadow Brush - 412 Flat + Round",
price:"599",
rating:"5.0(2)",
cat:"brushes",
subcat:"eyebrush",
},
{
image:"https://cdn.shopify.com/s/files/1/0906/2558/products/Blend-Trend-WBG-images-13.jpg?v=1627659977",
title:"Blend Trend Dual Eyeshadow Brush - 413 Flat + Round Xl",
price:"599",
rating:"5.0(2)",
cat:"brushes",
subcat:"eyebrush",
},
{
image:"https://cdn.shopify.com/s/files/1/0906/2558/products/Blend-Trend-WBG-images-12-min.jpg?v=1627573647",
title:"Blend Trend Dual Face Brush - 075 Powder + Foundation",
price:"599",
rating:"4.8(42)",
cat:"brushes",
subcat:"facebrush",
},
{
image:"https://cdn.shopify.com/s/files/1/0906/2558/products/Blend-Trend-WBG-images-2-min.jpg?v=1627573652",
title:"Blend Trend Eyeshadow Brush - 041 Flat",
price:"399",
rating:"5.0(3)",
cat:"brushes",
subcat:"eyebrush",
},
{
image:"https://cdn.shopify.com/s/files/1/0906/2558/products/Blend-Trend-WBG-images-3-min.jpg?v=1627573657",
title:"Blend Trend Eyeshadow Brush - 042 Round",
price:"399",
rating:"4.4(5)",
cat:"brushes",
subcat:"eyebrush",
},
{
image:"https://cdn.shopify.com/s/files/1/0906/2558/products/Blend-Trend-WBG-images-14_1.jpg?v=1627659982",
title:"Blend Trend Eyeshadow Brush - 043 Round Xl",
price:"399",
rating:"4.8(6)",
cat:"brushes",
subcat:"eyebrush",
},
{
image:"https://cdn.shopify.com/s/files/1/0906/2558/products/BlendTrendFoundationBrush-052Kabuki.jpg?v=1627573664",
title:"Blend Trend Foundation Brush - 052 Kabuki",
price:"399",
rating:"4.8(26)",
cat:"brushes",
subcat:"facebrush",
},
{
image:"https://cdn.shopify.com/s/files/1/0906/2558/products/BlendTrendFaceBrush-001Blush.jpg?v=1627659984",
title:"Blend Trend Face Brush - 001 Blush",
price:"399",
rating:"4.9(15)",
cat:"brushes",
subcat:"facebrush",
},
{
image:"https://cdn.shopify.com/s/files/1/0906/2558/products/BlendTrendFaceBrush-007Powder.jpg?v=1627660008",
title:"Blend Trend Face Brush - 007 Powder",
price:"399",
rating:"4.9(24)",
cat:"brushes",
subcat:"facebrush",
},
{
image:"https://cdn.shopify.com/s/files/1/0906/2558/products/BeginnersEssentialsCombo3-WBGimages.jpg?v=1630683820",
title:"Face Essentials Combo",
price:"1499",
rating:"5.0(1)",
cat:"brushes",
},
]


let facebrush = brushdata.filter(filterByID);

  function filterByID(item) {
    if (item.subcat == "facebrush") {
      return true;
    } else {
      return false;
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


function display (data){
    let container= document.getElementById("container")
     data.forEach(function(element){
 
         let div =document.createElement("div")
         div.setAttribute("class","box")
         div.onmouseenter=function()
         {
            heart.style.display="block";
            addcart.style.display="block";
         }
         div.onmouseleave=function()
         {
            heart.style.display="none";
            addcart.style.display="none";
         }

         let gap=document.createElement("div")
         gap.style.height="30px";

         let cart=document.createElement("div")
         cart.style.height="30px";
         cart.setAttribute("class","displayhide");
         cart.style.display="flex";
         gap.append(cart);


         let heart=document.createElement("p")
         heart.innerHTML=`<img src="style/heart.png">`;
         heart.style.width="18%";
         heart.style.display="none";

        let addcart=document.createElement("btn")
        addcart.innerText="ADD TO CART";
        addcart.style.width="82%";
        addcart.style.backgroundColor="black";
        addcart.style.color="white";
        addcart.style.display="none";

        cart.append(heart,addcart)


         let img=document.createElement("img")
         img.src=element.image;
 
         let title=document.createElement("h3")
         title.innerHTML=element.title;
         title.style.height="11%";
 
         let price=document.createElement("p")
         price.innerHTML=`<p>Rs. ${element.price}</p>`
         price.style.color="grey"; 
 
         let rating=document.createElement("p")
         rating.innerHTML=`<img style="width:18px;"src="https://in.sugarcosmetics.com/star_filled.png" ${ element.rating}alt="">${ element.rating}`;
         rating.style.color="grey"; 

         div.append(img,title,price,rating,gap)
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
 