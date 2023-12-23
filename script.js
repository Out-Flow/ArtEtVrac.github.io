// script.js
function performSearch() {
    var searchTerm = document.getElementById('search').value;
    alert('nothing found for: ' + searchTerm);
    // Vous pouvez remplacer cette alerte par votre propre logique de recherche ou redirection
}



function shareOnFacebook() {
    window.open('https://www.facebook.com/sharer/sharer.php?u=https://file:///C:/Users/Ander/OneDrive/Documents/Ludovic/Site_web/Root/projects.html', '_blank');
}

function shareOnTwitter() {
    window.open('https://twitter.com/intent/tweet?url=https://file:///C:/Users/Ander/OneDrive/Documents/Ludovic/Site_web/Root/projects.html&text=Check out this amazing portfolio!', '_blank');
}

function shareOnInstagram() {
    // Instagram doesn't allow direct sharing via URL, so you can provide a link to your Instagram profile.
    window.open('https://www.instagram.com/https://www.instagram.com/outflow.music//', '_blank');
}

document.addEventListener('DOMContentLoaded', function () {
    var menuButton = document.getElementById('menu-button');

    if (menuButton) {
        menuButton.addEventListener('click', toggleMenu);
    }

    function toggleMenu() {
        var nav = document.querySelector('nav');
        nav.classList.toggle('open');
    }
});


// script.js
