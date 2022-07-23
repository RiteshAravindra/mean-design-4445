// let getdatafromLS = JSON.parse(localStorage.getItem("Orderlist"))
// displayUserData(getdatafromLS);

// function displayUserData(getdatafromLS){
//     let total1=0
   
//  document.querySelector("#four").innerHTML="";   
//  getdatafromLS.forEach(function(ele){
//     let box= document.createElement("div");
    
//     let pic=document.createElement("img");
//     pic.setAttribute("src" , ele.img);
  
//     let name=document.createElement("h2");
//     name.innerText=ele.title
    
//     let dresstype=document.createElement("p");
//     dresstype.innerText=ele.price;

//     let del=document.createElement("button");
//     del.innerText="X REMOVE";
//     del.addEventListener("click" , function(){
//         removedata(ele.name)
//     })
//     let price=document.createElement("h3");
//     price.setAttribute('id','price1')
//     price.innerText=+(ele.price)
//     total1=+(total1)+ele.price
//     let total=document.querySelectorAll('.fourteen>h3')
//     total[0].innerText=total1
//     total[1].innerText=total1

//     // cart  funtction

//     let qun=document.createElement('h5')
//     qun.innerText=1
//     let btn1=document.createElement('button')
//     btn1.setAttribute('class',"qtn_btn")
//     btn1.innerText="-"
//     let counter2=1
//     btn1.addEventListener('click', function(){
//         counter2--
//         if(counter2==0){
//             counter2=1
//         }
// qun.innerText=counter2
// price.innerText=Number(ele.price)*counter2
// let sum1=Number(ele.price)*counter2
// total3=0+sum1
// total[0].innerText=total3
// total[1].innerText=total3
//     })
//     let total2=0
//     let btn2=document.createElement('button')
//     btn2.setAttribute('class',"qtn_btn")
//     btn2.innerText="+"
//     btn2.addEventListener('click', function(){
//          counter2++
//         qun.innerText=counter2
//         price.innerText=Number(ele.price)*counter2
//         let sum2=Number(ele.price)*counter2
//         total2=0+sum2
//         total[0].innerText=total2
//         total[1].innerText=total2
//         console.log(total2)
//    })        

//     box.append(pic,name,dresstype,del,btn1,qun,btn2,price);
 
//  document.querySelector("#four").append(box)
// })
// }

// function removedata(naam){
//  let deleted=getdatafromLS.filter(function(ele){
//     return ele.name!==naam;
//  })   
//  console.log(deleted)
//  getdatafromLS=deleted
//  localStorage.setItem("Orderlist" , JSON.stringify(getdatafromLS));
// displayUserData(getdatafromLS);
// }


let arrfromls =JSON.parse(localStorage.getItem("Orderlist"))



function display(arrfromls){

   let container= document.querySelector("#four")
   container.innerHTML=""
let arr=[]
   arrfromls.forEach(function(element){
    let counter=1
    let sum=0
    let product;
    let box = document.createElement("div")

    let b1=document.createElement("div")
    let img= document.createElement("img")
    img.src=element.img;
    img.style.width="50px"
    b1.append(img)
    
    
    let b2=document.createElement("div")
    let tit= document.createElement("h3")
    tit.innerHTML=element.title;
    b2.append(tit)

    let b3=document.createElement("div")
    let pri =document.createElement("h3")
    pri.innerHTML= element.price
    b3.append(pri)

    let qlabel=document.createElement("label")
    qlabel.innerHTML="Quantity"

    


    let b5=document.createElement("div")
    let btnr=document.createElement("button")
    btnr.innerHTML="REMOVE"
    btnr.addEventListener("click",function(){

    })
    b5.append(btnr)

    let b6=document.createElement("div")
    let pro=document.createElement("h3")
    pro.innerHTML=0

    let inpu=document.createElement("input")
     inpu.value=counter
     

     let b4=document.createElement("div")
     let btnm=document.createElement("button")
     btnm.addEventListener("click",function(){
         counter--
         
         if(counter==0){
                      counter=1
             }
             console.log(counter)
             inpu.value=counter
              product=counter * Number(element.price)
              console.log(product)
              pro.innerHTML=product
              arr.push(product)
              console.log(arr)
              
     })
     btnm.innerHTML="-"
     
     let btnp=document.createElement("button")
     btnp.addEventListener("click",function(){
         counter++
         inpu.value=counter
         console.log(counter)
         product=counter * Number(element.price)
         console.log(product)
         pro.innerHTML=product

         
       
        
     })


    
     btnp.innerHTML="+"
     
     
     
     
     b4.append(btnm,inpu,btnp)

    //  pro.innerHTML=`${product}`

     b6.append(pro)

    

    box.append(b1,b2,b3,qlabel,b4,b5,b6)
    container.append(box)

   })
}


display(arrfromls)



let tot=99045

let st = document.querySelector(".fourteen>h3");

st.innerHTML= `${tot}`



function removedata(naam){
      let deleted=getdatafromLS.filter(function(ele){
        return ele.name!==naam;
       })   
     console.log(deleted)
      getdatafromLS=deleted
      localStorage.setItem("Orderlist" , JSON.stringify(getdatafromLS));
     displayUserData(getdatafromLS);
     }