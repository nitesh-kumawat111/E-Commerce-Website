// this is JS File Of Website 


// Dynamic Rendering Of All Products 

// data of Amazing Products 
const products = [
  {
    id: 1,
    title: "Stylish Bag",
    description: "Shop stylish and functional bags for every occasion",
    price: 500,
    image: "images/front projects image bag.avif",
    badge: "New",
    category: "Accessories"
  },
  {
    id: 2,
    title: "T-Shirt",
    description: "T Shirts with all size",
    price: 400,
    image: "images/red-t-shirt.jpg",
    badge: "New",
    category: "Clothing"
  },
  {
    id: 3,
    title: "Sports Shoes",
    description: "Sports shoes for all type of work",
    price: 800,
    image: "images/shoes.jpg",
    badge: "SALE",
    category: "Footwear"
  }
  ,
  {
    id: 4,
    title: "Calculator",
    description: "Calculator Dual Power",
    price: 449,
    image: "images/calcEcom.webp",
    category: "Electronics",
    badge: "New"
  }
];


// rendering of Amazing Products 
const cart = document.querySelector(".cart");

function renderProducts(products) {
  // Clear existing content
  cart.innerHTML = '';

  // Loop through products and create HTML
  products.forEach(products => {
    const productCard = document.createElement('div');
    productCard.className = 'card';

    productCard.innerHTML = `
            <img src="${products.image}" alt="${products.name}" />
            <div class="card-img-overlay">
            <button class="btn1 " type="submit">New </button>
            <i class="fa-light fa-heart"></i>
          </div>
           <div class="card-body">
         
          <p class="card-text">${products.description}</p>
             <h5 class="card-title">${products.price} /- </h5>
           <button href="#" class="btn btnac "> Add To Cart</button>
         </div>
        `;

    cart.appendChild(productCard);
  });
}

// Initial render
renderProducts(products);


// data of Trending Products 

const trendingProducts1 = [

  {
    id: 5,
    title: "Bluetooth Speaker",
    price: 272,
    image: "images/speakerecom.webp"
  },
  {
    id: 6,
    title: "Matrix Watch",
    price: 299,
    image: "images/watchmatrixEcom.webp"
  },
  {
    id: 7,
    title: "Plastic Bottle",
    price: 222,
    image: "images/bottleEcom.webp"
  }];

const trendingProducts2 = [

  {
    id: 8,
    title: "Running Shoes",
    price: 389,
    image: "images/shoesEcom.webp"
  },
  {
    id: 9,
    title: "HP Laptop",
    price: 54980,
    image: "images/laptopEcom.webp"
  },
  {
    id: 10,
    title: "Bluetooth Neckband",
    price: 899,
    image: "images/neckbandEcom.webp"
  }]
  ;


// data rendering of Trending Products 

const tcards = document.querySelector(".tcards-1");

function renderTrendingProducts(trendingProducts1) {
  // clear existing
  tcards.innerHTML = '';

  // create a div for each products
  trendingProducts1.forEach(trendingProducts1 => {
    const tproducts = document.createElement("div");
    tproducts.className = "card";

    tproducts.innerHTML = `
         <div class="card-top">
            <img src="${trendingProducts1.image}" alt="${trendingProducts1.id}" />
         </div>
    
           <div class="card-body">
       
             <p class="card-text">${trendingProducts1.title}</p>
             <h5 class="card-title">${trendingProducts1.price}/-</h5>
             <button class="btn1 btnac  button" type="submit">Add To Cart</button>
        
           </div> `;
    tcards.appendChild(tproducts);
  });


}
// Initial render
renderTrendingProducts(trendingProducts1);


const tcards2 = document.querySelector(".tcards-2");

function renderTrendingProducts2(trendingProducts2) {
  // clear existing
  tcards2.innerHTML = '';

  // create a div for each products
  trendingProducts2.forEach(trendingProducts2 => {
    const tproducts2 = document.createElement("div");
    tproducts2.className = "card";

    tproducts2.innerHTML = `
         <div class="card-top">
            <img src="${trendingProducts2.image}" alt="${trendingProducts2.id}" />
         </div>
    
           <div class="card-body">
       
             <p class="card-text">${trendingProducts2.title}</p>
             <h5 class="card-title">${trendingProducts2.price}/-</h5>
             <button class="btn1 btnac  button" type="submit">Add To Cart</button>
        
           </div> `;
    tcards2.appendChild(tproducts2);
  });


}
// Initial render
renderTrendingProducts2(trendingProducts2);

// data  of Latest Products 

const latestProducts = [
  {
    id: 1,
    title: "Men Relaxed Fit Jeans",
    description: "Men Relaxed Fit Mid Rise Multicolor Jeans",
    price: 470,
    image: "images/jeansEcom.webp",
    category: "Clothing",
    badge: "New"
  },
  {
    id: 2,
    title: "Leather Wallet",
    description: "Men Trendy, Casual Blue Genuine Leather RFID Wallet - Regular Size",
    price: 448,
    image: "images/walletEcom.webp",
    category: "Accessories",
    badge: "New"
  },
  {
    id: 3,
    title: "Calculator",
    description: "Calculator Dual Power",
    price: 449,
    image: "images/calcEcom.webp",
    category: "Electronics",
    badge: "New"
  },
  {
    id: 4,
    title: "Bournvita Drink",
    description: "Bournvita Chocolate Nutrition Drink (200 g)",
    price: 138,
    image: "images/bounvitaEcom.webp",
    category: "Grocery",
    badge: "New"
  },
  {
    id: 5,
    title: "Juicer Mixer Grinder",
    description: "Longway Super Dlx 750 W Juicer Mixer Grinder",
    price: 1500,
    image: "images/mixerEcom.webp",
    category: "Home Appliances",
    badge: "New"
  },
  {
    id: 6,
    title: "Electric Kettle",
    description: "MILTON GO ELECTRO Electric Kettle (1.2 L, Silver)",
    price: 699,
    image: "images/kettleEcom.webp",
    category: "Home Appliances",
    badge: "New"
  },
  {
    id: 7,
    title: "Dry Iron",
    description: "Crompton ACGEI-BRIO 1000 W Dry Iron (Sky Blue)",
    price: 599,
    image: "images/ironEcom.webp",
    category: "Home Appliances",
    badge: "New"
  },
  {
    id: 8,
    title: "Laptop Sleeve",
    description: "Straplt 13.5-14 Inch Laptop Sleeve Bag Case",
    price: 200,
    image: "images/laptopcoverEcom.webp",
    badge: "New"
  }
];

// data rendering of Latest Products 

const bodylpCart = document.querySelector(".cartlp");

function renderlatestProducts(latestProducts) {
  // clear existing
  bodylpCart.innerHTML = '';

  // create a div for each products
  latestProducts.forEach(latestProducts => {
    const latestpro = document.createElement("div");
    latestpro.className = "card";

    latestpro.innerHTML = `
          <img src="${latestProducts.image}" alt="${latestProducts.id}" />
        
         
          <div class="card-img-overlay">
            <button class="btn1 " type="submit">New </button>
          </div>
          <div class="card-body">
         
          <p class="card-text">${latestProducts.description}</p>
             <h5 class="card-title">${latestProducts.price}/- </h5>
               <button href="#" class="btn btnac"> Add To Cart</button>
              </div> `;
    bodylpCart.appendChild(latestpro);
  });


}
// Initial render
renderlatestProducts(latestProducts);


// data  of FlashSale Products 
const flashSaleProducts = [
  {
    id: 1,
    title: "Executive Diary",
    description: "Excel Leather Finish Hard Bound Executive Diary",
    price: 243,
    image: "images/diaryEcom.webp",
    badge: "New"
  },
  {
    id: 2,
    title: "Laptop Sleeve",
    description: "Straplt 13.5-14 Inch Laptop Sleeve Bag Case",
    price: 200,
    image: "images/laptopcoverEcom.webp",
    badge: "New"
  },
  {
    id: 3,
    title: "Striped T-Shirt",
    description: "Men Striped Zip Neck Cotton Blend Light Green T-Shirt",
    price: 386,
    image: "images/tshirtEcom.webp",
    badge: "New"
  }
];

// data rendering of flashsale Products 
const fspCart = document.querySelector(".cartfsp");

function renderflashSaleProducts(flashSaleProducts) {
  // clear existing
  fspCart.innerHTML = '';

  // create a div for each products
  flashSaleProducts.forEach(flashSaleProducts => {
    const latestpro = document.createElement("div");
    latestpro.className = "card";

    latestpro.innerHTML = `
          <img src="${flashSaleProducts.image}" alt="${flashSaleProducts.id}" />
        
         
          <div class="card-img-overlay">
            <button class="btn1 " type="submit">New </button>
          </div>
          <div class="card-body">
         
          <p class="card-text">${flashSaleProducts.description}</p>
             <h5 class="card-title">${flashSaleProducts.price}/- </h5>
               <button href="#" class="btn btnac"> Add To Cart</button>
              </div> `;
    fspCart.appendChild(latestpro);
  });


}
// Initial render
renderflashSaleProducts(flashSaleProducts);

// data  of bestseller Products 

const bestSellerProducts = [
  {
    id: 1,
    title: "Executive Diary",
    description: "Excel Leather Finish Hard Bound Executive Diary",
    price: 243,
    image: "images/diaryEcom.webp",
    badge: "New"
  },
  {
    id: 2,
    title: "Power Bank",
    description: "Ambrane 20000 mAh 22.5 W Power Bank",
    price: 1299,
    image: "images/pbEcom.webp",
    badge: "New"
  },
  {
    id: 3,
    title: "Wireless Earbuds",
    description: "boAt Airdopes Alpha, 35H Battery",
    price: 799,
    image: "images/earbudEcom.webp",
    badge: "New"
  },
  {
    id: 4,
    title: "Wall Clock",
    description: "Titan Analog 30.5 cm Wall Clock",
    price: 800,
    image: "images/clkEcom.webp",
    badge: "New"
  }
];

// data rendering of bestseller Products 
const bspCart = document.querySelector(".cartbsp");

function renderbestSellerProducts(bestSellerProducts) {
  // clear existing
  bspCart.innerHTML = '';

  // create a div for each products
  bestSellerProducts.forEach(bestSellerProducts => {
    const latestpro = document.createElement("div");
    latestpro.className = "card";

    latestpro.innerHTML = `
          <img src="${bestSellerProducts.image}" alt="${bestSellerProducts.id}" />
        
         
          <div class="card-img-overlay">
            <button class="btn1 " type="submit">New </button>
          </div>
          <div class="card-body">
         
          <p class="card-text">${bestSellerProducts.description}</p>
             <h5 class="card-title">${bestSellerProducts.price}/- </h5>
               <button href="#" class="btn btnac"> Add To Cart</button>
              </div> `;
    bspCart.appendChild(latestpro);
  });


}
// Initial render
renderbestSellerProducts(bestSellerProducts);

// data  of toprated  Products 

const topRatedProducts = [
  {
    id: 1,
    title: "Philips Trimmer",
    description: "PHILIPS BT3101/15 Lift & Trim Tech Trimmer",
    price: 1200,
    image: "images/treamerEcom.webp",
    badge: "New"
  },
  {
    id: 2,
    title: "Wireless Trimmer",
    description: "3101/15 Lift & Trim Tech Trimmer",
    price: 859,
    image: "images/treamerEcom.webp",
    badge: "New"
  },
  {
    id: 3,
    title: "Bluetooth Mouse",
    description: "Portronics Toad One Wireless Mouse",
    price: 549,
    image: "images/mouseEcom.webp",
    badge: "New"
  },
  {
    id: 4,
    title: "Formal Shirt",
    description: "Men Slim Fit Solid Spread Collar Formal Shirt",
    price: 386,
    image: "images/formalEcom.webp",
    badge: "New"
  }
];

// dynamic rendering of Toprated  Products 
const trpCart = document.querySelector(".carttrp");

function rendertopRatedProducts(topRatedProducts) {
  // clear existing
  trpCart.innerHTML = '';

  // create a div for each products
  topRatedProducts.forEach(topRatedProducts => {
    const latestpro = document.createElement("div");
    latestpro.className = "card";

    latestpro.innerHTML = `
          <img src="${topRatedProducts.image}" alt="${topRatedProducts.id}" />
        
         
          <div class="card-img-overlay">
            <button class="btn1 " type="submit">New </button>
          </div>
          <div class="card-body">
         
          <p class="card-text">${topRatedProducts.description}</p>
             <h5 class="card-title">${topRatedProducts.price}/- </h5>
               <button href="#" class="btn btnac"> Add To Cart</button>
              </div> `;
    trpCart.appendChild(latestpro);
  });


}
// Initial render
rendertopRatedProducts(topRatedProducts);


// dynamic nature of main card images
let btnacs = document.querySelectorAll(".btnac");


let maincard = document.querySelector(".main-card");

let slides = document.querySelectorAll(".slide");

let nextbtn = document.querySelector(".scrollbtnnext");
let prevbtn = document.querySelector(".scrollbtnprev");

let currentidx = 0;


function showSlide(index) {
  for (let slide of slides) {
    slide.style.display = "none";
  }

  slides[index].style.display = "block";
}

function nextSlide() {
  currentidx = (currentidx + 1) % slides.length;
  showSlide(currentidx);

}

function prevSlide() {
  currentidx = (currentidx - 1 + slides.length) % slides.length;
  showSlide(currentidx);

}



nextbtn.addEventListener("click", nextSlide);
prevbtn.addEventListener("click", prevSlide);

showSlide(currentidx);




// cart related logic

const count = document.querySelector("#cart-count");
count.innerText = 0;



for (let btnac of btnacs) {
  btnac.addEventListener("click", () => {

    console.log("add to cart is succefull");
    alert("added to cart ");
    btnac.innerText = "added";
    btnac.disabled = true;
    btnac.style.backgroundColor = "rgba(36, 221, 36, 1)";
    btnac.style.color = "rgba(236, 241, 236, 1)";
    count.innerText++;


  });
}

