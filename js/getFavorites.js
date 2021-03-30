const elFavorites = document.querySelector('#favorite_books');
const elSelect = document.querySelector('#fav_selector');
const elNoFavs = document.querySelector('#no_fav_header');
const elSelectBtn = document.querySelector('#fav_select_btn');
const elSelected = document.querySelector('#selected_category');

const url = 'data/books.json';

let storedFav = localStorage.getItem("favoriteCategory");
displayFavorites(storedFav);

function displayFavorites(favCategory) {
    fetch(url)
        .then(res => res.json())
        .then(data => {
                elNoFavs.style.display = 'none';
                localStorage.setItem("favoriteCategory", favCategory);

                console.log(favCategory);

                let books = data.books;

                elSelected.textContent = favCategory;
                elFavorites.innerHTML = '';
                books.map(book => {
                    for (let i = 0; i < book.category.length; i++) {
                        if (favCategory === book.category[i]) {
                            elFavorites.innerHTML += book.html;
                            break;
                        }
                    }
                })
            }
        ).catch(err => {
        console.log(err);
    })
}

function storeFavorite() {
    let favCategory = elSelect[elSelect.selectedIndex].value;
    localStorage.setItem("favoriteCategory", favCategory);
}

elSelectBtn.addEventListener('click', function(){
    displayFavorites(elSelect[elSelect.selectedIndex].value)
});
elSelectBtn.addEventListener('click', storeFavorite);