let section = document.querySelector('.books');
let ul = document.querySelector('ul');
let btn = document.getElementById('submit');

let arr = [];
async function store() {
    try {
        const response = await fetch('http://localhost:3000/books');
        var data = await response.json();
        arr = data;
        if (data.length > 0) {
            data.forEach((book) => {
                showData(book);
            });
        }
    } catch (error) {
        console.error(error);
    }
    console.log(arr);
    
}
function showData(book){
    let newDiv = document.createElement('div');
                newDiv.className = 'book';

            let img = document.createElement('img');
            img.src = book.image;
            newDiv.appendChild(img);

            let genre = document.createElement('h4');
            genre.style = "style =font-style: normal;font-size: small";
            genre.textContent = book.genre;
            newDiv.appendChild(genre);
            newDiv.appendChild(document.createElement('br'));

            let title = document.createElement('h3');
            title.style = "font-style: unset";
            title.textContent = book.title;
            newDiv.appendChild(title);

            let author = document.createElement('p');
            author.textContent = 'Author: ' + book.author;
            author.style = "font-size: large";
            newDiv.appendChild(author);
            newDiv.appendChild(document.createElement('br'));

            let price = document.createElement('p');
            price.textContent = 'Price: ' + book.price;
            newDiv.appendChild(price);
            newDiv.appendChild(document.createElement('br'));

            let buttonDiv = document.createElement('div');
            buttonDiv.className = 'btn';

            let cartImg = document.createElement('img');
            cartImg.src = '../images/icon-cart.svg';
            buttonDiv.appendChild(cartImg);

            let addButton = document.createElement('button');
            addButton.addEventListener('click', () => {
                addToCart();
            });
            addButton.textContent = 'Add to cart';
            buttonDiv.appendChild(addButton);

            newDiv.appendChild(buttonDiv);

            section.appendChild(newDiv);
}

let input = document.getElementById('input');
let found = true;
btn.addEventListener('click', () => {
    let input = document.getElementById('input');
    let found = false;
    if(input.value === ''){
        alert('Please enter a valid search query.');
        return;
    }
    for (let i = 0; i < arr.length; i++) {
        if (input.value.toLowerCase() === arr[i].title.toLowerCase()) {
            found = true;
            section.innerHTML = '';
            showData(arr[i]);
            input.value = '';
        }
    }
    if (!found) {
        section.innerHTML = '';
        input.value = '';
        section.style.fontSize = '40px';
        section.style.color = '#fff';
        section.textContent = "Sorry, no matches found for your query";
    }
});



store();
