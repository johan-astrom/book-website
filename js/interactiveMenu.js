const elBars = document.querySelector('#nav_menu');
const elLinks = document.querySelector('#links');

function displayMenu(){
    if (elLinks.style.display === 'none' || elLinks.style.display === ''){
        elLinks.style.display = 'flex';
        elBars.className = 'selected';
    } else {
        elLinks.style.display = 'none';
        elBars.className = '';
    }

}

window.onclick = function (event){
    if (!event.target.matches('#nav_menu')) {
        elLinks.style.display = 'none';
        elBars.className = '';
    }
}

elBars.addEventListener('click', displayMenu, false);