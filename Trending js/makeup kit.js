let data=[
    
]




function append(data){
    let length= document.getElementById("length")
    let products= document.getElementById("products")
    length.innerText="Makeup Kit Collection  -  "+data.length+" items"
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
        div.addEventListener("mouseover", function(){
          overElem(div)
        })
        div.addEventListener("mouseout", function(){
          outElem(div)
        })
        div.addEventListener("click", function(){
          // console.log(el)
          localStorage.setItem("product",JSON.stringify(el))
          window.location.href="product.html"
        })
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
function overElem(div){
    div.style.boxShadow= "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"
    let pop = create('div')
    // let text= create('p')
    // text.innerText="Add To Cart"
    // pop.append(text)
    // div.append(pop)
    // console.log("hi")
    
    
}
function outElem(div){
  div.style.boxShadow=""
  // div.innerText=""
  // div.innerText=append(div)
}
