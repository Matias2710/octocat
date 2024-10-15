    function toggleDropdown() {
        const dropdown = document.getElementById('dropdown-content');
        dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
    }

    function toggleSearch() {
        const searchBar = document.getElementById('search-bar');
        searchBar.style.display = searchBar.style.display === 'flex' ? 'none' : 'flex';
    }

    function filtrarPorRequisito(requisito) {
        const juegos = document.querySelectorAll('.juego');
        juegos.forEach(juego => {
            const requisitoJuego = juego.getAttribute('data-requisitos');
            if (requisitoJuego === requisito) {
                juego.style.display = 'block'; // Mostrar juegos que coinciden
            } else {
                juego.style.display = 'none'; // Ocultar los que no coinciden
            }
        });
    }
