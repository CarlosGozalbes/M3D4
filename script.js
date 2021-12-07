const shoppingCart = document.querySelector("#cart");

let books = [];

let shoppingCartList = [];

let filteredBooks = [];

function loadBooks() {
  fetch("https://striveschool-api.herokuapp.com/books")
    .then((r) => r.json())
    .then((_books) => {
      books = _books;
      console.log(books);
      displayBooks();
    })
    .catch((err) => console.error(err.message));
}
function displayBooks(_books = books) {
      books.forEach((book) => {
        const row = document.querySelector(".row");
        const col = document.createElement("div");
        col.classList.add("mb-3")
        col.classList.add("col-md-3");
        col.innerHTML = `
                    <div class="parent card h-100 mb-4 shadow-sm">
                    <img src="${book.img}" alt="..." class="card-img-top img-fluid" style="width: 100%;
                    height: 15vw;
                    object-fit: cover;">

                    <div class="card-body">
                    <p class="card-text">
                        ${book.title}
                    </p>
                    <div id="card-buttons" class="d-flex justify-content-between align-items-bottom">
                        <div class="btn-group">
                        <button type="button" class="shop btn btn-sm btn-outline-secondary" onclick="addToCart('${String(book.asin)}', this)">
                            Add to card
                        </button>
                        <button type="button" class="delete btn btn-sm btn-outline-secondary" onclick="this.closest('.parent').remove()">
                            Skip
                        </button>
                        </div>                    
                    </div>
                    </div>
                    </div>
                    `;
        row.appendChild(col);
      });
}
   

    /* const row = document.querySelector(".row")

                    for (let i = 0; i < books.length; i++) {
                        const book = books[i]

                        const col = document.createElement("div")
                        col.className = "col-3"
                        // col.addEventListener("click", () => alert("you clicked the element number " + (i + 1)))

                        col.innerHTML = `
                    <div class="card">
                        <img src=${book.img} class="card-img-top" alt=${book.title} image>
                        <div class="card-body">
                            <h5 class="card-title">${book.title}</h5>
                            <p class="card-text">${book.category}</p>
                            <a href="#" class="btn btn-primary">${book.price}</a>
                        </div>
                    </div>
                    `
                        row.appendChild(col)
                    }
 */


(function(){
  const cartInfo = document.getElementById('cart-info');
  const cart = document.getElementById('cart');
  cartInfo.addEventListener('click', function(){
    cart.classList.toggle('show-cart')
    console.log('clickedcart') 
})
})();



/* 
const showcart = () => {
  const cartInfo = document.getElementById("cart-info")
  const cart = document.getElementById("cart")
  cartInfo.addEventListener("click", function(){
    cart.classList.toogle("show-cart")
    console.log("clickedcart")
  })
}
 */


window.onload = () => {
  loadBooks()/* .then(() => {
    const buttons =
      document.querySelectorAll(
        ".shop"
      ); */ /* .addEventListener("click", (event)=> {buyItem(event.target)}); */
    /* for (let i = 0; i < buttons.length; i++) {
      const button = buttons[i];
      button.addEventListener("click", (event) => {
        buyItem(event.target);
      });
    }
  }); */
};
/* window.onload = () => {
    document.querySelector(".search").addEventListener("click", loadBooks) */
/* let newCard = document.createElement("div")
    newCard.classList.add("card")
    let newImage = document.createElement("img")
    newImage.src = "httppsaddsad"
    newImage.classList.add("card-img-top")
    newCard.appendChild(newImage)
    newCard.innerHTML += `<div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        `
    document.querySelector(".album").appendChild(newCard) 
}*/

/* const card = document.querySelector(".card")

function buyItem() {
    card.classList.add('on-the-cart');
} */

/* const buyItem = (node) => { */
  /* node.parentElement.parentElement.classList.add("on-the-cart");
  const li = document.createElement("li"); */
  /* console.log("fdasfsd"); */
  /* li.innerHTML = `${book.title}`; */
  /* document.getElementById("list").appendChild(li); */
/* }; */

/* const removeCard = () => {
  node.parentElement.parentElement.classlist.add("removed");
};

document
  .querySelectorAll(".button delete")
  .addEventListener("click", removeCard); */

  function search(query) {
    if (query.length < 3) {
      filteredBooks = books;
      displayBooks();
      return;
    }

    filteredBooks = books.filter((book) =>
      book.title.toLowerCase().includes(query.toLowerCase())
    );

    console.log(filteredBooks);
    displayBooks(filteredBooks);
  }


  function deleteItem(asin) {
    const index = shoppingCartList.findIndex((book) => book.asin === asin);

    if (index !== -1) {
      shoppingCartList.splice(index, 1);
    }

    refreshShoppingCart();
  } 
 
 cart
 
  /* function search(query) {
    if (query.length < 3) {
      filteredBooks = books;
      displayBooks();
      return;
    }

    filteredBooks = books.filter((book) =>
      book.title.toLowerCase().includes(query.toLowerCase())
    );

    console.log(filteredBooks);
    displayBooks(filteredBooks);
  } */


  (function(){
    const cartBtn = document.querySelectorAll('.shop')
    cartBtn.forEach(function(btn){
      btn.addEventListener('click',function(event){

        if(event.target.parentElement.classList.contains('.shop')){
          console.log(event.target.parentElement.parentElement)
        }

      })
    })
  })


  function addToCart(asin, element) {
    console.log(asin);
    // const book = books.filter( book => book.asin === asin)[0]
    const book = books.find((book) => book.asin == asin);
    shoppingCartList.push(book);
    console.log(shoppingCartList);

    refreshShoppingCart();

    element.closest(".parent").classList.add("selected");
  }

  function refreshShoppingCart() {
    shoppingCart.innerHTML = "";

    shoppingCartList.forEach((book) => {
      shoppingCart.innerHTML += `  

        <div class="cart-item d-flex justify-content-between text-capitalize my-3">
              <img src="${book.img}" class="card-img-top img-fluid pr-1" style="width: 40px;
              
              object-fit: cover;" id="item-img" alt="">
              <div class="item-text">
  
                <p id="cart-item-title" class="font-weight-bold mb-0">${book.title}</p>
                <span>€</span>
                <span id="cart-item-price" class="cart-item-price" class="mb-0">${book.price}</span>
              </div>
              <a href="#" id='cart-item-remove' class="cart-item-remove d-flex align-items-center" onclick="deleteItem('${String(book.asin)}')">
                <i class="bi bi-trash aling-center"></i>
              </a>
            </div>
      `;
    });
  }
