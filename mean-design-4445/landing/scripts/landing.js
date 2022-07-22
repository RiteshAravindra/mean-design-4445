// Banner js start
let slideimg = [
    "https://d32baadbbpueqt.cloudfront.net/Homepage/eedba493-c795-435f-b323-a026045a571b.gif",
    "https://d32baadbbpueqt.cloudfront.net/Homepage/cab9a296-0188-45c0-903a-c2da1c84fdbb.jpg",
    "https://d32baadbbpueqt.cloudfront.net/Homepage/be784c39-2c84-45d0-89c4-e79f72b380b0.jpg",
    "https://d32baadbbpueqt.cloudfront.net/Homepage/0a0d2b46-e424-4f4c-baf3-da2d2fc14f88.jpg",
    "https://d32baadbbpueqt.cloudfront.net/Homepage/32e53a7b-879e-4c34-a5bc-b95c85ee4a9e.jpg",
    "https://d32baadbbpueqt.cloudfront.net/Homepage/7d151892-4d17-466e-8a06-743392796264.jpg",
    "https://d32baadbbpueqt.cloudfront.net/Homepage/85bc9b9b-d8b3-4fa1-a1b0-a77ca9428664.jpg",
    "https://d32baadbbpueqt.cloudfront.net/Homepage/5dfdfad9-7419-46b3-85dc-1cde9429619d.gif",
  ];
 
  function slidingimage() {
    let i = 0;
    let slidingshow = document.getElementById("caro1");
    let indi1 = document.createElement("div");
    let image = document.createElement("img");
    setInterval(function () {
      if (slideimg.length == i) 
      {
        i = 0;
      }
      image.src = slideimg[i];
      indi1.append(image);    
      i++;
      slidingshow.append(indi1);
    }, 4000);
  }
// Banner js end

// Beauty tips carousel start

  let slideimg2 = [
    "https://d32baadbbpueqt.cloudfront.net/Homepage/64f2889d-e2d9-4047-82cd-e0e820230a77.jpg",
    "https://d32baadbbpueqt.cloudfront.net/Homepage/36e44ab4-2b5b-4b5c-b35a-fb56a9c59f1a.jpg",
    "https://d32baadbbpueqt.cloudfront.net/Homepage/fb3fbeba-23b1-42cf-946d-d69c2a3f393f.jpg",
  ];
 
  function slidingimage2() {
    let i = 0;
    let slidingshow = document.getElementById("caro2");
    let indi1 = document.createElement("div");
    let image = document.createElement("img");
    setInterval(function () {
      if (slideimg2.length == i) 
      {
        i = 0;
      }
      image.src = slideimg2[i];
      indi1.append(image);    
      i++;
      slidingshow.append(indi1);
    }, 2000);
  }
  slidingimage2();
// Beauty tips carousel end

// Hot Deals start
let hotdeal = [
    "https://d32baadbbpueqt.cloudfront.net/Homepage/e1ac6ed0-3965-4371-9eb4-55592bc79bf7.jpg",
    "https://d32baadbbpueqt.cloudfront.net/Homepage/b8278548-ed11-44b4-9818-25c5146c604d.jpg",
    "https://d32baadbbpueqt.cloudfront.net/Homepage/7145deaa-8296-49ba-9964-061fded28226.jpg",
    "https://d32baadbbpueqt.cloudfront.net/Homepage/2cd03446-33d8-47df-982a-3991ac582be1.jpg",
    "https://d32baadbbpueqt.cloudfront.net/Homepage/d81e88d8-712e-4e18-90f2-93bd27236050.jpg",
    "https://d32baadbbpueqt.cloudfront.net/Homepage/7b817474-27aa-4c69-816d-960bfbc1d2a9.jpg",
  ];
 
  function hotdeals() {
    let i = 0;
    let j = 1;
    let k = 2;

    let slidingshow = document.getElementById("hotdeals");
    let indi1 = document.createElement("div");
    let indi2 = document.createElement("div");
    let indi3 = document.createElement("div");

    let image = document.createElement("img");
    
    let image2 = document.createElement("img");
    let image3 = document.createElement("img");
   
    setInterval(function () {
      if (hotdeal.length <= k) {
        i = 0;
        j = 1;
        k= 2;
      }
      image.src = hotdeal[i];
      indi1.append(image);
      
      image2.src = hotdeal[j];
      indi2.append(image2);

      image3.src = hotdeal[k];
      indi3.append(image3);
    
      i++;
      j++;
      k++;
      slidingshow.append(indi1, indi2,indi3);
    }, 10000);
  }
  hotdeals();
// Hot Deals End

// newly launched
let newlylaunced = [
    "https://d32baadbbpueqt.cloudfront.net/Homepage/a1ea3283-9593-4f1c-8e6b-70c3a5062c37.jpg",
    "https://d32baadbbpueqt.cloudfront.net/Homepage/37471559-27d1-4509-9e31-29d889be7036.jpg",
    "https://d32baadbbpueqt.cloudfront.net/Homepage/f25612b8-b6b8-4d08-8704-def43067c472.jpg",
    "https://d32baadbbpueqt.cloudfront.net/Homepage/f190c764-84cf-4eea-a381-8b701be65852.gif",
    "https://d32baadbbpueqt.cloudfront.net/Homepage/89e51326-1363-44e1-94f1-d5bd00bd2ca9.gif",
    "https://d32baadbbpueqt.cloudfront.net/Homepage/6985f902-c3fe-4a20-bc76-1658a9109fd1.jpg",
    "https://d32baadbbpueqt.cloudfront.net/Homepage/730cf92b-3d4a-4d08-bed8-db88e7911f32.jpg",
  ];
 
  function newly() {
    let i = 0;
    let slidingshow = document.getElementById("launched");
    let indi1 = document.createElement("div");
    let image = document.createElement("img");
    setInterval(function () {
      if (newlylaunced.length == i) 
      {
        i = 0;
      }
      image.src = newlylaunced[i];
      indi1.append(image);    
      i++;
      slidingshow.append(indi1);
    }, 3000);
  }
newly();
// newly launced

// Top pick end
let toppick = [
    "https://d32baadbbpueqt.cloudfront.net/Homepage/3cf8cc3a-dff3-4984-88ac-3772b3d402a0.jpg",
    "https://d32baadbbpueqt.cloudfront.net/Homepage/ea4d18b1-3c4d-483f-a723-c2c6f0b48e65.jpg",
    "https://d32baadbbpueqt.cloudfront.net/Homepage/0f6acb92-2394-4185-a22a-e3a17252ccbe.jpg",
    "https://d32baadbbpueqt.cloudfront.net/Homepage/2589c084-0746-47b8-bbea-9150a035ce02.jpg",
    "https://d32baadbbpueqt.cloudfront.net/Homepage/1e7e7626-944b-4b79-b60f-4f26e13801ed.jpg",
    "https://d32baadbbpueqt.cloudfront.net/Homepage/17a7167c-09e5-4dcb-a73d-f74df79bf03b.jpg",
  ];
 
  function topick() {
    let i = 0;
    let j = 1;
    let k = 2;

    let slidingshow = document.getElementById("toppicks");
    let indi1 = document.createElement("div");
    let indi2 = document.createElement("div");
    let indi3 = document.createElement("div");

    let image = document.createElement("img");
    let image2 = document.createElement("img");
    let image3 = document.createElement("img");
   
    setInterval(function () {
      if (toppick.length <= k) {
        i = 0;
        j = 1;
        k= 2;
      }
      image.src = toppick[i];
      indi1.append(image);
      
      image2.src = toppick[j];
      indi2.append(image2);

      image3.src = toppick[k];
      indi3.append(image3);
    
      i++;
      j++;
      k++;
      slidingshow.append(indi1, indi2,indi3);
    }, 10000);
  }
  topick();
// top pic end

// sugar blog start
let bloglink = [
    "https://d32baadbbpueqt.cloudfront.net/Homepage/e85a14c9-b94c-4415-aee5-5a361d9b7591.jpg",
    "https://d32baadbbpueqt.cloudfront.net/Homepage/67b905b0-b029-43b3-b411-bbd6aeb1bcf1.jpg",
    "https://d32baadbbpueqt.cloudfront.net/Homepage/53ac6d17-0616-4ceb-8152-9ba9bd8d604f.jpg",
    "https://d32baadbbpueqt.cloudfront.net/Homepage/3d42df13-a169-43e3-82a0-e134d709aeb1.jpg",
    "https://d32baadbbpueqt.cloudfront.net/Homepage/802dd327-0ec5-4d3d-9e0f-0e8c72e0ba76.jpg",
    "https://d32baadbbpueqt.cloudfront.net/Homepage/d844f2ae-1718-4a6b-8203-97f2eacaf39b.jpg",
  ];
 
  function blogdis() {
    let i = 0;
    let j = 1;
    let k = 2;

    let slidingshow = document.getElementById("sugarblog");
    let indi1 = document.createElement("div");
    let indi2 = document.createElement("div");
    let indi3 = document.createElement("div");

    let image = document.createElement("img");
    let image2 = document.createElement("img");
    let image3 = document.createElement("img");
   
    setInterval(function () {
      if (bloglink.length <= k) {
        i = 0;
        j = 1;
        k= 2;
      }
      image.src = bloglink[i];
      indi1.append(image);
      
      image2.src = bloglink[j];
      indi2.append(image2);

      image3.src = bloglink[k];
      indi3.append(image3);
    
      i++;
      j++;
      k++;
      slidingshow.append(indi1, indi2,indi3);
    }, 10000);
  }
  blogdis();
// sugar blog end
// bestseller start
bestseller=[
  {
    "img": "https://cdn.shopify.com/s/files/1/0906/2558/products/382512089-mettle-priming-balm-01.jpg?v=1648654861",
    "title": "Mettle Priming Balm",
    "price": "1099",
    "rating": "",
    "id": 1
  },
  {
    "img": "https://cdn.shopify.com/s/files/1/0906/2558/products/AirKissPowderPoweredByImagesArtboard1.jpg?v=1644813116",
    "title": "Air Kiss Powder Lipstick",
    "price": "499",
    "rating": "",
    "id": 2
  },
  {
    "img": "https://cdn.shopify.com/s/files/1/0906/2558/products/1_61109b87-1ae6-4cb4-8550-5b57d688a4eb.jpg?v=1651852771",
    "title": "Bling Leader Illuminating Sunscreen SPF35 PA+++",
    "price": "599",
    "rating": "",
    "id": 3
  },
  {
    "img": "https://cdn.shopify.com/s/files/1/0906/2558/products/1_ef579f2e-602e-4d2f-bed2-bf0efdf4f184.jpg?v=1644325813",
    "title": "Smudge Me Not Liquid Lipstick",
    "price": "499",
    "rating": "",
    "id": 4
  },
  {
    "img": "https://cdn.shopify.com/s/files/1/0906/2558/products/10_399a571c-c091-4d1c-bc17-111b7da9cd4e.jpg?v=1648741253",
    "title": "Set The Tone Tinted Powder",
    "price": "699",
    "rating": "",
    "id": 5
  },
  {
    "img": "https://cdn.shopify.com/s/files/1/0906/2558/products/1_c30a9b16-ef13-44c3-af41-04b227c62419.jpg?v=1642434141",
    "title": "Lip Zip Matte Topper",
    "price": "499",
    "rating": "",
    "id": 6
  },
  {
    "img": "https://cdn.shopify.com/s/files/1/0906/2558/products/01_d6ffec78-c2b6-4466-8672-233fee0285a8.jpg?v=1644394232",
    "title": "Matte As Hell Crayon Lipstick",
    "price": "799",
    "rating": "",
    "id": 7
  },
  {
    "img": "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-goddess-of-flawless-spf30-bb-cream-07-vanilla-latte-fair-12796432941139.jpg?v=1619114695",
    "title": "Goddess Of Flawless SPF30+ BB Cream",
    "price": "699",
    "rating": "",
    "id": 8
  },
  {
    "img": "https://cdn.shopify.com/s/files/1/0906/2558/products/01.jpg?v=1644399711",
    "title": "Kohl Of Honour Intense Kajals",
    "price": "249",
    "rating": "",
    "id": 9
  },
  {
    "img": "https://cdn.shopify.com/s/files/1/0906/2558/products/01_59809bd6-49ef-4c6b-b262-47002bedc963.jpg?v=1639755559",
    "title": "Blend The Rules Eyeshadow Palette",
    "price": "1199",
    "rating": "",
    "id": 10
  },
  {
    "img": "https://cdn.shopify.com/s/files/1/0906/2558/products/1_e9355d54-6ddb-4aa4-bdfc-176a676db886.jpg?v=1657257149",
    "title": "Base Of Glory Pore Minimizing Primer",
    "price": "799",
    "rating": "",
    "id": 11
  },
  {
    "img": "https://cdn.shopify.com/s/files/1/0906/2558/products/1_51afaa84-af89-42b5-bdb8-a51b01257bc0.jpg?v=1639582607",
    "title": "Contour De Force Face Palette",
    "price": "799",
    "rating": "",
    "id": 12
  }
]


function bestsell() {
  let i = 0;
  let j = 1;
  let k = 2;
  let l=3;

  let best = document.getElementById("bestseller");
  let indi1 = document.createElement("div");
  let indi2 = document.createElement("div");
  let indi3 = document.createElement("div");
  let indi4 = document.createElement("div");

  let image = document.createElement("img");
  let image2 = document.createElement("img");
  let image3 = document.createElement("img");
  let image4 = document.createElement("img");

  let title = document.createElement("p");
  title.style.height="35px";
  let title2 = document.createElement("p");
  title2.style.height="35px";
  let title3 = document.createElement("p");
  title3.style.height="35px";
  let title4 = document.createElement("p");
  title4.style.height="35px";
 
  let price = document.createElement("p");
  let price2 = document.createElement("p");
  let price3 = document.createElement("p");
  let price4 = document.createElement("p");

  let addcart1=document.createElement("btn")
        addcart1.innerText="ADD TO CART";
        addcart1.style.width="100%";
        addcart1.style.backgroundColor="black";
        addcart1.style.color="white";
    let addcart2=document.createElement("btn")
        addcart2.innerText="ADD TO CART";
        addcart2.style.width="100%";
        addcart2.style.backgroundColor="black";
        addcart2.style.color="white";
    let addcart3=document.createElement("btn")
        addcart3.innerText="ADD TO CART";
        addcart3.style.width="100%";
        addcart3.style.backgroundColor="black";
        addcart3.style.color="white";
    let addcart4=document.createElement("btn")
        addcart4.innerText="ADD TO CART";
        addcart4.style.width="100%";
        addcart4.style.backgroundColor="black";
        addcart4.style.color="white";
  setInterval(function () {
    if (bestseller.length ==l) {
      i = 0;
      j = 1;
      k= 2;
      l=3;
    }
    addcart1.innerHTML=null;
    addcart2.innerHTML=null;
    addcart3.innerHTML=null;
    addcart4.innerHTML=null;
    image.src = bestseller[i].img;
    indi1.append(image);
    
    image2.src = bestseller[j].img;
    indi2.append(image2);

    image3.src = bestseller[k].img;
    indi3.append(image3);
    image4.src = bestseller[l].img;
    indi4.append(image4);

    title.innerText = bestseller[i].title;
    indi1.append(title);
    
    title2.innerText = bestseller[j].title;
    indi2.append(title2);

    title3.innerText = bestseller[k].title;
    indi3.append(title3);
    title4.innerText = bestseller[l].title;
    indi4.append(title4);

    price.innerText = bestseller[i].price;
    indi1.append(price);
    
    price2.innerText = bestseller[j].price;
    indi2.append(price2);

    price3.innerText = bestseller[k].price;
    indi3.append(price3);
    price4.innerText = bestseller[l].price;
    indi4.append(price4);
    
    addcart1.innerText="ADD TO CART";
    addcart1.style.width="100%";
    addcart1.style.backgroundColor="black";
    addcart1.style.color="white";

    addcart2.innerText="ADD TO CART";
    addcart2.style.width="100%";
    addcart2.style.backgroundColor="black";
    addcart2.style.color="white";

    addcart3.innerText="ADD TO CART";
    addcart3.style.width="100%";
    addcart3.style.backgroundColor="black";
    addcart3.style.color="white";

    addcart4.innerText="ADD TO CART";
    addcart4.style.width="100%";
    addcart4.style.backgroundColor="black";
    addcart4.style.color="white";
    
          indi1.append(addcart1);
          indi2.append(addcart2);
          indi3.append(addcart3);
          indi4.append(addcart4);
      
        
  
    i++;
    j++;
    k++;
    l++;
    best.append(indi1, indi2,indi3,indi4);
  }, 10000);
}
bestsell();
// bestseller ends

// supersaver starts
supersavers=[
  {
    "img": "https://cdn.shopify.com/s/files/1/0906/2558/products/1_cbc3a2d6-9266-467e-a973-017e3c65d5cf.jpg?v=1649433283",
    "title": "Shine & Pout Makeup Value Set",
    "price": "199",
    "rating": "",
    "id": 1
  },
  {
    "img": "https://cdn.shopify.com/s/files/1/0906/2558/products/2_bb525208-246a-4f40-b57f-d88372708398.jpg?v=1655308814",
    "title": "Glam Eye Makeup Value Set",
    "price": "1249",
    "rating": "",
    "id": 2
  },
  {
    "img": "https://cdn.shopify.com/s/files/1/0906/2558/products/1_e4b6c948-178e-4bfe-a3b3-926119dea615.jpg?v=1649865681",
    "title": "Set of 4 Kajal Set",
    "price": "799",
    "rating": "",
    "id": 3
  },
  {
    "img": "https://cdn.shopify.com/s/files/1/0906/2558/products/Value-Set-WBG-2.jpg?v=1642089012",
    "title": "Red Carpet Makeup Trio",
    "price": "799",
    "rating": "",
    "id": 4
  },
  {
    "img": "https://cdn.shopify.com/s/files/1/0906/2558/products/1_e4b6c948-178e-4bfe-a3b3-926119dea615.jpg?v=1649865681",
    "title": "Set of 4 Kajal Set",
    "price": "799",
    "rating": "",
    "id": 5
  },
  {
    "img": "https://cdn.shopify.com/s/files/1/0906/2558/products/Value-Set-WBG-2.jpg?v=1642089012",
    "title": "Red Carpet Makeup Trio",
    "price": "799",
    "rating": "",
    "id": 6
  },
  {
    "img": "https://cdn.shopify.com/s/files/1/0906/2558/products/Value-set-wbg.jpg?v=1627055238",
    "title": "Sunscreen + Kohl value set",
    "price": "549",
    "rating": "",
    "id": 7
  },
  {
    "img": "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-lip-balm-sheet-mask-15782913671251.jpg?v=1619152222",
    "title": "Lip balm + Sheet mask",
    "price": "299",
    "rating": "",
    "id": 8
  },
  {
    "img": "https://cdn.shopify.com/s/files/1/0906/2558/products/1_cbc3a2d6-9266-467e-a973-017e3c65d5cf.jpg?v=1649433283",
    "title": "Shine & Pout Makeup Value Set",
    "price": "999",
    "rating": "",
    "id": 9
  },
  {
    "img": "https://cdn.shopify.com/s/files/1/0906/2558/products/2_bb525208-246a-4f40-b57f-d88372708398.jpg?v=1655308814",
    "title": "Glam Eye Makeup Value Set",
    "price": "1249",
    "rating": "",
    "id": 10
  },
  {
    "img": "https://cdn.shopify.com/s/files/1/0906/2558/products/1_e4b6c948-178e-4bfe-a3b3-926119dea615.jpg?v=1649865681",
    "title": "Set of 4 Kajal Set",
    "price": "799",
    "rating": "",
    "id": 11
  },
  {
    "img": "https://cdn.shopify.com/s/files/1/0906/2558/products/Value-Set-WBG-2.jpg?v=1642089012",
    "title": "Red Carpet Makeup Trio",
    "price": "799",
    "rating": "",
    "id": 12
  }
]
function saver() {
  let i = 0;
  let j = 1;
  let k = 2;
  let l=3;

  let best = document.getElementById("supersaver");
  let indi1 = document.createElement("div");
  let indi2 = document.createElement("div");
  let indi3 = document.createElement("div");
  let indi4 = document.createElement("div");

  let image = document.createElement("img");
  let image2 = document.createElement("img");
  let image3 = document.createElement("img");
  let image4 = document.createElement("img");

  let title = document.createElement("p");
  title.style.height="35px";
  let title2 = document.createElement("p");
  title2.style.height="35px";
  let title3 = document.createElement("p");
  title3.style.height="35px";
  let title4 = document.createElement("p");
  title4.style.height="35px";
 
  let price = document.createElement("p");
  let price2 = document.createElement("p");
  let price3 = document.createElement("p");
  let price4 = document.createElement("p");

  let addcart1=document.createElement("btn")
        addcart1.innerText="ADD TO CART";
        addcart1.style.width="100%";
        addcart1.style.backgroundColor="black";
        addcart1.style.color="white";
    let addcart2=document.createElement("btn")
        addcart2.innerText="ADD TO CART";
        addcart2.style.width="100%";
        addcart2.style.backgroundColor="black";
        addcart2.style.color="white";
    let addcart3=document.createElement("btn")
        addcart3.innerText="ADD TO CART";
        addcart3.style.width="100%";
        addcart3.style.backgroundColor="black";
        addcart3.style.color="white";
    let addcart4=document.createElement("btn")
        addcart4.innerText="ADD TO CART";
        addcart4.style.width="100%";
        addcart4.style.backgroundColor="black";
        addcart4.style.color="white";
  setInterval(function () {
    if (bestseller.length == l) {
      i = 0;
      j = 1;
      k= 2;
      l=3;
    }
    addcart1.innerHTML=null;
    addcart2.innerHTML=null;
    addcart3.innerHTML=null;
    addcart4.innerHTML=null;
    image.src = supersavers[i].img;
    indi1.append(image);
    
    image2.src = supersavers[j].img;
    indi2.append(image2);

    image3.src = supersavers[k].img;
    indi3.append(image3);
    image4.src = supersavers[l].img;
    indi4.append(image4);

    title.innerText = supersavers[i].title;
    indi1.append(title);
    
    title2.innerText = supersavers[j].title;
    indi2.append(title2);

    title3.innerText = supersavers[k].title;
    indi3.append(title3);
    title4.innerText = supersavers[l].title;
    indi4.append(title4);

    price.innerText = supersavers[i].price;
    indi1.append(price);
    
    price2.innerText = supersavers[j].price;
    indi2.append(price2);

    price3.innerText = supersavers[k].price;
    indi3.append(price3);
    price4.innerText = supersavers[l].price;
    indi4.append(price4);
    
    addcart1.innerText="ADD TO CART";
    addcart1.style.width="100%";
    addcart1.style.backgroundColor="black";
    addcart1.style.color="white";

    addcart2.innerText="ADD TO CART";
    addcart2.style.width="100%";
    addcart2.style.backgroundColor="black";
    addcart2.style.color="white";

    addcart3.innerText="ADD TO CART";
    addcart3.style.width="100%";
    addcart3.style.backgroundColor="black";
    addcart3.style.color="white";

    addcart4.innerText="ADD TO CART";
    addcart4.style.width="100%";
    addcart4.style.backgroundColor="black";
    addcart4.style.color="white";
    
          indi1.append(addcart1);
          indi2.append(addcart2);
          indi3.append(addcart3);
          indi4.append(addcart4);
      
        
  
    i++;
    j++;
    k++;
    l++;
    best.append(indi1, indi2,indi3,indi4);
  }, 10000);
}
saver();
// supersaver ends

// gifting js start
gifting =[
  {
    "img": "https://cdn.shopify.com/s/files/1/0906/2558/products/Gift-card-rakshabandhan-500.jpg?v=1657814576",
    "title": "Raksha Bandhan Gift Card",
    "price": "500",
    "rating": "",
    "id": 1
  },
  {
    "img": "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-matte-as-hell-crayon-lipstick-minis-set-28270316945491.jpg?v=1623073051",
    "title": "Matte As Hell Crayon Lipstick Minis Set",
    "price": "1099",
    "rating": "",
    "id": 2
  },
  {
    "img": "https://cdn.shopify.com/s/files/1/0906/2558/products/Wedding-Makeup-Kit---WBG-Images-op-3.jpg?v=1657523499",
    "title": "Wedding Makeup Kit",
    "price": "1699",
    "rating": "",
    "id": 3
  },
  {
    "img": "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-smudge-me-not-liquid-lipstick-minis-set-15520724582483.jpg?v=1620651966",
    "title": "Smudge Me Not Liquid Lipstick Minis Set",
    "price": "799",
    "rating": "",
    "id": 4
  },
  {
    "img": "https://cdn.shopify.com/s/files/1/0906/2558/products/1_37e8dc88-a720-44ed-a5f3-1e0f0e95bc17.jpg?v=1649692645",
    "title": "Date Night Makeup Kit",
    "price": "1599",
    "rating": "",
    "id": 5
  },
  {
    "img": "https://cdn.shopify.com/s/files/1/0906/2558/products/1_0cbf7ca7-3b1c-4838-8fda-176ebd7d38fa.jpg?v=1649423983",
    "title": "Festive Ready Kit",
    "price": "2499",
    "rating": "",
    "id": 6
  },
  {
    "img": "https://cdn.shopify.com/s/files/1/0906/2558/products/RakshaBandhanKit-WBGImages.jpg?v=1654694624",
    "title": "Everyday Makeup Kit",
    "price": "1499",
    "rating": "",
    "id": 7
  },
  {
    "img": "https://cdn.shopify.com/s/files/1/0906/2558/products/1_0ca61ef7-05ce-49be-9fa1-de7c41b99a1f.jpg?v=1650022932",
    "title": "Anniversary Kit",
    "price": "1999",
    "rating": "",
    "id": 8
  },
  {
    "img": "https://cdn.shopify.com/s/files/1/0906/2558/products/PartyReadyKit-WBG1.png?v=1642487420",
    "title": "Party Ready kit",
    "price": "1299",
    "rating": "",
    "id": 9
  },
  {
    "img": "https://cdn.shopify.com/s/files/1/0906/2558/products/1_969f5548-2c56-4506-ada8-159b53a8f630.jpg?v=1649423977",
    "title": "Glam Up Kit",
    "price": "1999",
    "rating": "",
    "id": 10
  },
  {
    "img": "https://cdn.shopify.com/s/files/1/0906/2558/products/SUGAR-SETS-WBG-IMAGES-Set2.jpg?v=1632844196",
    "title": "Go Getter Set",
    "price": "999",
    "rating": "",
    "id": 11
  },
  {
    "img": "https://cdn.shopify.com/s/files/1/0906/2558/products/Hi-5-KIT-WBG-Images1_43e43755-262f-4b35-973a-6e5fad7222a4.jpg?v=1643125074",
    "title": "Hi-5 Kit",
    "price": "999",
    "rating": "",
    "id": 12
  }
]
function gift() {
  let i = 0;
  let j = 1;
  let k = 2;
  let l=3;

  let best = document.getElementById("gifting");
  let indi1 = document.createElement("div");
  let indi2 = document.createElement("div");
  let indi3 = document.createElement("div");
  let indi4 = document.createElement("div");

  let image = document.createElement("img");
  let image2 = document.createElement("img");
  let image3 = document.createElement("img");
  let image4 = document.createElement("img");

  let title = document.createElement("p");
  title.style.height="35px";
  let title2 = document.createElement("p");
  title2.style.height="35px";
  let title3 = document.createElement("p");
  title3.style.height="35px";
  let title4 = document.createElement("p");
  title4.style.height="35px";
 
  let price = document.createElement("p");
  let price2 = document.createElement("p");
  let price3 = document.createElement("p");
  let price4 = document.createElement("p");

  let addcart1=document.createElement("btn")
        addcart1.innerText="ADD TO CART";
        addcart1.style.width="100%";
        addcart1.style.backgroundColor="black";
        addcart1.style.color="white";
    let addcart2=document.createElement("btn")
        addcart2.innerText="ADD TO CART";
        addcart2.style.width="100%";
        addcart2.style.backgroundColor="black";
        addcart2.style.color="white";
    let addcart3=document.createElement("btn")
        addcart3.innerText="ADD TO CART";
        addcart3.style.width="100%";
        addcart3.style.backgroundColor="black";
        addcart3.style.color="white";
    let addcart4=document.createElement("btn")
        addcart4.innerText="ADD TO CART";
        addcart4.style.width="100%";
        addcart4.style.backgroundColor="black";
        addcart4.style.color="white";
  setInterval(function () {
    if (bestseller.length == l) {
      i = 0;
      j = 1;
      k= 2;
      l=3;
    }
    addcart1.innerHTML=null;
    addcart2.innerHTML=null;
    addcart3.innerHTML=null;
    addcart4.innerHTML=null;
    image.src = gifting[i].img;
    indi1.append(image);
    
    image2.src = gifting[j].img;
    indi2.append(image2);

    image3.src = gifting[k].img;
    indi3.append(image3);
    image4.src = gifting[l].img;
    indi4.append(image4);

    title.innerText = gifting[i].title;
    indi1.append(title);
    
    title2.innerText = gifting[j].title;
    indi2.append(title2);

    title3.innerText = gifting[k].title;
    indi3.append(title3);
    title4.innerText = gifting[l].title;
    indi4.append(title4);

    price.innerText = gifting[i].price;
    indi1.append(price);
    
    price2.innerText = gifting[j].price;
    indi2.append(price2);

    price3.innerText = gifting[k].price;
    indi3.append(price3);
    price4.innerText = gifting[l].price;
    indi4.append(price4);
    
    addcart1.innerText="ADD TO CART";
    addcart1.style.width="100%";
    addcart1.style.backgroundColor="black";
    addcart1.style.color="white";

    addcart2.innerText="ADD TO CART";
    addcart2.style.width="100%";
    addcart2.style.backgroundColor="black";
    addcart2.style.color="white";

    addcart3.innerText="ADD TO CART";
    addcart3.style.width="100%";
    addcart3.style.backgroundColor="black";
    addcart3.style.color="white";

    addcart4.innerText="ADD TO CART";
    addcart4.style.width="100%";
    addcart4.style.backgroundColor="black";
    addcart4.style.color="white";
    
          indi1.append(addcart1);
          indi2.append(addcart2);
          indi3.append(addcart3);
          indi4.append(addcart4);
      
        
  
    i++;
    j++;
    k++;
    l++;
    best.append(indi1, indi2,indi3,indi4);
  }, 10000);
}
gift();
// gifting js end

// justin start
justin=[
  {
    "img": "https://cdn.shopify.com/s/files/1/0906/2558/products/Vineeta_s-Favourite-Makeup-kit---WBG-images.jpg?v=1657555460",
    "title": "Vineeta's Favourite Makeup Kit",
    "price": "2999",
    "rating": "",
    "id": 1
  },
  {
    "img": "https://cdn.shopify.com/s/files/1/0906/2558/products/1_2d186f9b-9024-4e23-a0d2-a55b7671e89c.jpg?v=1657123108",
    "title": "Contour De Force Eyes And Face Palette",
    "price": "1099",
    "rating": "",
    "id": 2
  },
  {
    "img": "https://cdn.shopify.com/s/files/1/0906/2558/products/Monsoon-Makeup-Kit---WBG-Images_1_66ba2237-0dad-42dc-88ea-c2d45555dd6a.jpg?v=1657814549",
    "title": "Monsoon Makeup Kit",
    "price": "1799",
    "rating": "",
    "id": 3
  },
  {
    "img": "https://cdn.shopify.com/s/files/1/0906/2558/products/399160329-9-to-5-makeup-kit-wbg-01.jpg?v=1654013564",
    "title": "9 to 5 Makeup Kit",
    "price": "999",
    "rating": "",
    "id": 4
  },
  {
    "img": "https://cdn.shopify.com/s/files/1/0906/2558/products/2_d5e8f5f6-db6f-43d4-a1ac-1da7b22fdc1b.jpg?v=1652943021",
    "title": "The Most Eligiblur Correcting Primer",
    "price": "799",
    "rating": "",
    "id": 5
  },
  {
    "img": "https://cdn.shopify.com/s/files/1/0906/2558/products/1_61109b87-1ae6-4cb4-8550-5b57d688a4eb.jpg?v=1651852771",
    "title": "Bling Leader Illuminating Sunscreen SPF35 PA+++",
    "price": "599",
    "rating": "",
    "id": 6
  },
  {
    "img": "https://cdn.shopify.com/s/files/1/0906/2558/products/382512089-mettle-priming-balm-01.jpg?v=1648654861",
    "title": "Mettle Priming Balm",
    "price": "1099",
    "rating": "",
    "id": 7
  },
  {
    "img": "https://cdn.shopify.com/s/files/1/0906/2558/products/1_9909d205-c5f9-476d-9903-c4beffbfebb7.jpg?v=1637068160",
    "title": "Arch Arrival Brow Pen",
    "price": "499",
    "rating": "",
    "id": 8
  },
  {
    "img": "https://cdn.shopify.com/s/files/1/0906/2558/products/Launch---Sweat-No-More-Makeup-Kit---WBG-Images_11.jpg?v=1653494527",
    "title": "Sweat No More Makeup Kit",
    "price": "2699",
    "rating": "",
    "id": 9
  },
  {
    "img": "https://cdn.shopify.com/s/files/1/0906/2558/products/1_6a5fa1af-0d0e-4e9e-85d1-579495fb5030.jpg?v=1648482145",
    "title": "Arch Arrival Micro Brow Pencil",
    "price": "499",
    "rating": "",
    "id": 10
  },
  {
    "img": "https://cdn.shopify.com/s/files/1/0906/2558/products/383779802-summer-makeup-kit-wbg-images.jpg?v=1649087039",
    "title": "Summer Makeup Kit",
    "price": "1799",
    "rating": "",
    "id": 11
  },
  {
    "img": "https://cdn.shopify.com/s/files/1/0906/2558/products/373532210-artboard-1.jpg?v=1646149967",
    "title": "Citrus Got Real Retinol Brightening Serum",
    "price": "499",
    "rating": "",
    "id": 12
  }
]
function justing() {
  let i = 0;
  let j = 1;
  let k = 2;
  let l=3;

  let best = document.getElementById("just");
  let indi1 = document.createElement("div");
  let indi2 = document.createElement("div");
  let indi3 = document.createElement("div");
  let indi4 = document.createElement("div");

  let image = document.createElement("img");
  let image2 = document.createElement("img");
  let image3 = document.createElement("img");
  let image4 = document.createElement("img");

  let title = document.createElement("p");
  title.style.height="35px";
  let title2 = document.createElement("p");
  title2.style.height="35px";
  let title3 = document.createElement("p");
  title3.style.height="35px";
  let title4 = document.createElement("p");
  title4.style.height="35px";
 
  let price = document.createElement("p");
  let price2 = document.createElement("p");
  let price3 = document.createElement("p");
  let price4 = document.createElement("p");

  let addcart1=document.createElement("btn")
        addcart1.innerText="ADD TO CART";
        addcart1.style.width="100%";
        addcart1.style.backgroundColor="black";
        addcart1.style.color="white";
    let addcart2=document.createElement("btn")
        addcart2.innerText="ADD TO CART";
        addcart2.style.width="100%";
        addcart2.style.backgroundColor="black";
        addcart2.style.color="white";
    let addcart3=document.createElement("btn")
        addcart3.innerText="ADD TO CART";
        addcart3.style.width="100%";
        addcart3.style.backgroundColor="black";
        addcart3.style.color="white";
    let addcart4=document.createElement("btn")
        addcart4.innerText="ADD TO CART";
        addcart4.style.width="100%";
        addcart4.style.backgroundColor="black";
        addcart4.style.color="white";
  setInterval(function () {
    if (bestseller.length == l) {
      i = 0;
      j = 1;
      k= 2;
      l=3;
    }
    addcart1.innerHTML=null;
    addcart2.innerHTML=null;
    addcart3.innerHTML=null;
    addcart4.innerHTML=null;
    image.src = justin[i].img;
    indi1.append(image);
    
    image2.src = justin[j].img;
    indi2.append(image2);

    image3.src = justin[k].img;
    indi3.append(image3);
    image4.src = justin[l].img;
    indi4.append(image4);

    title.innerText = justin[i].title;
    indi1.append(title);
    
    title2.innerText = justin[j].title;
    indi2.append(title2);

    title3.innerText = justin[k].title;
    indi3.append(title3);
    title4.innerText = justin[l].title;
    indi4.append(title4);

    price.innerText = justin[i].price;
    indi1.append(price);
    
    price2.innerText = justin[j].price;
    indi2.append(price2);

    price3.innerText = justin[k].price;
    indi3.append(price3);
    price4.innerText = justin[l].price;
    indi4.append(price4);
    
    addcart1.innerText="ADD TO CART";
    addcart1.style.width="100%";
    addcart1.style.backgroundColor="black";
    addcart1.style.color="white";

    addcart2.innerText="ADD TO CART";
    addcart2.style.width="100%";
    addcart2.style.backgroundColor="black";
    addcart2.style.color="white";

    addcart3.innerText="ADD TO CART";
    addcart3.style.width="100%";
    addcart3.style.backgroundColor="black";
    addcart3.style.color="white";

    addcart4.innerText="ADD TO CART";
    addcart4.style.width="100%";
    addcart4.style.backgroundColor="black";
    addcart4.style.color="white";
    
          indi1.append(addcart1);
          indi2.append(addcart2);
          indi3.append(addcart3);
          indi4.append(addcart4);
      
        
  
    i++;
    j++;
    k++;
    l++;
    best.append(indi1, indi2,indi3,indi4);
  }, 10000);
}
justing();
// justin ends


