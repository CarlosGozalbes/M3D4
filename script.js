const shoppingCart = document.querySelector("#cart-itemss");

let books = [];

let shoppingCartList = [];

let filteredBooks = [];

function loadBooks() {
  fetch("https://striveschool-api.herokuapp.com/books")
    .then((r) => r.json())
    .then((_books) => {
      books = _books;
      console.log(books);
      displayBooks(books);
    })
    .catch((err) => console.error(err.message));
}
function displayBooks(books) {
  const row = document.querySelector(".row");
  row.innerHTML = ""

      books.forEach((book) => {
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
   

/* Show cart */


(function(){
  const cartInfo = document.getElementById('cart-info');
  const cart = document.getElementById('cart');
  cartInfo.addEventListener('click', function(){
    cart.classList.toggle('show-cart')
    console.log('clickedcart') 
})
})();





/* Search item */  


function search() {
  let query = document.getElementById("input-field").value
  console.log(query)
  if (query.length < 3) {
      filteredBooks = books;
      displayBooks(books);
      return;
    }

    filteredBooks = books.filter((book) =>
      book.title.toLowerCase().includes(query.toLowerCase())
    );

    console.log(filteredBooks);
    displayBooks(filteredBooks);
  }
 


  /* (function(){
    const cartBtn = document.querySelectorAll('.shop')
    cartBtn.forEach(function(btn){
      btn.addEventListener('click',function(event){

        if(event.target.parentElement.classList.contains('.shop')){
          console.log(event.target.parentElement.parentElement)
        }

      })
    })
  }) */

/* CART ADD-REMOVE */

  function addToCart(asin, element) {
    console.log(asin);
    // const book = books.filter( book => book.asin === asin)[0]
    const book = books.find((book) => book.asin == asin);
    shoppingCartList.push(book);
    console.log(shoppingCartList);

    refreshShoppingCart();

    element.closest(".parent").classList.toggle("selected");
  }

  function deleteItem(asin) {
    const index = shoppingCartList.findIndex((book) => book.asin === asin);

    if (index !== -1) {
      shoppingCartList.splice(index, 1);
    }

    refreshShoppingCart();
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


  window.onload = () => {
  loadBooks()
};
