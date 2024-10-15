    function buscarJuego() {
        var input = document.getElementById('search-input').value.toLowerCase();
        var juegos = document.querySelectorAll('.juego');

        juegos.forEach(function(juego) {
            var nombreJuego = juego.getAttribute('data-nombre').toLowerCase();
            var categoriaJuego = juego.getAttribute('data-requisitos').toLowerCase();

            if (nombreJuego.includes(input) || categoriaJuego.includes(input)) {
                juego.style.display = 'block';
            } else {
                juego.style.display = 'none';
            }
        });
    }
