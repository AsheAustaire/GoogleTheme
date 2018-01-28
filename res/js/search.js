const search = document.body.querySelector('#search')
const searchForm = document.body.querySelector('#search-form')

searchForm.onsubmit = (e) => {
  e.preventDefault()
  console.log(search.value);
  window.open(`https://www.google.com/search?q=${search.value}`);

}
