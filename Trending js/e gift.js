let data =[
  {
    "id": "1",
    "title": "Raksha Bandhan Gift Card",
    "price": "500",
    "img1": "https://cdn.shopify.com/s/files/1/0906/2558/products/Gift-card-rakshabandhan-500.jpg?v=1657814576",
    "img2": "https://cdn.shopify.com/s/files/1/0906/2558/products/Gift-card-rakshabandhan-1000.jpg?v=1657814579",
    "img3": "https://cdn.shopify.com/s/files/1/0906/2558/products/Gift-card-rakshabandhan-1500.jpg?v=1657814581",
    "desc": "Be the cool sibling this rakhi! Gift your loved ones the SUGAR 'Raksha Bandhan Gift Card' and let them stock up on their favourite makeup and skincare products!  SUGAR Beauty gift card is perfect for any occasion! This is a convenient e-gift card with no delivery fee and processing fee and it comes with instructions to redeem at checkout.",
    "materialCare": "",
    "warrenty": ""
  },
  {
    "id": "2",
    "title": "SUGAR Gift Cards",
    "price": "1000",
    "img1": "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-sugar-gift-card-500-28132882874451.png?v=1619105892",
    "img2": "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-sugar-gift-card-1000-28122615545939.png?v=1619105894",
    "img3": "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-sugar-gift-card-1500-28132882907219.png?v=1619105896",
    "desc": "You no longer have to wait over never-ending queues, fretting over what to buy for your BFFs, family and colleagues. On this special occasion, give them the perfect gift of CHOICE. The best thing to give everyone on your list – Get Ready To Rule Gift Card.  It offers a plethora of options - from the best ranges of sassy and bold products to warm and subtle ones. A convenient e-gift card with no delivery fee and processing fee, it comes with instructions to redeem at checkout.  Now, gift the CHOICE to all the delicate darlings and the badass boss-girls. They’ll be elated!",
    "materialCare": "",
    "warrenty": ""
  },
  {
    "id": "3",
    "title": "I Love You Gift Card",
    "price": "1500",
    "img1": "https://cdn.shopify.com/s/files/1/0906/2558/products/Gift-card-I-love-you-1500.jpg?v=1656604282",
    "img2": "https://cdn.shopify.com/s/files/1/0906/2558/products/Gift-card-I-love-you-1000.jpg?v=1656604280",
    "img3": "https://cdn.shopify.com/s/files/1/0906/2558/products/Gift-card-I-love-you-500.jpg?v=1656604278",
    "desc": "Wondering what your better half would like as a gift? Worry no more! We've made it easier for you! Gift them the 'I Love You' Gift Card & let them stock up on their favourite SUGAR beauty products.  SUGAR Beauty gift card is perfect for any occasion! This is a convenient e-gift card with no delivery fee and processing fee and it comes with instructions to redeem at checkout.",
    "materialCare": "",
    "warrenty": ""
  },
  {
    "id": "4",
    "title": "Happy Anniversary Gift Card",
    "price": "1500",
    "img1": "https://cdn.shopify.com/s/files/1/0906/2558/products/Gift-card-happy-anniversary-1000.jpg?v=1656691842",
    "img2": "https://cdn.shopify.com/s/files/1/0906/2558/products/Gift-card-happy-anniversary-1500.jpg?v=1656691845",
    "img3": "https://cdn.shopify.com/s/files/1/0906/2558/products/Gift-card-happy-anniversary-500.jpg?v=1656691840",
    "desc": "It's your anniversary and you want to surprise your other-half in the most spectacular way possible! Gift your partner the SUGAR 'Happy Anniversary Gift' Card and let them pick their favourite beauty products.  SUGAR Beauty gift card is perfect for any occasion! This is a convenient e-gift card with no delivery fee and processing fee and it comes with instructions to redeem at checkout.",
    "materialCare": "",
    "warrenty": ""
  },
  {
    "id": "5",
    "title": "Best Friends Gift Card",
    "price": "1000",
    "img1": "https://cdn.shopify.com/s/files/1/0906/2558/products/Gift-card-best-friends-500.jpg?v=1656604270",
    "img2": "https://cdn.shopify.com/s/files/1/0906/2558/products/Gift-card-best-friends-1000.jpg?v=1656604272",
    "img3": "https://cdn.shopify.com/s/files/1/0906/2558/products/Gift-card-best-friends-1500.jpg?v=1656604274",
    "desc": "Let your bestie know how special they are to you! Gift them the 'Bestfriends' Gift Card and let them stock up on their favourite SUGAR beauty products.  SUGAR Beauty gift card is perfect for any occasion! This is a convenient e-gift card with no delivery fee and processing fee and it comes with instructions to redeem at checkout.",
    "materialCare": "",
    "warrenty": ""
  }
]
document.querySelector(".sort").addEventListener("change",handlefilter)
function handlefilter(){
  let selected=document.querySelector(".sort").value
  if(selected=="All"){
    append(data)
    // console.log(data)
  }else if(selected=="HP"){
    data.sort(function(a,b){
      return b.price-a.price
    })
    append(data)
    // console.log(data)
  }
  else if(selected=="LP"){
    data.sort(function(a,b){
      return a.price-b.price
    })
    append(data)
    // console.log(data)
  }
}


function append(data){
    let length= document.getElementById("length")
    let products= document.getElementById("products")
    products.innerText=""
    length.innerText="Gift Cards  -  "+data.length+" items"
    data.forEach(function(el){
        // console.log("inside function")
        let div= create('div')
        // div.style.backgroundColor="red"
        // div.style.height="100px"
        // div.style.width="100px"
        // div.style.display="flex"
        div.setAttribute("class", "product")
        
        let img = create('img')
        img.src=el.img1
        let title = create('h5')
        title.innerText=el.title
        let price= create('p')
        price.innerText="Rs."+el.price
        let centre=create('center')
        let pop = create('div')
        pop.setAttribute("id",'pop')
        // pop.addEventListener("click",function(el){
        //   localStorage.setItem("cart",JSON.stringify(productData))
        //   alert ("Item Added To Cart")
        // })
        let text= create('p')
        let center=create('center')
        center.append(text)
        div.addEventListener("mouseover", function(){
          overElem(div,center,pop)
        })
        div.addEventListener("mouseout", function(){
          outElem(div,center,pop)
          
        })
        div.addEventListener("click", function(){
          // console.log(el)
          localStorage.setItem("product",JSON.stringify(el))
          window.location.href="product.html"
        })
          // div.style.height="10px"
          // console.log("am inside")
        
        div.style.cursor="pointer"
        

        centre.append(img,title,price)
        div.append(centre)
        products.append(div)
    })
}
append(data)
function create(id){
    return document.createElement(id)
}
function overElem(div,center,pop){
    div.style.boxShadow= "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"
      center.innerText="Add To Cart"
      pop.append(center)
      pop.style.backgroundColor="black"
      div.append(pop)
      
    
    
    // pop.append(text)
    // div.append(pop)
    // console.log("hi")
    // div.addEventListener("mouseover", function(){
    //   // let pop = create('div')
    //   // let text= create('p')
    //   // text.innerText="Add To Cart"
    //   pop.append(text)
    //   div.append(pop)
    // })
    // div.addEventListener("mouseout", function(){
    //   pop.innerText=""
    // })
    
}
function outElem(div,center,pop){
  div.style.boxShadow=""
  center.innerText=""
  // center.style.color="white"
  // pop.style.display="none"
  pop.style.backgroundColor="white"
}