let section = document.querySelector('.books');
let ul = document.querySelector('ul');
let btn = document.getElementById('submit');

const arr = [
    {
      genre: "Fantasy",
      title: "A Curse for True Love",
      author: "Stephanie Garber",
      price: "$24.99",
      image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1674501506i/62816044.jpg"
    },
    {
      genre: "Mystery Crime",
      title: "Family Secrets",
      author: "Ellie McLellan Genealogy",
      price: "$24.99",
      image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1666029140i/63025912.jpg"
    },
    {
      genre: "Romance",
      title: "A Fire in the Flesh",
      author: "Jennifer L. Armentrout",
      price: "$24.99",
      image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1681507578i/61150440.jpg"
    },
    {
      genre: "SCI-FI",
      title: "Silent City",
      author: "Sarah Davis-Goff",
      price: "$24.99",
      image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1674485441i/65211776.jpg"
    },
    {
      genre: "Historical",
      title: "What the River Knows",
      author: "Isabel Ibañez",
      price: "$24.99",
      image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1674234543i/65213381.jpg"
    },
    {
      genre: "Horror",
      title: "My Darling Girl",
      author: "Jennifer McMahon",
      price: "$24.99",
      image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1688658775i/101145269.jpg"
    },
    {
      genre: "Western",
      title: "All the Dead Shall Weep",
      author: "Charlaine Harris",
      price: "$24.99",
      image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1687105240i/101160975.jpg"
    },
    {
      genre: "Thriller",
      title: "Midnight Is the Darkest Hour",
      author: "Ashley Winstead",
      price: "$24.99",
      image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1677779626i/68054323.jpg"
    },
    {
      genre: "Science",
      title: "EVE",
      author: "Cat Bohannon",
      price: "$24.99",
      image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1684815183i/75494215.jpg"
    },
    {
      genre: "Science Fiction",
      title: "The Three-Body Problem",
      author: "Liu Cixin",
      price: "$24.99",
      image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1415428227i/20518872.jpg"
    },
    {
      genre: "Science Fiction",
      title: "The Dark Forest",
      author: "Liu Cixin",
      price: "$24.99",
      image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1412064931i/23168817.jpg"
    },
    {
      genre: "Science Fiction",
      title: "Death's End",
      author: "Liu Cixin",
      price: "$24.99",
      image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1430330507i/25451264.jpg"
    },
    {
      genre: "Science Fiction",
      title: "And Then There Were None",
      author: "Agatha Christie",
      price: "$24.99",
      image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1638425885i/16299.jpg"
    },
    {
      genre: "Crime",
      title: "Family Crimes",
      author: "Beth Farrar",
      price: "$24.99",
      image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1691359461i/195797461.jpg"
    },
    {
      genre: "Fantasy",
      title: "Caraval",
      author: "Stephanie Garber",
      price: "$24.99",
      image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1465563623i/27883214.jpg"
    },
    {
      genre: "Fantasy",
      title: "A Kingdom of Flesh and Fire",
      author: "Jennifer L. Armentrout",
      price: "$24.99",
      image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1595874447i/54319549.jpg"
    },
    {
      genre: "Horror",
      title: "The Children on the Hill",
      author: "Jennifer McMahon",
      price: "$24.99",
      image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1650470600i/58438554.jpg"
    },
    {
      genre: "Crime",
      title: "The Man in the Brown Suit",
      author: "Agatha Christie",
      price: "$24.99",
      image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1683950516i/209194.jpg"
    }
  ];

//   const books = {};
//   arr.forEach(book => {
//     books[book.title] = book;
// });

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


arr.forEach(book => showData(book));

