// error massage handle
const errorDiv = document.getElementById('error-massage').style.display = 'none'

// undefined result handle
const undefinedMassage = document.getElementById('undefined').style.display = 'none'

// search button handle and total book result
const fieldButton = () => {
  const inputField = document.getElementById('input-field');
  const inputText = inputField.value;
  inputField.value = '';
  document.getElementById('error-massage').style.display = 'none';

  //  error massage
  if (inputText === '') {
    document.getElementById('error-massage').style.display = 'block';
    document.getElementById('book-details').textContent = '';
    document.getElementById('search-total').innerText = '';
  }


  else {
    const url = ` http://openlibrary.org/search.json?q=${inputText}`;
    fetch(url)
      .then(res => res.json())
      .then(data => detailsBook(data))
    document.getElementById('error-massage').style.display = 'none';
  }

}




const detailsBook = (books) => {
  const totalSearch = document.getElementById('search-total');
  const numberFoundResult = books.numFound;

  // undifined result massage
  document.getElementById('undefined').style.display = 'none';
  if (numberFoundResult === 0) {
    document.getElementById('undefined').style.display = 'block'
    document.getElementById('error-massage').innerText = '';
  }

  // total Search books
  totalSearch.innerText = `Book result found:${numberFoundResult}`;

  // book item
  const docs = books.docs
  const details = document.getElementById('book-details')
  details.textContent = '';


  docs.forEach(doc => {

    // book details add in div
    const div = document.createElement('div')
    div.classList.add('col')
    div.innerHTML = `
        <div class="col">
        <div class="card h-100">
          <img  src="https://covers.openlibrary.org/b/id/${doc.cover_i}-M.jpg" class="card-img-top img-fluid" alt="...">
          <div class="card-body">
            <h5 class="card-title">${doc.title}</h5>
            <h5>${doc.author_name}</h5>
            <h5>${doc.first_publish_year}</h5>
            <p class="card-text">${doc.publisher}</p>
          </div>
        </div>
        `
    details.appendChild(div)
  })
}