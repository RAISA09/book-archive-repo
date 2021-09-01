const fieldButton = () => {
    const inputField = document.getElementById('input-field');
    const inputText = inputField.value;
    inputField.value = '';


    const url = ` http://openlibrary.org/search.json?q=${inputText}`;
    fetch(url)
        .then(res => res.json())
        .then(data => detailsBook(data.docs))
}

const detailsBook = (books) => {
    const details = document.getElementById('book-details')
    books.forEach(book => {
        console.log(book)
        const div = document.createElement('div')
        div.innerHTML = `
        <div class="col">
        <div class="card h-100">
          <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${book.title}</h5>
            <h5>${book.author_name}</h5>
            <h5>${book.first_publish_year}</h5>
            <p class="card-text">${book.publisher}</p>
          </div>
        </div>
        `
        details.appendChild(div)
    })
}