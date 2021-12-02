const loadBooks = () => {
fetch("https://striveschool-api.herokuapp.com/books", {
}) 
.then(res => 
     res.json()
)

.then(books => {
    console.log(books)


books.forEach(book => {

const row = document.querySelector(".row")
const col = document.createElement("div")

col.classList.add("col-md-3")
col.innerHTML = `
                    <div class="card mb-4 shadow-sm">
                    <img src="${book.img}" alt="..." class="card-img-top img-fluid" style="width: 100%;
                    height: 15vw;
                    object-fit: cover;">

                    <div class="card-body">
                    <p class="card-text">
                        ${book.title}
                    </p>
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">
                        <button type="button shop" class="btn btn-sm btn-outline-secondary">
                            Add to card
                        </button>
                        <button type="button delete" class="btn btn-sm btn-outline-secondary">
                            Skip
                        </button>
                        </div>                    
                    </div>
                    </div>
                    </div>
                    `
                    row.appendChild(col)
})})


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
.catch (error => console.log(error))
}


window.onload = loadBooks

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

buyItem = () => {
node.parentElement.parentElement.classList.add("on-the-cart")
const li = document.createElement("li")
li.innerHTML = `${book.title}`
document.getElementById("list").appendChild(li);
}

document.querySelectorAll(".button shop").addEventListener('click', buyItem)


removeCard = () => {
node.parentElement.parentElement.classlist.add("removed")
}


document.querySelectorAll(".button delete").addEventListener('click', removeCard)


