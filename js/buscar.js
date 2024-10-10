function toggleSearch() {
    var searchBar = document.getElementById("search-bar");
    if (searchBar.style.display === "none") {
        searchBar.style.display = "flex";  // Mostrar la barra de búsqueda
    } else {
        searchBar.style.display = "none";   // Ocultar la barra de búsqueda
    }
}
